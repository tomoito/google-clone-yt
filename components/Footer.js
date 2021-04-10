import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className=" grid w-full divide-y-[1px] divide-red-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-2">
        <p>This is Footer</p>
      </div>
      <div className="px-8 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-4 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          {/* <div className="flex justify-center items-center bg-red-500"> */}
          <GlobeIcon className="h-5 mr-1  text-green-700" />
          Carbon nature icon 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Adverting</p>
          <p>Service</p>
          <p>How work Footer</p>
        </div>
        <div className="flex  justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
      {/* <GlobeIcon /> */}
    </footer>
  );
};

export default Footer;
