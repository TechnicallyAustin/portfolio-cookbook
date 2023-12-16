import React from 'react'
import Food from '../../assets/images/food.jpeg'  

export default function Card() {
    return (
      <article className=" relative w-1/2 h-1/3 p-2 rounded-lg">
        <figure className="w-full h-full  rounded-lg shadow shadow-md shadow-success  flex flex-wrap justify-center  items-center">
          <img
            id=""
            alt="item image"
            src={Food}
            className="w-full h-5/6 rounded-t-lg aspect-square object-cover"
          />
          <figcaption className="w-full h-auto rounded-lg flex justify-start items-center p-1">
            <p className="w-full">Item Title</p>
          </figcaption>
        </figure>
      </article>
    );
}
