import Image from "next/image";

import hambImage from "@/assets/image/delicious-hamb.png";
import hamb1Image from "@/assets/image/hambur.png";
import SliderCarousel from "./slider";

import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default async function HomePage() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center items-center">
        <section className="mt-28 space-y-10 flex flex-col items-center p-[0.5rem] md:p-0 max-w-[47.5rem]">
          <h1 className="tracking-[2px] uppercase font-semibold text-2xl md:text-3xl text-center">
            Nós fazemos os melhores hamburgueres da cidade
          </h1>
          <Image
            src={hambImage}
            alt="X-Burguer padrão"
            className="object-cover md:w-full max-w-[297px] shadow-sm border-gray-700"
          />
          <p className="text-center leading-6 text-sm md:text-base text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate. Labore architecto accusantium, iusto voluptatum quas est
            pariatur fugit ipsam doloribus neque, sit qui. Eligendi esse quas
            sint molestiae culpa?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit ex ppal,
            aNemo
          </p>

          <button className="bg-[#EC3D08] text-white p-3 rounded-xl w-48 hover:bg-[#EC3D08]/90 shadow-sm">
            <Link href={`/:id`}>Veja mais</Link>
          </button>
        </section>

        <hr className="mt-4 w-full" />

        <section className="mt-10 space-y-10 p-[0.5rem] md:p-0 max-w-[47.5rem]">
          <h1 className="tracking-[2px] uppercase font-semibold text-3xl text-center">
            Nosso pratos
          </h1>
          <p className="text-center leading-6 text-sm md:text-base text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate. Labore architecto accusantium, iusto voluptatum quas est
            pariatur fugit ipsam doloribus neque, sit qui. Eligendi esse quas
            sint molestiae culpa?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit ex ppal,
            aNemo
          </p>
          <SliderCarousel />
        </section>

        <section className="mt-10 md:mt-20 max-w-[47.5rem]">
          <div className="">
          {/* <span>
            <Image src="" alt="" />
          </span> */}

            <div className="flex flex-col items-center space-y-6">
              <h3 className="tracking-[2px] uppercase font-semibold text-3xl text-center underline-offset-4 border-b-2 border-red-500">
                Sobre nós
              </h3>
              <h2 className="text-2xl font-serif text-center">
                Convidamos você a visitar nosso restaurante
              </h2>

              <span>
                <Image
                  src={hamb1Image}
                  alt="Hamburguer da casa 2"
                  width={350}
                  height={250}
                  className="rounded-xl object-contain"
                />
              </span>
              <p className="text-center leading-6 text-sm md:text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia repellendus, ipsa expedita id accusantium distinctio
                tempora quo ipsum inventore doloremque sequi, neque nobis
                perferendis labore voluptates unde? Quo, laudantium in!
              </p>

              <footer className="space-y-4">
                <button className="bg-[#EC3D08] text-white p-4 rounded-xl w-48 hover:bg-[#EC3D08]/90 shadow-sm">
                  <Link href={`/:id`}>Ler mais</Link>
                </button>

                <nav>
                  <ul className="flex items-center justify-center space-x-4">
                    <li>
                      <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:opacity-90" />
                    </li>
                    <li>
                      <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:opacity-90" />
                    </li>
                    <li>
                      <TwitterIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:opacity-90" />
                    </li>
                    <li>
                      <YoutubeIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:opacity-90" />
                    </li>
                  </ul>
                </nav>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
