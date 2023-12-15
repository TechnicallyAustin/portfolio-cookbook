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
      className="w-full max-h-full h-full flex flex-col items-start"
    >
      <Header key={cName + "Header"} />
      <main className="w-full h-full flex flex-col px-3 gap-2">
        <section className="w-full h-1/6">
          <MenuNav />
        </section>

        <section className="w-full h-5/6 flex flex-col">
          <header>
            <h2>Section title</h2>
          </header>
          <section className="w-full ">
            <section className="w-full h-full flex flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
          </section>
        </section>

        <section className="w-full h-"></section>
      </main>
    </div>
  );
}
