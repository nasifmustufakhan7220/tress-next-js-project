"use client";
import Cart from "@/components/Cart/Cart";
import { TreeContext } from "@/context/TreesContextProvider";
import { useContext } from "react";

const MyCartPage = () => {
  const {carts, favourites} = useContext(TreeContext);
  console.log(favourites);
  return (
    <div className="min-h-screen bg-[#f6f8f3]">
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#1f3a24] px-6 py-8 text-white shadow-sm sm:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#b7d89c]">
            My Collection
          </p>

          <h2 className="text-3xl font-bold uppercase sm:text-4xl">MY CART</h2>

          <p className="mt-2 max-w-xl text-sm text-[#d7e4d2] sm:text-base">
            Review the trees you have selected and manage your collection before
            completing your order.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Trees */}
          <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Trees</p>

                <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">12</h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2df] text-2xl">
                🌳
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Trees currently in your cart
            </p>
          </div>

          {/* Total Quantity */}
          <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Quantity
                </p>

                <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">18</h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2df] text-2xl">
                🪴
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">Total plants selected</p>
          </div>

          {/* Estimated Price */}
          <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Estimated Total
                </p>

                <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">
                  ৳ 8,450
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2df] text-2xl">
                💰
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Estimated price of your collection
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 lg:px-8">
        <div className="tabs tabs-lift">
          {/* In Cart */}
          <input
            type="radio"
            name="tree_tabs"
            className="tab font-semibold text-[#1f3a24]"
            aria-label="In Cart"
            defaultChecked
          />

          <div className="tab-content border-[#dce5d7] bg-white p-5 sm:p-6">
            {carts.length > 0 ? (
                <div className="mt-6 rounded-2xl border border-[#dce5d7] bg-[#f8faf6] p-4">
                    {carts.map(cart=> <Cart key={cart.id} cart={cart}  />)}
                </div>
            ) : (
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
            )}

            {/* Cart items will go here */}
          </div>

          {/* Favorites */}
          <input
            type="radio"
            name="tree_tabs"
            className="tab font-semibold text-[#1f3a24]"
            aria-label="Favorites"
          />

          <div className="tab-content border-[#dce5d7] bg-white p-5 sm:p-6">
            {
                favourites.length > 0 ?<><h3 className="text-xl font-bold text-[#1f3a24]">Favorite Trees</h3>

            <p className="mt-1 text-sm text-gray-500">
              Trees you have saved for later.
            </p></> : <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-[#cdd9c8] bg-[#f8faf6] px-5 text-center">
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
            }

            {/* Favorite items will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
