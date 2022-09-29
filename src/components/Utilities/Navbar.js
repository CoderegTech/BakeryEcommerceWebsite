import React, { useState } from "react";
import SideNav from "./SideNav";

function Navbar() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <div className=" relative md:hidden block z-50">
        <div
          onClick={() => setActive(!active)}
          className="bg-primary w-16 h-11 fixed right-0 top-2 p-3 rounded-tl-xl rounded-bl-xl"
        >
          <div className={`toggle-menu ${active ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <SideNav active={active} />
    </>
  );
}

export default Navbar;
