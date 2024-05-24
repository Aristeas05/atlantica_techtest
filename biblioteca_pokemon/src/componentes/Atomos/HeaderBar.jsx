import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () =>{

    const loged = localStorage.getItem('loged');

    const handleLogout = () =>{
        const atrapados = {atrapados: []};
        localStorage.setItem('loged', false);
        localStorage.setItem('catchedStack', JSON.stringify(atrapados));
        window.location.href = '/';
    }

    return(
        <div className='headerBar'>
            <Link style={{ textDecoration: 'none' }} to={'/'}>
                <button>Pagina Principal</button>
            </Link>
            {
                loged == 'true'
                ?
                <>
                    <Link style={{ textDecoration: 'none' }} to={'/pokemonCatched'}>
                        <button>Ver lista de capturados</button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/pokemonCatched'}>
                        <button onClick={() => handleLogout()}>LOGOUT</button>
                    </Link>
                </>
                :
                <Link style={{ textDecoration: 'none' }} to={'/login'}>
                    <button>LOGIN</button>
                </Link>
            }
        </div>
    )
}

export default HeaderBar;