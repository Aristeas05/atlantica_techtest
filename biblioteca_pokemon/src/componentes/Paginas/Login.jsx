import React, { useState } from 'react';
import './estilos.scss';

const Login = (props) =>{

    const[loginF, setLogin] = useState('');
    const[passwordF, setPassword] = useState('');
    const[errorMsg, setErrorMsg] = useState(false);

    const handleLogin = () => {
        let validLogin = localStorage.getItem('loginUser');
        let validPassword = localStorage.getItem('loginPass');
        if (validLogin == loginF && validPassword == passwordF) {
            localStorage.setItem('loged', true);
            window.location.href = '/';
        }else{
            setErrorMsg(true);
        }
    }

    return(
        <div className='login'>
            <p>Ingresa el usuario</p>
            <input type="text" value={loginF} onChange={e => setLogin(e.target.value)}/>
            <p>Contraseña</p>
            <input type="text" value={passwordF} onChange={e => setPassword(e.target.value)}/>
            <div>
            <button onClick={handleLogin}>Ingresar</button>
            </div>
            <div>
                {
                    errorMsg
                    ?
                    <p>Credenciales Incorrectos</p>
                    : ''
                }
            </div>
        </div> 
    )
}

export default Login;