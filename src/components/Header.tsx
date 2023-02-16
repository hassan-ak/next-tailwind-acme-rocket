"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [openMbl, setopenMbl] = useState(false);
  const showClass =
    "justify-content-center top-68 animate-open-menu absolute flex w-full origin-top flex-col  bg-black text-3xl";
  const hideClass =
    "justify-content-center top-68 animate-close-menu absolute hidden w-full origin-bottom flex-col  bg-black text-3xl";
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-xl font-medium sm:text-2xl md:text-3xl">
          <Link href=".">🚀 Acme Rockets</Link>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="cursor-pointer sm:hidden "
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            {openMbl ? (
              <span className=" text-2xl sm:text-2xl">&times;</span>
            ) : (
              <span className="text-2xl sm:text-2xl">&#9776;</span>
            )}
          </button>
          <nav
            className="hidden space-x-8 text-lg sm:block md:text-xl"
            aria-label="main"
          >
            <Link href="./rockets" className="hover:opacity-90">
              Our Rockets
            </Link>
            <Link href="./testimonials" className="hover:opacity-90">
              Testimonials
            </Link>
            <Link href="./contact" className="hover:opacity-90">
              Contact Us
            </Link>
          </nav>
        </div>
      </section>
      <section id="mobile-menu" className={openMbl ? showClass : hideClass}>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
          onClick={() => {
            setopenMbl(!openMbl);
          }}
        >
          <Link
            href="."
            className="w-full py-6 text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Home
          </Link>
          <Link
            href="./rockets"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Our Rockets
          </Link>
          <Link
            href="./testimonials"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Testimonials
          </Link>
          <Link
            href="./contact"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            Contact Us
          </Link>
        </nav>
      </section>
    </header>
  );
}
