'use client';
import * as React from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";

// static data
import { CardsProducts } from "@/data/StaticData";

import { db } from "@/api/auth/auth";
import {  collection,addDoc} from "firebase/firestore"

import { toast } from "react-toastify";

export default function ProductCatalog() {

  const [values,setValues] = React.useState({
    userid: "",
    cardid: "",
    qty:"",
    price:"",
    amount:0
  
  })

  const [valueQty,setQty] = React.useState({
    qty:"",
  })

  //const addCard = document.querySelector('.add')
   
  const handleChange = (e) => {

    const val = e.target.value;
    const name = e.target.name;

    setQty({...valueQty,
      [name]: val
    })


  
  }

  function handleAddProduct(event,cardid,qty,price) {
      try {
        const colRef = collection(db,'UsersCard')
       // const addCard = docu document.querySelector('.add')
        const total = qty * price;
      
        addDoc(colRef,{
          userid: '1',
          cardid: cardid,
          qty: qty,
          price: price,
          amount: total

        }).then(() => {
          //addCard.reset()
          toast.success(" Card successfully added", {
            position: "top-center",
            theme: "light",
          });
        }).catch(err => {
            alert("not successful")
        })

      } catch(err) {
          console.log(err)
      }
    }

  return (
    <div className="max-w-[1200px] mx-auto mt-10 mb-20">
      <div className="text-center my-[70px]">
        <Title className="mb-0 text-secondary">
          Revolutionize Your <br className="sm:hidden" /> Business Cards
          <br className="hidden sm:block" /> with Tap{" "}
          <br className="sm:hidden" /> Technology
        </Title>
        <Paragraph
          description="Make your presence felt"
          className="md:text-lg mt-2 lg:text-2xl text-lg text-secondary"
        />
      </div>
      <div className="flex flex-col md:flex-row md:mt-5 justify-center items-center text-secondary -mt-16">
        {CardsProducts.map((card, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center justify-center lg:bg-secondary lg:m-3 lg:text-primary lg:pt-5 lg:pb-[50px] rounded-md lg:hover:scale-105 duration-300 lg:hover:shadow-secondary lg:hover:shadow-xl"
            >
              <Image
                src={card.img}
                alt={card.type}
                quality={100}
                className="lg:-mt-12"
              />
              <Title className="mb-0 -mt-16 font-bold lg:text-3xl ">
                Php {card.price}
              </Title>
              <Paragraph
                description={card.type}
                className="font-semibold lg:text-base lg:text-primary"
              />
              <input
                type="text"
                placeholder="0"
                min={0}
                className="outline-none border-2 border-secondary bg-transparent text-center py-1 rounded-md w-[170px] mt-4 no-spinners px-2 lg:border-primary"
                onChange={handleChange} name="qty"
                value={valueQty.qty}
              />
              <Button
                variant="secondary"
                className="uppercase font-semibold w-[170px] mt-2 py-[6px] rounded-md lg:bg-primary lg:text-secondary lg:hover:bg-standardBg lg:mt-3"
                onClick={e => handleAddProduct(e,card.id,valueQty.qty,card.price,)}
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
