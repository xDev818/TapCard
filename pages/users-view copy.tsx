import React, { useState ,useEffect} from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";



import { 
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";

import { auth, db } from "@/api/auth/auth";
import { initializeApp } from "firebase/app";

// static data
import { CardsProducts } from "@/data/StaticData";

 export default function UsersView1() {

//   const firebaseConfig = {

//     apiKey: "AIzaSyB32I80zNhKnFE-H3DE1SjmpE5q-ANQbuc",
//    authDomain: "sinuous-cat-398020.firebaseapp.com",
//    projectId: "sinuous-cat-398020",
//    storageBucket: "sinuous-cat-398020.appspot.com",
//    messagingSenderId: "158817927488",
//    appId: "1:158817927488:web:8ce0e688611069cbedfaa5",
//    measurementId: "G-NW1GT7GBKD"
 
//    // apiKey: process.env.NEXT_PUBLIC_API_KEY,
//    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
//    // appId: process.env.NEXT_PUBLIC_APP_ID
//  };
// initializeApp(firebaseConfig)
//  const db = getFirestore()

const [Users,setUser] = useState([])
let users = [];

useEffect(() => {

 
  try {
    
    const colRef = collection(db,'users')

   
       
        getDocs(colRef)
        .then((snapshot) => {
          
          snapshot.docs.map((user) => {
            users.push ({
              ...user.data(),
              id: user.id,
              
            })
           
        })
        setUser(users);
        
        console.log(users)
        }) .catch(err => {
          alert(err)
        })


      
  } catch(err) {
    alert(err)
  }
}, [])



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
                {card.price}
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
