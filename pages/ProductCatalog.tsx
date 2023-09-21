import React from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";

// card images
import WCARD from "@/public/Cards/white.png";
import BCARD from "@/public/Cards/gray.png";
import PCARD from "@/public/Cards/pink.png";
import Image from "next/image";
import Button from "@/components/Button";

const CardsProducts = [
  {
    img: WCARD,
    price: "Php 1200.00",
    type: "Standard Card",
  },
  {
    img: BCARD,
    price: "Php 1200.00",
    type: "Professional Card",
  },
  {
    img: PCARD,
    price: "Php 1200.00",
    type: "Premium Card",
  },
];

export default function ProductCatalog() {
  return (
    <div className="max-w-[1200px] mx-auto mt-10 mb-20">
      <div className="text-center my-[70px]">
        <Title className="mb-0 text-3xl md:text-4xl lg:text-5xl lg:leading-[60px]">
          Revolutionize Your <br className="sm:hidden" /> Business Cards
          <br className="hidden sm:block" /> with Tap{" "}
          <br className="sm:hidden" /> Technology
        </Title>
        <Paragraph
          description="Make your presence felt"
          className="md:text-lg mt-2 lg:text-2xl text-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row md:mt-5 justify-center items-center text-secondary -mt-16">
        {CardsProducts.map((card, index) => (
          <>
            <div className="flex flex-col items-center justify-center lg:bg-secondary lg:m-3 lg:text-primary lg:pt-5 lg:pb-[50px] rounded-md lg:hover:scale-105 duration-300 lg:hover:shadow-secondary lg:hover:shadow-xl">
              <Image
                src={card.img}
                alt={card.type}
                quality={100}
                key={index}
                className="lg:-mt-12"
              />
              <Title className="mb-0 -mt-16 font-bold ">{card.price}</Title>
              <Paragraph description={card.type} className="font-semibold" />
              <input
                type="text"
                placeholder="0"
                min={0}
                className="outline-none border-2 border-secondary bg-transparent text-center py-1 rounded-md w-[170px] mt-4 no-spinners px-2 lg:border-primary"
              />
              <Button
                variant="secondary"
                className="uppercase font-semibold w-[170px] mt-2 py-[6px] rounded-md lg:bg-primary lg:text-secondary lg:hover:bg-standardBg lg:mt-3"
              >
                Add To Cart
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
