"use client"
import { ITreeType } from "@/types/TreeType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ITreeContext {
    carts:ITreeType[];
    setCarts: Dispatch<SetStateAction<ITreeType[]>>;
    favourites:ITreeType[];
    setFavourites: Dispatch<SetStateAction<ITreeType[]>>;
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export const TreeContext = createContext<ITreeContext>({
    carts: [],
    setCarts: ()=>{},
    favourites:[],
    setFavourites: ()=>{},
    toggle: true,
    setToggle: ()=>{}
});
const TreesContextProvider = ({children}:{children:ReactNode}) => {

    const [carts,setCarts] = useState<ITreeType[]>([]);
    const [favourites, setFavourites] = useState<ITreeType[]>([]);
    const [toggle, setToggle] = useState<boolean>(true);

    // useEffect(()=>{
    //     const storedCartTrees = localStorage.getItem("cart");

    //     if(storedCartTrees){
    //         const parsedCart = JSON.parse(storedCartTrees);
    //     }
    // },[]);

    const contextObj = {
        carts,
        setCarts,
        favourites,
        setFavourites,
        toggle,
        setToggle
    };
    return <TreeContext.Provider value={contextObj}>
        {children}
    </TreeContext.Provider>
};

export default TreesContextProvider;