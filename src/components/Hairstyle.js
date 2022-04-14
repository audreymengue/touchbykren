import React from "react";
import notless from "../images/notless.jpg";
import boxbraid from "../images/boxbraid.jpg";
import fauxlocks from "../images/fauxlocks.jpg";
import cornrows from "../images/cornrows.jpg";

export default function hairstyle() {
  return (
    <section id="hairstyles" className="bg-slate-100 mt-10 pb-12">
      <div className="text-center">
        <div className="mt-5 font-Lato text-slate-600">
          <h3 className="font-Lato text-slate-600 italic text-3xl p-10">
            Choose your hairstyle
          </h3>
        </div>
        <div className=" container  text-center mx-auto flex flex-wrap justify-center">
          <div class="max-w-xs bg-white  rounded-lg border border-gray-200 shadow-md  m-5">
            <img
              class="rounded-t-md object-fill h-80 w-96"
              src={notless}
              alt="cornrow"
            />

            <div class="p-5">
              <span className="font-Lato text-slate-100 bg-pink-500 rounded p-3">
              Hairstyle: Knotless Braids
              </span>
              <div>
                <div className="space-x-14 mt-4">
                  <span className="font-Lato text-slate-600">Micro</span>
                  <span  className="font-Lato text-slate-600">GHS240</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Medium</span>
                  <span  className="font-Lato text-slate-600">GHS200</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Jumbo</span>
                  <span  className="font-Lato text-slate-600">GHS180</span>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md  m-5">
            <img
              class="rounded-t-md object-fill h-80 w-96"
              src={boxbraid}
              alt=""
            />

            <div class="p-5">

              <span className="font-Lato text-slate-100 bg-pink-500 rounded p-3">
               Hairstyle: Box Braids
              </span>
              <div>
                <div className="space-x-14 mt-4">
                  <span className="font-Lato text-slate-600">Waist length</span>
                  <span  className="font-Lato text-slate-600">GHS180</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Bra length</span>
                  <span  className="font-Lato text-slate-600">GHS150</span>
                </div>
               
              </div>
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md  m-5">
            
              <img
                class="rounded-t-md object-fill h-80 w-96"
                src={fauxlocks}
                alt=""
              />
           
            <div class="p-5">
            <span className="font-Lato text-slate-100 bg-pink-500 rounded p-3">
             Hairstyle: Faux Locks
              </span>
              <div>
                <div className="space-x-14 mt-4">
                  <span className="font-Lato text-slate-600">Bra length</span>
                  <span  className="font-Lato text-slate-600">GHS180</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Waist length</span>
                  <span  className="font-Lato text-slate-600">GHS230</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">tailbone-length</span>
                  <span  className="font-Lato text-slate-600">GHS270</span>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md  m-5">
            <img
              class="rounded-t-md object-fill h-80 w-96"
              src={cornrows}
              alt="cornrow"
            />

            <div class="p-5 ">
            <span className="font-Lato text-slate-100 bg-pink-500 rounded p-3">
             Hairstyle: Cornrows
              </span>
              <div>
                <div className="space-x-14 mt-4">
                  <span className="font-Lato text-slate-600">Micro</span>
                  <span  className="font-Lato text-slate-600">GHS170</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Medium</span>
                  <span  className="font-Lato text-slate-600">GHS100</span>
                </div>
                <div className="space-x-14 mt-4">
                  <span  className="font-Lato text-slate-600">Jumbo</span>
                  <span  className="font-Lato text-slate-600">GHS50</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
