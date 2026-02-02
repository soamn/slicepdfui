import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-6xl z-50
        rounded-xl bg-white/10 backdrop-blur-md
        border border-white/20"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <div className=" flex justify-center items-center gap-3 relative">
          <img src="/sleepy-en.png" className="w-8" alt="" />
          <p className="text-purple-400 font-semibold text-lg">SlicePDF</p>
          <span className="inline text-[8px] -right-9 font-normal absolute -bottom-1">
            By SlicedAppleStudio
          </span>
        </div>
        <ul className=" flex gap-6 text-sm ">
          <li className="cursor-pointer ">
            <a href="/privacy-policy">Privacy</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
