import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-amber-100 shadow-sm relative">
      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center gap-3 relative">
          <div className="md:hidden">
            {open ? (
              <HiX
                className="w-8 h-8 "
                onClick={() => setOpen(false)}
              />
            ) : (
              <HiMenu
                className="w-8 h-8 "
                onClick={() => setOpen(true)}
              />
            )}
          </div>

          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>

          {open && (
            <div className="absolute top-12 bg-amber-100 p-3 flex flex-col gap-2 text-sm md:hidden">
              <a href="#" className="hover:text-orange-600">Home</a>
              <a href="#" className="hover:text-orange-600">Products</a>
              <a href="#" className="hover:text-orange-600">Solution</a>
              <a href="#" className="hover:text-orange-600">Pricing</a>
              <a href="#" className="hover:text-orange-600">Contact</a>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Solution</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-4">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-25 h-10 rounded-xl text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;