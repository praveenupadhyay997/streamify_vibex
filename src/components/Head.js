import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { json } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSugggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache =useSelector(store => store.search)

  useEffect(() => {
    // API Call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSugggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSugggestions(jsonData[1]);
    if(jsonData[1].length > 0) {
      setShowSuggestions(true);
    }else{
      setShowSuggestions(false);
    }
    dispatch(cacheResults({
      [searchQuery]: jsonData[1],
    }))
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="cursor-pointer flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8"
          alt="Hamburger_Menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-8 mx-2"
          alt="Streamify_Logo"
          src="https://www.streamify.io/assets/images/streamify-logotype.svg"
        />
      </div>
      <div className="relative col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      {showSuggestions && (
        <div className="absolute z-10 top-[4rem] left-[24rem] bg-white py-2 px-2 w-[41.5rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion} className="py-2 shadow-sm hover:bg-gray-100">
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <img
          className="h-8 col-span-1"
          alt="User_Icon"
          src="https://www.svgrepo.com/show/350417/user-circle.svg"
        />
      </div>
    </div>
  );
};

export default Head;
