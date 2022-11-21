import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

import DropdownMenu from "../Utilities/DropdownMenu";
import Footer from "../Utilities/Footer";
import Navbar from "../Utilities/Navbar";
import Pagination from "../Utilities/Pagination";
import { shoplist } from "./Shoplist";

function Shop() {
  const [items, setItems] = useState(shoplist);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <header className="w-full flex justify-between items-center fixed top-0 z-50 bg-primary left-0 px-10 py-2">
        <div className=" w-full flex justify-between items-center gap-3 pr-7">
          <h1 className="flex-1 font-sans-serif text-3xl text-white">
            <Link to="/">Home</Link>
          </h1>
          <form className=" pl-5 flex gap-2 items-center">
            <input
              type="text"
              className="hidden md:block rounded-full w-[300px] px-3 py-1 focus:outline-none"
              placeholder="Search..."
            />
            <button type="button" className="bg-white p-2 rounded-full">
              <BsSearch />
            </button>
          </form>
          <div className="relative">
            <GrCart className="text-2xl invert" />
            <span className="absolute -right-1 -top-1 bg-red-500 text-white text-sm px-1 rounded-full">
              {cartQuantity}
            </span>
          </div>
        </div>

        <ul className="hidden md:flex gap-8 items-center justify-center ">
          <li
            onClick={() => setDropDown(!dropDown)}
            className="navlist flex gap-2 "
          >
            ACCOUNT
            <span>{!dropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
          </li>
          {dropDown ? <DropdownMenu /> : null}
        </ul>
      </header>
      <Navbar />

      <div className="bg-shopwall w-full h-full relative">
        <ul className="max-w-6xl mx-auto w-full flex flex-wrap justify-center gap-4 pt-16">
          {items.map(({ id, imgUrl, breadName, description, price }) => (
            <li
              key={id}
              className=" flex flex-col max-w-[280px] max-h-[300px] h-full shadow-xl shadow-[rgba(0,0,0,0.5)] rounded-xl overflow-hidden "
            >
              <div className="w-full max-h-40 h-full">
                <img
                  className="w-full bg-white h-full object-cover hover:scale-110 duration-500"
                  src={imgUrl}
                />
              </div>

              <div className="relative w-full max-h-[150px] bg-white flex-1 text-black p-3 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">{breadName}</h3>
                <p className="text-base ">
                  {description.substring(0, 50)}
                  <span
                    onClick={() => setActive(!active)}
                    className="text-blue-400 cursor-pointer"
                  >
                    {" "}
                    see more...
                  </span>
                </p>
                <p className="text-xl">${price}</p>
                <button
                  onClick={() => setCartQuantity(cartQuantity + 1)}
                  className="absolute right-3 bottom-3 cursor-pointer hover:scale-125 duration-300"
                >
                  <GrCart className="text-xl " />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Pagination />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
