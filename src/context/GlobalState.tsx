import React, { useState, useEffect } from "react";
import { ItemType } from "../models/item";
import User from "../models/user";

const GlobalContext = React.createContext<any>({});

type ItemProp = {
    children: React.ReactNode
}

const GlobalProvider = ({children}: ItemProp) => { 
  const [user, setUser] = useState<User | null>(null)
  const [products, setProducts] = useState<ItemType[]>([{
        id: 0,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        desc: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        price: 9.85,
        categoryId: 2,
        img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        },
        {
        id: 1,
        title: "Opna Women's Short Sleeve Moisture",
        desc: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        price: 7.95,
        categoryId: 2,
        img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
        },
        {
        id: 2,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        desc: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        price: 12.99,
        categoryId: 1,
        img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
        }])
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //         setProducts(data);
    //       });
    //   }, []);
  useEffect(() => {
    fetch('/user')
      .then(res => res.json())
      .then(data => { setUser(data) });
      }, []);

  return (
    <GlobalContext.Provider value={{user, setUser, products, setProducts}}>
        {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalProvider};