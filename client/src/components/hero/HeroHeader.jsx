import React from "react";
import NavMenu from "../../assets/icons/NavMenu";
import { Link } from "react-router-dom";

export default function HeroHeader() {
  return (
    <header className="fixed bg-white z-50 w-full h-16 flex justify-center items-center shadow shadow-lg">
      <section className="w-full h-full flex justify-between items-center px-3">
        <Link to="/">
          <article className="">Johnson Cookbook</article>
        </Link>

        <nav className="">
          <article>
            <button>
              <NavMenu />
            </button>
          </article>
        </nav>
      </section>
    </header>
  );
}
