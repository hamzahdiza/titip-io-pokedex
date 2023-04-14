import React from "react";

const Moves = ({ moves }) => {
  console.log(moves, "MOVESSSSSSSs");
  return (
    <>
      <div href="#" class=" lg:w-[500px] md:w-[250px] w-[100%] md:h-[140px] h-[100%] lg:h-[100%] overflow-hidden rounded-[30px] bg-[#fff] bg-cover bg-center bg-no-repeat">
        {moves?.map((el) => {
          return (
            <div className="detail-flexible mt-5 lg:mt-3 mb-5 lg:px-5">
              <h3 className="font-semibold text-[20px] ml-[35px]">{el.name}</h3>

              <div class="mt-1 ml-[35px] flex">
                <div class="flex items-center gap-1 text-gray-500">
                  <p class="text-[15px] lg:text-[15px] font-medium">Power </p>
                </div>

                <p class="ml-[40px] lg:ml-[30px] lg:ml-[30px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{el?.power !== null ? el.power : "0"}</p>

                <progress className="relative mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={el?.power} max={100}></progress>
              </div>

              <div class="mt-1 ml-[35px] flex">
                <div class="flex items-center gap-1 text-gray-500">
                  <p class="text-[15px] lg:text-[15px] font-medium">Acc </p>
                </div>

                <p class="ml-[60px] lg:ml-[50px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{el?.accuracy !== null ? el.accuracy : "0"}</p>

                <progress className="relative mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={el?.accuracy} max={100}></progress>
              </div>

              <div class="mt-1 ml-[35px] flex">
                <div class="flex items-center gap-1 text-gray-500">
                  <p class="text-[15px] lg:text-[15px] font-medium">PP </p>
                </div>

                <p class="ml-[67px] lg:ml-[55px] lg:mt-2 text-[15px] lg:text-[15px] font-bold text-gray-500 sm:mt-0">{el?.pp !== null ? el.pp : "0"}</p>

                <progress className="relative mt-[2%] lg:mt-[4%] ml-[10%] lg:ml-[10%]  relative h-[5px] w-[45%] lg:w-[60%] rounded-2xl" value={el?.pp} max={100}></progress>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Moves;
