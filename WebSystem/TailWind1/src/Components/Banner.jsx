import React from 'react'

const Banner = () => {
  return (
      <div className="w-full flex flex-col md:flex-row items-center md:py-8 px-4 pl-30">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 w-fit p-4 text-xl rounded-lg">
            <span className='text-indigo-600 font-semibold'>Start learning today</span>
          </div>
  
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            Improve your skills with online courses
          </h1>
  
          <p className="text-gray-600 text-lg md:text-xl mt-6 md:w-2/3">
            Learn programming, degisn and teamwork with simple project and clear lessons for begginers.
          </p>
  
          <div className="mt-8 flex gap-4 md:w-2/3">
            <button className=" bg-blue-600 text-white px-8 py-4 rounded-xl text-2xl">
                Get started
            </button>
            <button className=" bg-gray-200 text-white px-8 py-4 rounded-xl text-2xl">
                View Courses
            </button>
          </div>
        </div>
          <div className="sm:w-full md:w-1/2 flex justify-center mt-10 items-center">
       </div>
      </div>
    );
}

export default Banner