import React from "react";
import HeaderOp from "./HeaderOp";

import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOption = () => {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly 
    text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-2"
    >
      {/* LEFT */}
      <div className="flex space-x-6">
        <HeaderOp Icon={SearchIcon} title="All" selected />
        <HeaderOp Icon={PhotographIcon} title="Image" />
        <HeaderOp Icon={PlayIcon} title="Videos" />
        <HeaderOp Icon={NewspaperIcon} title="News" />
        <HeaderOp Icon={MapIcon} title="Maps" />
        <HeaderOp Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* RIGHT */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOption;
