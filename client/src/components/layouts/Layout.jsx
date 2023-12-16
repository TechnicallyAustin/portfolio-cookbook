import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Food from '../../assets/images/food.jpeg'
import Card from "../cards/Card";
import MenuNav from "../menuNav/MenuNav";


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
    <div
      id="app"
      className="w-full h-full flex flex-wrap"
    >
      <Header key={cName + "Header"} />
      <main className="w-full h-5/6 flex flex-wrap justify-start px-3">

        <section className="w-full h-1/6">
          <MenuNav />
        </section>
        
          <header className="w-full h-auto row-span-1">
            <h2>Section title</h2>
          </header>

        <section className="w-full h-4/5 flex justify-start items-center">
            <section className="w-full h-full flex flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
        </section>

        <section className="w-full h-8 flex justify-center items-center">
            <p className="w-full h-full flex justify-center items-center">Pagnation</p>
        </section>
      </main>
    </div>
  );
}
