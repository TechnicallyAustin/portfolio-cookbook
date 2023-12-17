import React from 'react'
import FoodAlt from '../../assets/images/food-2.jpeg'

export default function NavItem(props) {
    const {title} = props
    return (
        <>
        <figure className="w-full h-full flex flex-col justify-center items-center gap-1">
          <img id="" alt="" src={FoodAlt} className="w-4/5 h-4/6 rounded-full flex object-cover" />
          <figcaption className="w-full h-auto flex justify-center items-center">
            <p className="w-full h-auto text-center">{title}</p>
          </figcaption>
        </figure>
      </>
    );
}
