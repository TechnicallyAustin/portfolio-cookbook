import React, {useState, useEffect} from 'react'
import food from '../../assets/images/food.jpeg'
import NavItem from './NavItem';

export default function MenuNav() {
    const [snacksClicked, setSnacksClicked] = useState(false)
    const [entreesClicked, setEntreesClicked] = useState(false)
    const [drinksClicked, setDrinksClicked] = useState(false)
    const [dessertsClicked, setDessertsClicked] = useState(false)

    const toggleSnacks = () => {
        if (entreesClicked || drinksClicked || dessertsClicked) {
            setEntreesClicked(false);
            setDrinksClicked(false);
            setDessertsClicked(false);
        }
        setSnacksClicked(!snacksClicked)
        console.log("Snacks Clicked")
    }
    const toggleEntrees = () => {
        if (snacksClicked || drinksClicked || dessertsClicked) {
            setSnacksClicked(false);
            setDrinksClicked(false)
            setDessertsClicked(false)
        }
        setEntreesClicked(!entreesClicked);
        console.log("Entrees Clicked")
    }

    const toggleDrinks = () => {
        if (snacksClicked || entreesClicked || dessertsClicked) {
            setSnacksClicked(false)
            setEntreesClicked(false);
            setDessertsClicked(false)
        }
        setDrinksClicked(!drinksClicked)
        console.log("Drinks Clicked")
    }

    const toggleDesserts = () => {
        if (snacksClicked || entreesClicked || drinksClicked) {
            setSnacksClicked(false)
            setEntreesClicked(false)
            setDrinksClicked(false)
        }
        setDessertsClicked(!dessertsClicked)
        console.log("Desserts Clicked")
    }

    return (
      <nav className="w-full h-full p-1">
        <ol className="w-full h-full flex flex-none justify-around items-center gap-2">
            <li className="w-full h-full flex flex-1  rounded-xl shadow shadow-md shadow-success" onClick={toggleSnacks}>
                <NavItem key="snacks"  title="Snacks"/>
            </li>
            <li className="w-full h-full flex flex-1  rounded-xl shadow shadow-md shadow-success" onClick={toggleEntrees}>
                <NavItem key="entrees"   title="Entrees"/>
            </li>
            <li className="w-full h-full flex flex-1  rounded-xl shadow shadow-md shadow-success" onClick={toggleDrinks}>
                <NavItem key="drinks"  title="Drinks"/>
            </li>
            <li className="w-full h-full flex flex-1  rounded-xl shadow shadow-md shadow-success" onClick={toggleDesserts}>
                <NavItem key="desserts"  title="Desserts"/>
            </li>
        </ol>
      </nav>
    );
}
