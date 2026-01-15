import React from 'react';

export function BioTile() {
    return (
        <div className="flex flex-col h-full justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Mission</span>
            <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Innovating at the Edge of AI
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                    I thrive on transforming original, innovative ideas into production-ready applications.
                    My passion lies in searching for unconventional solutions and bridging the gap between
                    raw neural networks and robust web ecosystems that are ready to ship and scale.
                </p>
            </div>
        </div>
    );
}
