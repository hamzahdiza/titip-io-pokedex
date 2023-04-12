import { DETAILS_FETCH_PENDING, DETAILS_FETCH_REJECT, DETAILS_FETCH_SUCCESS, POKEMONS_FETCH_PENDING, POKEMONS_FETCH_REJECT, POKEMONS_FETCH_SUCCESS } from "./actionsType";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const pokemonsFetchPending = () => ({
  type: POKEMONS_FETCH_PENDING,
});

export const pokemonsFetchSuccess = (responseJson) => {
  return {
    type: POKEMONS_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const pokemonsFetchReject = (errorMessage) => {
  return {
    type: POKEMONS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchAllPokemons = () => {
  return async (dispatch, getState) => {
    dispatch(pokemonsFetchPending());
    console.log("Masuk fetch pokemons");
    try {
      const response = await fetch(`${baseUrl}/pokemon?offset=0&limit=30'`, {
        method: "GET",
      });
      const responseJson = await response.json();
      console.log(responseJson, "][]][][][][]][");
      dispatch(pokemonsFetchSuccess(responseJson));
    } catch (err) {
      dispatch(pokemonsFetchReject(err));
    }
  };
};

export const pokemonsFetchDetailPending = () => ({
  type: DETAILS_FETCH_PENDING,
});

export const pokemonsFetchDetailSuccess = (responseJson) => {
  return {
    type: DETAILS_FETCH_SUCCESS,
    payload: responseJson,
  };
};

export const pokemonsFetchDetailReject = (errorMessage) => {
  return {
    type: DETAILS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchDetailPokemons = (url) => {
  return async (dispatch, getState) => {
    dispatch(pokemonsFetchDetailPending());
    console.log("Masuk Detail pokemons");
    try {
      const response = await fetch(`${url}`, {
        method: "GET",
      });
      const responseJson = await response.result.json();
      console.log(responseJson, "][]][][][][]][");
      dispatch(pokemonsFetchDetailSuccess(responseJson));
    } catch (err) {
      dispatch(pokemonsFetchDetailReject(err));
    }
  };
};
