'use client';

import { useState, useEffect, useMemo } from 'react';
import { Users, Share2, Save, Trash2, Download, Upload, TrendingUp } from 'lucide-react';
import { Digimon, TeamMember, Element } from '@/types/digimon';
import { getSampleDigimonData } from '@/lib/data-loader';
import DigimonSelector from './DigimonSelector';
import TeamStats from './TeamStats';

export default function TeamBuilderClient() {
  const [allDigimon, setAllDigimon] = useState<Digimon[]>([]);
  const [team, setTeam] = useState<TeamMember[]>(
    Array.from({ length: 6 }, (_, i) => ({ slot: i }))
  );
  const [memoryCap, setMemoryCap] = useState(60);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [showSelector, setShowSelector] = useState(false);

  // Load Digimon data
  useEffect(() => {
    const loadData = async () => {
      // TODO: Replace with actual data loader when available
      const data = getSampleDigimonData();
      setAllDigimon(data);
    };
    loadData();

    // Load saved team from localStorage
    const saved = localStorage.getItem('dts_team_state_v1');
    if (saved) {
      try {
        const { members, memoryCap: savedCap } = JSON.parse(saved);
        if (members && savedCap) {
          setTeam(members);
          setMemoryCap(savedCap);
        }
      } catch (e) {
        console.error('Failed to load saved team:', e);
      }
    }
  }, []);

  // Save team to localStorage
  useEffect(() => {
    if (team.some((m) => m.digimon)) {
      localStorage.setItem(
        'dts_team_state_v1',
        JSON.stringify({ members: team, memoryCap })
      );
    }
  }, [team, memoryCap]);

  // Calculate team stats
  const teamStats = useMemo(() => {
    const memoryUsed = team.reduce(
      (sum, member) => sum + (member.digimon?.memory || 0),
      0
    );

    const elements: Record<Element, number> = {
      Fire: 0,
      Water: 0,
      Plant: 0,
      Earth: 0,
      Wind: 0,
      Light: 0,
      Dark: 0,
      Electric: 0,
      Ice: 0,
      Neutral: 0,
    };

    let totalSpeed = 0;
    let count = 0;

    team.forEach((member) => {
      if (member.digimon) {
        elements[member.digimon.element]++;
        totalSpeed += member.digimon.baseStats.speed;
        count++;
      }
    });

    const avgSpeed = count > 0 ? Math.round(totalSpeed / count) : 0;

    return {
      memoryUsed,
      memoryCap,
      elements,
      avgSpeed,
      teamSize: count,
    };
  }, [team, memoryCap]);

  const addDigimon = (digimon: Digimon, slot: number) => {
    const newTeam = [...team];
    newTeam[slot] = { slot, digimon };
    setTeam(newTeam);
    setShowSelector(false);
    setSelectedSlot(null);
  };

  const removeDigimon = (slot: number) => {
    const newTeam = [...team];
    newTeam[slot] = { slot };
    setTeam(newTeam);
  };

  const clearTeam = () => {
    if (confirm('Clear all team members?')) {
      setTeam(Array.from({ length: 6 }, (_, i) => ({ slot: i })));
      localStorage.removeItem('dts_team_state_v1');
    }
  };

  const shareTeam = () => {
    const teamData = {
      members: team
        .filter((m) => m.digimon)
        .map((m) => ({ id: m.digimon!.id, slot: m.slot })),
      memoryCap,
    };
    const encoded = btoa(JSON.stringify(teamData));
    const url = `${window.location.origin}/tools/team-builder?team=${encoded}`;
    navigator.clipboard.writeText(url);
    alert('Team link copied to clipboard!');
  };

  const exportTeam = () => {
    const data = JSON.stringify({ team, memoryCap }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'digimon-team.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Controls */}
      <div className="card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Memory Cap
              </label>
              <input
                type="number"
                value={memoryCap}
                onChange={(e) => setMemoryCap(parseInt(e.target.value) || 60)}
                min="20"
                max="200"
                className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <div className="font-semibold">
                {teamStats.memoryUsed} / {teamStats.memoryCap}
              </div>
              <div>Memory Used</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={shareTeam}
              disabled={teamStats.teamSize === 0}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={exportTeam}
              disabled={teamStats.teamSize === 0}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={clearTeam}
              disabled={teamStats.teamSize === 0}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>

        {/* Memory Warning */}
        {teamStats.memoryUsed > teamStats.memoryCap && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-700 dark:text-red-400 font-medium">
              ⚠️ Team exceeds memory cap by {teamStats.memoryUsed - teamStats.memoryCap}!
            </p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Team Grid */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary-600" />
              Your Team ({teamStats.teamSize}/6)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.map((member) => (
                <div
                  key={member.slot}
                  className={`relative border-2 rounded-lg p-4 transition-all ${
                    member.digimon
                      ? 'border-primary-300 dark:border-primary-700 bg-white dark:bg-gray-800'
                      : 'border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50'
                  }`}
                >
                  {member.digimon ? (
                    <>
                      {/* Digimon Card */}
                      <div className="text-center">
                        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-4xl font-bold text-gray-300 dark:text-gray-600">
                            {member.digimon.name.charAt(0)}
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          {member.digimon.name}
                        </h3>
                        <div className="flex flex-wrap gap-1 justify-center mb-2">
                          <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded">
                            {member.digimon.stage}
                          </span>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                            {member.digimon.element}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Memory: {member.digimon.memory}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeDigimon(member.slot)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        aria-label="Remove Digimon"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Empty Slot */}
                      <button
                        onClick={() => {
                          setSelectedSlot(member.slot);
                          setShowSelector(true);
                        }}
                        className="w-full h-full min-h-[200px] flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-400 dark:hover:border-primary-600 transition-all"
                      >
                        <div className="text-5xl mb-2">+</div>
                        <div className="text-sm font-medium">Add Digimon</div>
                        <div className="text-xs">Slot {member.slot + 1}</div>
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats Sidebar */}
        <div className="lg:col-span-1">
          <TeamStats stats={teamStats} />
        </div>
      </div>

      {/* Digimon Selector Modal */}
      {showSelector && selectedSlot !== null && (
        <DigimonSelector
          allDigimon={allDigimon}
          onSelect={(digimon) => addDigimon(digimon, selectedSlot)}
          onClose={() => {
            setShowSelector(false);
            setSelectedSlot(null);
          }}
        />
      )}
    </div>
  );
}
