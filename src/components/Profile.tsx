import React from 'react';
import { User, Award, TrendingUp, Calendar, Settings, BookOpen, Trophy, Target, Clock, Mail, School, MapPin } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  school: string;
  grade: string;
  joinDate: string;
  avatar?: string;
  level: number;
  points: number;
  completedModules: number;
  totalModules: number;
  badges: Badge[];
  achievements: Achievement[];
  stats: UserStats;
}

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  dateEarned: string;
  points: number;
}

interface UserStats {
  drillsCompleted: number;
  gamesPlayed: number;
  totalTimeSpent: string;
  streakDays: number;
  rank: number;
  preparednessScore: number;
}

export default function Profile() {
  const userProfile: UserProfile = {
    name: 'Alex Kim',
    email: 'alex.kim@university.edu',
    school: 'Jefferson University',
    grade: 'Sophomore',
    joinDate: 'January 15, 2024',
    level: 10,
    points: 4580,
    completedModules: 8,
    totalModules: 12,
    badges: [
      { id: 1, name: 'Fire Safety Expert', description: 'Completed all fire safety modules', icon: '🔥', earnedDate: '2024-02-15', rarity: 'epic' },
      { id: 2, name: 'Earthquake Prepared', description: 'Mastered earthquake response techniques', icon: '🌍', earnedDate: '2024-02-20', rarity: 'rare' },
      { id: 3, name: 'First Aid Hero', description: 'Completed advanced first aid training', icon: '🏥', earnedDate: '2024-02-28', rarity: 'rare' },
      { id: 4, name: 'Quick Learner', description: 'Completed 5 modules in one week', icon: '⚡', earnedDate: '2024-03-05', rarity: 'common' },
      { id: 5, name: 'Perfect Score', description: 'Achieved 100% on any assessment', icon: '💯', earnedDate: '2024-03-10', rarity: 'epic' },
    ],
    achievements: [
      { id: 1, title: 'Module Master', description: 'Completed 8 learning modules', dateEarned: '2024-03-12', points: 200 },
      { id: 2, title: 'Drill Champion', description: 'Participated in 10 virtual drills', dateEarned: '2024-03-08', points: 150 },
      { id: 3, title: 'Game Expert', description: 'Played all available safety games', dateEarned: '2024-03-01', points: 100 },
    ],
    stats: {
      drillsCompleted: 12,
      gamesPlayed: 8,
      totalTimeSpent: '24 hours',
      streakDays: 15,
      rank: 4,
      preparednessScore: 78
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 border-gray-300 text-gray-800';
      case 'rare': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'epic': return 'bg-purple-100 border-purple-300 text-purple-800';
      case 'legendary': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const progressPercentage = (userProfile.completedModules / userProfile.totalModules) * 100;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
            <div className="flex items-center space-x-4 text-blue-100">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center space-x-1">
                <School className="h-4 w-4" />
                <span>{userProfile.school}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {userProfile.joinDate}</span>
              </div>
            </div>
          </div>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Level</span>
            <Trophy className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{userProfile.level}</p>
          <p className="text-sm text-gray-600">{userProfile.points} points</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <BookOpen className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{Math.round(progressPercentage)}%</p>
          <p className="text-sm text-gray-600">{userProfile.completedModules}/{userProfile.totalModules} modules</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Rank</span>
            <Target className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">#{userProfile.stats.rank}</p>
          <p className="text-sm text-gray-600">Leaderboard</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Streak</span>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{userProfile.stats.streakDays}</p>
          <p className="text-sm text-gray-600">days</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Badges Collection */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="h-6 w-6 text-yellow-500 mr-2" />
            Badge Collection ({userProfile.badges.length})
          </h2>
          <div className="space-y-3">
            {userProfile.badges.map((badge) => (
              <div key={badge.id} className={`p-4 rounded-lg border-2 ${getRarityColor(badge.rarity)}`}>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{badge.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold">{badge.name}</h3>
                    <p className="text-sm opacity-75">{badge.description}</p>
                    <p className="text-xs opacity-60 mt-1">Earned: {badge.earnedDate}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold uppercase ${getRarityColor(badge.rarity)}`}>
                    {badge.rarity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Trophy className="h-6 w-6 text-orange-500 mr-2" />
            Recent Achievements
          </h2>
          <div className="space-y-4">
            {userProfile.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500">{achievement.dateEarned}</p>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
                  +{achievement.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
          Detailed Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{userProfile.completedModules}</h3>
            <p className="text-gray-600">Modules Completed</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{userProfile.stats.drillsCompleted}</h3>
            <p className="text-gray-600">Drills Completed</p>
            <p className="text-sm text-gray-500 mt-2">Average Score: 91%</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{userProfile.stats.totalTimeSpent}</h3>
            <p className="text-gray-600">Time Spent Learning</p>
            <p className="text-sm text-gray-500 mt-2">{userProfile.stats.gamesPlayed} games played</p>
          </div>
        </div>
      </div>
    </div>
  );
}