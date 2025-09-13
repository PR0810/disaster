import React from 'react';
import { BookOpen, Clock, CheckCircle, Lock, Play, Award } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  completed: boolean;
  locked: boolean;
  category: string;
  points: number;
}

export default function LearningModules() {
  const modules: Module[] = [
    {
      id: 1,
      title: 'Fire Safety Fundamentals',
      description: 'Learn the basics of fire prevention, detection, and evacuation procedures.',
      duration: '30 min',
      difficulty: 'Beginner',
      progress: 100,
      completed: true,
      locked: false,
      category: 'Fire Safety',
      points: 100
    },
    {
      id: 2,
      title: 'Earthquake Preparedness',
      description: 'Understanding earthquake risks and proper response techniques.',
      duration: '45 min',
      difficulty: 'Intermediate',
      progress: 75,
      completed: false,
      locked: false,
      category: 'Natural Disasters',
      points: 150
    },
    {
      id: 3,
      title: 'First Aid Essentials',
      description: 'Basic first aid techniques for emergency situations.',
      duration: '60 min',
      difficulty: 'Beginner',
      progress: 100,
      completed: true,
      locked: false,
      category: 'Medical',
      points: 200
    },
    {
      id: 4,
      title: 'Severe Weather Response',
      description: 'Preparing for and responding to severe weather events.',
      duration: '40 min',
      difficulty: 'Intermediate',
      progress: 0,
      completed: false,
      locked: false,
      category: 'Natural Disasters',
      points: 175
    },
    {
      id: 5,
      title: 'Emergency Communication',
      description: 'Effective communication during crisis situations.',
      duration: '35 min',
      difficulty: 'Advanced',
      progress: 0,
      completed: false,
      locked: true,
      category: 'Communication',
      points: 225
    },
    {
      id: 6,
      title: 'Hazardous Materials Safety',
      description: 'Identifying and handling hazardous materials safely.',
      duration: '50 min',
      difficulty: 'Advanced',
      progress: 0,
      completed: false,
      locked: true,
      category: 'Chemical Safety',
      points: 300
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fire Safety': return 'bg-red-100 text-red-800';
      case 'Natural Disasters': return 'bg-blue-100 text-blue-800';
      case 'Medical': return 'bg-green-100 text-green-800';
      case 'Communication': return 'bg-purple-100 text-purple-800';
      case 'Chemical Safety': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Learning Modules 📚</h1>
        <p className="text-green-100">Master essential safety skills through interactive lessons</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">2</div>
            <div className="text-sm text-gray-600">Locked</div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div key={module.id} className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md ${module.locked ? 'opacity-75' : 'hover:scale-[1.02]'}`}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {module.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : module.locked ? (
                    <Lock className="h-6 w-6 text-gray-400" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-blue-500" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-600">{module.points} pts</span>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(module.category)}`}>
                  {module.category}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(module.difficulty)}`}>
                  {module.difficulty}
                </span>
              </div>

              {/* Duration and Progress */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
                {module.progress > 0 && (
                  <span className="font-medium">{module.progress}% Complete</span>
                )}
              </div>

              {/* Progress Bar */}
              {module.progress > 0 && (
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              )}

              {/* Action Button */}
              <button 
                disabled={module.locked}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-semibold transition-all ${
                  module.locked 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : module.completed
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : module.progress > 0
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {module.locked ? (
                  <>
                    <Lock className="h-4 w-4" />
                    <span>Locked</span>
                  </>
                ) : module.completed ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Review</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    <span>{module.progress > 0 ? 'Continue' : 'Start'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}