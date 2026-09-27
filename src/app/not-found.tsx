import Link from "next/link";
import { FaArrowLeft, FaTree } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6faf7] px-4">
      <div className="mx-auto w-full max-w-2xl text-center">

        {/* Tree Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#e2f3e8] text-[#063b27]">
          <FaTree className="text-5xl" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-8xl font-black tracking-tight text-[#063b27] sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">
          Oops! This tree path doesn&apos;t exist.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#696969] sm:text-base">
          Looks like you&apos;ve wandered into an empty part of the forest.
          The page you&apos;re looking for may have been removed or doesn&apos;t exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#063b27] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#085638]"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;