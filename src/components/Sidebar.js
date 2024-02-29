import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  if (!toggleMenu) return null;
  return (
    <>
      {toggleMenu && (
        <div className="border p-8 w-[200px] ">
          <ul>
            <Link to={"/"}><li className="h-[30px] bg-gray-200 rounded-md pl-3">🏠 Home</li></Link>
            <li className="h-[30px] rounded-md pl-3">🩳 Shorts</li>
            <li className="h-[30px] rounded-md pl-3">🎞️ Subscription</li>
            <li className="h-[30px] w-[200px] rounded-md pl-3">🎷 YouTube Music</li>
          </ul>
          <h1 className="font-bold mt-5 h-[30px]">You</h1>
          <ul>
            <li className="h-[30px] rounded-md pl-3">©🙂 Your channel</li>
            <li className="h-[30px] rounded-md pl-3">👴 History</li>
            <li className="h-[30px] rounded-md pl-3">😎 Your videos</li>
            <li className="h-[30px] rounded-md pl-3">🫡 Watch Later</li>
            <li className="h-[30px] rounded-md pl-3">😇 Downloads</li>
          </ul>
          <h1 className="font-bold mt-5 h-[30px]">Watch Later</h1>
          <ul>
            <li className="h-[30px] rounded-md pl-3">Music</li>
            <li className="h-[30px] rounded-md pl-3">Sports</li>
            <li className="h-[30px] rounded-md pl-3">Gaming</li>
            <li className="h-[30px] rounded-md pl-3">Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;









// rounded cursor-pointer hover:bg-gray-300