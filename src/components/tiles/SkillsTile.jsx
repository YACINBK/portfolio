import React from 'react';
import { clsx } from 'clsx';
import { Star, StarHalf } from 'lucide-react';

function StarRating({ level }) {
    // Convert 0-100 to 0-5
    const stars = Math.round((level / 100) * 5);

    return (
        <div className="flex gap-0.5 ml-2">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={clsx(
                        "w-3 h-3",
                        i < stars ? "fill-accent-primary text-accent-primary" : "fill-none text-slate-700" // slate-700 for empty stars
                    )}
                />
            ))}
        </div>
    );
}

function SkillBadge({ name, level }) {
    return (
        <div className={clsx(
            "flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-300 cursor-default w-full", // w-full for grid layout
            "bg-white/5 border-white/10 text-slate-300",
            "hover:bg-accent-primary/5 hover:border-accent-primary hover:text-white hover:-translate-y-0.5 group"
        )}>
            <span className="text-sm font-medium">{name}</span>
            {level && <StarRating level={level} />}
        </div>
    );
}

export function SkillsTile() {
    const technicalSkills = [
        {
            category: "Programming Languages",
            items: [
                { name: "Python", level: 100 },
                { name: "Java 17+", level: 90 },
                { name: "HTML / CSS / JS", level: 80 },
                { name: "TypeScript", level: 80 },
                { name: "SQL", level: 80 },
            ]
        },
        {
            category: "AI & LLMOps",
            items: [
                { name: "PyTorch / TensorFlow", level: 90 },
                { name: "RAG / LLMs", level: 95 },
                { name: "Pandas / NumPy", level: 90 },
                { name: "Triton Server", level: 85 },
            ]
        },
        {
            category: "Web & API Engineering",
            items: [
                { name: "Angular", level: 100 },
                { name: "Spring Boot", level: 90 },
                { name: "FastAPI", level: 95 },
                { name: "PostgreSQL", level: 90 },
                { name: "Django", level: 85 },
                { name: "React", level: 75 },
            ]
        },
        {
            category: "DevOps & Security",
            items: [
                { name: "Keycloak / IAM", level: 90 },
                { name: "Docker / CI/CD", level: 85 },
                { name: "NVIDIA Morpheus", level: 75 },
            ]
        },
        {
            category: "Embedded & Low Level",
            items: [
                { name: "C / C++", level: 90 },
                { name: "ESP32 / STM32", level: 75 },
                { name: "Assembly (x86/ARM)", level: 70 },
                { name: "VHDL", level: 60 },
            ]
        }
    ];

    const humanFactors = [
        "Strategic Problem Solving",
        "Adaptability",
        "Effective Communication",
        "Team Leadership"
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Technical Stack & Human Factors</span>
                <span className="text-xs text-slate-600 font-mono mt-2 md:mt-0">Proficiency Level: ★★★★★</span>
            </div>

            {/* Technical Grid: 4 Columns for span-4 tile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                {technicalSkills.map((section) => (
                    <div key={section.category} className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-accent-primary tracking-wide uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                            {section.category}
                        </h4>
                        <div className="flex flex-col gap-2">
                            {section.items.map((item) => (
                                <SkillBadge
                                    key={item.name}
                                    name={item.name}
                                    level={item.level}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Human Factors: Full Width Bottom Row */}
            <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-accent-primary tracking-wide uppercase flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                    Human Factors
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {humanFactors.map((skill) => (
                        <div key={skill} className="flex items-center justify-center p-3 rounded-lg bg-accent-primary/5 border border-accent-primary/10 hover:bg-accent-primary/10 transition-colors">
                            <span className="text-sm font-medium text-slate-300">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
