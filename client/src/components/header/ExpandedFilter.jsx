import React from 'react'

export default function ExpandedFilter() {
    return (
         <section id="expandedFilter" className='absolute top-16 z-20 bg-gradient-to-r from-success to-black w-full h-1/3 flex flex-col justify-around items-center p-3 pt-0 gap-3'>
            <header className='w-full h-auto flex flex-col'>
                <h2 className='w-full'>Filter</h2>
            </header>
            <section className='w-full h-full bg-white rounded-lg'></section>
        </section>
    )
}
