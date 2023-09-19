import Image from "next/image";
import React from "react";

type Props = {};

import hambImage from "../assets/image/delicious-hamb.png";
import SliderCarousel from "./SliderCarousel";

export default function HomePage({}: Props) {
  const props = {
    id: 1,
  };

  return (
    <div className="h-full w-full">
      <section className="mt-10 space-y-10 flex flex-col items-center p-[0.5rem] md:p-0">
        <h1 className="tracking-[2px] uppercase font-semibold text-3xl text-center">
          We make the best burgers in town
        </h1>
        <Image
          src={hambImage}
          alt="X-Burguer padrão"
          className="object-cover w-full max-w-[297px] rounded-full shadow-sm outline-2 border-4 border-gray-700"
        />
        <p className="text-center md:text-left leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
          voluptate. Labore architecto accusantium, iusto voluptatum quas est
          pariatur fugit ipsam doloribus neque, sit qui. Eligendi esse quas sint
          molestiae culpa?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit ex ppal, aNemo
        </p>

        <button className="bg-[#EC3D08] text-white p-3 rounded-xl w-48 hover:bg-[#EC3D08]/90 shadow-sm">
          Learn more
        </button>
      </section>

      <hr className="mt-4 w-full" />

      <section className="mt-10 space-y-10">
        <h1 className="tracking-[2px] uppercase font-semibold text-3xl text-center">
          Our dishes
        </h1>
        <p className="text-center md:text-left leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
          voluptate. Labore architecto accusantium, iusto voluptatum quas est
          pariatur fugit ipsam doloribus neque, sit qui. Eligendi esse quas sint
          molestiae culpa?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit ex ppal, aNemo
        </p>

        {/* Carrousel */}
          {/* <div>
            <img src="" alt="" />
            <p>Special, Variable</p>
            <span>Panang Curry</span>
            <span>$10.00</span>
          </div> */}
          <SliderCarousel />
      </section>
    </div>
  );
}
