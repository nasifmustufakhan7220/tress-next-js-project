import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#063b27] text-white mt-8">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9cff3b] text-[#063b27]">
                <FaLeaf className="text-xl" />
              </div>

              <span className="text-2xl font-black">Trees</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              Discover beautiful trees, learn about nature and bring more
              greenery into your life. Together, let&apos;s make our planet greener.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#9cff3b] hover:text-[#063b27]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#9cff3b] hover:text-[#063b27]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#9cff3b] hover:text-[#063b27]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#9cff3b]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/trees"
                  className="transition hover:text-[#9cff3b]"
                >
                  All Trees
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#9cff3b]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/my-cart"
                  className="transition hover:text-[#9cff3b]"
                >
                  My Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold">Categories</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <Link
                  href="/trees"
                  className="transition hover:text-[#9cff3b]"
                >
                  Fruit Trees
                </Link>
              </li>

              <li>
                <Link
                  href="/trees"
                  className="transition hover:text-[#9cff3b]"
                >
                  Flowering Trees
                </Link>
              </li>

              <li>
                <Link
                  href="/trees"
                  className="transition hover:text-[#9cff3b]"
                >
                  Medicinal Trees
                </Link>
              </li>

              <li>
                <Link
                  href="/trees"
                  className="transition hover:text-[#9cff3b]"
                >
                  Evergreen Trees
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-[#9cff3b]" />
                <p>
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#9cff3b]" />
                <p>+880 1234-567890</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-white">
                Stay connected with nature
              </p>

              <div className="flex overflow-hidden rounded-full bg-white/10 p-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
                />

                <button className="rounded-full bg-[#9cff3b] px-4 py-2 text-sm font-bold text-[#063b27] transition hover:bg-[#b5ff6b]">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Trees. All rights reserved.
            </p>

            <p className="flex items-center gap-2">
              Made with
              <FaLeaf className="text-[#9cff3b]" />
              for a greener world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;