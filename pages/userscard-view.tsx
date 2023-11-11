import React, { useState ,useEffect} from "react";

// components
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Image from "next/image";

// static data
import { CardsProducts } from "@/data/StaticData";

import { 
  collection,
  getDocs
} from "firebase/firestore";

import { db } from "@/api/auth/auth";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";
import Link from "next/link";

export default function UsersView() {

 const [Users,setUsers] = useState([])
 let users = [];


 useEffect(() => {

 
  try {
    
    const colRef = collection(db,'UsersCard')

        getDocs(colRef)
        .then((snapshot) => {
          
          snapshot.docs.map((user) => {
            users.push ({
              ...user.data(),
              id: user.id,
            })
        })
        setUsers(users);
        
        console.log(users)
        }) .catch(err => {
          alert(err)
        })

  } catch(err) {
    alert(err)
  }
}, [])


const handleChange = (e) => {

  const val = e.target.value;
  const name = e.target.name;

  setQty({...valueQty,
    [name]: val
  })
}

  const [valueQty,setQty] = React.useState({
    qty:"",
  })


  return (


    <div style={{"height" : "100vh", "width" : "100%","border" : '3px solid red'} } className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500" >

      <div className="flex flex-col md:flex-row md:mt-5 justify-center items-center text-secondary -mt-16">

        <table>
          <tbody>
            <tr>
              <th> Card ID</th>
              <th> Price</th>
              <th> Qty</th>
              <th> Amount</th>
              <th> <Button > <Link  href='/#/page'></Link> Add </Button></th>
            </tr>
            </tbody>
        </table>
     
        {Users.map((card, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center justify-center lg:bg-secondary lg:m-3 lg:text-primary lg:pt-5 lg:pb-[50px] rounded-md lg:hover:scale-105 duration-300 lg:hover:shadow-secondary lg:hover:shadow-xl"
            >

            
             <input value={card.cardid} readOnly name="id"/>
             <input value={card.name} readOnly name="id"/>
            
             <input value={card.price}/>

             
             <input value={card.qty}/>
             
             <input value={card.amount}/>
             <Button> Delete</Button>
            
            </div>
          </>
        ))}
      </div>


    </div>
         
  

  );
}
