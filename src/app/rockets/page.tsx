import React from "react";
import rocketman from "@/../public/rocketman.png";
import rocketride from "@/../public/rocketride.png";
import rocketlaunch from "@/../public/rocketlaunch.png";
import Image from "next/image";

export default function Rockets() {
  return (
    <div>
      <section id="rockets" className="mb-12 items-center justify-center  p-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Our Rockets
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image src={rocketman} alt="Explorer" className="mb-6 w-1/2" />
            <h3 className="text-center text-2xl text-slate-900 dark:text-white sm:text-3xl">
              Explorer
            </h3>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden sm:text-3xl">
              $
            </p>
            <p className="mt-2 hidden text-center text-lg text-slate-500 dark:text-slate-400 sm:block sm:text-xl">
              Affordable Exploration
            </p>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image src={rocketride} alt="Adventurer" className="mb-6 w-1/2" />
            <h3 className="text-center text-2xl text-slate-900 dark:text-white sm:text-3xl">
              Adventurer
            </h3>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden sm:text-3xl">
              $$
            </p>
            <p className="mt-2 hidden text-center text-lg text-slate-500 dark:text-slate-400 sm:block sm:text-xl">
              Best Selling Rocket!
            </p>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <Image src={rocketlaunch} alt="Infinity" className="mb-6 w-1/2" />
            <h3 className="text-center text-2xl text-slate-900 dark:text-white sm:text-3xl">
              Infinity
            </h3>
            <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden sm:text-3xl">
              $$$
            </p>
            <p className="mt-2 hidden text-center text-lg text-slate-500 dark:text-slate-400 sm:block sm:text-xl">
              Luxury Starship
            </p>
          </li>
        </ul>
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </div>
  );
}
