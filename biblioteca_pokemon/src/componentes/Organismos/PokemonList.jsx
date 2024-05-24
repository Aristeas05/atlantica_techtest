import React, { useEffect, useState } from 'react';
import './estilos.scss';
import PokemonCard from '../Atomos/PokemonCard';
import { getPokeList } from '../../servicios/Servicios';
import { Link } from 'react-router-dom';
const PokemonList = (props) =>{

    const[pokeLista, setPokeLista] = useState([]);

    const cargarData = async () =>{
        let jsonData = await getPokeList();
        setPokeLista(jsonData);
    }

    useEffect(() => {
        cargarData();
    }, [])

    return(
        <div className='lista'>
            {
                pokeLista.length
                ?
                pokeLista.map((p,i) => {
                    let value = '';
                    if (props.catched) {
                        value = props.catched.find(v => i == v);
                        if (value != undefined) {
                            return (
                                <Link style={{ textDecoration: 'none' }} to={'/pokemonData/'+(i+1)} key={i}>
                                    <PokemonCard info={p} index={i+1}/>
                                </Link>
                            )
                        }
                    }else{
                        return (
                            <Link style={{ textDecoration: 'none' }} to={'/pokemonData/'+(i+1)} key={i}>
                                <PokemonCard info={p} index={i+1}/>
                            </Link>
                        )
                    }
                    
                })
                : <p>' No hay datos '</p>
            }
        </div>
    )
}

export default PokemonList;