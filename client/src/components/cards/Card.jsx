import React, {useState} from 'react'
import Food from '../../assets/images/food.jpeg'  
import ExpandedCard from './ExpandedCard'

export default function Card() {
    const [cardClicked, setCardClicked] = useState(false)
    const toggleCard = () => {
        setCardClicked(!cardClicked)
        console.log("Card toggled")
    }
    return (
      <article className=" relative w-1/2 h-1/3 p-2 rounded-lg">
        {cardClicked && (
          <ExpandedCard
            toggle={toggleCard}
            image={Food}
            title={"Card Title"}
            instructions={"Card instructions"}
            ingredients={"Card Ingredients"}
          />
        )}
        <figure className="w-full h-full hover:bg-success hover:text-white  rounded-lg shadow shadow-md shadow-success  flex flex-wrap justify-center  items-center">
          <img
            id=""
            alt="item image"
            src={Food}
            className="w-full h-5/6 rounded-t-lg aspect-square object-cover"
            onClick={toggleCard}
          />
          <figcaption className="w-full h-auto rounded-lg flex justify-start items-center p-1">
            <p className="w-full">Item Title</p>
          </figcaption>
        </figure>
      </article>
    );
}
