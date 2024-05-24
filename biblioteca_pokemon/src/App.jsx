import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonList from './componentes/Organismos/PokemonList';
import HeaderBar from './componentes/Atomos/HeaderBar';
import PokemonData from './componentes/Paginas/PokemonData';
import CatchedPokemon from './componentes/Paginas/CatchedPokemon';
import Login from './componentes/Paginas/Login';

const App = () => {
  

  useEffect(()=>{
    const atrapados = {atrapados: []};
    const existLogin = localStorage.getItem('loged');
    localStorage.setItem('loginUser', 'admin');
    localStorage.setItem('loginPass', 'admin');
    if (existLogin == undefined) {
      localStorage.setItem('loged', false);
      localStorage.setItem('catchedStack', JSON.stringify(atrapados));
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <HeaderBar/>
        <Routes>
          <Route path="/" element={<PokemonList />}/>
          <Route path="/pokemonData/:id" element={<PokemonData />}/>
          <Route path="/pokemonCatched" element={<CatchedPokemon />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
