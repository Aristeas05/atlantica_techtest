import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokeById } from '../../servicios/Servicios';

const PokemonData = (props) =>{

    const loged = localStorage.getItem('loged');
    const[pokeData, setpokeData] = useState('');
    const id = useParams().id;
    const capturados = JSON.parse(localStorage.getItem('catchedStack')).atrapados;
    let value = '';
    const showtag = loged == 'true'? true : false;
    if (showtag) {
        value = capturados.find(v => v === (id-1))
    }

    const cargarData = async () =>{
        let jsonData = await getPokeById(id);
        setpokeData(jsonData);
    }

    const handleCatch = () =>{
        let initialStack = JSON.parse(localStorage.getItem('catchedStack')).atrapados;
        let stackFinal = {atrapados: []}
        initialStack.push(id-1);
        stackFinal.atrapados = initialStack;
        localStorage.setItem('catchedStack', JSON.stringify(stackFinal));
        window.location.href = '/';
    }

    useEffect(() => {
        cargarData();
    }, [])

    return(
        <> 
            {
                showtag
                ?
                    value != undefined
                    ?
                        <p> Estado de captura: <span> Capturado </span></p>
                    :
                        <button onClick={handleCatch}>Capturar pokemon</button>
                : ''
            }
            {
                pokeData != ''
                ?
                <>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+id+".svg"} alt={id+'_IMAGEN'} />
                    <p>Nombre: {pokeData.name.toUpperCase()}</p>
                    <p>Tipos: </p>
                    <ul>
                        {
                            pokeData.types.map((a,i)=>{
                                return(
                                    <li key={i}>
                                        {a.type.name.toUpperCase()}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p>Habilidades: </p>
                    <ul>
                        {
                            pokeData.abilities.map((a,i)=>{
                                return(
                                    <li key={i}>
                                        {a.ability.name.toUpperCase()}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p>Experiencia: {pokeData.base_experience}</p>
                </>
                :
                <p> Cargando Data...</p>
            }
            
        </>
    )
}

export default PokemonData;