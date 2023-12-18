import React, {useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Food from '../../assets/images/food.jpeg'
import Card from "../cards/Card";
import MenuNav from "../menuNav/MenuNav";
import Pagnation from "../pagnation/Pagnation";
import ExpandedCard from "../cards/ExpandedCard";


export default function Layout({ children }) {
    const cName = children.type.name.toLowerCase();
    const title = children.type.name;

  if (["login", "register", "logout", "hero"].includes(cName)) {
    return (
      <div id={cName} className=" w-full h-full">
        {children}
      </div>
    );
  }


  return (
    <div id="app" className="w-full h-full flex flex-col">
      <Header key={cName + "Header"} />
      <main className="w-full h-full max-h-full flex flex-col p-3 gap-2">
        <section i="menuNav" className="w-full h-28">
          <MenuNav />
        </section>

        <section i="menuCards" className="relative w-full h-4/5 ">
          <section id="cardContainer" className="absolute w-full h-full flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>

        <section
          i="pagnation"
          className="w-full h-8 flex justify-center items-center">
            <Pagnation />
        </section>
      </main>
    </div>
  );
}
