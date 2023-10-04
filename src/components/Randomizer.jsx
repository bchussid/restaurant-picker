import { useEffect, useState } from "react";
import axios from "axios";
// import spots from "../assets/places.json";

function Randomizer() {
  const PLACES = ["Queeny's", "Thai on Main", "Viceroy", "Grub", "Krill"];
  // const [places, setPlaces] = useState("")
  const [choice, setChoice] = useState("");
  // categories
  const [options, setOptions] = useState("")


  useEffect(() => {
    async function getPlaces() {
      try {
        const res = await axios.get("/public/assets/places.json");
        setOptions(Object.keys(res.data))
        return options
      } catch (error) {
        console.error(error);
      }
    }
    getPlaces();
  }, []);
  

  function pickRest() {
    let pickedRest = PLACES[Math.floor(Math.random() * PLACES.length)];
    setChoice(pickedRest);
    return choice;
  }

  return (
    <>
      <section className="flex flex-col items-center mx-auto my-4 p-6 w-3/5 h-min bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-90 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-3 text-center text-2xl font-semibold tracking-tight dark:text-white">
          Welcome to the Random Restaurant Generator
        </h3>
        <p className="pb-3"> Maybe the options go here (dropdown, etc.) </p>
        <label htmlFor="choices"></label>
        <select id="choices" name="choices"
       
        >

        {options && options.map((spots) => (
          <option key={spots} value={spots}>
            {spots}
          </option>
        ))}
        </select>

        <button
          onClick={pickRest}
          className="font-mono font-semibold bg-gradient-to-r from-pink-400 to-rose-400 opacity-90 uppercase w-48 bg-slate-100 mt-3 py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-transform-box-shadow duration-[50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]"
        >
          Pick Spot!
        </button>
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
