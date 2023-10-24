import { useState, useEffect } from "react";
import axios from "axios";
import usePlaceList from "../hooks/usePlaceList";
import CategoryList from "./CategoryList";

function Randomizer() {
  const [categories, setCategories] = useState("");
  const [chosenCat, setChosenCat] = useState("Bars");
  // chosen restaurant generated
  const [choice, setChoice] = useState("I choose...");
  // options by category using custom hook
  const [places] = usePlaceList(chosenCat);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await axios.get("/public/assets/places.json");
        setCategories(Object.keys(res.data));
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
  }, []);

  function pickRest() {
    let pickedRest = places[Math.floor(Math.random() * places.length)];
    setChoice(pickedRest);
  }

  // *debuggins ---------------------
  // console.log(options);
  // console.log(chosenCat);
  // console.log(categories)
  // * -------------------------------

  // TODO - in progress
  // not needed now?: extract button into it's own component? - not sure why now
  // nice-to-have: reset choice box after setting new category
  // put choice box in main section - fixes opacity issue of dropdown
    // make section nicer to look at - full(ish) page? background?

  return (
    <>
      <section className="flex flex-col items-center mx-auto my-4 p-6 w-3/5 h-max bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-90 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className=" mb-3 text-center text-2xl font-semibold tracking-tight dark:text-white">
          Welcome to the Random Restaurant Generator
        </h3>
        <span htmlFor="choices" className="pb-3 text-center">
          Please choose from the categories below:
        </span>
        <CategoryList
          categories={categories}
          chosenCat={chosenCat}
          setChosenCat={setChosenCat}
        />
        <button
          onClick={pickRest}
          className="font-mono font-semibold bg-gradient-to-r from-pink-400 to-rose-400 opacity-90 uppercase w-48 bg-slate-100 mt-3 py-3 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-transform-box-shadow duration-[50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]"
        >
          Pick Spot!
        </button>
      </section>
      {/* Choice box */}
      <div className="flex justify-center p-4 border-2 md:w-1/4 w-3/5 mx-auto border-gray-500 rounded-md shadow-md">
        {choice ? choice : "I choose..."}
      </div>
    </>
  );
}

export default Randomizer;

/* 
juju, krill, durham_food_hall, mother_and_sons, msushi, alpaca_chicken, saint_james, chicken_bee, blue_corn, mramen, queenys, thai_on_main, grub, viceroy, enzos, pie_pushers, gocciolina, pulcinellas

*/
