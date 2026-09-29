"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
    const pathname = usePathname();
    const links = 
        <>
            <Link className={`${pathname === '/' ? "text-[#9cff3b] border-b-2 border-[#9cff3b] pb-1" : ""}font-medium`} href={`/`}>Home</Link>

            <Link className={`${pathname === '/my-cart' ? "text-[#9cff3b] border-b-2 border-[#9cff3b] pb-1" : ""}font-medium`} href={'/my-cart'}>Carts</Link>
        </>
  return (
    <nav className="bg-[#063b27] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-3xl">🌿</div>

          <span className="text-2xl font-bold">
            Trees
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links}
        </div>

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

          {/* Favorite */}
          <div className="text-xl transition hover:text-[#9cff3b]">
            <FaHeart />
          </div>

          {/* User */}
          <div className="text-2xl transition hover:text-[#9cff3b]">
            <FaCartArrowDown/>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;