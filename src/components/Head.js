import React from "react"; 
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className=" cursor-pointer flex col-span-1">
        <img
          onClick = {() => {
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
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
      </div>
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
