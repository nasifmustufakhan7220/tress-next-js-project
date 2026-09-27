"use client";

import { FaArrowRotateRight, FaTriangleExclamation } from "react-icons/fa6";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ reset,error }: ErrorProps) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6faf7] px-4">
      <div className="mx-auto w-full max-w-2xl text-center">

        {/* Error Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#fff1df] text-[#d97706]">
          <FaTriangleExclamation className="text-4xl" />
        </div>

        {/* Error Code */}
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#696969]">
          {error.digest}
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-4xl font-black text-[#063b27] sm:text-5xl">
          The forest needs a moment
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#696969] sm:text-base">
          We couldn&apos;t load this page right now. Something unexpected
          happened while preparing your tree experience.
        </p>

        {/* Try Again Button */}
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#063b27] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#085638]"
        >
          <FaArrowRotateRight />
          Try Again
        </button>

      </div>
    </main>
  );
};

export default ErrorPage;