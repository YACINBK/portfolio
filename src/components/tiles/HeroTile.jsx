import React from 'react';
import { motion } from 'framer-motion';

export function HeroTile() {
    return (
        <div className="flex flex-col items-start justify-center h-full">
            <motion.img
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut"
                }}
                src={`${import.meta.env.BASE_URL}avatar.png`}
                alt="Yacin Ben Kacem"
                className="w-20 h-20 rounded-full border-2 border-accent-primary shadow-[0_0_30px_rgba(99,102,241,0.4)] mb-6 object-cover"
            />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                    Yacin Ben Kacem
                </span>
            </h1>
            <p className="text-lg text-slate-400 font-light">
                Applied Computer Science Engineering Student
            </p>
        </div>
    );
}
