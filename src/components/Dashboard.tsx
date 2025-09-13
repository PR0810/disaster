import React from 'react';
import { Shield, Trophy, BookOpen, Target, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react';

interface DashboardProps {
  user: { name: string; level: number; points: number };
}

export default function Dashboard({ user }: DashboardProps) {
  const preparednessScore = 78;
  const badges = [
    { id: 1, name: 'Fire Safety Expert', icon: '🔥', earned: true },
    { id: 2, name: 'Earthquake Prepared', icon: '🌍', earned: true },
    { id: 3, name: 'First Aid Hero', icon: '🏥', earned: true },
    { id: 4, name: 'Emergency Kit Master', icon: '🎒', earned: false },
    { id: 5, name: 'Drill Champion', icon: '🏃', earned: false },
  ];

  const recentActivity = [
    { id: 1, activity: 'Completed Fire Safety Module', time: '2 hours ago', points: 50 },
    { id: 2, activity: 'Participated in Earthquake Drill', time: '1 day ago', points: 75 },
    { id: 3, activity: 'Quiz: Natural Disasters', time: '3 days ago', points: 30 },
  ];

  const upcomingDrills = [
    { id: 1, type: 'Fire Evacuation', date: 'Tomorrow 2:00 PM', building: 'Main Building' },
    { id: 2, type: 'Tornado Drill', date: 'Friday 10:00 AM', building: 'Science Wing' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
        <p className="text-blue-100">Ready to continue your safety journey?</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Preparedness Score</p>
              <p className="text-3xl font-bold text-green-600">{preparednessScore}%</p>
            </div>
            <div className="relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-200"/>
                <circle 
                  cx="32" 
                  cy="32" 
                  r="28" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="transparent" 
                  strokeDasharray={`${preparednessScore * 1.76} 176`}
                  className="text-green-500"
                />
              </svg>
              <Shield className="absolute inset-0 m-auto h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Points</p>
              <p className="text-3xl font-bold text-blue-600">{user.points.toLocaleString()}</p>
            </div>
            <Trophy className="h-10 w-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Level</p>
              <p className="text-3xl font-bold text-purple-600">{user.level}</p>
            </div>
            <Target className="h-10 w-10 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Modules Completed</p>
              <p className="text-3xl font-bold text-orange-600">8/12</p>
            </div>
            <BookOpen className="h-10 w-10 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievement Badges */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="h-6 w-6 text-yellow-600 mr-2" />
            Your Badges
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {badges.map((badge) => (
              <div key={badge.id} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border-2 ${
                  badge.earned 
                    ? 'bg-yellow-100 border-yellow-300' 
                    : 'bg-gray-100 border-gray-300 opacity-50'
                }`}>
                  {badge.icon}
                </div>
                <p className="text-xs mt-2 text-gray-600 truncate">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">{item.activity}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.time}
                    </p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
                  +{item.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Drills */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="h-6 w-6 text-red-600 mr-2" />
          Upcoming Emergency Drills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingDrills.map((drill) => (
            <div key={drill.id} className="border-2 border-dashed border-red-200 rounded-lg p-4 bg-red-50">
              <h3 className="font-bold text-red-800">{drill.type}</h3>
              <p className="text-red-600 flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1" />
                {drill.date}
              </p>
              <p className="text-sm text-red-600">{drill.building}</p>
              <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                Set Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}