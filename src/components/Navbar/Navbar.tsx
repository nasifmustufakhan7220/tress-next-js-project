"use client";
import { TreeContext } from "@/context/TreesContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const {carts, favourites} = useContext(TreeContext);
  const links = (
    <>
      <Link
        className={`${pathname === "/" ? "text-[#9cff3b] border-b-2 border-[#9cff3b] pb-1" : ""}font-medium`}
        href={`/`}
      >
        Home
      </Link>

      <Link
        className={`${pathname === "/my-cart" ? "text-[#9cff3b] border-b-2 border-[#9cff3b] pb-1" : ""}font-medium`}
        href={"/my-cart"}
      >
        Carts
      </Link>
    </>
  );
  return (
    <nav className="bg-[#063b27] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-3xl">🌿</div>

          <span className="text-2xl font-bold">Trees</span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">{links}</div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden items-center rounded-full bg-white/15 px-4 py-2 lg:flex">
            <input
              type="text"
              placeholder="Search trees..."
              className="w-36 bg-transparent text-sm text-white outline-none placeholder:text-white/60"
            />

            <FaSearch className="text-white/80" />
          </div>

          <div className="flex items-center gap-2">
            {/* Favorite */}
            <div className="group flex h-10 items-center rounded-xl border border-[#272c37] bg-[#13151c] px-3 transition-all duration-300 hover:border-[#9cff3b] hover:bg-[#1a1d26]">
              <FaHeart className="text-base text-white transition-colors duration-300 group-hover:text-[#9cff3b]" />

              <span className="mx-2 h-4 w-px bg-[#3a3f4a]" />

              <span className="text-sm font-semibold text-white">{favourites.length}</span>
            </div>

            {/* Cart */}
            <div className="group flex h-10 items-center rounded-xl border border-[#272c37] bg-[#13151c] px-3 transition-all duration-300 hover:border-[#9cff3b] hover:bg-[#1a1d26]">
              <FaCartArrowDown className="text-lg text-white transition-colors duration-300 group-hover:text-[#9cff3b]" />

              <span className="mx-2 h-4 w-px bg-[#3a3f4a]" />

              <span className="text-sm font-semibold text-white">{carts.length}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
