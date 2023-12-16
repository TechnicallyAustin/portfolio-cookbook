import React from 'react'
import NavMenu from '../../assets/icons/NavMenu'
import { Link } from 'react-router-dom'
import FilterIcon from '../../assets/icons/FilterIcon'

export default function Header() {
    return (
        <header className='static top-0 left-0 bg-white w-full h-16 flex-none justify-center items-center shadow shadow-lg bg-gradient-to-r from-success to-black text-white'>
            <section className='w-full h-full flex justify-between items-center px-3'>
                <Link to="/">
                    <article className=''>Johnson Cookbook</article>
                </Link>

                <nav className='flex w-auto justify-end items-center gap-4'>
                      <article className='w-full h-full flex'>
                        <button>
                            <FilterIcon />
                        </button>
                    </article>
                    <article className='w-full h-full flex'>
                        <button>
                                <NavMenu />
                        </button>
                    </article>
                </nav>
            </section>
        </header>
    )
}
