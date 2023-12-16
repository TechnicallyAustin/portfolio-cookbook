import React from 'react'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

export default function Pagnation() {
    return (
      <div className="w-full h-full grid grid-cols-8 place-items-center ">
        <ChevronLeftIcon />
        <div className="w-full h-full shadow shadow-lg bg-success text-white flex items-center justify-center">{"1"}</div>
        <div className="w-full h-full shadow shadow-lg flex items-center justify-center">{"2"}</div>
        <div className="w-full h-full shadow shadow-lg flex items-center justify-center">{"3"}</div>
        <div className="w-full h-full shadow shadow-lg flex items-center justify-center">{"4"}</div>
        <div className="w-full h-full shadow shadow-lg flex items-center justify-center">{"5"}</div>
        <div className="w-full h-full shadow shadow-lg flex items-center justify-center">{"6"}</div>
        <ChevronRightIcon />
      </div>
    );
}
