"use client"
import { TreeContext } from "@/context/TreesContextProvider";
import { ITreeType } from "@/types/TreeType";
import { useContext } from "react";
import Tree from "../Tree/Tree";
import NoTreesFound from "../EmptyShowing/NoTreesFound";

const TreesClient = ({trees}:{trees: ITreeType[]}) => {
    const {search} = useContext(TreeContext);

    const filteredTrees = trees.filter(tree=> tree.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              filteredTrees.length === 0 ?<NoTreesFound/> : filteredTrees.map(tree=> <Tree key={tree.id} tree={tree} />)  
            }
        </div>
    );
};

export default TreesClient;
