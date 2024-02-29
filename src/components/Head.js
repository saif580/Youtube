import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { cacheResults } from "../utils/searchslice";
import { addInitialAndSearchVideos } from "../utils/videosslice";
// import dotenv from "dotenv";
// dotenv.config();

const Head = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [searchSuggestion, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_YOUTUBE_SEARCH_API}${searchQuery}`
    );
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const fetchSearchResults = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_YOUTUBE_SEARCH_RESULT_API}${searchQuery}`
    );
    const json = await data.json();
    dispatch(addInitialAndSearchVideos(json.items));
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    fetchSearchResults();
    setShowSuggestion(false);
  };

  return (

    <div className="flex h-100 items-center justify-between bg-beige shadow-md min-w-[1012px]">









      {/*                                           SECTION 1                                                                            */}


      <div className="flex flex-row">
        <button
          onClick={toggleMenuHandler}
          className="items-center px-2  text-black hover:text-gray-700 focus:outline-none focus:shadow-outline-blue"
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
          className="w-44 min-w-40"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-log"
        />
      </div>









      {/*                                              SECTION 2                                                                                             */}






      <div className="flex flex-row flex-shrink-0 w-[600px]">
        <form onSubmit={sumbitHandler} className="flex">
          <input
            placeholder="Search"
            className="border rounded-l-full placeholder-opacity-50  h-8 w-[70%] pl-[2%]"
            type="text"
            value={searchQuery}
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border rounded-r-full bg-gray-100 px-4 h-8 relative bottom-0.4">
            🔍 Search
          </button>
        </form>
        {showSuggestion && (
          <div className="absolute w-[70%] mt-1 shadow-lg">
            <ul className="absolute top-10 bg-white px-5 shadow-lg rounded-lg ">
              {searchSuggestion.map((s) => (
                <li key={s} className="p-1 m-1 hover:bg-gray-100 rounded-lg">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
















      {/*                                                          LAST SECTION                                          */}






      <div className="flex flex-row flex-shrink-0">
        <img
          className="rounded-full h-9 mr-14"
          src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;