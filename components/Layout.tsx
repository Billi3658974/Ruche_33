import React from 'react';
import Navigation from './Navigation';
import DiscordWidget from './DiscordWidget';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {children}
        
        {/* Persistent Discord CTA on all pages except Home where it's already prominent */}
        {activeTab !== 'home' && <DiscordWidget />}
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-500 font-serif font-bold text-lg mb-4">LA RUCHE 33</p>
          <div className="flex justify-center space-x-6 text-slate-400 text-sm mb-8">
            <a href="#" className="hover:text-amber-500">Charte</a>
            <a href="#" className="hover:text-amber-500">Contact</a>
            <a href="#" className="hover:text-amber-500">Mentions Légales</a>
          </div>
          <p className="text-slate-600 text-xs">
            Site indépendant et autogéré. Hébergement souverain recommandé.<br/>
            Construit avec React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
