import { getAllTrees } from "@/lib/treesData.types";
import { ITreeType } from "@/types/TreeType";
import TreesClient from "./TreesClient";

const Trees = async () => {
  const trees: ITreeType[] = await getAllTrees();

  if(!Array.isArray(trees)){
    throw new Error("Failed to load tree data");
  }

  return (
    <div id="AllTrees" className="relative z-10 mx-auto min-h-125 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="w-full">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          All Trees
        </h1>

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#696969]">
          Find trees based on their type, region or growing environment
        </p>

        <TreesClient trees={trees} />
      </div>
    </div>
  );
};

export default Trees;