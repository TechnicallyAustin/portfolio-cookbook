import React, {useState, useEffect} from 'react'
import NavMenu from '../../assets/icons/NavMenu'
import { Link } from 'react-router-dom'
import FilterIcon from '../../assets/icons/FilterIcon'
import SearchIcon from '../../assets/icons/SearchIcon';

export default function Header() {
    const [searchClicked, setSearchClicked] = useState(false)
    const [filterClicked, setFilterClicked] = useState(false)
    const [menuClicked, setMenuClicked] = useState(false)



    const toggleSearch = () => {
        if (filterClicked || menuClicked) {
            setFilterClicked(false);
            setMenuClicked(false);
        }
        setSearchClicked(!searchClicked);
        console.log("search clicked")
    }
    const toggleFilter = () => {
        if (searchClicked || menuClicked){
            setSearchClicked(false)
            setMenuClicked(false)
        }
        setFilterClicked(!filterClicked)
        console.log("filter clicked")
    }
    const toggleMenu = () => {
        if (searchClicked || filterClicked) {
            setSearchClicked(false)
            setFilterClicked(false)
        }
        setMenuClicked(!menuClicked)
        console.log("menu clicked")
        
    }

    return (
      <header className="static top-0 left-0 bg-white w-full h-16 flex-none justify-center items-center shadow shadow-lg bg-gradient-to-r from-success to-black text-white">
        <section className="w-full h-full flex justify-between items-center px-3">
          <Link to="/">
            <article className="">Johnson Cookbook</article>
          </Link>

          <nav className="flex w-auto justify-end items-center gap-4">
            <article className="w-full h-full flex">
              <button onClick={toggleSearch}>
                <SearchIcon />
              </button>
            </article>
            <article className="w-full h-full flex">
              <button onClick={toggleFilter}>
                <FilterIcon />
              </button>
            </article>
            <article className="w-full h-full flex">
              <button onClick={toggleMenu}>
                <NavMenu />
              </button>
            </article>
          </nav>
        </section>
      </header>
    );
}
