import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ number, title, description, link, highlight = false }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex flex-col p-6 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 group ${highlight ? 'shadow-2xl shadow-accent-primary/10 border-accent-primary/50' : ''
                }`}
        >
            <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-3xl font-bold opacity-20 group-hover:opacity-40 transition-opacity">
                    {number}
                </span>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-primary" />
            </div>

            <h4 className={`text-xl font-bold mb-3 ${highlight ? 'text-accent-primary' : 'group-hover:text-accent-primary transition-colors'}`}>
                {title}
            </h4>

            <p className="text-slate-400 text-sm leading-relaxed">
                {description}
            </p>
        </a>
    );
}

export function ProjectsTile() {
    const currentFocus = [
        {
            title: "Current Focus: Better UX v1.1",
            description: "Refining heuristic engines and Computer Vision models.",
            link: "#", // or specific link
            isFocus: true
        },
        {
            title: "Current Focus: Security Architecture",
            description: "Implementing Keycloak & OIDC Integration for robust IAM.",
            link: "#",
            isFocus: true
        }
    ];

    const projects = [
        {
            number: "01",
            title: "Better UX v1.0",
            description: "A multimodal UX research platform using Computer Vision & RAG-LLMs to fuse screenshots with behavioral data for automated, actionable usability audits.",
            link: "https://github.com/YACINBK/better-ux"
        },
        {
            number: "02",
            title: "QuickFlow",
            description: "An intelligent productivity platform leveraging local LLMs (Ollama) and industrial security (Keycloak/OIDC) to automate workflows while preserving privacy.",
            link: "https://github.com/YACINBK/quickflow",
            highlight: true
        },
        {
            number: "03",
            title: "UX Insight Platform",
            description: "Heuristic engine for mapping user behavioral patterns and UI semantics.",
            link: "https://github.com/YACINBK/ux-insight-platform"
        },
        {
            number: "04",
            title: "Smart City Sousse",
            description: "Digital twin urban simulation for traffic and sustainability modeling.",
            link: "https://github.com/YACINBK/smart-city-sousse-2030"
        }
    ];

    // Combine focus and projects
    // User said: "current focus will be fusioned in the projects tile as it will present the first part of it"

    return (
        <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Flagship Projects & Focus</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Render Focus Items First */}
                {currentFocus.map((focus, idx) => (
                    <a
                        key={`focus-${idx}`}
                        href={focus.link}
                        className="relative flex flex-col p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/10 transition-all duration-300 hover:bg-accent-primary/10 hover:-translate-y-1 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold text-accent-primary px-2 py-1 rounded bg-accent-primary/10">
                                IN PROGRESS
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-accent-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">{focus.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{focus.description}</p>
                    </a>
                ))}

                {/* Render Projects */}
                {projects.map((project) => (
                    <ProjectCard key={project.number} {...project} />
                ))}
            </div>
        </div>
    );
}
