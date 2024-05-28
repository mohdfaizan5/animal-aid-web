import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col justify-center md:flex-row gap-16 h-[90vh] pb-16 items-center">
      <section className="translate-y-12 -translate-x-3">
        <div className="w-32 h-52 relative">
          <img
            src="/static/undraw_heart (1).svg"
            className="absolute -right-3"
          />
          <img
            src="/static/pexels-mert-kaya-60338873-13354635.jpg"
            className="w-full h-full object-cover  "
          />
        </div>
        <p className="font-light text-sm">
          Meet <span className="font-bold">Tommy</span>
        </p>
        <p className="font-extralight text-xs">View More</p>
      </section>
      <section className="">
        <h1 className="text-7xl">
          Find your new <br /> best friend
        </h1>
        <p className="md:max-w-[30vw] pt-5 pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        </p>
        <button className="group relative inline-flex h-12 items-center justify-center rounded-full bg-prim-green  px-6 font-medium text-black">
          <span>Read more</span>
          <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </section>
      <section className="flex flex-col gap-5 -translate-y-8">
        <p className="w-52 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore
          nisi eligendi reprehenderit officiis ab!
        </p>
        <img src="/static/arched-arrow.svg" className="rotate-180 h-16" />
      </section>
    </main>
  );
};

export default HeroSection;
