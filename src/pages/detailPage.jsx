import React from "react";
import pokeball from "../assets/pokeball.png";
import { useState, useEffect } from "react";
import { fetchDetailPokemons } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { About } from "../components/About";
import BaseStats from "../components/BaseStats";
import Evolution from "../components/Evolution";
import Moves from "../components/Moves";
import loader from "../assets/loadingpoke.gif";

const DetailPage = () => {
  const { isLoading, pokemonDetail, moves, evoChain, numOfPokemons, errorMsg: error } = useSelector((state) => state.pokemon);

  const [isClicked, setIsClicked] = useState("about");

  const params = useParams();
  console.log(params.id, "<<<<<<<id");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDetailPokemon(params.id);
  }, [params.id]);

  const fetchDetailPokemon = async (params) => {
    try {
      await dispatch(fetchDetailPokemons(params));
    } catch (err) {
      console.log(err);
    }
  };

  // const imagePoke = pokemonDetail.sprites["official-artwork"].front_default;

  console.log(pokemonDetail, "OOOOOOOOOOOOOO");
  const types0 = (pokemonDetail.types ?? [])[0];
  // console.log(types0, "OOOOOOOOOOOOOO");
  console.log(evoChain, "evoChain");
  useEffect(() => {
    if (isClicked) {
      console.log("Button was clicked!");
    }
  }, [isClicked]);

  function handleClick(page) {
    setIsClicked(page);
  }

  const inputProps = {
    type: "radio",
    name: "ColorOption",
    value: "ColorBlack",
    id: "ColorBlack",
    class: "peer hidden [&:checked_+_label_svg]:block",
  };

  if (isClicked === "about") {
    inputProps.checked = true;
  }

  if (isLoading) {
    return (
      <div className="w-[100%] items-center justify-center">
        <img className="-ml-[2%] lg:ml-[35%]" src={loader} alt="" />
      </div>
    );
  }

  return (
    <>
      <Link to={"/"}>
        <div className={"fixed z-50 w-full bg-primary flex items-center justify-center py-2 transition-all duration-300 transform top-0"}>
          <img className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer" src={pokeball} />
        </div>
      </Link>

      <div className="pokemons_main">
        <div className="bg-[#f0f0f0] w-[100%] flex justify-center items-center mt-[47px] lg:mt-[80px] mb-[40px]">
          <div href="#" class="relative block lg:w-[500px] md:w-[250px] w-[100%] h-[100%] md:h-[140px] lg:h-[100%] overflow-hidden rounded-xl rounded-b-[30px] bg-[#47CCAD] bg-cover bg-center bg-no-repeat">
            <div className={types0?.type?.name}>
              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="text-white lg:pb-16 h-[100%] relative">
                  <h3 className="text-[40px] lg:text-[35px] font-bold sm:text-2xl mt-2 lg:mt-0">{pokemonDetail.name}</h3>

                  <div className="absolute mt-[4px]">
                    {pokemonDetail?.types?.map((el) => {
                      return <span className="ml-[5px] w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[15px] lg:text-[12px] font-semibold text-white text-center">{el.type.name}</span>;
                    })}
                    {/* <span className="ml-[5px] w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[15px] lg:text-[12px] font-semibold text-white text-center">poison</span> */}
                  </div>
                </div>
              </div>

              <img className="-ml-5 absolute w-[50%] md:w-[35%] lg:w-[45%] left-[105px] md:left-[162px] top-[120px] md:top-[52px] lg:top-[110px] z-2" src={pokemonDetail?.sprites?.other["official-artwork"]?.front_default} alt="" />

              {/* White section */}
              <div href="#" class="mt-[45%] lg:mt-[20%] lg:w-[500px] md:w-[250px] w-[100%] overflow-hidden rounded-[30px] bg-[#fff] bg-cover bg-center bg-no-repeat">
                <div className="mt-[17%] lg:mt-[15%] ml-[6%] lg:ml-[15%]">
                  <fieldset class="flex flex-wrap gap-3 lg:gap-3">
                    <div>
                      <input onClick={() => handleClick("about")} {...inputProps} />

                      <label for="ColorBlack" class="flex cursor-pointer items-center justify-center lg:gap-2 rounded-md border border-gray-100 py-2 px-2 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                        <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <p onClick={() => handleClick("about")} class="text-[11px] lg:text-[12px] font-medium">
                          About
                        </p>
                      </label>
                    </div>

                    <div>
                      <input onClick={() => handleClick("baseStats")} type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="peer hidden [&:checked_+_label_svg]:block" />

                      <label for="ColorRed" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-2 lg:py-2 lg:px-3  text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                        <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <p onClick={() => handleClick("baseStats")} class="text-[11px] lg:text-[12px] font-medium">
                          Base Stats
                        </p>
                      </label>
                    </div>

                    <div>
                      <input onClick={() => handleClick("evolution")} type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" class="peer hidden [&:checked_+_label_svg]:block" />

                      <label for="ColorBlue" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-2 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                        <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <p class="text-[11px] lg:text-[12px] font-medium">Evolution</p>
                      </label>
                    </div>

                    <div>
                      <input onClick={() => handleClick("moves")} type="radio" name="ColorOption" value="ColorGold" id="ColorGold" class="peer hidden [&:checked_+_label_svg]:block" />

                      <label for="ColorGold" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-2 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                        <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <p class="text-[11px] lg:text-[12px] font-medium">Moves</p>
                      </label>
                    </div>
                  </fieldset>
                </div>

                {/* Flexibel 1*/}
                {isClicked === "about" && <About pokemonDetail={pokemonDetail} />}
                {/*  */}

                {/* Flexibel 2*/}
                {isClicked === "baseStats" && <BaseStats pokemonDetail={pokemonDetail} />}
                {/*  */}

                {/* Flexibel 3 Evolution */}
                {isClicked === "evolution" && <Evolution evoChain={evoChain} />}

                {/* Flexibel 2*/}
                {isClicked === "moves" && <Moves moves={moves} />}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
