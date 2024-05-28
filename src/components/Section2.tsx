import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:h-[70dvh] items-center justify-center">
      <section className="flex flex-col md:w-[40vw] items-start">
        <h2>Things you need to know before a Dog Adoption</h2>
        <p className="pt-5 pb-5">
          You decided that Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus, vel. Deserunt totam ea saepe eius molestias, quisquam
          reiciendis quas rerum.
        </p>
        <button className="border group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
          <span className="z-10 pr-2">Read More</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
            <div class="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-neutral-50"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </section>
      <img
        src="/static/pexels-photo-1906153.jpeg"
        className="h-72 w-56 object-cover"
      />
      <img
        src="/static/WhatsApp Image 2024-05-28 at 13.51.25.jpeg"
        className="h-72 w-56 object-cover ml-3"
      />
    </div>
  );
};

export default Section2;
