import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-indigo-200 shadow-sm relative ">
      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center gap-3 relative">
        <h1 className='md:ml-50 font-bold text-2xl text-indigo-700 '>EduSmart</h1>
        <div className="md:hidden flex flex-row-reverse">
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
          {open && (
            <div className="absolute top-10 bg-indigo-200 p-4 flex flex-col gap-4 text-sm md:hidden pr-100">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#" className="hover:text-indigo-600">Course</a>
              <a href="#" className="hover:text-indigo-600">Teachers</a>
              <a href="#" className="hover:text-indigo-600">Pricing</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Course</a>
          <a href="#">Teachers</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="hidden mr-50 md:flex gap-4 ">
          <button className="bg-white w-20 h-10 rounded-xl">Sign Up</button>
          <button className="bg-indigo-700 w-20 h-10 rounded-xl text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;