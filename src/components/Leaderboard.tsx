import React from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users, Target, Zap, Star } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  school: string;
  points: number;
  level: number;
  badges: number;
  streak: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

export default function Leaderboard() {
  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Sarah Chen', school: 'Lincoln High School', points: 4850, level: 12, badges: 15, streak: 28 },
    { rank: 2, name: 'Marcus Johnson', school: 'Roosevelt Academy', points: 4720, level: 11, badges: 14, streak: 22 },
    { rank: 3, name: 'Emily Rodriguez', school: 'Washington College', points: 4650, level: 11, badges: 13, streak: 18 },
    { rank: 4, name: 'Alex Kim', school: 'Jefferson University', points: 4580, level: 10, badges: 12, streak: 15, isCurrentUser: true },
    { rank: 5, name: 'Jordan Smith', school: 'Madison High School', points: 4420, level: 10, badges: 11, streak: 12 },
    { rank: 6, name: 'Taylor Brown', school: 'Adams College', points: 4350, level: 9, badges: 10, streak: 9 },
    { rank: 7, name: 'Cameron Davis', school: 'Monroe Academy', points: 4280, level: 9, badges: 10, streak: 7 },
    { rank: 8, name: 'Riley Wilson', school: 'Jackson University', points: 4150, level: 8, badges: 9, streak: 14 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-orange-600" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3: return 'bg-gradient-to-r from-orange-400 to-orange-600';
      default: return 'bg-white';
    }
  };

  const stats = [
    { label: 'Total Players', value: '12,847', icon: Users, color: 'text-blue-600' },
    { label: 'This Week\'s Top Score', value: '4,850', icon: Target, color: 'text-green-600' },
    { label: 'Average Points', value: '2,340', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Active Streaks', value: '1,205', icon: Zap, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Leaderboard 🏆</h1>
        <p className="text-yellow-100">See how you rank among safety champions</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">🏆 Top Champions</h2>
        <div className="flex items-end justify-center space-x-8">
          {/* Second Place */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div className="bg-gray-100 rounded-lg p-4 min-h-[120px] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{leaderboard[1].name}</h3>
                <p className="text-sm text-gray-600">{leaderboard[1].school}</p>
                <p className="text-xl font-bold text-gray-700 mt-2">{leaderboard[1].points.toLocaleString()}</p>
              </div>
              <Medal className="h-6 w-6 text-gray-400 mx-auto" />
            </div>
          </div>

          {/* First Place */}
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
              <Crown className="h-16 w-16 text-white" />
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 min-h-[140px] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{leaderboard[0].name}</h3>
                <p className="text-sm text-gray-600">{leaderboard[0].school}</p>
                <p className="text-2xl font-bold text-yellow-600 mt-2">{leaderboard[0].points.toLocaleString()}</p>
              </div>
              <Crown className="h-8 w-8 text-yellow-500 mx-auto" />
            </div>
          </div>

          {/* Third Place */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div className="bg-orange-50 rounded-lg p-4 min-h-[120px] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{leaderboard[2].name}</h3>
                <p className="text-sm text-gray-600">{leaderboard[2].school}</p>
                <p className="text-xl font-bold text-orange-600 mt-2">{leaderboard[2].points.toLocaleString()}</p>
              </div>
              <Medal className="h-6 w-6 text-orange-600 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">All Rankings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {leaderboard.map((entry) => (
            <div 
              key={entry.rank}
              className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                entry.isCurrentUser ? 'bg-blue-50 border-2 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {getRankIcon(entry.rank)}
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>

                {/* User Info */}
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-900">{entry.name}</h3>
                    {entry.isCurrentUser && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{entry.school}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">Level {entry.level}</span>
                    <span className="text-xs text-gray-500">{entry.badges} badges</span>
                    <span className="text-xs text-orange-500 flex items-center">
                      <Zap className="h-3 w-3 mr-1" />
                      {entry.streak} day streak
                    </span>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">{entry.points.toLocaleString()}</p>
                <p className="text-sm text-gray-600">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Challenge */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">🚀 Climb the Rankings!</h2>
            <p className="text-purple-100 mb-4">Complete challenges to earn more points and climb higher</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                <span className="text-sm font-semibold">Next goal: Rank #3</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                <span className="text-sm font-semibold">Need: 70 more points</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <TrendingUp className="h-16 w-16 text-white opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}