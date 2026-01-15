import React from 'react';
import { BentoGrid, BentoItem } from './components/layout/BentoGrid';
import { HeroTile } from './components/tiles/HeroTile';
import { ConnectTile } from './components/tiles/ConnectTile';
import { BioTile } from './components/tiles/BioTile';
import { EducationTile } from './components/tiles/EducationTile';
import { ExperienceTile } from './components/tiles/ExperienceTile';
import { SkillsTile } from './components/tiles/SkillsTile';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { PersonaTile } from './components/tiles/PersonaTile';
import { StatusFooter } from './components/layout/StatusFooter';

function App() {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8 flex items-center justify-center">
            {/* Background Effect */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-bg-primary to-bg-primary -z-10" />

            <BentoGrid>
                <BentoItem span={2}>
                    <HeroTile />
                </BentoItem>
                <BentoItem span={2}>
                    <ConnectTile />
                </BentoItem>

                <BentoItem span={2}>
                    <BioTile />
                </BentoItem>
                <BentoItem span={2}>
                    <EducationTile />
                </BentoItem>

                <BentoItem span={4}>
                    <ExperienceTile />
                </BentoItem>

                <BentoItem span={4}>
                    <SkillsTile />
                </BentoItem>


                <BentoItem span={4}>
                    <ProjectsTile />
                </BentoItem>

                <BentoItem span={4}>
                    <PersonaTile />
                </BentoItem>
            </BentoGrid>

            <StatusFooter />
        </div>
    );
}

export default App;
