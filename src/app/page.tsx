import Image from "next/image";
import rocketdab from "@/../public/rocketdab.png";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="mb-12 flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row "
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-4xl md:text-5xl">
            We Boldy Go{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Where No Rocket
            </span>{" "}
            Has Gone Before...
          </h2>
          <p className="mt-4 max-w-md text-center text-xl text-slate-700 dark:text-slate-400 sm:text-left sm:text-2xl">
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p className="mt-4 max-w-md text-center text-xl text-slate-700 dark:text-slate-400 sm:text-left sm:text-2xl">
            Think Acme Rockets.
          </p>
        </article>
        <Image className="w-1/2" src={rocketdab} alt="Rocket Dab" />
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
    </div>
  );
}
