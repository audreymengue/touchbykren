import React from "react";
import Header from "../components/Header";
import Info from "./Info";
import Hairstyle from "../components/Hairstyle.js";
import Footer from "../components/Footer.js";

export default function LandingPage() {
  return (
    <div className="h-full">
      <Header />
      <Info />
      <Hairstyle />
      <Footer />
    </div>
  );
}
