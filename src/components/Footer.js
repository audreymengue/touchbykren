import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <footer id="footer" className=" ">
      <div className="text-center ">
        <h1 className="font-Lato text-slate-600 italic text-3xl p-10">
          Follow us on social media and stay updated
        </h1>
      </div>

      <div className=" text-center pb-10 space-x-8">
        <a href="" className="text-pink-600">
          <WhatsAppIcon style={{ fontSize: 70, margin: 10 }} />
        </a>
        <a href="" className="text-pink-600">
          <FacebookIcon style={{ fontSize: 70, margin: 10 }} />
        </a>
        <a href="" className="text-pink-600">
          <InstagramIcon style={{ fontSize: 70, margin: 10 }} />
        </a>
      </div>
    </footer>
  );
}
