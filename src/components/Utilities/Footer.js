import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-primary p-7 flex gap-4 flex-col-reverse md:flex-row justify-center md:justify-between items-center ">
        <div className="w-full grid gap-2 md:gap-5 grid-cols-3">
          <div>
            <p className="text-white text-lg ">Links</p>
            <ul>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#about">ABOUT US</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#products">PRODUCTS</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#contact">CONTACT</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="/shop">SHOP</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-lg ">Account</p>
            <ul>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#">Manage My Account</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#">My Cart</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#">My Orders</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#">Login</Link>
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                <Link to="#">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-lg ">Contact Us</p>
            <ul>
              <li className="text-[11px] md:text-[13px] text-white/80">
                Example@gmail.com
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                (+63) 954-362-2347
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                (+63) 937-263-8342
              </li>
              <li className="text-[11px] md:text-[13px] text-white/80">
                Puerto Princesa City, Palawan
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <form className="w-full md:w-[70%] mx-auto flex gap-3 flex-col items-start">
            <p className="text-white text-lg">Message Us:</p>
            <input
              className="focus:outline-none py-1 px-2 w-full"
              type="text"
              placeholder="Enter Email..."
            />
            <textarea
              className=" w-full py-1 px-2 h-20 focus:outline-none"
              placeholder="Message..."
            ></textarea>
            <button
              type="button"
              className="bg-primarydark text-white py-2 px-10"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="w-full bg-primarydark p-2 text-center text-white/50 text-[11px]">
        Design by CoderegTech - Alrights Reserved 2022
      </div>
    </>
  );
};

export default Footer;
