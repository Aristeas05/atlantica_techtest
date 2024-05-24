import React from 'react';
import './estilos.scss';
const PokemonCard = (props) =>{

    const loged = localStorage.getItem('loged');
    const capturados = JSON.parse(localStorage.getItem('catchedStack')).atrapados;
    let value = '';

    const showtag = loged == 'true'? true : false;

    if (showtag) {
        value = capturados.find(v => v === (props.index-1))
    }

    return(
        <div className='card'>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+props.index+".svg"} alt={props.info.name+'_IMAGEN'} />
            <p>
                {props.info.name.toUpperCase()}
            </p>
            {
                showtag
                ?
                    value != undefined
                    ?
                    <p>Capturado</p>
                    :
                    <p>No capturado</p>
                : ''
            }
            
        </div>
    )
}

export default PokemonCard;