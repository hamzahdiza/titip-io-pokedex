import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailPokemons } from "../store/actions/actionCreator";

export const PokemonCard = ({ pokemon }) => {
  const { isLoading, pokemonDetail, categories, errorMsg: error } = useSelector((state) => state.pokemon);
  console.log(pokemonDetail, "<<<<<<<<<<<<<<<");

  const dispatch = useDispatch();

  useEffect(() => {
    datailPokemon(pokemon.url);
  }, []);

  const datailPokemon = async (url) => {
    try {
      await dispatch(fetchDetailPokemons(url));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>{pokemon.url}</div>
    </>
  );
};
