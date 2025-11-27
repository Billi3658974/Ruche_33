import React, { useState } from 'react';
import { generateEducationalContent } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

// Simple markdown component since we can't install react-markdown here directly in this environment, 
// I will simulate a basic markdown renderer function for the demo.
const SimpleMarkdown = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-2 text-slate-300 leading-relaxed">
      {lines.map((line, idx) => {
        if (line.startsWith('# ')) return <h3 key={idx} className="text-2xl font-bold text-amber-500 mt-4 mb-2">{line.replace('# ', '')}</h3>;
        if (line.startsWith('## ')) return <h4 key={idx} className="text-xl font-bold text-amber-400 mt-3 mb-2">{line.replace('## ', '')}</h4>;
        if (line.startsWith('* ') || line.startsWith('- ')) return <li key={idx} className="ml-4 list-disc text-slate-300">{line.replace(/^[*-] /, '')}</li>;
        if (line.trim() === '') return <br key={idx} />;
        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
};

const PopularUniversity: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const predefinedTopics = [
    "L'oligarchie en France",
    "La dette publique comme outil de domination",
    "Le RIC (Référendum d'Initiative Citoyenne)",
    "Histoire de la Commune de Paris"
  ];

  const handleSearch = async (query: string) => {
    setLoading(true);
    setContent(null);
    const result = await generateEducationalContent(query);
    setContent(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-white">Université Populaire</h2>
        <p className="text-slate-400 mt-2">S'éduquer pour ne plus subir. L'intelligence collective assistée par l'IA.</p>
      </div>

      {/* Search Interface */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Sujet à explorer (ex: La séparation des pouvoirs)"
            className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(topic)}
          />
          <button
            onClick={() => handleSearch(topic)}
            disabled={loading || !topic}
            className="bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg"
          >
            {loading ? 'Recherche...' : 'Instruire'}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-slate-500 uppercase font-bold py-1">Sujets suggérés:</span>
          {predefinedTopics.map(t => (
            <button
              key={t}
              onClick={() => { setTopic(t); handleSearch(t); }}
              className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1 rounded-full border border-slate-600 transition-colors"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-amber-500 animate-pulse">Consultation des archives...</p>
        </div>
      )}

      {content && !loading && (
        <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-8 shadow-2xl animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-32 h-32 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-amber-500 mb-6 border-b border-slate-800 pb-4">{topic}</h3>
          <div className="prose prose-invert prose-amber max-w-none">
            <SimpleMarkdown content={content} />
          </div>
          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
            <span>Généré par Gemini AI - À vérifier et débattre.</span>
            <div className="flex gap-2">
              <button className="hover:text-amber-500 transition-colors">Copier</button>
              <button className="hover:text-amber-500 transition-colors">Partager</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularUniversity;
