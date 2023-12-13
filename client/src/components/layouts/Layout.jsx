import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";


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
    <div id="app" className="w-full max-h-full flex flex-wrap">
      <Header key={cName + "Header"} />

      <main
        id={cName + "Main"}
        className="w-full h-5/6 m-h-5/6 flex flex-col flex-none gap-2 overflow-y-scroll px-3"
      >
        <header className="w-2/3 h-auto flex flex-col justify-start items-center py-2">
          <h1 className="w-full h-full text-xl text-page-blue flex justify-start items-center">
            {title}
          </h1>
          <div className="w-full h-0.5 bg-page-blue"></div>
        </header>

        <section
          id={cName + "Component"}
          className="w-full h-full grid grid-cols-1"
        >
          {children}
        </section>
      </main>

      <Footer key={cName + "Footer"} />
    </div>
  );
}
