import React from "react";

export const About = ({ pokemonDetail }) => {
  // console.log(pokemonDetail, "kkkkk");

  const weightLbs = pokemonDetail.weight / 0.45359237 / 10;
  const weight = weightLbs.toFixed(2);

  let text = "";
  pokemonDetail?.abilities?.map((el, index) => {
    if (index === pokemonDetail.abilities.length - 1) {
      text += `, ${el.ability.name}`;
    } else {
      text += `${el.ability.name}`;
    }
  });

  console.log(text);

  return (
    <>
      <div href="#" class=" lg:w-[500px] md:w-[250px] w-[100%] md:h-[100%] h-[100%] lg:h-[100%] overflow-hidden rounded-[30px] bg-[#fff] bg-cover bg-center bg-no-repeat">
        <div className="detail-flexible mt-5 mb-5 lg:mt-4 lg:p-5">
          {/* <div class="mt-1 ml-[35px] flex">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-[15px] lg:text-[15px] font-medium">Spesies </p>
            </div>

            <p class="ml-[40px] lg:ml-[40px] text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.species?.name}</p>
          </div> */}

          <div class="mt-1 ml-[35px] flex">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-[15px] lg:text-[15px] font-medium">Height </p>
            </div>

            <p class="ml-[45px] lg:ml-[45px] text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">({pokemonDetail.height / 10} m)</p>
          </div>

          <div class="mt-1 ml-[35px] flex">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-[15px] lg:text-[15px] font-medium">Weight </p>
            </div>

            <p class="ml-[40px] lg:ml-[40px] text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">
              {weight} lbs ({pokemonDetail.weight / 10}kg)
            </p>
          </div>

          <div class="mt-1 ml-[35px] flex">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-[15px] lg:text-[15px] font-medium mr-[35px] lg:mr-[35px]">Abilities</p>
            </div>
            <p class=" text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
