import React from 'react';

export function PersonaTile() {
    const languages = [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "100%" },
        { name: "English", level: "90%" },
        { name: "German", level: "30%" }
    ];

    const hobbies = [
        "Gaming", "Football", "AI Research", "Manim Videos"
    ];

    return (
        <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Persona</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages */}
                <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-primary" />
                        Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((lang) => (
                            <div key={lang.name} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
                                <span className="text-white font-medium">{lang.name}</span>
                                <span className="text-slate-500 ml-2 text-xs">({lang.level})</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hobbies */}
                <div>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-secondary" />
                        Hobbies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {hobbies.map((hobby) => (
                            <span key={hobby} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
