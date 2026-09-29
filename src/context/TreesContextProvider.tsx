import { ITreeType } from "@/types/TreeType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ITreeContext {
    cart:ITreeType[];
    setCart: Dispatch<SetStateAction<ITreeType[]>>
}

export const TreeContext = createContext<ITreeContext>({
    cart: [],
    setCart: ()=>{}
});
const TreesContextProvider = ({children}:{children:ReactNode}) => {

    const [cart,setCart] = useState<ITreeType[]>([]);

    const contextObj = {
        cart,
        setCart
    };
    return <TreeContext.Provider value={contextObj}>
        {children}
    </TreeContext.Provider>
};

export default TreesContextProvider;