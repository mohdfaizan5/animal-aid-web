import React from "react";

const Section3 = () => {
  return (
    <div className="h-[80vh] flex md:flex-row  flex-col gap-28 md:gap-10 items-center justify-center">
      
      <section className="h-52 w-44 shadow-md rounded-full bg-prim-green overflow-hidden">
        <img
          src="/static/pexels-aleksandr-nadyojin-2954845-4492165.jpg"
          className="h-full object-cover "
        />
      </section>
      <section className="h-64 w-64 rounded-full bg-prim-green relative ">
        <img
          src="/static/pexels-pixabay-46505-removebg-preview.png"
          className="h-96 absolute rounded-b-full  object-cover bottom-0 translate-x-3 rotate-6"
        />
      </section>
      <section className="h-52 w-44 shadow-md  rounded-full bg-prim-green overflow-hidden">
        <img
          src="/static/pexels-zeynep-sude-emek-193601188-13351023.jpg"
          className="h-full object-cover w-full"
        />
      </section>
    </div>
  );
};

export default Section3;
