import { POKEMONS_FETCH_PENDING, POKEMONS_FETCH_SUCCESS, POKEMONS_FETCH_REJECT, DETAILS_FETCH_PENDING, DETAILS_FETCH_SUCCESS, DETAILS_FETCH_REJECT } from "../actions/actionsType";

const initialState = {
  isLoading: true,
  pokemons: [],
  errorMsg: "",

  pokemonDetail: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_FETCH_PENDING:
      return {
        ...initialState,
      };
    case POKEMONS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload,
      };
    case POKEMONS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case DETAILS_FETCH_PENDING:
      return {
        ...initialState,
      };
    case DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonDetail: action.payload,
      };
    case DETAILS_FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
