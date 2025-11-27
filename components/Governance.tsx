import React, { useState } from 'react';
import { MOCK_PROPOSALS } from '../constants';
import { Proposal, VoteType } from '../types';

const Governance: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleVote = (id: string, type: VoteType) => {
    setProposals(prev => prev.map(p => {
      if (p.id !== id) return p;
      const updatedVotes = { ...p.votes };
      if (type === VoteType.POUR) updatedVotes.pour += 1;
      if (type === VoteType.CONTRE) updatedVotes.contre += 1;
      if (type === VoteType.ABSTENTION) updatedVotes.abstention += 1;
      return { ...p, votes: updatedVotes };
    }));
  };

  const calculateProgress = (votes: Proposal['votes']) => {
    const total = votes.pour + votes.contre + votes.abstention;
    if (total === 0) return { pour: 0, contre: 0, abstention: 0 };
    return {
      pour: (votes.pour / total) * 100,
      contre: (votes.contre / total) * 100,
      abstention: (votes.abstention / total) * 100
    };
  };

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-serif font-bold text-white">Gouvernance de la Ruche</h2>
          <p className="text-slate-400 mt-2">Le pouvoir appartient à ceux qui font. Un vote = Une abeille.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 md:mt-0 bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nouvelle Proposition
        </button>
      </div>

      {showForm && (
        <div className="bg-slate-800 p-6 rounded-xl border border-amber-500/30 animate-fade-in mb-8">
          <h3 className="text-xl font-bold text-amber-500 mb-4">Déposer une idée</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Titre de l'action</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Ex: Assemblée sur les retraites..."
              />
            </div>
            <div className="text-xs text-slate-500">
              * Conformément à la charte, toute proposition doit être portée par au moins une Abeille Active qui s'engage à sa réalisation.
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white">Annuler</button>
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-md">Soumettre à l'Essaim</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {proposals.map(proposal => {
          const progress = calculateProgress(proposal.votes);
          const totalVotes = proposal.votes.pour + proposal.votes.contre + proposal.votes.abstention;

          return (
            <div key={proposal.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${
                      proposal.status === 'Adoptée' ? 'bg-green-900 text-green-300' :
                      proposal.status === 'Rejetée' ? 'bg-red-900 text-red-300' :
                      'bg-amber-900/50 text-amber-300'
                    }`}>
                      {proposal.status}
                    </span>
                    <span className="text-slate-500 text-xs">{proposal.category}</span>
                    <span className="text-slate-500 text-xs">• {proposal.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{proposal.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{proposal.description}</p>
                  <div className="mt-2 text-xs text-slate-500">Porté par : <span className="text-slate-300">{proposal.author}</span></div>
                </div>

                <div className="flex gap-2">
                   <button onClick={() => handleVote(proposal.id, VoteType.POUR)} className="flex flex-col items-center p-2 rounded hover:bg-slate-700 transition-colors group/btn">
                      <span className="text-xl">👍</span>
                      <span className="text-xs text-slate-400 group-hover/btn:text-green-400 font-bold">POUR</span>
                   </button>
                   <button onClick={() => handleVote(proposal.id, VoteType.ABSTENTION)} className="flex flex-col items-center p-2 rounded hover:bg-slate-700 transition-colors group/btn">
                      <span className="text-xl">🤔</span>
                      <span className="text-xs text-slate-400 group-hover/btn:text-blue-400 font-bold">ABS</span>
                   </button>
                   <button onClick={() => handleVote(proposal.id, VoteType.CONTRE)} className="flex flex-col items-center p-2 rounded hover:bg-slate-700 transition-colors group/btn">
                      <span className="text-xl">👎</span>
                      <span className="text-xs text-slate-400 group-hover/btn:text-red-400 font-bold">CONTRE</span>
                   </button>
                </div>
              </div>

              {/* Vote Bar */}
              <div className="space-y-1">
                <div className="h-4 bg-slate-700 rounded-full overflow-hidden flex">
                  <div style={{ width: `${progress.pour}%` }} className="bg-green-500 h-full transition-all duration-500"></div>
                  <div style={{ width: `${progress.abstention}%` }} className="bg-slate-400 h-full transition-all duration-500"></div>
                  <div style={{ width: `${progress.contre}%` }} className="bg-red-500 h-full transition-all duration-500"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 px-1">
                  <span>{proposal.votes.pour} Pour ({Math.round(progress.pour)}%)</span>
                  <span>{totalVotes} Votes</span>
                  <span>{proposal.votes.contre} Contre ({Math.round(progress.contre)}%)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Governance;
