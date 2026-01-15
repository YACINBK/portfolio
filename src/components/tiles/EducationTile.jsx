import React from 'react';
import { Award } from 'lucide-react';

export function EducationTile() {
    return (
        <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Education & Honors</span>

            <div className="flex flex-col gap-6">
                {/* ENISo */}
                <div className="group">
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-lg group-hover:text-accent-primary transition-colors">ENISo</h4>
                        <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">2024 - 2027</span>
                    </div>
                    <p className="text-slate-400 text-sm">Applied Computer Science Engineering</p>
                </div>

                {/* IPEIM */}
                <div className="group">
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-lg group-hover:text-accent-primary transition-colors">IPEIM Monastir</h4>
                        <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">2022 - 2024</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">Preparatory Studies (Maths-Physics)</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>National Rank: 509</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
