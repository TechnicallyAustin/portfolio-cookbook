import React from 'react'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

export default function Pagnation() {
    const navigateToPage = (e) => {
        console.log("Navigating to Page", e.target.id)

    }

    const previousPage = () => {console.log("Previous Page")}
    const nextPage = () => {console.log("Next Page")}

    return (
      <div className="w-full h-full grid grid-cols-8 place-items-center ">
        <button className='w-full h-full shadow shadow-lg flex items-center justify-center' onClick={previousPage}>
            <ChevronLeftIcon/>
        </button>
        <div id="1" className="w-full h-full shadow shadow-lg bg-success text-white flex items-center justify-center" onClick={navigateToPage}>{"1"}</div>
        <div id="2" className="w-full h-full shadow shadow-lg flex items-center justify-center" onClick={navigateToPage}>{"2"}</div>
        <div id="3" className="w-full h-full shadow shadow-lg flex items-center justify-center" onClick={navigateToPage}>{"3"}</div>
        <div id="4" className="w-full h-full shadow shadow-lg flex items-center justify-center" onClick={navigateToPage}>{"4"}</div>
        <div id="5" className="w-full h-full shadow shadow-lg flex items-center justify-center" onClick={navigateToPage}>{"5"}</div>
        <div id="6" className="w-full h-full shadow shadow-lg flex items-center justify-center" onClick={navigateToPage}>{"6"}</div>
        <button className='w-full h-full shadow shadow-lg flex items-center justify-center' onClick={nextPage}>
            <ChevronRightIcon onClick={nextPage} />
        </button>
      </div>
    );
}
