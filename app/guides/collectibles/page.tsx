import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Link from 'next/link';
import { Star, AlertTriangle, MapPin, Trophy, CheckCircle2, Package, Lock, Eye } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Collectibles Guide - Complete List & Locations',
  description: 'Complete guide to all collectibles in Digimon Time Stranger. Find every Ancient Tablet Fragment, rare item, and hidden treasure across all 9 chapters.',
  path: '/guides/collectibles',
});

interface Collectible {
  name: string;
  type: 'tablet' | 'item' | 'equipment' | 'digimon';
  location: string;
  description: string;
  missable: boolean;
  requirement?: string;
}

interface ChapterCollectibles {
  chapter: number;
  title: string;
  location: string;
  totalCollectibles: number;
  collectibles: Collectible[];
}

const allCollectibles: ChapterCollectibles[] = [
  {
    chapter: 1,
    title: 'The Beginning',
    location: 'File Island',
    totalCollectibles: 5,
    collectibles: [
      {
        name: 'HP Chip A',
        type: 'equipment',
        location: 'File Island Forest - Hidden in bushes near the first save point',
        description: 'Increases max HP by 100. Found in the northwestern section of the forest.',
        missable: false,
      },
      {
        name: 'Offense Chip',
        type: 'equipment',
        location: 'Village of Beginnings - Gift from the village elder after defeating Kuwagamon',
        description: 'Increases Attack by 15. Automatically received after boss battle.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #1',
        type: 'tablet',
        location: 'Kuwagamon\'s Lair - Behind the boss arena',
        description: 'Required for True Ending. Check behind Kuwagamon\'s throne after defeating him.',
        missable: false,
      },
      {
        name: 'Medium HP Recovery x3',
        type: 'item',
        location: 'File Island Beach - Inside a treasure chest on the eastern shore',
        description: 'Useful healing items for early game. Chest is visible from the path.',
        missable: false,
      },
      {
        name: 'Betamon',
        type: 'digimon',
        location: 'File Island River - 15% spawn rate near the waterfall',
        description: 'Water-type Rookie Digimon. Keep searching the river area to recruit.',
        missable: false,
      },
    ],
  },
  {
    chapter: 2,
    title: 'Dark Shadows',
    location: 'Infinity Mountain',
    totalCollectibles: 6,
    collectibles: [
      {
        name: 'Speed Chip',
        type: 'equipment',
        location: 'Infinity Mountain Path - Climbing section, on a narrow ledge',
        description: 'Increases Speed by 20. Requires careful platforming to reach.',
        missable: false,
      },
      {
        name: 'Defense Chip A',
        type: 'equipment',
        location: 'Mountain Cave - Inside the dark maze section, southeast corner',
        description: 'Increases Defense by 25. Bring a light source or follow the wall.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #2',
        type: 'tablet',
        location: 'Devimon\'s Chamber - On the altar after defeating Devimon',
        description: 'Required for True Ending. Automatically visible after boss fight.',
        missable: false,
      },
      {
        name: 'Mega MP Recovery x2',
        type: 'item',
        location: 'Mountain Summit - Hidden chest behind the giant statue',
        description: 'Restores 200 SP. Very useful for boss battles.',
        missable: false,
      },
      {
        name: 'Dark Talisman',
        type: 'equipment',
        location: 'Secret Cave - Accessible only if you refused Devimon\'s power offer',
        description: 'Grants resistance to Dark attacks. Opens path to secret cave.',
        missable: true,
        requirement: 'Refuse Devimon\'s power in dialogue choice',
      },
      {
        name: 'Bakemon',
        type: 'digimon',
        location: 'Infinity Mountain Graveyard - 12% spawn rate at night only',
        description: 'Ghost-type Digimon. Only appears after 8 PM in-game time.',
        missable: false,
      },
    ],
  },
  {
    chapter: 3,
    title: 'Desert Kingdom',
    location: 'Server Desert',
    totalCollectibles: 7,
    collectibles: [
      {
        name: 'Speed Chip B',
        type: 'equipment',
        location: 'Oasis Village - Hidden in a clay pot in the northwestern house',
        description: 'Increases Speed by 30. Break all pots to find it.',
        missable: false,
      },
      {
        name: 'Water Talisman',
        type: 'equipment',
        location: 'Oasis Village - Reward from the village elder after liberation',
        description: 'Reduces desert heat damage. Essential for exploration.',
        missable: false,
      },
      {
        name: 'HP Chip C',
        type: 'equipment',
        location: 'Pyramid of Sun - Treasure chamber after defeating Meramon',
        description: 'Increases max HP by 250. In the pyramid\'s final room.',
        missable: false,
      },
      {
        name: 'Ice Talisman',
        type: 'equipment',
        location: 'Pyramid of Moon - Behind the frozen waterfall on the third floor',
        description: 'Grants Ice attack bonus. Use fire attack to melt the waterfall.',
        missable: false,
      },
      {
        name: 'Mega MP Recovery x3',
        type: 'item',
        location: 'Underground Tunnel - Side chamber guarded by two Drimogemon',
        description: 'Fight the guards to access the treasure room.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #3',
        type: 'tablet',
        location: 'Etemon\'s Throne Room - Found on his throne after victory',
        description: 'Required for True Ending. Continues the prophecy.',
        missable: false,
      },
      {
        name: 'Desert Crown',
        type: 'equipment',
        location: 'Sun Pyramid Secret Chamber - Opens after defeating Etemon',
        description: 'Boosts Special Attack by 15%. MISSABLE if you don\'t return!',
        missable: true,
        requirement: 'Return to Sun Pyramid after defeating Etemon',
      },
    ],
  },
  {
    chapter: 4,
    title: 'Vampire\'s Lair',
    location: 'Geko Swamp',
    totalCollectibles: 8,
    collectibles: [
      {
        name: 'HP Chip D',
        type: 'equipment',
        location: 'Swamp Entrance - Floating platform puzzle reward',
        description: 'Increases max HP by 300. Complete the lily pad jumping puzzle.',
        missable: false,
      },
      {
        name: 'Swamp Pendant',
        type: 'equipment',
        location: 'Poison Marsh - Inside a submerged chest',
        description: 'Grants poison immunity. Drain the marsh first to access.',
        missable: false,
      },
      {
        name: 'Dark Library Key',
        type: 'item',
        location: 'Castle Courtyard - Defeat the 3 Bakemon guards',
        description: 'Opens the restricted library section. Required for secret backstory.',
        missable: false,
      },
      {
        name: 'Myotismon\'s Journal',
        type: 'item',
        location: 'Castle Library - Restricted section, requires Dark Library Key',
        description: 'Reveals Myotismon\'s backstory. Required for True Ending path.',
        missable: true,
        requirement: 'Use Dark Library Key to access restricted section',
      },
      {
        name: 'Crimson Cape',
        type: 'equipment',
        location: 'Castle Tower - Myotismon\'s treasure room after defeating him',
        description: 'Increases evasion by 20%. Boss victory reward.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #4',
        type: 'tablet',
        location: 'Castle Crypts - Hidden behind a moveable statue',
        description: 'Required for True Ending. Push the eastern statue to reveal passage.',
        missable: false,
      },
      {
        name: 'Mega HP Recovery x5',
        type: 'item',
        location: 'Castle Underground - Secret vault (combination: 7-3-9)',
        description: 'Restores full HP. Combination found in Myotismon\'s Journal.',
        missable: false,
      },
      {
        name: 'Veemon',
        type: 'digimon',
        location: 'Geko Swamp Depths - 5% spawn rate OR guaranteed from "Lost Dragon" side quest',
        description: 'Rare Dragon-type Digimon. Quest is easier than grinding.',
        missable: false,
      },
    ],
  },
  {
    chapter: 5,
    title: 'Dark Masters Rise',
    location: 'Spiral Mountain',
    totalCollectibles: 9,
    collectibles: [
      {
        name: 'Mirror of Truth',
        type: 'item',
        location: 'Spiral Mountain Entrance - Hidden in the first crystal cave',
        description: 'CRITICAL: Required to unlock hidden choice in Piedmon fight! DO NOT MISS!',
        missable: true,
        requirement: 'Examine the glowing crystal formation at entrance',
      },
      {
        name: 'Speed Chip C',
        type: 'equipment',
        location: 'Illusion Garden 1st Trial - Complete the mirror maze',
        description: 'Increases Speed by 40. Navigate mirrors correctly to reach treasure.',
        missable: false,
      },
      {
        name: 'HP Chip E',
        type: 'equipment',
        location: 'Illusion Garden 2nd Trial - Defeat all shadow clones',
        description: 'Increases max HP by 400. Fight appears after solving light puzzle.',
        missable: false,
      },
      {
        name: 'Illusion Breaker',
        type: 'equipment',
        location: 'Illusion Garden 3rd Trial - Complete the truth/lie challenge',
        description: 'See through enemy illusions. Answer: Truth, Lie, Truth, Truth, Lie.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #5',
        type: 'tablet',
        location: 'Spiral Mountain Peak - After Piedmon battle',
        description: 'Required for True Ending. Found at the summit altar.',
        missable: false,
      },
      {
        name: 'Jester\'s Mask',
        type: 'equipment',
        location: 'Piedmon\'s Stage - Victory reward',
        description: 'Increases Critical Rate by 25%. Automatic after boss.',
        missable: false,
      },
      {
        name: 'Partner Bond Charm',
        type: 'equipment',
        location: 'Secret Garden - Only accessible if you refused Piedmon\'s choice correctly',
        description: '+20 Friendship with all partners. Required "Mirror of Truth" to unlock.',
        missable: true,
        requirement: 'Use Mirror of Truth during Piedmon\'s sacrifice choice',
      },
      {
        name: 'Mega All Recovery x2',
        type: 'item',
        location: 'Spiral Mountain Treasury - Behind four elemental locks',
        description: 'Restores HP/SP to party. Solve fire, water, earth, wind puzzles.',
        missable: false,
      },
      {
        name: 'Renamon',
        type: 'digimon',
        location: 'Spiral Mountain Caves - 8% spawn rate in crystal chambers',
        description: 'Rare Beast-type Digimon. Higher spawn in areas with crystals.',
        missable: false,
      },
    ],
  },
  {
    chapter: 6,
    title: 'Steel Factory',
    location: 'Machine City',
    totalCollectibles: 8,
    collectibles: [
      {
        name: 'Defense Chip C',
        type: 'equipment',
        location: 'Factory Entrance - Inside the control room safe',
        description: 'Increases Defense by 50. Safe code: 1-9-3-7.',
        missable: false,
      },
      {
        name: 'Debug Program',
        type: 'item',
        location: 'Research Lab - Complete the "Save the Machines" side quest',
        description: 'CRITICAL: Saves reprogrammed Digimon. Required for True Ending!',
        missable: true,
        requirement: 'Choose to save machines, complete programming mini-game',
      },
      {
        name: 'HP Chip F',
        type: 'equipment',
        location: 'Assembly Line Floor 3 - Navigate conveyor belt puzzle',
        description: 'Increases max HP by 500. Timing puzzle with moving platforms.',
        missable: false,
      },
      {
        name: 'Titanium Plating',
        type: 'equipment',
        location: 'Machinedramon\'s Arsenal - Victory reward',
        description: 'Reduces physical damage by 20%. Boss drop.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #6',
        type: 'tablet',
        location: 'Central Processing Unit - Inside the main computer',
        description: 'Required for True Ending. Access CPU after Machinedramon battle.',
        missable: false,
      },
      {
        name: 'Overclock Module',
        type: 'equipment',
        location: 'Secret Factory - Unlocked by saving machine Digimon',
        description: 'Grants 2 actions per turn (once per battle). Debug Program reward.',
        missable: true,
        requirement: 'Complete "Save the Machines" side quest successfully',
      },
      {
        name: 'Full Restore x4',
        type: 'item',
        location: 'Factory Warehouse - Hidden behind stacked crates',
        description: 'Restores HP/SP/Status. Push crates in correct order to access.',
        missable: false,
      },
      {
        name: 'Guilmon',
        type: 'digimon',
        location: 'Machine City Secret Area - Behind the green security door',
        description: 'Virus-type Dragon Digimon. Door opens after CPU is accessed.',
        missable: false,
      },
    ],
  },
  {
    chapter: 7,
    title: 'Ocean Depths',
    location: 'Net Ocean',
    totalCollectibles: 9,
    collectibles: [
      {
        name: 'Aqua Ring',
        type: 'equipment',
        location: 'Ocean Surface - Fishing mini-game reward (3 rare fish)',
        description: 'Unlimited underwater breathing. Required for exploration.',
        missable: false,
      },
      {
        name: 'Speed Chip D',
        type: 'equipment',
        location: 'Coral Reef - Inside a giant clam shell',
        description: 'Increases Speed by 50. Clam opens when approached correctly.',
        missable: false,
      },
      {
        name: 'Ocean Pearl',
        type: 'item',
        location: 'Underwater Temple - Complete all 3 partner side quests',
        description: 'CRITICAL: Required for True Ending. Proves partner bonds.',
        missable: true,
        requirement: 'Complete all 3 partner trials in underwater temple',
      },
      {
        name: 'HP Chip G',
        type: 'equipment',
        location: 'Sunken Ship - Captain\'s quarters treasure chest',
        description: 'Increases max HP by 600. Navigate shipwreck maze.',
        missable: false,
      },
      {
        name: 'Tidal Charm',
        type: 'equipment',
        location: 'Whirlpool Cavern - Solve the current direction puzzle',
        description: 'Swim against strong currents. Puzzle: N, E, S, W, N, E.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #7',
        type: 'tablet',
        location: 'MetalSeadramon\'s Lair - Behind his throne underwater',
        description: 'Required for True Ending. Swim to the back after victory.',
        missable: false,
      },
      {
        name: 'Leviathan Scale',
        type: 'equipment',
        location: 'MetalSeadramon - Boss victory reward',
        description: 'Increases Water attack power by 30%. Automatic drop.',
        missable: false,
      },
      {
        name: 'Ancient Trident',
        type: 'equipment',
        location: 'Temple Inner Sanctum - Complete all partner quests',
        description: 'Powerful water weapon. Ocean Pearl quest completion reward.',
        missable: true,
        requirement: 'Obtain Ocean Pearl from partner quests',
      },
      {
        name: 'Mega Elixir x3',
        type: 'item',
        location: 'Deep Sea Trench - Deepest point of the ocean',
        description: 'Fully restores party HP/SP. Requires Aqua Ring to reach.',
        missable: false,
      },
    ],
  },
  {
    chapter: 8,
    title: 'Sky High Battle',
    location: 'Cloud Continent',
    totalCollectibles: 8,
    collectibles: [
      {
        name: 'Wind Pendant',
        type: 'equipment',
        location: 'Cloud Village - Gift from rescued villagers',
        description: 'Prevents fall damage. Story reward.',
        missable: false,
      },
      {
        name: 'HP Chip H',
        type: 'equipment',
        location: 'Floating Islands - Cloud jumping challenge reward',
        description: 'Increases max HP by 700. Master cloud platforming.',
        missable: false,
      },
      {
        name: 'Toy Factory Key',
        type: 'item',
        location: 'Cloud Maze - Hidden in the northwestern cloud formation',
        description: 'MISSABLE: Opens Toy Factory. Get BEFORE Puppetmon fight!',
        missable: true,
        requirement: 'Find before confronting Puppetmon in Toy Forest',
      },
      {
        name: 'Defense Chip D',
        type: 'equipment',
        location: 'Toy Forest - Inside the giant teddy bear',
        description: 'Increases Defense by 75. Enter through the bear\'s back.',
        missable: false,
      },
      {
        name: 'Ancient Tablet Fragment #8',
        type: 'tablet',
        location: 'Puppetmon\'s Playhouse - On the game board after battle',
        description: 'Required for True Ending. Visible after defeating Puppetmon.',
        missable: false,
      },
      {
        name: 'Puppet Strings',
        type: 'equipment',
        location: 'Puppetmon - Boss victory reward',
        description: 'Control weak enemies. Useful for recruitment.',
        missable: false,
      },
      {
        name: 'Toy Soldier Army',
        type: 'item',
        location: 'Secret Toy Factory - Accessible with Toy Factory Key',
        description: 'Summon allies in battle. Key must be found pre-boss.',
        missable: true,
        requirement: 'Use Toy Factory Key before Puppetmon battle',
      },
      {
        name: 'Ultimate Restore x2',
        type: 'item',
        location: 'Cloud Castle - Top of the highest tower',
        description: 'Full party revival. Climb to the very top.',
        missable: false,
      },
    ],
  },
  {
    chapter: 9,
    title: 'The Final Battle',
    location: 'Dark Area',
    totalCollectibles: 10,
    collectibles: [
      {
        name: 'Ancient Tablet Fragment #9',
        type: 'tablet',
        location: 'Trial of Courage - Complete all four elemental trials',
        description: 'FINAL FRAGMENT! Required for True Ending. Complete all trials.',
        missable: false,
      },
      {
        name: 'HP Chip MAX',
        type: 'equipment',
        location: 'Trial of Wisdom - Solve the ancient riddles',
        description: 'Increases max HP by 999. Hardest puzzle in game.',
        missable: false,
      },
      {
        name: 'Speed Chip MAX',
        type: 'equipment',
        location: 'Trial of Strength - Defeat 10 waves of enemies',
        description: 'Increases Speed by 99. Endurance challenge.',
        missable: false,
      },
      {
        name: 'Defense Chip MAX',
        type: 'equipment',
        location: 'Trial of Hope - Survive 5 minutes without attacking',
        description: 'Increases Defense by 99. Pure survival test.',
        missable: false,
      },
      {
        name: 'Apocalymon\'s Core',
        type: 'item',
        location: 'Apocalymon - Guaranteed drop after first defeat',
        description: 'Key item for post-game. Story drop.',
        missable: false,
      },
      {
        name: 'Wings of Hope',
        type: 'equipment',
        location: 'True Ending - Reward for achieving True Ending',
        description: 'Ultimate accessory. Requires all fragments + max friendship.',
        missable: true,
        requirement: 'Meet all True Ending requirements',
      },
      {
        name: 'Dark Digivice',
        type: 'item',
        location: 'Hidden Chamber - Behind Apocalymon\'s throne',
        description: 'Unlocks dark evolution paths. Post-victory exploration.',
        missable: false,
      },
      {
        name: 'Infinity Key',
        type: 'item',
        location: 'Sealed Vault - Collect all 9 Ancient Tablet Fragments',
        description: 'Unlocks Infinity Tower in post-game. Fragment reward.',
        missable: false,
        requirement: 'Collect all 9 Ancient Tablet Fragments',
      },
      {
        name: 'Mega Phoenix x5',
        type: 'item',
        location: 'Final Treasure Room - Behind the four guardian statues',
        description: 'Revives and fully heals. Defeat 4 statue guardians.',
        missable: false,
      },
      {
        name: 'Omnimon DNA',
        type: 'item',
        location: 'Secret Finale - True Ending exclusive scene',
        description: 'Enables Omnimon fusion. True Ending reward only.',
        missable: true,
        requirement: 'Achieve True Ending (all requirements)',
      },
    ],
  },
];

export default function CollectiblesPage() {
  const totalCollectibles = allCollectibles.reduce((sum, chapter) => sum + chapter.totalCollectibles, 0);
  const totalMissable = allCollectibles.reduce(
    (sum, chapter) => sum + chapter.collectibles.filter(c => c.missable).length,
    0
  );
  const totalTablets = allCollectibles.reduce(
    (sum, chapter) => sum + chapter.collectibles.filter(c => c.type === 'tablet').length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="card p-8 mb-8 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Complete Collectibles Guide</h1>
              <p className="text-amber-100 mt-2">Find every hidden treasure and collectible across all 9 chapters</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{totalCollectibles}</div>
              <div className="text-sm text-amber-100">Total Collectibles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{totalMissable}</div>
              <div className="text-sm text-amber-100">Missable Items</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{totalTablets}</div>
              <div className="text-sm text-amber-100">Tablet Fragments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">9</div>
              <div className="text-sm text-amber-100">Chapters</div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="card p-6 mb-8 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-2">⚠️ Critical Missable Items</h3>
              <p className="text-red-800 dark:text-red-200 mb-3">
                Some collectibles are PERMANENTLY MISSABLE if not collected during specific chapters. Pay special attention to items marked with the <AlertTriangle className="w-4 h-4 inline text-red-600" /> icon!
              </p>
              <div className="space-y-1 text-sm text-red-700 dark:text-red-300">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span><strong>Chapter 5:</strong> Mirror of Truth (CRITICAL for True Ending)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span><strong>Chapter 6:</strong> Debug Program (Required for True Ending)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span><strong>Chapter 7:</strong> Ocean Pearl (Complete all partner quests)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span><strong>Chapter 8:</strong> Toy Factory Key (Before Puppetmon fight)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter-by-Chapter Guide */}
        <div className="space-y-6">
          {allCollectibles.map((chapter) => (
            <div key={chapter.chapter} className="card p-6">
              {/* Chapter Header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {chapter.chapter}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{chapter.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{chapter.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{chapter.totalCollectibles}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Collectibles</div>
                  {chapter.collectibles.filter(c => c.missable).length > 0 && (
                    <div className="mt-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold rounded">
                      {chapter.collectibles.filter(c => c.missable).length} MISSABLE
                    </div>
                  )}
                </div>
              </div>

              {/* Collectibles List */}
              <div className="space-y-4">
                {chapter.collectibles.map((item, index) => {
                  const typeColors: Record<string, string> = {
                    tablet: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
                    equipment: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                    item: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
                    digimon: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
                  };

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        item.missable
                          ? 'bg-red-50 dark:bg-red-900/10 border-red-300 dark:border-red-800'
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {item.missable && (
                          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                        )}
                        {item.type === 'tablet' && (
                          <Star className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                        )}
                        {!item.missable && item.type !== 'tablet' && (
                          <CheckCircle2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                        )}

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                            <span className={`px-2 py-1 text-xs font-bold rounded border ${typeColors[item.type]}`}>
                              {item.type.toUpperCase()}
                            </span>
                            {item.missable && (
                              <span className="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded">
                                MISSABLE
                              </span>
                            )}
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300">
                                <strong>Location:</strong> {item.location}
                              </span>
                            </div>

                            <div className="flex items-start gap-2">
                              <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300">{item.description}</span>
                            </div>

                            {item.requirement && (
                              <div className="flex items-start gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
                                <Lock className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-yellow-800 dark:text-yellow-200">
                                  <strong>Requirement:</strong> {item.requirement}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Completion Checklist */}
        <div className="card p-8 mt-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="w-7 h-7 text-green-600" />
            100% Completion Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Ancient Tablet Fragments (9/9)</h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {allCollectibles.map((chapter) => {
                  const tablet = chapter.collectibles.find(c => c.type === 'tablet');
                  return tablet ? (
                    <div key={chapter.chapter} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-purple-600" />
                      <span>Chapter {chapter.chapter}: {tablet.name}</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">Critical Missables</h3>
              <div className="space-y-2 text-sm">
                {allCollectibles.flatMap(chapter =>
                  chapter.collectibles
                    .filter(c => c.missable && c.requirement)
                    .map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item.name} - {item.requirement}</span>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <strong className="text-blue-900 dark:text-blue-300">Pro Tip:</strong>
            <span className="text-gray-700 dark:text-gray-300 ml-2">
              For True Ending, you MUST collect all 9 Ancient Tablet Fragments, Mirror of Truth, Debug Program, and Ocean Pearl. Mark these as priority!
            </span>
          </div>
        </div>

        {/* Related Guides */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Link
            href="/guides/story-branches"
            className="card p-6 hover:shadow-lg transition-shadow text-center"
          >
            <Trophy className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Story Branches</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learn about endings</p>
          </Link>

          <Link
            href="/walkthrough"
            className="card p-6 hover:shadow-lg transition-shadow text-center"
          >
            <Book className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Walkthrough</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Chapter guides</p>
          </Link>

          <Link
            href="/guides"
            className="card p-6 hover:shadow-lg transition-shadow text-center"
          >
            <Book className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">All Guides</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">View all guides</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
