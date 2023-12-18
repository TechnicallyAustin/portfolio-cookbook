import React from 'react'
import SearchIcon from '../../assets/icons/SearchIcon'

export default function ExpandedSearch() {
    return (
        <section id="expandedSearch" className='absolute top-16 z-20 bg-gradient-to-r from-success to-black w-full h-16 flex justify-around items-center px-3 p-1 gap-3'>
            <article className='w-auto h-full flex justify-between items-center'>
                <SearchIcon />
            </article>
            <input type="text" className='px-1 w-full h-3/4 border text-black rounded-lg' placeholder='Pot Roast'/>
        </section>
    )
}
