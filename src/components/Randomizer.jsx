import { useEffect, useState } from "react";
import axios from "axios";
// import spots from "../assets/places.json";

function Randomizer() {
  const PLACES = ["Queeny's", "Thai on Main", "Viceroy", "Grub", "Krill"];
  // const [places, setPlaces] = useState("")
  const [choice, setChoice] = useState("");

  useEffect(() => {
    async function getPlaces() {
      try {
      const res = await axios.get('/public/assets/places.json')
      // let bars = res.bars
      console.log(res.data)
      } catch (error) {
        console.error(error)
      }
      // setPlaces(res)
      // console.log(places)
    }
    getPlaces()
  }, [])

  function pickRest() {
    let pickedRest = PLACES[Math.floor(Math.random() * PLACES.length)];
    setChoice(pickedRest);
    return choice;
  }

  // bg-gradient-to-r from-teal-400 to-yellow-200
  // bg-gradient-to-br from-teal-400 to-yellow-200
  // bg-gradient-to-r from-teal-200 to-teal-500
  // bg-gradient-to-br from-emerald-400 to-cyan-400

  return (
    <>
      <section className="flex flex-col items-center mx-auto my-4 p-6 w-3/5 h-min bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-90 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-3 text-center text-2xl font-semibold tracking-tight dark:text-white">
          Welcome to the Random Restaurant Generator
        </h3>
        <p className="pb-3"> Maybe the options go here (dropdown, etc.) </p>
        {/* {PLACES.map(place => (
          <span key={place} className="pb-2">{place}</span>
        ))} */}
        <button
          onClick={pickRest}
          className="font-mono font-semibold bg-gradient-to-r from-pink-400 to-rose-400 opacity-90 uppercase w-48 bg-slate-100 py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-transform-box-shadow duration-[50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]"
        >
          Pick Spot!
        </button>
        {/* <span className="pt-3 underline">I choose: </span> */}
        {/* <span className=" border-2 border-gray-700 rounded-md p-1 shadow-md">
          {choice && choice}
        </span> */}
      </section>
      <div className="flex justify-center p-4 border-2 w-1/5 mx-auto border-gray-500 rounded-md shadow-md">
        {choice && choice}
      </div>
    </>
  );
}

export default Randomizer;

/* 
juju, krill, durham_food_hall, mother_and_sons, msushi, alpaca_chicken, saint_james, chicken_bee, blue_corn, mramen, queenys, thai_on_main, grub, viceroy, enzos, pie_pushers, gocciolina, pulcinellas



*/
