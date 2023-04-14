import React from "react";

function BaseStats({ pokemonDetail }) {
  return (
    <>
      <div>
        <div href="#" className=" lg:w-[500px] md:w-[250px] w-[100%] md:h-[140px] h-[100%] lg:h-[100%] overflow-hidden rounded-[30px] bg-[#fff] bg-cover bg-center bg-no-repeat">
          <div className="detail-flexible mt-5 lg:mt-3 mb-5 lg:px-5">
            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">HP</p>
              </div>

              <p className="ml-[65px] lg:ml-[40px] lg:ml-[65px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[0]?.base_stat}</p>

              {/* <div className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%] h-1 w-[45%] lg:w-[60%] bg-neutral-200 dark:bg-neutral-600">
                <div className={`h-1 bg-green-500 w-[${pokemonDetail?.stats[0]?.base_stat}%]`}></div>
              </div> */}
              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[0]?.base_stat} max={100}></progress>
            </div>

            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">Attack </p>
              </div>

              <p className="ml-[40px] lg:ml-[36px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[1]?.base_stat}</p>

              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[1]?.base_stat} max={100}></progress>
            </div>

            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">Defense </p>
              </div>

              <p className="ml-[27px] lg:ml-[25px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[2]?.base_stat}</p>

              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[2]?.base_stat} max={100}></progress>
            </div>

            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">Sp. Atk</p>
              </div>

              <p className="ml-[38px] lg:ml-[35px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[3]?.base_stat}</p>

              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[3]?.base_stat} max={100}></progress>
            </div>

            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">Sp. Def</p>
              </div>

              <p className="ml-[38px] lg:ml-[35px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[4]?.base_stat}</p>

              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[4]?.base_stat} max={100}></progress>
            </div>

            <div className="mt-1 ml-[35px] flex">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-[15px] lg:text-[15px] font-medium">Speed</p>
              </div>

              <p className="ml-[43px] lg:ml-[40px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{pokemonDetail?.stats[5]?.base_stat}</p>

              <progress className="mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={pokemonDetail?.stats[5]?.base_stat} max={100}></progress>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseStats;
