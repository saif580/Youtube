import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  if (!toggleMenu) return null;
  return (
    <>
      {toggleMenu && (
        <div className="w-48  border p-8">
          <ul>
            <Link to={"/"}><li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>YouTube Music</li>
          </ul>
          <h1 className="font-bold pt-5">You</h1>
          <ul>
            <li>Your channel</li>
            <li>History</li>
            <li>Your videos</li>
            <li>Watch Later</li>
            <li>Downloads</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
