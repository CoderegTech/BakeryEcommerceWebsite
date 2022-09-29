import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "./Utilities/Header";
import { shoplist } from "./Shop/Shoplist";
import Navbar from "./Utilities/Navbar";
import Footer from "./Utilities/Footer";

function Main() {
  const [items, setItems] = useState(shoplist);
  return (
    <div>
      {/* Header */}
      <Header />

      <div className=" w-full h-screen bg-fixed bg-wall bg-fill bg-no-repeat  md:bg-cover bg-center md:bg-top">
        <div className="w-full md:w-1/2 px-3 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-domion md:text-9xl text-7xl text-primary">
            Bakery
          </h1>
          <p className="font-sans-serif font-extrabold md:text-4xl text-2xl text-primary">
            Fresh Daily
          </p>
          <p className="font-sans-serif text-black md:text-2xl text-xl font-bold pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            est soluta quam asperiores corporis officia ut ullam fugit
            aspernatur cum?
          </p>
          <Link
            to="/shop"
            className="bg-primary text-white text-xl text-sans-serif py-1 px-8 rounded-full inline-block mt-8 animate-bounce duration-300"
          >
            SHOP
          </Link>
        </div>
      </div>
      {/* About Section */}
      <div className=" w-full">
        <div className="bg-primary relative w-full h-full md:h-80 flex flex-col-reverse md:flex-row-reverse justify-center">
          <div className=" w-full p-3 text-white self-center">
            <h1 className="text-4xl font-domion">About</h1>
            <p className="font-sans text-lg">
              Lorem ipsum dolor sit a met consectetur adipisicing elit.
              Temporibus natus aperiam nulla perspiciatis excepturi voluptates
              ipsum dolorem! Aspernatur, saepe eos. Obcaecati praesentium
              dolorum error tenetur, Lorem ipsum dolor sit a met consectetur
              adipisicing elit. Temporibus natus
            </p>
            <button className="bg-primarydark hover:gap-10 duration-300 flex gap-5 justify-between items-center text-white text-lg text-sans-serif py-1 px-3">
              <Link to="/shop">Shop Now</Link>
              <AiOutlineArrowRight />
            </button>
          </div>

          <img
            className="w-full h-full object-cover "
            src="https://www.sait.ca/assets/images/sait/programs/pr-baker-600x400.jpg"
            alt=""
          />
        </div>
      </div>
      {/* Products Grid Section */}
      <div className="p-5">
        <h1 className="font-domion text-5xl text-center text-black py-6">
          Products
        </h1>
        <div className="w-full h-full py-10 ">
          <div className="w-full md:w-2/3 mx-auto grid gap-2 grid-cols-6 ">
            <img
              className="rounded-xl col-span-4 object-cover w-full h-full max-h-96"
              src="http://d2gk7xgygi98cy.cloudfront.net/5599-3-large.jpg"
              alt=""
            />
            <img
              className="rounded-xl col-span-2 object-cover w-full h-full max-h-96"
              src="https://cdn.momsdish.com/wp-content/uploads/2019/02/Brioche-Bread01-1200x1800.jpg"
              alt=""
            />
            <img
              className="rounded-xl col-start-3 col-end-7 w-full h-full max-h-96 object-cover"
              src="https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/ciabatta-bread-recipe-3.jpg"
              alt=""
            />
            <img
              className="rounded-xl row-start-2 row-end-3 col-span-2 w-full h-full max-h-96 object-cover"
              src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Quick-Focaccia-Bread_EXPS_HPLBZ17_35004_B06_08_5b.jpg"
              alt=""
            />
            <img
              className="rounded-xl row-start-3 row-end-4 col-span-3 w-full h-full max-h-96  object-cover"
              src="https://www.seasonsandsuppers.ca/wp-content/uploads/2018/01/multigrain-sandwich-bread-3-1170x780.jpg"
              alt=""
            />
            <img
              className="rounded-xl col-start-4 col-end-7 w-full h-full max-h-96 object-cover"
              src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/05/Pita-24.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*  Section */}
      <div className="relative bg-[url('https://meadfarmfoods.co.uk/content/images/photodune-12458557-baking-ingredients-l.jpg')] bg-center bg-cover bg-no-repeat w-full h-80 flex items-center justify-center text-center">
        <div>
          <p className="text-white text-5xl md:text-7xl font-domion">
            Made with love <br></br>
            <span className="text-amber-600 animate-pulse text-shadow-dark">
              Unique sweets
            </span>{" "}
            for gourmet
          </p>
        </div>
        <div className="absolute animate-spin-slow w-56 h-56 border border-white"></div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default Main;
