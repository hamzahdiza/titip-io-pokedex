import { DETAILS_FETCH_PENDING, DETAILS_FETCH_REJECT, DETAILS_FETCH_SUCCESS, POKEMONS_FETCH_PENDING, POKEMONS_FETCH_REJECT, POKEMONS_FETCH_SUCCESS } from "./actionsType";
import axios, * as others from "axios";
const BASE_URL = `https://pokeapi.co/api/v2`;

const getFromUrl = async (url) => {
  try {
    console.log(`Getting ${url}`);
    const { data } = await axios.get(url);
    console.log(`Got ${url}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
const get = (path) => (id) => getFromUrl(`${BASE_URL}${path}/${id}`);

const getPokemon = get("/pokemon");
const getPokemonSpecies = get("/pokemon-species");

async function getPokemonMoves(id) {
  const pokemon = await getPokemon(id);
  return Promise.all(pokemon.moves.map((move) => getFromUrl(move.move.url)));
}

function flattenArray(arr) {
  return [].concat.apply([], arr);
}

function flatGraph(root) {
  if (root.evolves_to) {
    const { evolves_to } = root;
    return [root].concat(flattenArray(evolves_to.map(flatGraph)));
  }
  return [root];
}

function getMinLevel(evo) {
  if (evo.evolution_details[0]) {
    return evo.evolution_details[0].min_level;
  }
  return null;
}

async function getPokemonEvoChain(id) {
  const species = await getPokemonSpecies(id);
  const evoData = (await axios.get(species.evolution_chain.url)).data.chain;
  const evoList = flatGraph(evoData);
  return Promise.all(
    evoList.map(async (evo, i) => {
      return {
        min_level: getMinLevel(evo),
        ...evo,
        ...(await getPokemon(evo.species.name)),
      };
    })
  );
}

async function getPokemonList(page) {
  const limit = 20;
  const offset = page * limit;
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const pokemonList = await axios.get(url);
  const maxNumOfPokemons = pokemonList.data.count;
  const maxNumOfPages = Math.ceil(maxNumOfPokemons / limit);
  const promises = pokemonList.data.results.map((pokemon) => axios.get(pokemon.url));
  const pokemons = await Promise.all(promises);
  return {
    pokemons,
    maxNumOfPages,
    maxNumOfPokemons,
  };
}

export const pokemonsFetchPending = () => ({
  type: POKEMONS_FETCH_PENDING,
});

export const pokemonsFetchSuccess = (responseJson, page, maxNumOfPages) => {
  return {
    type: POKEMONS_FETCH_SUCCESS,
    payload: responseJson,
    page: page,
    maxNumOfPagesStore: maxNumOfPages,
  };
};

export const pokemonsFetchReject = (errorMessage) => {
  return {
    type: POKEMONS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchAllPokemons = (pages) => {
  return async (dispatch, getState) => {
    dispatch(pokemonsFetchPending());
    console.log("Masuk fetch pokemons");
    const page = pages || 0;
    try {
      const pokemonList = await getPokemonList(page);
      const pokemons = pokemonList.pokemons;
      const maxNumOfPages = pokemonList.maxNumOfPages;
      console.log(pokemons, "][]][][][][]][");

      const responseJson = pokemons;
      dispatch(pokemonsFetchSuccess(responseJson, page, maxNumOfPages));
    } catch (err) {
      console.log(err);
      dispatch(pokemonsFetchReject(err));
    }
  };
};

export const pokemonsFetchDetailPending = () => ({
  type: DETAILS_FETCH_PENDING,
});

export const pokemonsFetchDetailSuccess = (pokemon, moves, evoChain, numOfPokemons) => {
  return {
    type: DETAILS_FETCH_SUCCESS,
    pokemon: pokemon,
    moves: moves,
    evoChain: evoChain,
    numOfPokemons: numOfPokemons,
  };
};

export const pokemonsFetchDetailReject = (errorMessage) => {
  return {
    type: DETAILS_FETCH_REJECT,
    payload: errorMessage,
  };
};

export const fetchDetailPokemons = (id) => {
  return async (dispatch, getState) => {
    dispatch(pokemonsFetchDetailPending());
    console.log("Masuk Detail pokemons");
    console.log(id, "idididid");
    try {
      const pokemon = await getPokemon(id);
      const pokemonList = await getPokemonList();
      const moves = await getPokemonMoves(id);
      const evoChain = await getPokemonEvoChain(id);
      const numOfPokemons = pokemonList.maxNumOfPokemons;

      // const responseJson = await pokemon.json();
      // console.log(pokemon.sprites.other, "][]][][][][]][");
      dispatch(pokemonsFetchDetailSuccess(pokemon, moves, evoChain, numOfPokemons));
    } catch (err) {
      dispatch(pokemonsFetchDetailReject(err));
    }
  };
};
