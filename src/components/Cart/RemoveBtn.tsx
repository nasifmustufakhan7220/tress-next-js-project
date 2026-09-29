import { TreeContext } from "@/context/TreesContextProvider";
import { ITreeType } from "@/types/TreeType";
import React, { useContext } from "react";

const RemoveBtn = ({ tree }: { tree: ITreeType }) => {
  const { carts, setCarts, toggle, favourites, setFavourites} = useContext(TreeContext);
  const handelRemove = (id: number) => {
    if (toggle) {
      const filtered = carts.filter((treeId) => treeId.id !== id);
      setCarts(filtered);
    }else{
        const filtered = favourites.filter(treeId => treeId.id !== id);
        setFavourites(filtered);
    }
  };
  return (
    <div>
      <button
        onClick={() => handelRemove(tree.id)}
        className="text-sm font-medium text-red-500 hover:text-red-600 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveBtn;
