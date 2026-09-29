import AddToCartBtn from "@/components/AddCartAndFavouriteBtn/AddToCartBtn";
import FavouriteBtn from "@/components/AddCartAndFavouriteBtn/FavouriteBtn";
import { getAllTrees } from "@/lib/treesData.types";
import { ITreeType } from "@/types/TreeType";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaLeaf, FaShieldHeart, FaSun, FaTree } from "react-icons/fa6";

const TreeDetailsPage = async ({
  params,
}: {
  params: Promise<{ treesId: string }>;
}) => {
  const trees: ITreeType[] = await getAllTrees();
  const { treesId } = await params;

  const tree = trees.find((id) => Number(id.id) === Number(treesId));
  if (!tree) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-[#f6faf7]">
      {/* Back Button */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#063b27] transition hover:text-[#6b9b32]"
        >
          <FaArrowLeft />
          Back to Trees
        </Link>
      </section>

      {/* Details Hero */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="overflow-hidden rounded-3xl border border-[#e4eee7] bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Tree Image */}
            <div className="relative min-h-80 sm:min-h-100 lg:min-h-125">
              <Image
                src={tree.image}
                alt={tree.name}
                fill
                unoptimized
                className="object-cover"
              />

              {/* Category */}
              <div className="absolute left-5 top-5 rounded-full bg-[#9cff3b] px-4 py-2 text-sm font-bold text-[#063b27] shadow-md">
                {tree.category}
              </div>
            </div>

            {/* Tree Information */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#7aa83d]">
                <FaTree />
                Tree Details
              </div>

              <h1 className="mt-4 text-4xl font-black leading-tight text-[#063b27] sm:text-5xl">
                {tree.name}
              </h1>

              <p className="mt-6 text-base leading-8 text-[#696969]">
                {tree.description}
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span className="text-sm font-medium text-[#696969]">
                  Starting from
                </span>

                <span className="text-4xl font-black text-[#063b27]">
                  ৳{tree.price}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <AddToCartBtn tree={tree} />

                <FavouriteBtn tree={tree} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Tree */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7aa83d]">
            Why choose this tree?
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#063b27] sm:text-4xl">
            Bring More Green Into Your Life
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[#696969]">
            Trees are more than beautiful plants. They create healthier
            environments and make our surroundings greener.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-[#e4eee7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7dc] text-xl text-[#063b27]">
              <FaLeaf />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#063b27]">
              Natural Beauty
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#696969]">
              Add natural beauty and a refreshing green atmosphere to your
              surroundings.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-[#e4eee7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7dc] text-xl text-[#063b27]">
              <FaSun />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#063b27]">
              Healthy Environment
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#696969]">
              Trees contribute to cleaner air, shade and a healthier natural
              environment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-[#e4eee7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7dc] text-xl text-[#063b27]">
              <FaShieldHeart />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#063b27]">
              Better Tomorrow
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#696969]">
              Planting trees today helps create a greener and healthier future
              for everyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TreeDetailsPage;
