"use client"

import { ITreeType } from "@/types/TreeType";
import Link from "next/link";

const ViewDetails = ({tree}:{tree: ITreeType}) => {
  return (
    <div>
      <Link href={`/${tree.id}`}>
      <button className="flex items-center px-6 py-2 justify-center rounded-xl bg-green-700 text-white cursor-pointer">
        View Details
      </button>
      
      </Link>
    </div>
  );
};

export default ViewDetails;
