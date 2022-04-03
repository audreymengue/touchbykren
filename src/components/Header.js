/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-100 sticky top-0 top-0">
      <div className="container flex mx-auto flex-wrap p-6 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-blue mb4 md:mb-0">
          <h1 className="ml-3 text-xl italic p-3">TBK!</h1>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-10 md:border-1 md:border-gray-700 flex flex-wrap itens-center justify-center">
          <a href="#" className="mr-5 font-Lato text-slate-600 hover:bg-slate-200 rounded text-lg p-2">
            Home
          </a>
          <a href="#hairstyles" className="mr-5 font-Lato text-slate-600 hover:bg-slate-200 rounded text-lg p-2">
            Hair styles
          </a>
          <a href="#footer" className="mr-5 font-Lato text-slate-600 hover:bg-slate-200 rounded text-lg p-2 active:bg-slate-200">
            Social media
          </a>
        </nav>

        <a
          href="tel:0269138654"
          className="p-2 bg-pink-500 text-slate-100 m-3 rounded font-Lato"
        >
          Book an appointment
        </a>
      </div>
    </header>
  );
}
