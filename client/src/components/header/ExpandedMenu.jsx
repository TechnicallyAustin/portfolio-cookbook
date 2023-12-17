import React from 'react'
import CloseIcon from '../../assets/icons/CloseIcon'

export default function ExpandedMenu(props) {
    const {toggle} = props
    return (
        <section id="expandedMenu" className='absolute top-0 z-20 bg-gradient-to-r from-success to-black w-full h-full flex justify-around items-center p-1'>
            <section className='w-full h-full p-3'>
                <header className='w-full h-auto flex justify-between'>
                    <h1>Expanded Menu</h1>
                    <button onClick={toggle}><CloseIcon /></button>
                </header>
            </section>
        </section>
    )
}
