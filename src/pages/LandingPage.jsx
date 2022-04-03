import React from "react";
import Header from "../components/Header";
import Info from "./Info";
import Hairstyle from "../components/Hairstyle.js";
import Footer from "../components/Footer.js";
import Map from "../components/Map.js";

export default function LandingPage() {
  return (
    <div >
      <Header />
      <Info />
      <Hairstyle />
      <Map/>
      <Footer />
    </div>
  );
}
