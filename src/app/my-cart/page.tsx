"use client";
import Cart from "@/components/Cart/Cart";
import EmptyShowing from "@/components/EmptyShowing/EmptyShowing";
import { TreeContext } from "@/context/TreesContextProvider";
import { Spinner } from "@heroui/react";
import { useContext } from "react";

const MyCartPage = () => {
  const { carts, favourites, toggle, setToggle, isLoading } =
    useContext(TreeContext);

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
        {toggle ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Trees */}
            <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Trees
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">
                    {carts.length}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2df] text-2xl">
                  🌳
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Trees currently in your cart
              </p>
            </div>

            {/* Estimated Price */}
            <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Estimated Total
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">
                    ৳ {carts.reduce((acc, curr) => (acc += curr.price), 0)}
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
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Trees */}
            <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Trees
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">
                    {favourites.length}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f2df] text-2xl">
                  🌳
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Trees currently in your favourites
              </p>
            </div>

            {/* Estimated Price */}
            <div className="rounded-2xl border border-[#dce5d7] bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Estimated Total
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#1f3a24]">
                    ৳ {favourites.reduce((acc, curr) => (acc += curr.price), 0)}
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
        )}
      </section>

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 lg:px-8">
        <div className="tabs tabs-box w-fit">
          {/* In Cart */}
          <input
            checked={toggle}
              onChange={() => setToggle(true)}
            type="radio"
            name="tree_tabs"
            className="tab font-semibold text-[#1f3a24]"
            aria-label="In Cart"
          />

          {/* Favorites */}
          <input
            checked={!toggle}
            onChange={() => setToggle(false)}
            type="radio"
            name="tree_tabs"
            className="tab font-semibold text-[#1f3a24]"
            aria-label="Favorites"
          />
        </div>
        {toggle ? (
          <div className="mt-0 w-full border border-[#dce5d7] bg-white p-5 sm:p-6">
            {isLoading ? (
              <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Data Loading....</span>
              </div>
            ) : carts.length > 0 ? (
              <div className="mt-6 rounded-2xl border border-[#dce5d7] bg-[#f8faf6] p-4">
                {carts.map((cart) => (
                  <Cart key={cart.id} cart={cart} />
                ))}
              </div>
            ) : (
              <EmptyShowing />
            )}
          </div>
        ) : (
          <div className="mt-0 w-full border border-[#dce5d7] bg-white p-5 sm:p-6">
            {isLoading ? (
              <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Data Loading....</span>
              </div>
            ) : favourites.length > 0 ? (
              <div className="mt-6 rounded-2xl border border-[#dce5d7] bg-[#f8faf6] p-4">
                {favourites.map((favourite) => (
                  <Cart key={favourite.id} cart={favourite} />
                ))}
              </div>
            ) : (
              <EmptyShowing />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCartPage;
