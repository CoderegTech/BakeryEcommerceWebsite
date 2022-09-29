import React from "react";

function DropdownMenu() {
  return (
    <>
      <ul className="absolute top-12 right-1 flex flex-col gap-2 bg-primary text-white w-48 border border-white rounded-lg overflow-hidden">
        <li className="cursor-pointer hover:bg-primarydark py-1 px-3">
          Manage My Account
        </li>
        <li className="cursor-pointer hover:bg-primarydark py-1 px-3">
          My Cart
        </li>
        <li className="cursor-pointer hover:bg-primarydark py-1 px-3">
          My Orders
        </li>
        <li className="cursor-pointer hover:bg-primarydark py-1 px-3">Login</li>
        <li className="cursor-pointer hover:bg-primarydark py-1 px-3">
          Sign Up
        </li>
      </ul>
    </>
  );
}

export default DropdownMenu;
