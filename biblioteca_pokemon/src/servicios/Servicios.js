import axios from "axios";

export const getPokeList = () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
    .then(res => {
      const respuesta = res.data;
      return respuesta.results;
    })
}

export const getPokeById = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/`+id)
      .then(res => {
        const respuesta = res.data;
        return respuesta;
      })
}