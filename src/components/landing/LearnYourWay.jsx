import React from 'react';
import { Play, Hand } from 'lucide-react';

const LearnYourWay = () => {
  return (
    <section className="w-full bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Learn Your Way</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-surface-elevated shadow-md rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-3 rounded-lg bg-theme-primary/10">
                <Play className="w-6 h-6 text-theme-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Auto-Play Mode</h3>
                <p className="mt-2 text-text-secondary">Hit play and watch algorithms unfold. Perfect for getting the big picture.</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-elevated shadow-md rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-3 rounded-lg bg-theme-primary/10">
                <Hand className="w-6 h-6 text-theme-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Manual Control</h3>
                <p className="mt-2 text-text-secondary">Control every step. Pause, rewind, explore at your pace.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-text-secondary">You decide how fast you learn.</p>
      </div>
    </section>
  );
};

export default LearnYourWay;
