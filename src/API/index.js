const axios = require("axios").default;
const DATA = "https://rickandmortyapi.com/api/character";

/* export const getCharacters = async () => {
  try {
    const res = await axios.get(DATA);
    return res.data.results;
  } catch (error) {
    throw error;
  }
}; */
export const getCharactersByPage = async (page) => {
  try {
    const res = await axios.get(`${DATA}/?page=${page}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterDetail = async ({ idCharacter }) => {
  try {
    const character = await axios.get(`${DATA}/${idCharacter}`);
    return character.data;
  } catch (error) {
    throw new Error("No se ha encontrado ningún personaje ");
  }
};
