import React from "react";

const Donate = () => {
  return (
    <div className="text-black p-16  py-28">
      <div className=" bg-transparent">
        <div className="h-16 mx-auto  flex items-center justify-evenly gap-6">
          <div className="flex flex-row justify-between items-center p-20px">
            {/* <div className="h-60 w-40 border-2"></div> */}
            <span className="px-20 text-xs text-neutral-500">
              Its time to save the cutest animal we all love
            </span>
          </div>
          <button className="relative z-0 h-12 rounded-full bg-prim-green px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-prim-green hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">
            Donate now{" "}
          </button>
          <ul className="flex items-center gap-8 px-10 dark:text-white light:text-black">
            <li className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-center ">10+</h1>
              <span className="text-xs text-center text-neutral-500">
                Countries
              </span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-center ">10+</h1>
              <span className="text-xs text-center">Countries</span>
            </li>
            <li className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-center ">10+</h1>
              <span className="text-xs text-center">Countries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
