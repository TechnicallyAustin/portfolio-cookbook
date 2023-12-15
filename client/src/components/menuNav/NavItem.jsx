import React from 'react'
import FoodAlt from '../../assets/images/food-2.jpeg'

export default function NavItem() {
    return (
      <li className="w-full h-full flex flex-1">
        <figure className="w-full h-full flex flex-col justify-center items-center gap-3">
          <img id="" alt="" src={FoodAlt} className="w-4/6 h-3/6 rounded-full flex object-cover" />
          <figcaption className="w-full h-auto flex justify-center items-center">
            <p className="w-full h-auto text-center">Snacks</p>
          </figcaption>
        </figure>
      </li>
    );
}
