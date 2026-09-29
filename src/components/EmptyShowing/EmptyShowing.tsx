import React from "react";

const EmptyShowing = () => {
  return (
    <div>
      <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-[#cdd9c8] bg-[#f8faf6] px-5 text-center">
        <div className="mb-3 text-5xl">🌱</div>

        <h4 className="text-lg font-semibold text-[#1f3a24]">
          Your cart is empty
        </h4>

        <p className="mt-1 max-w-md text-sm text-gray-500">
          You haven&apos;t added any trees yet. Explore our collection and
          choose the trees you want to grow.
        </p>

        <button className="btn mt-5 rounded-lg bg-[#1f3a24] px-6 text-white hover:bg-[#315c39]">
          Explore Trees
        </button>
      </div>
    </div>
  );
};

export default EmptyShowing;
