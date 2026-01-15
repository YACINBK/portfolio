import React from 'react';

export function SoftSkillsTile() {
    const skills = [
        "Strategic Problem Solving",
        "Adaptability",
        "Effective Communication",
        "Team Leadership"
    ];

    return (
        <div className="flex flex-col h-full justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Human Factors</span>

            <div className="flex flex-col gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="flex items-center gap-3 group"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50 group-hover:bg-accent-primary transition-colors" />
                        <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
