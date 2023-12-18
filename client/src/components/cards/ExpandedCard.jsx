import React from 'react'
import ChevronLeftAltIcon from '../../assets/icons/ChevronLeftAltIcon';

export default function ExpandedCard(props) {
    const {toggle,image, title, instructions, ingre} = props
    return (
      <section className="w-full h-full top-16 left-0 fixed z-10 bg-white">
        <figure id="cardImage" className="w-full h-1/4 bg-white">
          <button
            className="absolute z-30 w-1/6 h-16 flex justify-center items-center shadow shadow-xl bg-black bg-opacity-20"
            onClick={toggle}
          >
            <ChevronLeftAltIcon />
          </button>
          <img
            id=""
            src={image}
            alt="card image"
            className="relative z-20 w-full h-full object-cover"
          />
          <figcaption></figcaption>
        </figure>

        <section
          id="cardContent"
          className="absolute w-full h-4/6  p-3 flex flex-wrap overflow-y-scroll justify-center items-start gap-3"
        >
          <section
            id="cardTitle"
            className="w-full h-auto bg-white text-xl flex justify-between"
          >
            {title}
            <article>
              <p>$123</p>
            </article>
          </section>

          <section
            id="cardIngredients"
            className="w-full h-1/2 bg-white p-1 flex flex-col gap-1 "
          >
            <header className="w-full h-auto texl-lg">
              <h2 className="w-full h-full">Ingredients</h2>
            </header>
            <article className="w-full h-5/6 shadow-lg border rounded-lg"></article>
          </section>

          <section
            id="cardInstructions"
            className="w-full h-1/2 bg-white p-1 flex flex-col gap-1 "
          >
            <header className="w-full h-auto texl-lg">
              <h2 className="w-full h-full">Instructions</h2>
            </header>
            <article className="w-full h-5/6 shadow-lg border rounded-lg"></article>
          </section>
          <section
            id="storesApi"
            className="w-full h-1/4 p-1 bg-white p-1 flex flex-col gap-1 "
          >
            <header className="w-full h-auto texl-lg">
              <h2 className="w-full h-full">Find it in a Store</h2>
            </header>
            <article className="w-full h-5/6 shadow-lg border flex rounded-lg justify-around items-center">
              <button className="w-5/6 h-5/6 ">Vons</button>
              <button className="w-5/6 h-5/6 ">sfwy</button>
              <button className="w-5/6 h-5/6 ">FFL</button>
            </article>
          </section>
        </section>
      </section>
    );
}
