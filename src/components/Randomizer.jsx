import { useState } from "react";

function Randomizer() {
  const PLACES = ["Queeny's", "Thai on Main", "Viceroy", "Grub", "Krill"];

  const [choice, setChoice] = useState("");

  function pickRest() {
    let pickedRest = PLACES[Math.floor(Math.random() * PLACES.length)];
    setChoice(pickedRest);
    return choice;
  }
  // * something needs tweaking with the transition-transform duration-[...]
  // * works better with duration-[50ms] vs how it is now

  return (
    <>
      <div className="flex flex-col items-center mx-auto my-4 p-6 w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-3 text-center text-2xl font-semibold tracking-tight dark:text-white">
          Welcome to the Random Restaurant Generator
        </h3>
        <p className="pb-3"> Maybe the options go here (dropdown, etc.) </p>
        {/* {PLACES.map(place => (
          <span key={place} className="pb-2">{place}</span>
        ))} */}
        <button
          onClick={pickRest}
          className="font-mono font-semibold uppercase w-48 bg-slate-100 py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-transform duration-[50ms,box-shadow] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]"
        >
          Retro Button!
        </button>
        <div className="pt-3">I choose: {choice}</div>
      </div>
    </>
  );
}

export default Randomizer;

/* 
juju, krill, durham_food_hall, mother_and_sons, msushi, alpaca_chicken, saint_james, chicken_bee, blue_corn, mramen, queenys, thai_on_main, grub, viceroy, enzos, pie_pushers, gocciolina, pulcinellas



*/
