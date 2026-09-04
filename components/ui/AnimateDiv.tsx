"use client";

import {motion} from "motion/react";

export interface AnimateDivProps{
    children: React.ReactNode;
    className?: string;
}

export default function AnimateDiv({children, className=""}:AnimateDivProps){
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
}