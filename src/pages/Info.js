import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Contact from "../components/Contact";

export default function Info() {
  return (
    <section className=" mx-auto pb-4">
      <div className="text-center">
        <div className="h-full p-10">
          <h1 className="md:text-8xl text-6xl font-Hurricane text-pink-600 ">
            Welcome to Touch By Kren
          </h1>
        </div>
        <div>
          <h3 className="font-Lato md:text-4xl text-3xl text-slate-600">
            Your hairstyle just a phone call away.
          </h3>
          <div className="m-5 italic text-2xl">
            <p className="font-Lato text-slate-600 italic text-2xl">
              We get you all glamed up
            </p>
            <p className="font-Lato text-slate-600 italic text-2xl">
              For your various occasions
            </p>
            <p className="font-Lato text-slate-600 italic text-2xl">
              In the comfort of your home.
            </p>
          </div>
        </div>

        <div className="m-5">
          <p className="font-Lato text-slate-600 italic text-2xl">
            We specialize in various hairstyles including:
          </p>
          <ArrowDownwardIcon
            className="text-pink-600"
            style={{ fontSize: 70 }}
          />
        </div>

        <div className="text-center">
          <ul className=" mb-8 flex justify-center mx-auto flex-wrap flex-col md:flex-row ">
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Box Braid
            </li>
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Box Braid
            </li>
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Corn rows
            </li>
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Notless braid
            </li>
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Corn rows
            </li>
            <li className="cursor-pointer hover:border-b-4 border-pink-600 font-Hurricane text-slate-600 md:text-4xl text-3xl mr-4">
              * Notless braid
            </li>
          </ul>
        </div>
        <Contact />
      </div>
    </section>
  );
}
