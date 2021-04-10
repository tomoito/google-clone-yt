import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption";

const Header = () => {
  const router = useRouter();
  const searhInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searhInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 item-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className=" px-6 py-3 ml-10 mr-5 border border-gray-200 flex flex-grow rounded-full  shadow-lg max-w-3xl items-center ">
          <input
            ref={searhInputRef}
            type="text"
            className="flex-grow w-full  focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500  cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searhInputRef.current.value = "")}
          />
          <MicrophoneIcon className=" h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className=" h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto "
          url="https://orange-magazine.com/wp-content/uploads/2019/12/%E3%80%90%E6%B5%9C%E8%BE%BA%E7%BE%8E%E6%B3%A2%E3%81%AE%E5%AD%90%E5%BD%B9%E6%99%82%E4%BB%A3%E3%81%8C%E5%8F%AF%E6%84%9B%E3%81%84%EF%BC%81%E3%80%91%E5%87%BA%E6%BC%94%E6%98%A0%E7%94%BB%E3%82%84CM%E7%94%BB%E5%83%8F%E3%82%92%E6%98%94%E3%81%8B%E3%82%89%E7%8F%BE%E5%9C%A8%E3%81%BE%E3%81%A7%E3%81%BE%E3%81%A8%E3%82%8111.jpg"
        />
      </div>
      {/* HEADER OPTION */}
      <HeaderOption />
    </header>
  );
};

export default Header;
