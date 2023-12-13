import React from 'react'
import NavMenu from '../../assets/icons/NavMenu'

export default function Header() {
    return (
        <header className='fixed bg-white z-50 w-full h-14 flex justify-center items-center shadow shadow-lg'>
            <section className='w-full h-dull flex justify-between items-center px-3'>
                <article className=''>Johnson Cookbook</article>

                <nav className=''>
                    <article>
                        <button>
                            <NavMenu />
                        </button>
                    </article>
                </nav>
            </section>
        </header>
    )
}
