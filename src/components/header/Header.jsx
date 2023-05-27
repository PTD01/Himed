import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState("top-[-500px] opacity-0 z-[-1]");
  const [changeIncon, setChangeIcon] = useState(true);
  return (
    <div className="p-0 px-0 md:px-4 fixed w-full bg-white  md:flex md:items-center md:justify-between ">
      <div className="flex justify-between items-center">
        <span className="font-bold text-2xl font-[Poppins] cursor-pointer  ">
          <Image
            src={`https://res.cloudinary.com/djkf4l52i/image/upload/v1669648173/WhatsApp_Image_2022-10-30_at_07.24.59-removebg-preview_gqksmk.png`}
            width={120}
            className="inline"
            height={10}
            style={{
              width: 120,
              height: "auto",
            }}
            priority
            alt="logo"
          />
        </span>
        <span
          className="text-3xl cursor-pointer md:hidden block mx-2"
          onClick={() => {
            setChangeIcon(!changeIncon);
            if (changeIncon) {
              setShowMenu("top-[50px] opacity-[2] z-100 ");
            } else if (!changeIncon) {
              setShowMenu(" top-[-500px] opacity-0   ");
            }
          }}
        >
          {changeIncon ? (
            <BiMenu className="text-gray-600" size="1.2em" />
          ) : (
            <MdClose className="text-gray-600" size="1.3em" />
          )}
        </span>
      </div>
      <ul
        className={`z-[100]  md:flex md:items-start md:text-center pt-2 md:z-auto md:static absolute bg-white text-gray-600 w-full left-0 md:w-auto md:py-0  md:pl-0 md:opacity-100     transition-all ease-in duration-500 ${showMenu}   border-gray-200 font-bold md:m-0 md:pt-0`}
      >
        <li className="mx-4 my-6 md:my-0  ">
          <Link
            href={`#features`}
            className="text-[1rem] hover:text-gray-800 duration-500"
          >
            {" "}
            Features
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href={`#whyUs`}
            className="text-[1rem] hover:text-gray-800 duration-500"
          >
            {" "}
            Why us?
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href={`#`}
            className="text-[1rem] hover:text-gray-800 duration-500"
          >
            {" "}
            Success Stories
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href={`#`}
            className="text-[1rem] hover:text-gray-800 duration-500"
          >
            {" "}
            Gallery
          </a>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-[1rem] hover:text-gray-800 duration-500"
            href="#program"
          >
            {" "}
            Contact Us
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-[1rem] hover:text-gray-800 duration-500"
            href={`#`}
          >
            {" "}
            Diaspora
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
