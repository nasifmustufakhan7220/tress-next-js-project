"use client"
import { ITreeType } from "@/types/TreeType";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

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
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=>{
        const cart = localStorage.getItem('carts');
        const favourite = localStorage.getItem('favourites');
        if(cart){
            const cartParsed = JSON.parse(cart);
            setCarts(cartParsed);
        }

        if(favourite){
            const favouriteParsed = JSON.parse(favourite);
            setFavourites(favouriteParsed);
        }
        setIsLoading(false);
    },[]);

    useEffect(()=>{
        if(isLoading === false){
            localStorage.setItem("carts", JSON.stringify(carts));
        }
    },[carts, isLoading]);

    useEffect(()=>{
        if(isLoading === false){
            localStorage.setItem("favourites",JSON.stringify(favourites));
        }
    },[favourites,isLoading]);

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