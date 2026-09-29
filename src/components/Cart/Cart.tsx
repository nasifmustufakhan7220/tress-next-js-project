import { ITreeType } from "@/types/TreeType";
import Image from "next/image";
import React from "react";

const Cart = ({cart}:{cart:ITreeType}) => {
  return (
    <div className="mt-6 rounded-2xl border border-[#dce5d7] bg-[#f8faf6] p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Tree Image */}
        <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
          <Image
            src={cart.image}
            width={200}
            height={200}
            alt="Mango Tree"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Tree Information */}
        <div className="flex-1">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#6b8a62]">
                {cart.category}
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#1f3a24]">
                {cart.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {cart.description}
              </p>
            </div>

            {/* Price */}
            <div className="sm:text-right">
              <p className="text-xs text-gray-500">Price</p>

              <p className="text-lg font-bold text-[#1f3a24]">৳ {cart.price}</p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

            {/* Remove */}
            <button className="text-sm font-medium text-red-500 hover:text-red-600">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
