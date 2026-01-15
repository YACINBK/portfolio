import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function BentoGrid({ className, children }) {
    return (
        <div
            className={twMerge(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-8",
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoItem({ className, children, span = 1, noPadding = false }) {
    // Simple span logic for Tailwind classes (can be extended)
    const spanClasses = {
        1: "col-span-1",
        2: "col-span-1 md:col-span-2",
        4: "col-span-1 md:col-span-2 lg:col-span-4",
    };

    return (
        <div
            className={twMerge(
                "bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-primary/20 hover:border-accent-primary/50 group",
                spanClasses[span] || "col-span-1",
                noPadding ? "p-0" : "p-8",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}
