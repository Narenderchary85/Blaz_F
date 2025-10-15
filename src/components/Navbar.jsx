import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white px-6 py-4 flex items-center justify-between bg-transparent">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="azpay logo"
          className="h-10 w-auto"
        />
       <span className="bg-gradient-to-r from-[#FE672C] to-[#2989FA] bg-clip-text text-transparent font-bold text-[39px]">lazpay</span>
      </div>

      <div className="flex items-center space-x-6  px-6 py-2 rounded-full border border-[#1e3a8a]">
        <a href="#" className="hover:text-[#00aaff] transition">Home</a>
        <a href="#" className="hover:text-[#00aaff] transition">About</a>
        <a href="#" className="hover:text-[#00aaff] transition">EntryPass</a>
        <a href="#" className="hover:text-[#00aaff] transition">Utility Key</a>
        <a href="#" className="hover:text-[#00aaff] transition">Blog</a>
        <a href="#" className="hover:text-[#00aaff] transition">Whitepaper</a>
        <a href="#" className="hover:text-[#00aaff] transition">Defi</a>
        <a href="#" className="hover:text-[#00aaff] transition">Join Presale</a>
      </div>

      <button className="bg-transparent border border-white hover:bg-white hover:text-black text-sm font-semibold rounded-full px-6 py-2 transition">
        BUY NOW
      </button>
    </nav>
  );
};

export default Navbar;
