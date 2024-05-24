import React from 'react';
import PokemonList from '../Organismos/PokemonList';

const CatchedPokemon = (props) =>{

    const capturados = JSON.parse(localStorage.getItem('catchedStack'));

    return(
        <>
            {
                capturados.atrapados == []
                ?
                    <p>No cuentas con pokemon capturados</p>
                :
                    <PokemonList catched={capturados.atrapados}/>
            }
        </> 
    )
}

export default CatchedPokemon;