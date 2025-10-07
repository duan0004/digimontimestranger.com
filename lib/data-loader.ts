import Papa from 'papaparse';
import { Digimon, EvolutionPath } from '@/types/digimon';
import fs from 'fs';
import path from 'path';

/**
 * CSV Row interface matching the schema
 */
interface DigimonCSVRow {
  id: string;
  slug: string;
  name: string;
  stage: string;
  attribute: string;
  element: string;
  memory: string;
  base_hp: string;
  base_atk: string;
  base_def: string;
  base_sp_atk: string;
  base_sp_def: string;
  base_speed: string;
  skills: string;
  locations: string;
  evolves_to: string;
  devolves_to: string;
  notes?: string;
  imageUrl?: string;
}

/**
 * Parse evolution paths from JSON string
 */
function parseEvolutionPaths(jsonString: string): EvolutionPath[] {
  if (!jsonString || jsonString.trim() === '' || jsonString === '[]') {
    return [];
  }

  try {
    const parsed = JSON.parse(jsonString);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to parse evolution path:', jsonString, error);
    return [];
  }
}

/**
 * Convert CSV row to Digimon object
 */
function csvRowToDigimon(row: DigimonCSVRow): Digimon {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    stage: row.stage as Digimon['stage'],
    attribute: row.attribute as Digimon['attribute'],
    element: row.element as Digimon['element'],
    memory: parseInt(row.memory, 10),
    baseStats: {
      hp: parseInt(row.base_hp, 10),
      atk: parseInt(row.base_atk, 10),
      def: parseInt(row.base_def, 10),
      spAtk: parseInt(row.base_sp_atk, 10),
      spDef: parseInt(row.base_sp_def, 10),
      speed: parseInt(row.base_speed, 10),
    },
    skills: row.skills ? row.skills.split(';').map((s) => s.trim()) : [],
    locations: row.locations ? row.locations.split(';').map((l) => l.trim()) : [],
    evolvesTo: parseEvolutionPaths(row.evolves_to),
    devolvesTo: parseEvolutionPaths(row.devolves_to),
    notes: row.notes || undefined,
    imageUrl: row.imageUrl || undefined,
  };
}

/**
 * Load all Digimon data from CSV file
 */
export async function loadDigimonData(): Promise<Digimon[]> {
  const csvPath = path.join(process.cwd(), 'data', 'digimon.csv');

  // Check if file exists
  if (!fs.existsSync(csvPath)) {
    console.warn('Digimon CSV file not found, returning sample data');
    return getSampleDigimonData();
  }

  const fileContent = fs.readFileSync(csvPath, 'utf-8');

  return new Promise((resolve, reject) => {
    Papa.parse<DigimonCSVRow>(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const digimon = results.data.map(csvRowToDigimon);
        resolve(digimon);
      },
      error: (error: Error) => {
        console.error('Error parsing CSV:', error);
        reject(error);
      },
    });
  });
}

/**
 * Get Digimon by slug
 */
export async function getDigimonBySlug(slug: string): Promise<Digimon | null> {
  const allDigimon = await loadDigimonData();
  return allDigimon.find((d) => d.slug === slug) || null;
}

/**
 * Get all Digimon slugs (for static generation)
 */
export async function getAllDigimonSlugs(): Promise<string[]> {
  const allDigimon = await loadDigimonData();
  return allDigimon.map((d) => d.slug);
}

/**
 * Filter Digimon by various criteria
 */
export async function filterDigimon(filters: {
  stage?: string;
  attribute?: string;
  element?: string;
  search?: string;
}): Promise<Digimon[]> {
  const allDigimon = await loadDigimonData();

  return allDigimon.filter((d) => {
    if (filters.stage && d.stage !== filters.stage) return false;
    if (filters.attribute && d.attribute !== filters.attribute) return false;
    if (filters.element && d.element !== filters.element) return false;
    if (
      filters.search &&
      !d.name.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });
}

/**
 * Sample data for initial development
 */
export function getSampleDigimonData(): Digimon[] {
  return [
    {
      id: '0001',
      slug: 'agumon',
      name: 'Agumon',
      stage: 'Rookie',
      attribute: 'Vaccine',
      element: 'Fire',
      memory: 4,
      baseStats: {
        hp: 55,
        atk: 62,
        def: 45,
        spAtk: 40,
        spDef: 40,
        speed: 55,
      },
      skills: ['Pepper Breath', 'Claw Swipe'],
      locations: ['Shinjuku', 'Digital Park'],
      evolvesTo: [
        {
          target: 'greymon',
          targetName: 'Greymon',
          req: { level: 15 },
        },
      ],
      devolvesTo: [],
      notes: 'Classic Fire-type Rookie Digimon, excellent starter choice',
      tags: ['dps', 'starter'],
    },
    {
      id: '0015',
      slug: 'greymon',
      name: 'Greymon',
      stage: 'Champion',
      attribute: 'Vaccine',
      element: 'Fire',
      memory: 8,
      baseStats: {
        hp: 85,
        atk: 95,
        def: 75,
        spAtk: 60,
        spDef: 70,
        speed: 65,
      },
      skills: ['Mega Flame', 'Tail Whip'],
      locations: ['Digital Highlands'],
      evolvesTo: [
        {
          target: 'metalgreymon',
          targetName: 'MetalGreymon',
          req: { level: 30 },
        },
      ],
      devolvesTo: [
        {
          target: 'agumon',
          targetName: 'Agumon',
          req: {},
        },
      ],
      tags: ['dps', 'tank'],
    },
    {
      id: '0020',
      slug: 'veemon',
      name: 'Veemon',
      stage: 'Rookie',
      attribute: 'Free',
      element: 'Light',
      memory: 4,
      baseStats: {
        hp: 52,
        atk: 58,
        def: 48,
        spAtk: 45,
        spDef: 45,
        speed: 60,
      },
      skills: ['Vee Headbutt', 'Punch'],
      locations: ['Shibuya'],
      evolvesTo: [
        {
          target: 'exveemon',
          targetName: 'ExVeemon',
          req: { level: 16 },
        },
      ],
      devolvesTo: [],
      tags: ['dps', 'fast'],
    },
  ];
}
