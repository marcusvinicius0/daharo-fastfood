"use client";

import paellaFoodImage from "@/assets/image/seafood-paella.png";

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
    <article className="flex flex-col justify-center items-center space-y-10 md:space-y-0 md:flex-row md:gap-12">
      {availableDishes.map((dish) => {
        return (
          <div
            key={dish.title}
            className="flex flex-col justify-center items-center space-y-1 w-[10.62rem]"
          >
            <Image src={dish.img} alt={dish.title} width={120} height={120} className="object-contain" />
            <h3 className="font-semibold uppercase tracking-[2px] text-center">
              {dish.title}
            </h3>
            <small>{dish.price}</small>
          </div>
        );
      })}
    </article>
  );
}
