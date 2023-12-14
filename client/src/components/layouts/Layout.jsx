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
    <div
      id="app"
      className="w-full max-h-full h-full flex flex-col justify-around items-start"
    >
      <Header key={cName + "Header"} />
      <main className="w-full h-full max-h-full flex flex-wrap p-3">
        <nav className="w-full h-1/6 row-span-1">
          <ol className="w-full h-full flex justify-center items-center gap-2">
            <li className="w-full h-full flex">
              <figure className="w-full h-full flex flex-col justify-center items-center gap-3">
                <img id="" alt="" src="" className="w-5/6 h-3/5 rounded-full" />
                <figcaption className="w-full h-auto">
                  <p>Menu title</p>
                </figcaption>
              </figure>
            </li>
            <li className="w-full h-full flex">
              <figure className="w-full h-full flex flex-col justify-center items-center gap-3">
                <img id="" alt="" src="" className="w-5/6 h-3/5 rounded-full" />
                <figcaption className="w-full h-auto">
                  <p>Menu title</p>
                </figcaption>
              </figure>
            </li>
            <li className="w-full h-full flex">
              <figure className="w-full h-full flex flex-col justify-center items-center gap-3">
                <img id="" alt="" src="" className="w-5/6 h-3/5 rounded-full" />
                <figcaption className="w-full h-auto">
                  <p>Menu title</p>
                </figcaption>
              </figure>
            </li>
            <li className="w-full h-full flex">
              <figure className="w-full h-full flex flex-col justify-center items-center gap-3">
                <img id="" alt="" src="" className="w-5/6 h-3/5 rounded-full" />
                <figcaption className="w-full h-auto">
                  <p>Menu title</p>
                </figcaption>
              </figure>
            </li>
          </ol>
        </nav>

        <section className="w-full h-5/6 flex flex-wrap overflow-y-scroll">
          <article className="w-1/2 min-h-1/3 border"></article>
          <article className="w-1/2 min-h-1/3 border"></article>
          <article className="w-1/2 min-h-1/3 border"></article>
          <article className="w-1/2 min-h-1/3 border"></article>
          <article className="w-1/2 min-h-1/3 border"></article>
          <article className="w-1/2 min-h-1/3 border"></article>
        </section>
        <section id="pagnation" className="w-full h-auto">
            <div className="w-full h-hull"></div>
        </section>
      </main>

      <Footer key={cName + "Footer"} />
    </div>
  );
}
