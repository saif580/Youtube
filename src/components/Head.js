import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-0 shadow-md">
      <div className="flex col-span-3">
        <button
          onClick={toggleMenuHandler}
          className="flex items-center px-2  text-black hover:text-gray-700 focus:outline-none focus:shadow-outline-blue"
          aria-label="menu"
          aria-expanded="false"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <img
          className="flex w-44"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-log"
        />
      </div>
      <div className="flex m-6 col-span-8">
        <div className=""></div>
        <input
          placeholder="Search"
          className="border rounded-l-full w-1/2 placeholder-opacity-50 pl-[2%]"
          type="text"
        />
        <button className=" border rounded-r-full bg-gray-100 px-5">
          🔍 Search
        </button>
      </div>
      <div className="flex col-span-1 w-10 mt-6 mb-6 mx-auto ">
        <img
          className="rounded-full "
          src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
