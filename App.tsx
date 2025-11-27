import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Governance from './components/Governance';
import Agenda from './components/Agenda';
import PopularUniversity from './components/PopularUniversity';
import MapSection from './components/MapSection';
import DiscordWidget from './components/DiscordWidget';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Home />
            <DiscordWidget />
          </>
        );
      case 'governance':
        return <Governance />;
      case 'map':
        return <MapSection />;
      case 'agenda':
        return <Agenda />;
      case 'university':
        return <PopularUniversity />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
