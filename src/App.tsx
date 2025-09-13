import React, { useState } from 'react';
import Layout from './components/Layout';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import LearningModules from './components/LearningModules';
import VirtualDrills from './components/VirtualDrills';
import Games from './components/Games';
import Leaderboard from './components/Leaderboard';
import EmergencyTools from './components/EmergencyTools';
import Profile from './components/Profile';

interface User {
  name: string;
  level: number;
  points: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleSOS = () => {
    // SOS functionality - would integrate with real emergency systems
    alert('🆘 Emergency alert sent!\n\nCampus security has been notified.\nHelp is on the way to your location.');
  };

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'learning':
        return <LearningModules />;
      case 'drills':
        return <VirtualDrills />;
      case 'games':
        return <Games />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'emergency':
        return <EmergencyTools />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      user={user}
      onSOS={handleSOS}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;