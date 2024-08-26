// import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden min-h-screen justify-center items-center">
        <div className="w-[350px] flex flex-col">
          <h1 className="flex justify-center mb-3 font-bold text-gray-700 text-xl ">
            hello, thanks for coming here!{" "}
          </h1>
          <button
            className="px-[20px] py-[10px] rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-800 duration-150 border border-gray-400 mb-2"
            onClick={() => Navigate("/onoff")}
          >
            Task 01
          </button>
          <button
            className="px-[20px] py-[10px] rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-800 duration-150 border border-gray-400"
            onClick={() => Navigate("/tictactoe")}
          >
            Tic Tac Toe
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
