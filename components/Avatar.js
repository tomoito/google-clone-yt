import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-10 w-10  cursor-pointer transition  duration-500 transform hover:scale-150 rounded-full ${className}`}
      loading="lazy"
      src={url}
      alt="ProfilePic"
    />
  );
};

export default Avatar;
