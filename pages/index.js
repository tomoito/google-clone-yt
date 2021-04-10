import Head from "next/head";
import Avatar from "../components/Avatar";
// import styles from '../styles/Home.module.css'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Head>
        <title>Google clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <header className="flex p-5 justify-between w-full items-center text-sm text-gray-700 ">
        {/* LEFT HEADER */}
        <div className="flex space-x-3 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* RIGHT HEADER */}
        <div className="flex space-x-4  items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <MicrophoneIcon className="h-10 w-10 p-2 text-blue-500 rounded-full hover:bg-gray-100 cursor-pointer" />
          <ViewGridIcon className="h-10 w-10 p-2 text-blue-500  rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://i.pinimg.com/236x/4f/27/2a/4f272aa3cc52ef963c5c486031ce2be3.jpg" />
        </div>
      </header>
      {/* END HEADER */}
      {/* BODY */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg items-center 
        max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none  flex-grow "
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div
          className="flex flex-col w-1/2  space-y-2  justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      {/* END BODY */}
      {/* FOOTER */}
      <Footer />
      {/* FEND OOTER */}
    </div>
  );
}
