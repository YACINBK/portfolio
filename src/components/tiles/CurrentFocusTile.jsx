import React from 'react';
import { Loader2, Zap, Shield, Layout } from 'lucide-react';

export function CurrentFocusTile() {
    const focuses = [
        {
            icon: <Loader2 className="w-4 h-4 animate-spin text-accent-secondary" />,
            title: "Better UX v1.1",
            desc: "Refining heuristic engines"
        },
        {
            icon: <Shield className="w-4 h-4 text-green-400" />,
            title: "Security Architecture",
            desc: "Keycloak & OIDC Integration"
        },
        {
            icon: <Layout className="w-4 h-4 text-blue-400" />,
            title: "React Ecosystem",
            desc: "Advanced Component Patterns"
        }
    ];

    return (
        <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Current Focus</span>

            <div className="flex flex-col gap-4">
                {focuses.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="mt-1">
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-200">{item.title}</span>
                            <span className="text-xs text-slate-500">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
