import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="bg-teal-700 text-lg text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{" "}
            <Link href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </Link>
            <br />
            Phone: <Link href="tel:+15555555555">(555) 555-5555</Link>
          </address>
          <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
            <Link href="." className="hover:opacity-90">
              Home
            </Link>
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
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2022</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  );
}
