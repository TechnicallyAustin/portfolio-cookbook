import React, {useState} from 'react'
import Food from '../../assets/images/food.jpeg'  

export default function Card() {
    const [cardClicked, setCardClicked] = useState(false)
    const toggleCard = () => {
        setCardClicked(!cardClicked)
        console.log("Card toggled")
    }
    return (
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
    );
}
