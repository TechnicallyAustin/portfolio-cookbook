import React from 'react'
import Food from '../../assets/images/food.jpeg'  

export default function Card() {
    return (
      <article className="w-1/2 h-1/3 p-2 rounded-lg shadow shadow-lg">
        <figure className="w-full h-full border rounded-lg  flex flex-wrap justify-center rounded-lg items-center">
          <img
            id=""
            alt="item image"
            src={Food}
            className="w-full h-5/6 rounded-lg aspect-square max-h-2/3 object-cover"
          />
          <figcaption className="w-full h-auto rounded-lg flex justify-start items-center py-1">
            <p className="w-full h-auto ">Item Title</p>
          </figcaption>
        </figure>
      </article>
    );
}
