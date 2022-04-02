import React from "react";
import download1 from "../images/download1.jpg";
import download2 from "../images/download2.jpg";
import download3 from "../images/download3.jpg";
import download4 from "../images/download4.jpg";
import Contact from "./Contact";

export default function hairstyle() {
  return (
    <section id="hairstyles" className="bg-slate-100 mt-10 pb-12">
      <div className="text-center ">
        <div className="mt-5 font-Lato text-slate-600">
          <h3 className="font-Lato text-slate-600 italic text-3xl p-10">
            Choose your hairstyle
          </h3>
        </div>
        <div className=" container  text-center mx-auto flex flex-wrap justify-center">
          <div class="max-w-xs bg-white  rounded-lg border border-gray-200 shadow-md  m-5">
            <img
              class="rounded-t-md w-full object-fit h-80"
              src={download1}
              alt="cornrow"
            />

            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <Contact />
            </div>
          </div>
          <div class="max-w-xs  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
            <img
              class="rounded-t-md w-full object-fit h-80"
              src={download2}
              alt=""
            />

            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>

              <Contact />
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img
                class="rounded-t-md w-full object-fit h-80"
                src={download3}
                alt=""
              />
            </a>
            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>

              <Contact />
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md  m-5">
            <img
              class="rounded-t-md w-full object-fit h-80"
              src={download4}
              alt="cornrow"
            />

            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <Contact />
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
            <img
              class="rounded-t-md w-full object-fit h-80"
              src={download1}
              alt=""
            />

            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <Contact />
            </div>
          </div>
          <div class="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
              <img
                class="rounded-t-md w-full object-fit h-80"
                src={download1}
                alt=""
              />
            </a>
            <div class="p-5">
              <h5 className="mb-5 font-Lato text-slate-600">
                Noteworthy technology acquisitions 2021
              </h5>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
