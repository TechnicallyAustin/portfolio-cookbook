import React from 'react'

export default function ExpandedFilter() {
    const handleSubmit = (e) => {
        e.preventDefault
    }
    return (
         <section id="expandedFilter" className='absolute top-16 z-20 bg-gradient-to-r from-success to-black w-full h-1/3 flex flex-col justify-around items-center p-3 pt-0 gap-3'>
            <header className='w-full h-auto flex flex-col'>
                <h2 className='w-full'>Filter</h2>
            </header>

            <section id="filters" className='relative z-30 w-full h-full bg-white rounded-lg flex flex-col text-black'>
                <form method="POST" action="" id="" className='relative w-full h-full grid grid-rows-3 grid-col-2 gap-2'>
                    <fieldset id="categoryFilter" className="w-full h-full flex flex-col shadow shadow-md p-1">
                        <label id="" htmlFor="" className='w-auto h-auto'>
                            <p className='w-full h-auto'>Category</p>
                        </label>
                        <input type="" id="" className='w-full h-full bg-primary bg-opacity-30 rounded px-1' placeholder='Snacks'/>
                    </fieldset>
                    <fieldset id="ingredientsFilter" className="w-full h-full flex flex-col shadow shadow-md p-1">
                        <label id="" htmlFor="" className='w-auto h-auto'>
                            <p className='w-full h-auto'>Ingredients</p>
                        </label>
                        <input type="" id="" className='w-full h-full bg-primary bg-opacity-30 rounded px-1' placeholder='Beef'/>
                    </fieldset>
                    <fieldset id="caloriesFilter" className="w-full h-full flex flex-col shadow shadow-md p-1">
                        <label id="" htmlFor="" className='w-auto h-auto'>
                            <p className='w-full h-auto'>Calories</p>
                        </label>
                        <input type="" id="" className='w-full h-full bg-primary bg-opacity-30 rounded px-1' placeholder='400-800'/>
                    </fieldset>
                    <fieldset id="priceFilter" className="w-full h-full flex flex-col shadow shadow-md p-1">
                        <label id="" htmlFor="" className='w-auto h-auto'>
                            <p className='w-full h-auto'>Price</p>
                        </label>
                        <input type="" id="" className='w-full h-full bg-primary bg-opacity-30 rounded px-1' placeholder='$20-40'/>
                    </fieldset>
                    <fieldset id="prepTimeFilter" className="w-full h-full flex flex-col shadow shadow-md p-1">
                        <label id="" htmlFor="" className='w-auto h-auto'>
                            <p className='w-full h-auto'>Preparation Time</p>
                        </label>
                        <input type="" id="" className='w-full h-full bg-primary bg-opacity-30 rounded px-1' placeholder='10-20 minutes'/>
                    </fieldset>
                    <submit className='w-full h-full col-span-2 py-2 flex justify-center items-center place-items-center bg-warning rounded-b-lg text-white'>Apply</submit>
                </form>

            </section>
        </section>
    )
}
