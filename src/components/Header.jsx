import React from 'react'
import logo from "../assets/calendar.png";
import { FaPlus } from "react-icons/fa";
const Header = ({modalControl}) => {
    const date = new Date();
  const options = { weekday: "long", day: "numeric", month: "short" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return (
         <div className="header flex items-center justify-between px-4">
        <div className=" flex items-center">
          <img src={logo} alt="logo-img" className=" h-8 w-8" />
          <div>
            <p className=" font-bold text-2xl">Today's Task</p>
            <p className=" font-bold text-sm">{formattedDate}</p>
          </div>
        </div>
        <div>
          <button className=" bg-green-500 cursor-pointer flex items-center gap-2 rounded-xl p-2 font-bold text-white" onClick={modalControl}>
            Add task
            <FaPlus />
          </button>
        </div>
      </div>
  )
}

export default Header