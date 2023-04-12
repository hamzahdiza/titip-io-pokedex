import React from "react";
import pokeball from "../assets/pokeball.png";
import { useState, useEffect } from "react";

const DetailPage = () => {
  const [isClicked, setIsClicked] = useState("about");

  useEffect(() => {
    if (isClicked) {
      console.log("Button was clicked!");
    }
  }, [isClicked]);

  function handleClick(page) {
    setIsClicked(page);
  }

  return (
    <>
      <div className={"fixed z-50 w-full bg-primary flex items-center justify-center py-2 transition-all duration-300 transform top-0"}>
        <img className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer" src={pokeball} />
      </div>

      <div className="Products">
        <div className="bg-[#f0f0f0] w-[100%] flex justify-center items-center mt-[47px] lg:mt-[80px] mb-[40px]">
          <div href="#" class="relative block lg:w-[500px] md:w-[250px] w-[100%] h-[100%] md:h-[140px] lg:h-[600px] overflow-hidden rounded-xl bg-[#47CCAD] bg-cover bg-center bg-no-repeat">
            <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
              <div className="text-white lg:pb-16 h-[100%] relative">
                <h3 className="text-[40px] lg:text-[35px] font-bold sm:text-2xl mt-2 lg:mt-0">Bulbasaur</h3>

                <div className="absolute mt-[2px]">
                  <span className="ml-[5px] w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[15px] lg:text-[12px] font-semibold text-white text-center">grass</span>
                  <span className="ml-[5px] w-[100%] lg:w-[100%] rounded-full bg-white/25 px-3 lg:px-5 py-1 lg:py-1 text-[15px] lg:text-[12px] font-semibold text-white text-center">poison</span>
                </div>
              </div>
            </div>

            <img className="-ml-5 absolute w-[50%] md:w-[35%] lg:w-[45%] left-[105px] md:left-[162px] top-[120px] md:top-[52px] lg:top-[110px] z-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />

            <div href="#" class="mt-[45%] lg:mt-[20%] lg:w-[500px] md:w-[250px] w-[100%] h-[100%] md:h-[140px] h-[500px] lg:h-[600px] overflow-hidden rounded-[30px] bg-[#fff] bg-cover bg-center bg-no-repeat">
              <div className="mt-[17%] lg:mt-[15%] ml-[3%] lg:ml-[12%]">
                <fieldset class="flex flex-wrap gap-3 lg:gap-3">
                  <div>
                    <input type="radio" name="ColorOption" value="ColorBlack" id="ColorBlack" class="peer hidden [&:checked_+_label_svg]:block" checked />

                    <label for="ColorBlack" class="flex cursor-pointer items-center justify-center lg:gap-2 rounded-md border border-gray-100 py-2 px-3 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                      <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>

                      <p onClick={() => handleClick("about")} class="text-[12px] lg:text-[12px] font-medium">
                        About
                      </p>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" class="peer hidden [&:checked_+_label_svg]:block" />

                    <label for="ColorRed" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 lg:py-2 lg:px-3  text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                      <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>

                      <p onClick={() => handleClick("baseStats")} class="text-[12px] font-medium">
                        Base Stats
                      </p>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" class="peer hidden [&:checked_+_label_svg]:block" />

                    <label for="ColorBlue" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                      <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>

                      <p class="text-[12px] font-medium">Evolution</p>
                    </label>
                  </div>

                  <div>
                    <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" class="peer hidden [&:checked_+_label_svg]:block" />

                    <label for="ColorGold" class="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100 py-2 px-3 lg:py-2 lg:px-3 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-red-500 peer-checked:text-white">
                      <svg class="hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>

                      <p class="text-[12px] font-medium">Moves</p>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Flexibel 1*/}
              {isClicked === "about" && (
                <div className="detail-flexible mt-5 lg:mt-4 lg:p-5">
                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Spesies </p>
                    </div>

                    <p class="ml-[40px] lg:ml-[40px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">Seed</p>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Height </p>
                    </div>

                    <p class="ml-[40px] lg:ml-[40px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">(0.70 m)</p>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Weight </p>
                    </div>

                    <p class="ml-[40px] lg:ml-[40px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">15.2 lbs (6.9kg)</p>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Abilities</p>
                    </div>

                    <p class="ml-[35px] lg:ml-[35px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">overgrow, chlorophyll</p>
                  </div>
                </div>
              )}
              {/*  */}

              {/* Flexibel 2*/}
              {isClicked === "baseStats" && (
                <div className="detail-flexible mt-5 lg:mt-3 lg:px-5">
                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">HP </p>
                    </div>

                    <p class="ml-[65px] lg:ml-[40px] lg:ml-[65px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">45</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[45%]"></div>
                    </div>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Attack </p>
                    </div>

                    <p class="ml-[40px] lg:ml-[36px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">49</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[49%]"></div>
                    </div>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Defense </p>
                    </div>

                    <p class="ml-[27px] lg:ml-[25px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">49</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[49%]"></div>
                    </div>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Sp. Atk</p>
                    </div>

                    <p class="ml-[38px] lg:ml-[35px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">65</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[65%]"></div>
                    </div>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Sp. Def</p>
                    </div>

                    <p class="ml-[38px] lg:ml-[35px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">65</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[65%]"></div>
                    </div>
                  </div>

                  <div class="mt-1 ml-[35px] flex">
                    <div class="flex items-center gap-1 text-gray-500">
                      <p class="text-[15px] lg:text-[15px] font-medium">Speed</p>
                    </div>

                    <p class="ml-[43px] lg:ml-[40px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">45</p>

                    <div class="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                      <div class="h-1 bg-green-500 w-[45%]"></div>
                    </div>
                  </div>
                </div>
              )}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
