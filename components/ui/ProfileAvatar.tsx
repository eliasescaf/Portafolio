"use client";

import {Blobatar} from "@blobatar/react"
import { surprised } from "blobatar/expression";
import { useGaze } from "@blobatar/react/gaze";
import "blobatar/motion.css";
import "blobatar/gaze.css";

export default function ProfileAvatar(){
    const {ref} = useGaze({travel: 3, lookAt: "pointer"});

    return (
    <div className="mb-6 w-24 h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center p-2">
      <Blobatar
        ref={ref} 
        title="Elias"
        size={400}
        name="eliasescaf" 
        animate="hover"
        expression={surprised}
        className="text-emerald-500 drop-shadow-md"
      />
    </div>
  );
}