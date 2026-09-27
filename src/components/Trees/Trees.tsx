import { getAllTrees } from "@/lib/treesData.types";
import { ITreeType } from "@/types/TreeType";
import React from "react";
import Tree from "../Tree/Tree";

const Trees = async () => {
  const trees: ITreeType[] = await getAllTrees();

  if(!Array.isArray(trees)){
    throw new Error("Failed to load tree data");
  }

  return (
    <div className="relative z-10 mx-auto min-h-125 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          All Trees
        </h1>

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#696969]">
          Find trees based on their type, region or growing environment
        </p>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {trees.map((tree) => (
            <Tree key={tree.id} tree={tree} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trees;