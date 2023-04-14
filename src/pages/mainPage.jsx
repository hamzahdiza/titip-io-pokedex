import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPokemons } from "../store/actions/actionCreator";
import { PokemonCard } from "../components/PokemonCard";
import pokeball from "../assets/pokeball.png";
import loader from "../assets/loadingpoke.gif";
import { Link } from "react-router-dom";
import classNames from "classnames";

const MainPage = () => {
  const { isLoading, pokemons, errorMsg: error, page, maxNumOfPagesStore } = useSelector((state) => state.pokemon);

  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemon(currentPage);
  }, [currentPage]);

  const fetchPokemon = async (page) => {
    try {
      await dispatch(fetchAllPokemons(page));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentPage, "PPPPPPPPPPP");

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  if (isLoading) {
    return (
      <div className="w-[100%] items-center justify-center">
        <img className="-ml-[2%] lg:ml-[35%]" src={loader} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className={"fixed z-50 w-full bg-primary flex items-center justify-center py-2 transition-all duration-300 transform top-0"}>
        <img className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer" src={pokeball} />
      </div>

      <div className="mb-5">
        <div className="bg-[#f0f0f0] w-[100%] flex justify-center items-center mt-[80px]">
          <img className="z-0 overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[250px] md:left-[700px] lg:left-[900px] -top-[20px] md:-top-[80px] lg:-top-[130px] opacity-100 fixed" src={pokeball} alt="" />
          <div className="lg:col-span-4 md:col-span-3">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {pokemons.map((pokemon, index) => {
                return (
                  <Link to={`/detail/${pokemon.data.id}`}>
                    <a href="" className={`relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat ${pokemon.data.types[0].type.name}`}>
                      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                        <div className="text-white lg:pb-16 h-[100%] relative">
                          <h3 className="text-[15px] font-bold sm:text-2xl">{pokemon.data.name}</h3>

                          <div className="absolute mt-2 grid">
                            {pokemon.data.types.map((el) => {
                              return <span className="mt-2 w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">{el.type.name}</span>;
                            })}
                          </div>
                        </div>
                      </div>
                      <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                      <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src={pokemon.data.sprites.other["official-artwork"].front_default} alt="" />
                    </a>
                  </Link>
                );
              })}

              {/* <a href="#" class="relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-[#47CCAD] bg-cover bg-center bg-no-repeat">
                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div className="text-white lg:pb-16 h-[100%] relative">
                    <h3 className="text-[15px] font-bold sm:text-2xl">Ivysaur</h3>

                    <div className="absolute mt-2 grid">
                      <span className="w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">grass</span>
                      <span className="mt-2 w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">poison</span>
                    </div>
                  </div>
                </div>

                <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="" />
              </a>

              <a href="#" class="relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-[#47CCAD] bg-cover bg-center bg-no-repeat">
                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div className="text-white lg:pb-16 h-[100%] relative">
                    <h3 className="text-[15px] font-bold sm:text-2xl">Venusaur</h3>

                    <div className="absolute mt-2 grid">
                      <span className="w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">grass</span>
                      <span className="mt-2 w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">poison</span>
                    </div>
                  </div>
                </div>

                <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="" />
              </a>

              <a href="#" class="relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-[#F96D6D] bg-cover bg-center bg-no-repeat">
                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div className="text-white lg:pb-16 h-[100%] relative">
                    <h3 className="text-[15px] font-bold sm:text-2xl">Charmander</h3>

                    <div className="absolute mt-2 grid">
                      <span className="w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">fire</span>
                    </div>
                  </div>
                </div>

                <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="" />
              </a>

              <a href="#" class="relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-[#F96D6D] bg-cover bg-center bg-no-repeat">
                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div className="text-white lg:pb-16 h-[100%] relative">
                    <h3 className="text-[15px] font-bold sm:text-2xl">Charmeleon</h3>

                    <div className="absolute mt-2 grid">
                      <span className="w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">fire</span>
                    </div>
                  </div>
                </div>

                <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" alt="" />
              </a>

              <a href="#" class="relative block lg:w-[270px] md:w-[250px] w-[160px] h-[120px] md:h-[140px] lg:h-[150px] overflow-hidden rounded-xl bg-[#F96D6D] bg-cover bg-center bg-no-repeat">
                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                  <div className="text-white lg:pb-16 h-[100%] relative">
                    <h3 className="text-[15px] font-bold sm:text-2xl">Charizard</h3>

                    <div className="absolute mt-2 grid">
                      <span className="w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[10px] lg:text-xs font-semibold text-white text-center">fire</span>
                    </div>
                  </div>
                </div>

                <img className="absolute overflow-hidden w-[50%] md:w-[40%] lg:w-[45%] left-[85px] md:left-[160px] lg:left-[160px] top-12 opacity-25" src={pokeball} alt="" />
                <img className="absolute overflow-hidden w-[45%] md:w-[35%] lg:w-[37%] left-[85px] md:left-[162px] lg:left-[165px] top-12 md:top-[52px] lg:top-[50px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="" />
              </a> */}
            </div>

            <div className="mx-auto my-[3%] ml-[17%] lg:ml-[40%] ">
              <button className={classNames("py-2 px-4 bg-red-500 hover:bg-blue-700 text-white font-bold rounded", { "opacity-50 cursor-not-allowed": currentPage === 0 })} onClick={handlePrevClick} disabled={currentPage === 0}>
                Previous
              </button>
              <button className="ml-3 py-2 px-4 bg-red-500 hover:bg-blue-700 text-white font-bold rounded" onClick={handleNextClick}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
