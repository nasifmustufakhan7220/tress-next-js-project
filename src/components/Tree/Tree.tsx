import { ITreeType } from "@/types/TreeType";
import Image from "next/image";

interface IAllPlantProps {
  tree: ITreeType;
}
const Tree = ({ tree }: IAllPlantProps) => {
  const { image, name, category, price } = tree;

  return (
    <div className="min-w-0 w-full">
      <div className="w-full rounded-xl bg-white p-1 shadow-md">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={400}
            height={250}
            unoptimized
            className="h-52 w-full object-cover"
          />

          <button className="absolute right-2 top-2 text-2xl text-white">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>

        <div className="px-2 pb-2 pt-3">
          <h3 className="text-lg font-bold">{name}</h3>

          <p className="text-green-700">{category}</p>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-xl font-bold text-green-700">${price}</p>

            <button className="flex items-center px-6 py-2 justify-center rounded-xl bg-green-700 text-white cursor-pointer">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
