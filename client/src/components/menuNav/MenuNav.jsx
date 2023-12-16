import React from 'react'
import food from '../../assets/images/food.jpeg'
import NavItem from './NavItem';

export default function MenuNav() {
    return (
      <nav className="w-full h-full p-1">
        <ol className="w-full h-full flex flex-none justify-around items-center gap-2">
          <NavItem key="snacks"  title="Snacks"/>
          <NavItem key="entrees"   title="Entrees"/>
          <NavItem key="drinks"  title="Drinks"/>
          <NavItem key="desserts"  title="Desserts"/>
        </ol>
      </nav>
    );
}
