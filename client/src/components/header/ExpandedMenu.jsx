import React from 'react'
import CloseIcon from '../../assets/icons/CloseIcon'

export default function ExpandedMenu(props) {
    const {toggle} = props
    return (
      <section
        id="expandedMenu"
        className="absolute top-0 z-50 bg-gradient-to-r from-success to-black w-full h-full flex flex-col justify-between items-start p-3"
      >
        <header className="w-full h-auto flex justify-between items-center">
          <h1 className="w-full h-full text-2xl ">Johnson Cookbook</h1>
          <button className="w-auto" onClick={toggle}>
            <CloseIcon />
          </button>
        </header>

        <ul id="" className="w-full h-full flex flex-col p-3 ">
          <li className="w-full h-full flex justify-scenter items-center">
            <p className="text-xl w-full h-auto text-center">Home</p>
          </li>

          <li className="w-full h-full flex justify-center items-center">
            <p className="text-xl w-full h-auto text-center">Login / Logout</p>
          </li>
          
          <li className="w-full h-full flex justify-center items-center">
            <p className="text-xl w-full h-auto text-center">Add Recipes</p>
          </li>
          <li className="w-full h-full flex justify-center items-center">
            <p className="text-xl w-full h-auto text-center">Discover</p>
          </li>
        </ul>
      </section>
    );
}
