import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
  return (
    <footer className="w-full bg-surface-elevated border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-semibold text-text-primary">
            <div className="w-8 h-8 rounded-md bg-theme-primary" />
            <span>Bayan Flow - Algorithms visualized</span>
          </div>
        </div>

        {/* Center */}
        <div className="flex md:justify-center">
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-theme-primary hover:bg-theme-primary-hover text-white shadow-md transition-colors"
          >
            Start Visualizing
          </Link>
        </div>

        {/* Right */}
        <div className="flex md:justify-end gap-4">
          <Link to="/roadmap" className="text-text-secondary hover:text-text-primary transition-colors">
            See the Roadmap
          </Link>
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-border text-text-secondary hover:bg-interactive-bg-hover"
          >
            Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
