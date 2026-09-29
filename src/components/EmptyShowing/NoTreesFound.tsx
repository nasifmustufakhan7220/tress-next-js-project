import { FaSearch } from "react-icons/fa";

const NoTreesFound = () => {
  return (
    <div className="col-span-full flex min-h-75 flex-col items-center justify-center rounded-2xl border border-[#272c37] bg-[#f8faf7] px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5df]">
        <FaSearch className="text-xl text-[#063b27]" />
      </div>

      <h2 className="text-2xl font-bold text-[#063b27]">
        No Trees Found
      </h2>

      <p className="mt-2 max-w-md text-sm text-[#696969]">
        We couldn&apos;t find any trees matching your search. Try searching
        with a different name.
      </p>
    </div>
  );
};

export default NoTreesFound;