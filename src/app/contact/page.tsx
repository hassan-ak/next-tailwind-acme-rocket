import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="mb-12 items-center justify-center p-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Contact Us
        </h2>
        <form
          action=""
          className="items-left mx-auto my-12 flex max-w-4xl flex-col gap-4 text-xl sm:text-2xl"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-xl text-black dark:border-none sm:text-2xl"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-xl text-black dark:border-none sm:text-2xl"
          ></textarea>
          <button className="mx-auto w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
            Submit
          </button>
        </form>
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      </section>
    </div>
  );
}
