"use client";
import { TreeContext } from "@/context/TreesContextProvider";
import { ITreeType } from "@/types/TreeType";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const FavouriteBtn = ({ tree }: { tree: ITreeType }) => {
  const { favourites, setFavourites } = useContext(TreeContext);
  const handelFavourite = (id: number) => {
    const exited = favourites.some((treeId) => treeId.id === id);

    if (exited) {
      toast.error(`${tree.name} is already added to the favourite`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    setFavourites([...favourites, tree]);
    toast.success(`${tree.name} is added to the favourite`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        onClick={() => handelFavourite(tree.id)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dce8df] bg-white px-6 py-3 font-semibold text-[#063b27] transition hover:bg-[#f6faf7] cursor-pointer"
      >
        <FaHeart />
        Favorite
      </button>
    </div>
  );
};

export default FavouriteBtn;
