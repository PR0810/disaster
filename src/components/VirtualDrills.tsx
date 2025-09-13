import React, { useState } from 'react';
import { Shield, Play, Clock, Users, CheckCircle, AlertTriangle, Target, Timer } from 'lucide-react';

interface Drill {
  id: number;
  title: string;
  type: string;
  description: string;
  duration: string;
  participants: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  scenario: string;
  completed: boolean;
  score?: number;
  points: number;
}

export default function VirtualDrills() {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const drills: Drill[] = [
    {
      id: 1,
      title: 'Fire Evacuation Drill',
      type: 'Fire Emergency',
      description: 'Practice proper evacuation procedures during a fire emergency.',
      duration: '10 min',
      participants: 1247,
      difficulty: 'Easy',
      scenario: 'Fire detected in the chemistry lab on the 3rd floor',
      completed: true,
      score: 95,
      points: 150
    },
    {
      id: 2,
      title: 'Earthquake Response Drill',
      type: 'Natural Disaster',
      description: 'Learn drop, cover, and hold techniques during an earthquake.',
      duration: '8 min',
      participants: 892,
      difficulty: 'Medium',
      scenario: 'Magnitude 6.2 earthquake hits during class time',
      completed: true,
      score: 87,
      points: 200
    },
    {
      id: 3,
      title: 'Tornado Shelter Drill',
      type: 'Severe Weather',
      description: 'Practice seeking shelter during tornado warnings.',
      duration: '12 min',
      participants: 634,
      difficulty: 'Medium',
      scenario: 'Tornado warning issued for the area during lunch break',
      completed: false,
      points: 175
    },
    {
      id: 4,
      title: 'Active Shooter Response',
      type: 'Security Threat',
      description: 'Learn run, hide, fight protocols during security threats.',
      duration: '15 min',
      participants: 543,
      difficulty: 'Hard',
      scenario: 'Security threat reported in the main building',
      completed: false,
      points: 250
    },
    {
      id: 5,
      title: 'Chemical Spill Response',
      type: 'Hazmat Emergency',
      description: 'Proper procedures for chemical spill emergencies.',
      duration: '20 min',
      participants: 321,
      difficulty: 'Hard',
      scenario: 'Chemical spill in science laboratory during experiment',
      completed: false,
      points: 300
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Fire Emergency': return 'bg-red-100 text-red-800';
      case 'Natural Disaster': return 'bg-blue-100 text-blue-800';
      case 'Severe Weather': return 'bg-purple-100 text-purple-800';
      case 'Security Threat': return 'bg-orange-100 text-orange-800';
      case 'Hazmat Emergency': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const startDrill = (drill: Drill) => {
    setSelectedDrill(drill);
    setIsSimulating(true);
    
    // Simulate drill completion after 3 seconds
    setTimeout(() => {
      setIsSimulating(false);
      // You would handle actual drill completion here
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Virtual Emergency Drills 🚨</h1>
        <p className="text-red-100">Practice life-saving skills in realistic simulations</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Drills Completed</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-blue-600">91%</p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Time Practiced</p>
              <p className="text-2xl font-bold text-purple-600">18 min</p>
            </div>
            <Timer className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Points Earned</p>
              <p className="text-2xl font-bold text-orange-600">350</p>
            </div>
            <Shield className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Drill Simulation Modal */}
      {isSimulating && selectedDrill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drill in Progress</h3>
              <p className="text-gray-600 mb-4">{selectedDrill.title}</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800 font-medium">Scenario:</p>
                <p className="text-sm text-red-700">{selectedDrill.scenario}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Drills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drills.map((drill) => (
          <div key={drill.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {drill.completed ? (
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{drill.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(drill.type)}`}>
                        {drill.type}
                      </span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(drill.difficulty)}`}>
                        {drill.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">{drill.points}</div>
                  <div className="text-xs text-gray-600">points</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{drill.description}</p>

              {/* Scenario */}
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-xs font-semibold text-gray-700 mb-1">SCENARIO:</p>
                <p className="text-sm text-gray-800">{drill.scenario}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{drill.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{drill.participants.toLocaleString()}</span>
                  </div>
                </div>
                {drill.completed && drill.score && (
                  <div className="font-semibold text-green-600">
                    Score: {drill.score}%
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => startDrill(drill)}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  drill.completed
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                <Play className="h-4 w-4" />
                <span>{drill.completed ? 'Practice Again' : 'Start Drill'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}