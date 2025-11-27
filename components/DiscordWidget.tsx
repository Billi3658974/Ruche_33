import React from 'react';

const DiscordWidget: React.FC = () => {
  return (
    <div id="discord" className="mt-12 mb-8 bg-[#5865F2] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
      <div className="px-6 py-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-full">
            <svg className="w-10 h-10 text-white" viewBox="0 0 127.14 96.36" fill="currentColor">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c2.36-24.44-5.42-48.18-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.25-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Rejoins la Ruche sur Discord</h3>
            <p className="text-indigo-100 mt-1">L'organisation quotidienne, les débats et la coordination se passent ici.</p>
          </div>
        </div>
        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#5865F2] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-50 transition-colors whitespace-nowrap"
        >
          Rejoindre le serveur
        </a>
      </div>
    </div>
  );
};

export default DiscordWidget;
