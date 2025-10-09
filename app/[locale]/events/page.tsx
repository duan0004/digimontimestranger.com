'use client';

import { useState } from 'react';
import { Calendar, Clock, Trophy, Gift, Zap, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface GameEvent {
  id: string;
  title: string;
  type: 'update' | 'dlc' | 'community' | 'seasonal';
  date: string;
  endDate?: string;
  description: string;
  status: 'upcoming' | 'active' | 'ended';
  rewards?: string[];
}

const events: GameEvent[] = [
  {
    id: 'winter-festival-2025',
    title: 'Winter Festival Event',
    type: 'seasonal',
    date: '2025-12-15',
    endDate: '2026-01-05',
    description: 'Special winter-themed event with exclusive snow Digimon, limited-time quests, and festive rewards!',
    status: 'upcoming',
    rewards: ['Snowagumon', 'Frigimon Skin', 'Winter Crown', 'Ice Crystal x50'],
  },
  {
    id: 'patch-1-5-0',
    title: 'Patch 1.5.0 - Balance Update',
    type: 'update',
    date: '2025-11-20',
    description: 'Major balance patch addressing community feedback. Includes boss difficulty adjustments and new QoL features.',
    status: 'upcoming',
  },
  {
    id: 'halloween-2025',
    title: 'Halloween Spooky Event',
    type: 'seasonal',
    date: '2025-10-20',
    endDate: '2025-11-03',
    description: 'Halloween event featuring ghost-type Digimon, haunted mansion dungeon, and exclusive cosmetics.',
    status: 'active',
    rewards: ['Phantomon', 'Pumpkin Helmet', 'Spooky Badge', 'Candy x100'],
  },
  {
    id: 'dlc-2-lost-kingdom',
    title: 'DLC: The Lost Kingdom',
    type: 'dlc',
    date: '2025-09-15',
    description: 'New story chapter featuring an ancient lost kingdom, 30+ new Digimon, and exclusive mega evolutions.',
    status: 'ended',
    rewards: ['5 New Mega Evolutions', 'Lost Kingdom Map', 'Ancient Armor Set'],
  },
  {
    id: 'summer-championship',
    title: 'Summer Championship Tournament',
    type: 'community',
    date: '2025-08-01',
    endDate: '2025-08-31',
    description: 'Monthly PvP tournament with exclusive rewards for top players. Compete in ranked battles!',
    status: 'ended',
    rewards: ['Champion Trophy', 'Legendary Skin', 'Title: Summer Champion'],
  },
  {
    id: 'patch-1-4-2',
    title: 'Patch 1.4.2 - Bug Fixes',
    type: 'update',
    date: '2025-07-10',
    description: 'Hotfix addressing critical bugs and performance issues. Improved stability and load times.',
    status: 'ended',
  },
  {
    id: 'spring-festival',
    title: 'Spring Renewal Festival',
    type: 'seasonal',
    date: '2025-04-01',
    endDate: '2025-04-20',
    description: 'Celebrate spring with flower-themed events, gardening mini-games, and nature Digimon.',
    status: 'ended',
    rewards: ['Floramon', 'Spring Crown', 'Flower Seeds x100', 'Rainbow Badge'],
  },
  {
    id: 'anniversary-event',
    title: '1st Anniversary Celebration',
    type: 'community',
    date: '2025-03-15',
    endDate: '2025-03-31',
    description: 'One year anniversary event! Free rewards, double XP weekend, and special anniversary challenges.',
    status: 'ended',
    rewards: ['Anniversary Cake', 'Golden Ticket', 'Exclusive Digivice Skin', 'EXP Boost x10'],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventTypeColors: Record<string, { bg: string; text: string; icon: any }> = {
  update: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', icon: Zap },
  dlc: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', icon: Gift },
  community: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', icon: Users },
  seasonal: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', icon: Trophy },
};

const eventStatusColors: Record<string, string> = {
  upcoming: 'border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20',
  active: 'border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20',
  ended: 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800',
};

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    return matchesType && matchesStatus;
  });

  const upcomingCount = events.filter(e => e.status === 'upcoming').length;
  const activeCount = events.filter(e => e.status === 'active').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Events Calendar</h1>
              <p className="text-indigo-100 mt-2">Stay updated with game events, updates, and community activities</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{upcomingCount}</div>
              <div className="text-sm text-indigo-100">Upcoming</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{activeCount}</div>
              <div className="text-sm text-indigo-100">Active Now</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{events.length}</div>
              <div className="text-sm text-indigo-100">Total Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm text-indigo-100">Event Types</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Filter Events</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All Types
                </button>
                {Object.entries(eventTypeColors).map(([type, { bg, text, icon: Icon }]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                      selectedType === type
                        ? 'bg-primary-600 text-white'
                        : `${bg} ${text} hover:opacity-80`
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedStatus('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedStatus === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All Status
                </button>
                {['upcoming', 'active', 'ended'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStatus === status
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="card p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No events found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters</p>
            </div>
          ) : (
            filteredEvents.map((event) => {
              const typeConfig = eventTypeColors[event.type];
              const TypeIcon = typeConfig.icon;

              return (
                <div
                  key={event.id}
                  className={`card p-6 border-2 ${eventStatusColors[event.status]} transition-all hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4">
                    {/* Date Section */}
                    <div className="flex-shrink-0 text-center">
                      <div className="w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex flex-col items-center justify-center text-white">
                        <div className="text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs uppercase">
                          {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      {event.status === 'active' && (
                        <div className="mt-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded animate-pulse">
                          LIVE
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 ${typeConfig.bg} ${typeConfig.text} text-xs font-bold rounded`}>
                              <TypeIcon className="w-3 h-3" />
                              {event.type.toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 text-xs font-bold rounded ${
                              event.status === 'upcoming' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                              event.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                              'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
                            }`}>
                              {event.status.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="text-right flex-shrink-0">
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          {event.endDate && (
                            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <ChevronRight className="w-4 h-4" />
                              <span>{new Date(event.endDate).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {event.description}
                      </p>

                      {event.rewards && event.rewards.length > 0 && (
                        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded">
                          <div className="flex items-start gap-2">
                            <Gift className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-amber-900 dark:text-amber-300">Rewards:</strong>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {event.rewards.map((reward, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs font-medium rounded"
                                  >
                                    {reward}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Subscribe CTA */}
        <div className="card p-8 mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Never Miss an Event!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Follow our social media channels or enable notifications to stay updated on all upcoming events, updates, and special activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              View All Updates
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Users className="w-5 h-5" />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
