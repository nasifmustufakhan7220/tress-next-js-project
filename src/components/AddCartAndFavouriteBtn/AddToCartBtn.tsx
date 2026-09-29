"use client";
import { TreeContext } from "@/context/TreesContextProvider";
import { ITreeType } from "@/types/TreeType";
import React, { useContext } from "react";
import { FaCartFlatbed } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const AddToCartBtn = ({ tree }: { tree: ITreeType }) => {
  const { carts, setCarts } = useContext(TreeContext);

  const handelAddToCart = (id: number) => {
    const exited = carts.find((treeId) => treeId.id === id);

    if (exited) {
      toast.error(`${tree.name} is already added to the cart`, {
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

    setCarts([...carts, tree]);
    toast.success(`${tree.name} is added to the cart`, {
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
        onClick={() => handelAddToCart(tree.id)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063b27] px-6 py-3 font-semibold text-white transition hover:bg-[#085638]"
      >
        <FaCartFlatbed />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
