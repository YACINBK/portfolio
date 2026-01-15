import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

function SoftSkills() {
    const skills = [
        "Strategic Problem Solving",
        "Adaptability",
        "Effective Communication",
        "Team Leadership"
    ];

    return (
        <div className="flex flex-col p-6 bg-glass-bg border-b border-glass-border">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Human Factors</span>
            <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 rounded text-xs font-medium bg-accent-primary/10 border border-accent-primary text-accent-primary whitespace-nowrap"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Terminal() {
    const text = useTypewriter(
        `> Initializing Refactor: Better UX v1.1...\n> Integrating Keycloak OIDC security...\n> Status: WAITING_FOR_DEPLOYMENT\n> Current Task: Optimizing React Architecture...`,
        30
    );

    return (
        <div className="flex flex-col flex-1 bg-black/40 font-mono text-sm max-h-[300px] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-4 p-3 bg-white/5 border-b border-glass-border">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-500">yacin@working-on: ~/status</span>
            </div>

            {/* Body */}
            <div className="p-4 text-slate-300">
                <div className="flex gap-2 mb-2">
                    <span className="text-green-500">yacin@whitecape:~$</span>
                    <span className="text-white">./current_focus.sh</span>
                </div>
                <div className="whitespace-pre-wrap leading-relaxed">
                    {text}
                    <span className="inline-block w-2 h-4 bg-accent-primary ml-1 animate-pulse align-middle" />
                </div>
            </div>
        </div>
    );
}

export function FocusTile() {
    // This tile is unique: it contains two stacked distinct sections but acts as one grid item container (visually) 
    // OR we can make it a specific layout container. 
    // Since we are using BentoGrid, we can put this inside a BentoItem and flex-col inside.
    return (
        <div className="flex flex-col h-full -m-8"> {/* Negative margin to counteract BentoItem padding if we want full bleed, or we just remove padding from BentoItem for this specific one */}
            {/* Actually, easier to replicate the outer styling for consistent internal structure, or use BentoItem padding for outer and just stack inside. */}
            {/* If I use -m-8 (p-8 is default on BentoItem), I can control full width. */}
            {/* Better approach: BentoItem renders children. If I want full bleed, I should handle it. */}
            {/* Let's stick to simple stacking first. */}
            {/* Wait, the design request was "Vertical Duo", meaning two tiles? Or one tile split? */}
            {/* "The Vertical Duo (Right): Human Factors (top), Live Status Terminal (bottom) ... Perfect Balance" */}
            {/* Providing matching height to Skills Matrix (which is span-1 col, span-2 row or similar). */}
            {/* In my Grid: SkillsTile is span-2 (width). FocusTile can be span-2 (width) or span-1 if we want side-by-side. */}
            {/* Legacy: Skills Matrix was left (2 cols?), Focus was right (2 cols?). */}
            {/* Let's verify grid: grid-template-columns: repeat(4, 1fr). */}
            {/* Row: "skills skills focus focus" -> Skills (2 cols), Focus (2 cols). */}
            {/* So FocusTile spans 2 columns. */}

            <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                <SoftSkills />
                <Terminal />
            </div>
        </div>
    );
}
