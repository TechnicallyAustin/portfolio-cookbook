import React from 'react'
import Header from '../header/Header'
import food1 from '../../assets/images/food.jpeg'
import food2 from '../../assets/images/food-2.jpeg'

export default function Hero() {
    return (
      <>
        <Header />
        <main className="w-full h-full absolute z-10 top-0">
            <header className='w-full h-1/4 absolute top-1/4 z-20 flex flex-wrap justify-around bg-black bg-opacity-30 p-3'>
                <h1 className='w-full h-auto text-3xl text-center text-white shadow shadow-lg self-center'>Johnson Family Cookbook</h1>
                <article className='w-5/6 h-1/6 flex justify-between  items-center gap-3'>
                    <button className='w-full py-3 rounded-lg border text-white shadow shadow-xl'>Recipies</button>
                    <button className='w-full py-3 rounded-lg border text-white shadow shadow-xl'>Learn More</button>
                </article>
            </header>

          <section id="photoGrid" className=" w-full h-full border grid grid-rows-4">
            <section className='w-full h-full flex justify-center'>
                <figure className='w-full h-full flex object-cover'>
                    <img src={food1} className='w-full h-full object-cover'/>
                </figure>
                <figure className='w-full h-full flex object-cover'>
                    <img src={food2} className='w-full h-full object-cover'/>
                </figure>
            </section>
            
            <section className='w-full h-full  bg-black grid grid-cols-3'>
                    <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>

                    <figure className='w-full h-full flex object-cover'>
                        <img src={food1} className='w-full h-full object-cover'/>
                    </figure>

                    <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>
            </section>

            <section className='w-full h-full  bg-black grid grid-cols-2'>
                  <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>

                      <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>

            </section>

            <section className='w-full h-full  bg-black grid grid-cols-3'>
                    <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>

                    <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>

                    <figure className='w-full h-full flex object-cover'>
                        <img src={food2} className='w-full h-full object-cover'/>
                    </figure>
            </section>

          </section>
        </main>
      </>
    );
}
