import React, { useState, useEffect } from 'react';

export function StatusFooter() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }));
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-bg-primary/80 backdrop-blur-md border-t border-glass-border z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-500 font-medium">Available for opportunities</span>
                </div>

                <div className="flex items-center gap-4">
                    <span>Yacin Ben Kacem © {new Date().getFullYear()}</span>
                    <span className="text-slate-400">{time}</span>
                </div>
            </div>
        </footer>
    );
}
