"use client";

import paellaFoodImage from "@/assets/image/seafood-paella.png";
import shrimppastaImage from "@/assets/image/shrimp-pasta.png";
import aussieSeaFoodImage from "@/assets/image/aussie_seafood.png";
import coconutShrimpFoodImage from "@/assets/image/homemade-coconut-shrimp.png";
import Image from "next/image";

const availableDishes = [
  {
    img: paellaFoodImage,
    title: "Paella",
    price: "R$9.99",
  },
  {
    img: paellaFoodImage,
    title: "Shrimp pasta",
    price: "R$14.99",
  },
  {
    img: paellaFoodImage,
    title: "Aussie seafood",
    price: "R$19.99",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "R$10.00",
  },
];

export default function SliderCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <article className="flex flex-col justify-center items-center md:flex-row">
      {availableDishes.map((dish) => {
        return (
          <div
            key={dish.title}
            className="flex flex-col justify-center items-center space-y-1 w-[10.62rem]"
          >
            <Image src={dish.img} alt={dish.title} width={120} height={120} className="object-contain" />
            <h3 className="font-semibold uppercase tracking-[2px]">
              {dish.title}
            </h3>
            <small>{dish.price}</small>
          </div>
        );
      })}
    </article>
  );
}
