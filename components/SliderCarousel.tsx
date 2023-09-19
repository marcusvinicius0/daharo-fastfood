"use client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import paellaFoodImage from "@/assets/image/seafood-paella.webp";
type Props = {};

import Image from "next/image";
import Carousel from "nuka-carousel";

const availableDishes = [
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
  {
    img: paellaFoodImage,
    title: "Panang Curry",
    price: "$10.00",
  },
];

export default function SliderCarousel({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel
    adaptiveHeight={true}
    wrapAround={true}
    >
      {availableDishes.map((dish) => {
        return (
          <div key={dish.title} className="flex flex-col justify-center items-center space-y-1">
            <Image src={dish.img} alt={dish.title} width={80} height={80} />
            <h3 className="font-semibold uppercase tracking-[2px]">{dish.title}</h3>
          </div>
        );
      })}
    </Carousel>
  );
}
