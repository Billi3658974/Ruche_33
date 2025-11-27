import React from 'react';
import { MOCK_EVENTS } from '../constants';

const Agenda: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">Agenda Militant</h2>
      
      <div className="relative border-l-2 border-amber-500/30 ml-3 md:ml-6 space-y-12">
        {MOCK_EVENTS.map((event, idx) => (
          <div key={event.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-900 border-2 border-amber-500 group-hover:bg-amber-500 transition-colors shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="sm:w-32 flex-shrink-0 text-center sm:text-left">
                <div className="text-3xl font-bold text-amber-500 font-serif">
                  {new Date(event.date).getDate()}
                </div>
                <div className="text-sm uppercase tracking-wider text-slate-400 font-bold">
                  {new Date(event.date).toLocaleString('fr-FR', { month: 'short' })}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {new Date(event.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{event.title}</h3>
                   <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-slate-700 text-slate-300 border border-slate-600">
                     {event.type}
                   </span>
                </div>
                <div className="flex items-center text-sm text-slate-400 mb-3">
                  <svg className="w-4 h-4 mr-1 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-4">
                  <button className="text-xs font-bold text-amber-500 hover:text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 px-3 py-1.5 rounded transition-colors uppercase tracking-wide">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
