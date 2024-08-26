import React, { useState } from "react";
import Footer from "./Footer";

const OnOff: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSlider = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className={`flex flex-col w-full min-h-screen justify-center items-center ${
          isOn ? "bg-green-400" : "bg-red-500"
        } }`}
      >
        <h1 className="text-xl font-semibold text-white mb-4">
          {" "}
          Please click me!{" "}
        </h1>
        <div className="button">
          <div
            className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 bg-gray-400 border border-gray-100 shadow-md
        }`}
            onClick={toggleSlider}
          >
            <div
              className={`h-8 w-8 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs font-bold ${
                isOn ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {isOn ? "ON" : "OFF"}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default OnOff;
