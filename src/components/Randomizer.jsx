import React from 'react'

function Randomizer() {
  return (
    <>
      <div className='flex flex-col max w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
       <h3 className='m-2 text-2xl font-semibold tracking-tight dark:text-white'>
        Welcome to the Random Restaurant Generator
       </h3>
       <p> Maybe the options go here (dropdown, etc.)</p>
       <button className='font-mono font-semibold uppercase w-48 bg-slate-100 py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-transform duration-[50ms,box-shadow] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'>
        Retro Button
       </button>
      </div>
    </>
  )
}

export default Randomizer






// const RESTAURANTS = ["Queeny's", "Thai on Main", "Viceroy", "Grub", "Krill"];

// function pickRest() {
//   return RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)];
// }

// console.log(pickRest());

/* 
juju, krill, durham_food_hall, mother_and_sons, msushi, alpaca_chicken, saint_james, chicken_bee, blue_corn, mramen, queenys, thai_on_main, grub, viceroy, enzos, pie_pushers, gocciolina, pulcinellas



*/