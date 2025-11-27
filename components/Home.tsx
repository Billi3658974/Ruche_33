import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-900/20">
        <div className="absolute inset-0">
          <svg className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 transform opacity-10" viewBox="0 0 200 200">
             <path fill="#F59E0B" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.6,18.7C51.7,29.4,41.9,38.8,31.4,46.7C20.9,54.6,9.6,60.9,-0.6,61.7C-10.8,62.5,-20.5,57.8,-32.1,50.8C-43.7,43.8,-57.2,34.5,-64.1,21.8C-71,9.1,-71.3,-7,-64.1,-19.7C-56.8,-32.4,-42,-41.7,-29.3,-50.2C-16.6,-58.8,-6,-66.6,6.7,-75.8L19.4,-85" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            <span className="block text-amber-500">La Ruche 33</span>
            <span className="block text-2xl sm:text-3xl mt-2 font-sans font-light text-slate-300">Construire la souveraineté populaire</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Un mouvement citoyen horizontal, sans chef, dédié à la rupture avec l'oligarchie et à la transformation radicale de nos institutions.
          </p>
          <div className="mt-10 flex gap-x-6">
            <a href="#discord" className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all">
              Rejoindre le Discord
            </a>
            <button onClick={() => window.location.hash = 'governance'} className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors">
              Voir les propositions <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Manifesto Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all group">
          <div className="h-12 w-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-amber-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Horizontalité Radicale</h3>
          <p className="text-slate-400">Ni chef, ni hiérarchie figée. Des référents tournants et révocables au service du collectif. Le pouvoir est partagé par l'ensemble de l'essaim.</p>
        </div>

        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all group">
          <div className="h-12 w-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-amber-500">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Action Directe</h3>
          <p className="text-slate-400">La parole n'a de valeur que si elle précède l'acte. Nous privilégions l'action concrète et offensive pour une conscientisation politique.</p>
        </div>

        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all group">
          <div className="h-12 w-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-amber-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Abeilles & Butineurs</h3>
          <p className="text-slate-400">Chacun contribue selon ses moyens. Les Abeilles actives gèrent le quotidien, les Butineurs soutiennent ponctuellement. La porte est ouverte.</p>
        </div>
      </div>
      
       {/* Security Note */}
      <div className="mt-16 bg-slate-950 border-t border-slate-800 p-8 text-center rounded-lg mx-4">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Souveraineté Numérique & Sécurité</h4>
        <p className="text-slate-400 max-w-3xl mx-auto text-sm">
          Ce site est conçu pour minimiser la collecte de données. Pour une sécurité optimale de vos échanges militants, nous recommandons l'utilisation de VPN, de messageries chiffrées (Signal) et d'OS respectueux de la vie privée (Tails, Linux). L'hébergement de cette plateforme doit se faire sur des serveurs hors juridiction GAFAM.
        </p>
      </div>
    </div>
  );
};

export default Home;
