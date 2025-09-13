import React from 'react';
import { Gamepad2, Play, Trophy, Clock, Star, Users, Target, Zap } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: number;
  duration: string;
  points: number;
  rating: number;
  completed: boolean;
  highScore?: number;
}

export default function Games() {
  const games: Game[] = [
    {
      id: 1,
      title: 'Fire Escape Challenge',
      description: 'Navigate through a burning building to find the safest exit route.',
      category: 'Fire Safety',
      difficulty: 'Easy',
      players: 2847,
      duration: '5 min',
      points: 100,
      rating: 4.8,
      completed: true,
      highScore: 2450
    },
    {
      id: 2,
      title: 'Earthquake Survival Quest',
      description: 'Make split-second decisions during an earthquake emergency.',
      category: 'Natural Disasters',
      difficulty: 'Medium',
      players: 1923,
      duration: '8 min',
      points: 150,
      rating: 4.9,
      completed: true,
      highScore: 1875
    },
    {
      id: 3,
      title: 'First Aid Hero',
      description: 'Perform life-saving first aid procedures under time pressure.',
      category: 'Medical Emergency',
      difficulty: 'Medium',
      players: 1645,
      duration: '10 min',
      points: 200,
      rating: 4.7,
      completed: false
    },
    {
      id: 4,
      title: 'Emergency Kit Builder',
      description: 'Build the perfect emergency kit for different disaster scenarios.',
      category: 'Preparedness',
      difficulty: 'Easy',
      players: 3156,
      duration: '6 min',
      points: 125,
      rating: 4.6,
      completed: false
    },
    {
      id: 5,
      title: 'Hazmat Detective',
      description: 'Identify dangerous materials and take appropriate safety measures.',
      category: 'Chemical Safety',
      difficulty: 'Hard',
      players: 892,
      duration: '15 min',
      points: 300,
      rating: 4.9,
      completed: false
    },
    {
      id: 6,
      title: 'Communication Command',
      description: 'Coordinate emergency response using proper communication protocols.',
      category: 'Communication',
      difficulty: 'Hard',
      players: 567,
      duration: '12 min',
      points: 250,
      rating: 4.5,
      completed: false
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fire Safety': return 'bg-red-100 text-red-800';
      case 'Natural Disasters': return 'bg-blue-100 text-blue-800';
      case 'Medical Emergency': return 'bg-green-100 text-green-800';
      case 'Preparedness': return 'bg-purple-100 text-purple-800';
      case 'Chemical Safety': return 'bg-orange-100 text-orange-800';
      case 'Communication': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Safety Games 🎮</h1>
        <p className="text-purple-100">Learn through fun, interactive challenges</p>
      </div>

      {/* Game Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Games Played</p>
              <p className="text-2xl font-bold text-purple-600">2</p>
            </div>
            <Gamepad2 className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Score</p>
              <p className="text-2xl font-bold text-yellow-600">2450</p>
            </div>
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <p className="text-2xl font-bold text-green-600">4.8⭐</p>
            </div>
            <Star className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Points Earned</p>
              <p className="text-2xl font-bold text-blue-600">250</p>
            </div>
            <Zap className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all hover:scale-[1.02]">
            <div className="p-6">
              {/* Game Icon and Title */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{game.title}</h3>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{game.rating}</span>
                    </div>
                  </div>
                </div>
                {game.completed && (
                  <div className="text-right">
                    <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />
                    <div className="text-xs text-gray-600 mt-1">Completed</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{game.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(game.category)}`}>
                  {game.category}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>

              {/* Game Stats */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{game.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{game.players.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4 text-orange-500" />
                  <span className="font-semibold text-orange-600">{game.points} pts</span>
                </div>
              </div>

              {/* High Score */}
              {game.highScore && (
                <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-yellow-800">Your High Score</span>
                    <span className="text-lg font-bold text-yellow-600">{game.highScore.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Play Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2">
                <Play className="h-4 w-4" />
                <span>{game.completed ? 'Play Again' : 'Play Now'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Challenge */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">🏆 Weekly Challenge</h2>
            <p className="text-yellow-100 mb-4">Complete 3 games this week to earn bonus points!</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                <span className="text-sm font-semibold">Progress: 2/3</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2">
                <span className="text-sm font-semibold">Reward: 500 pts</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-6xl">🎯</div>
          </div>
        </div>
      </div>
    </div>
  );
}