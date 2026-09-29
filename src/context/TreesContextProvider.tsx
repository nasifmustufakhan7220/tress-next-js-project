"use client"
import { ITreeType } from "@/types/TreeType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ITreeContext {
    carts:ITreeType[];
    setCarts: Dispatch<SetStateAction<ITreeType[]>>;
    favourites:ITreeType[];
    setFavourites: Dispatch<SetStateAction<ITreeType[]>>;
}

export const TreeContext = createContext<ITreeContext>({
    carts: [],
    setCarts: ()=>{},
    favourites:[],
    setFavourites: ()=>{}
});
const TreesContextProvider = ({children}:{children:ReactNode}) => {

    const [carts,setCarts] = useState<ITreeType[]>([]);
    const [favourites, setFavourites] = useState<ITreeType[]>([])

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
        setFavourites
    };
    return <TreeContext.Provider value={contextObj}>
        {children}
    </TreeContext.Provider>
};

export default TreesContextProvider;