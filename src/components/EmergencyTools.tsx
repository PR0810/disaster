import React, { useState } from 'react';
import { Phone, MapPin, AlertTriangle, Clock, Shield, Users, Heart, Zap, Info } from 'lucide-react';

interface EmergencyContact {
  id: number;
  name: string;
  type: 'emergency' | 'school' | 'medical' | 'support';
  number: string;
  description: string;
  available247: boolean;
}

export default function EmergencyTools() {
  const [selectedTab, setSelectedTab] = useState<'contacts' | 'sos' | 'checklist' | 'info'>('contacts');
  const [sosActivated, setSosActivated] = useState(false);

  const emergencyContacts: EmergencyContact[] = [
    {
      id: 1,
      name: 'Emergency Services',
      type: 'emergency',
      number: '911',
      description: 'Police, Fire, Medical emergencies',
      available247: true
    },
    {
      id: 2,
      name: 'Campus Security',
      type: 'school',
      number: '(555) 123-4567',
      description: 'Campus security and safety',
      available247: true
    },
    {
      id: 3,
      name: 'Campus Health Center',
      type: 'medical',
      number: '(555) 123-4568',
      description: 'Medical assistance and health services',
      available247: false
    },
    {
      id: 4,
      name: 'Crisis Support',
      type: 'support',
      number: '(555) 123-4569',
      description: 'Mental health and crisis counseling',
      available247: true
    },
    {
      id: 5,
      name: 'Facilities Management',
      type: 'school',
      number: '(555) 123-4570',
      description: 'Building maintenance and hazards',
      available247: false
    },
    {
      id: 6,
      name: 'Poison Control',
      type: 'medical',
      number: '1-800-222-1222',
      description: 'Poison control and chemical emergencies',
      available247: true
    }
  ];

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'emergency': return <AlertTriangle className="h-6 w-6 text-red-600" />;
      case 'school': return <Shield className="h-6 w-6 text-blue-600" />;
      case 'medical': return <Heart className="h-6 w-6 text-green-600" />;
      case 'support': return <Users className="h-6 w-6 text-purple-600" />;
      default: return <Phone className="h-6 w-6 text-gray-600" />;
    }
  };

  const getContactColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'bg-red-50 border-red-200';
      case 'school': return 'bg-blue-50 border-blue-200';
      case 'medical': return 'bg-green-50 border-green-200';
      case 'support': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const activateSOS = () => {
    setSosActivated(true);
    // Simulate sending SOS
    setTimeout(() => {
      setSosActivated(false);
    }, 3000);
  };

  const emergencyChecklist = [
    { id: 1, item: 'Stay calm and assess the situation', checked: false },
    { id: 2, item: 'Ensure personal safety first', checked: false },
    { id: 3, item: 'Call appropriate emergency services', checked: false },
    { id: 4, item: 'Provide clear location information', checked: false },
    { id: 5, item: 'Follow instructions from emergency responders', checked: false },
    { id: 6, item: 'Do not hang up until told to do so', checked: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Emergency Tools 🆘</h1>
        <p className="text-red-100">Quick access to emergency resources and contacts</p>
      </div>

      {/* SOS Button - Always Visible */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-red-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency SOS</h2>
          <p className="text-gray-600 mb-6">Press and hold for 3 seconds to send emergency alert</p>
          <button
            onClick={activateSOS}
            disabled={sosActivated}
            className={`w-32 h-32 rounded-full text-white text-xl font-bold transition-all transform ${
              sosActivated
                ? 'bg-orange-500 scale-110 animate-pulse'
                : 'bg-red-600 hover:bg-red-700 hover:scale-105'
            }`}
          >
            {sosActivated ? (
              <div className="flex flex-col items-center">
                <Zap className="h-8 w-8 mb-1" />
                <span className="text-sm">SENDING</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <AlertTriangle className="h-8 w-8 mb-1" />
                <span>SOS</span>
              </div>
            )}
          </button>
          {sosActivated && (
            <p className="text-orange-600 font-semibold mt-4 animate-pulse">
              🚨 Emergency alert sent to campus security and emergency contacts
            </p>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {[
              { id: 'contacts', label: 'Emergency Contacts', icon: Phone },
              { id: 'sos', label: 'SOS Info', icon: AlertTriangle },
              { id: 'checklist', label: 'Emergency Steps', icon: Shield },
              { id: 'info', label: 'Safety Info', icon: Info }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center space-x-2 ${
                  selectedTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Emergency Contacts Tab */}
          {selectedTab === 'contacts' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts Directory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`rounded-xl p-4 border-2 ${getContactColor(contact.type)} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getContactIcon(contact.type)}
                        <div>
                          <h4 className="font-bold text-gray-900">{contact.name}</h4>
                          <p className="text-sm text-gray-600">{contact.description}</p>
                        </div>
                      </div>
                      {contact.available247 && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          24/7
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{contact.number}</span>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SOS Info Tab */}
          {selectedTab === 'sos' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">SOS System Information</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">How SOS Works</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Press and hold the SOS button for 3 seconds</li>
                    <li>• Your location is automatically detected and sent</li>
                    <li>• Campus security is immediately notified</li>
                    <li>• Emergency contacts receive your alert</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">What Information is Sent</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Your exact GPS coordinates</li>
                    <li>• Building and room number (if available)</li>
                    <li>• Your name and student ID</li>
                    <li>• Timestamp of the emergency</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">False Alarm Policy</h4>
                  <p className="text-yellow-700 text-sm">
                    If you accidentally trigger SOS, immediately call campus security at (555) 123-4567 
                    to cancel the alert. Repeated false alarms may result in disciplinary action.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Emergency Checklist Tab */}
          {selectedTab === 'checklist' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Emergency Response Checklist</h3>
              <div className="space-y-3">
                {emergencyChecklist.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id={`checklist-${item.id}`}
                      className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                    />
                    <label htmlFor={`checklist-${item.id}`} className="text-gray-700 font-medium">
                      {item.item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety Info Tab */}
          {selectedTab === 'info' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Important Safety Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Fire Emergency
                    </h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Activate fire alarm</li>
                      <li>• Exit immediately via stairs</li>
                      <li>• Never use elevators</li>
                      <li>• Meet at designated assembly point</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Severe Weather
                    </h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Move to interior room on lowest floor</li>
                      <li>• Stay away from windows</li>
                      <li>• Listen for official announcements</li>
                      <li>• Wait for all-clear signal</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Medical Emergency
                    </h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Check for responsiveness</li>
                      <li>• Call 911 immediately</li>
                      <li>• Provide first aid if trained</li>
                      <li>• Stay with person until help arrives</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Assembly Points
                    </h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Main Building: North Parking Lot</li>
                      <li>• Science Wing: Athletic Field</li>
                      <li>• Dormitories: Central Quad</li>
                      <li>• Library: South Garden</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}