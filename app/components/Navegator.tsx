"use client";

import Image from "next/image";

const Navegator = () => {
  return (
    <header className="absolute bottom-1 right-0 left-0 container mx-auto bg-gray-900 text-gray-200 p-5 border-4 rounded-4xl w-fit">
      <nav className="flex justify-between">
        <ul className="flex gap-10">
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
            <Image
              src="/Navegator/home.svg"
              alt="Home"
              width={24}
              height={24}
            />
            <a href="/">Home</a>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
            <Image
              src="/Navegator/user.svg"
              alt="User"
              width={24}
              height={24}
            />
            <a href="/about">About</a>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
            <Image
              src="/Navegator/mail.svg"
              alt="Contact"
              width={24}
              height={24}
            />
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegator