import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Evolution = ({ evoChain }) => {
  const navigate = useNavigate();
  return (
    <div href="#" className="lg:w-[500px] md:w-[250px] w-[100%] h-[100%] lg:h-[100%] rounded-[30px] bg-[#fff] bg-center ">
      <div className="detail-flexible mt-5 lg:mt-3 lg:px-5 items-center justify-center">
        {/* section  */}
        {evoChain?.map((el) => {
          return (
            <a href={`/detail/${el?.id}`}>
              <div className="items-center justify-center text-center mt-5">
                <div className="relative w-[180px] h-[180px] bg-[#47CCAD] rounded-full ml-[25%] lg:ml-[30%]">
                  <div className="absolute mt-[15%] ml-[15%]">
                    <img className="w-[80%] lg:w-[80%]" src={el?.sprites?.other["official-artwork"]?.front_default} alt="" />
                  </div>
                </div>
                <h3 className="font-semibold text-[20px] my-4">{el?.name}</h3>

                <p className="flex items-center mx-auto mb-4 rotate-0 lg:rotate-90">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="block mx-auto lg:hidden opacity-75" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="hidden mx-auto lg:block opacity-75" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                  </svg>
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Evolution;
