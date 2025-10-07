// Core Digimon data types based on CSV schema

export type Stage = 'Rookie' | 'Champion' | 'Ultimate' | 'Mega' | 'Ultra' | 'In-Training' | 'Fresh';
export type Attribute = 'Vaccine' | 'Virus' | 'Data' | 'Free';
export type Element =
  | 'Fire'
  | 'Water'
  | 'Plant'
  | 'Earth'
  | 'Wind'
  | 'Light'
  | 'Dark'
  | 'Electric'
  | 'Ice'
  | 'Neutral';

export interface DigimonStats {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
}

export interface EvolutionRequirement {
  level?: number;
  stats?: Partial<DigimonStats>;
  item?: string;
  personality?: string;
  friendship?: number;
  battles?: number;
}

export interface EvolutionPath {
  target: string; // slug of target Digimon
  targetName: string; // display name
  req: EvolutionRequirement;
}

export interface Digimon {
  id: string;
  slug: string;
  name: string;
  stage: Stage;
  attribute: Attribute;
  element: Element;
  memory: number;
  baseStats: DigimonStats;
  skills: string[];
  locations: string[];
  evolvesTo: EvolutionPath[];
  devolvesTo: EvolutionPath[];
  notes?: string;
  description?: string;
  tags?: string[]; // e.g., 'healer', 'tank', 'dps', 'support'
  imageUrl?: string; // URL to Digimon image
}

// Team Builder types
export interface TeamMember {
  slot: number;
  digimon?: Digimon;
}

export interface TeamStats {
  memoryUsed: number;
  memoryCap: number;
  elements: Record<Element, number>;
  attributes: Record<Attribute, number>;
  avgSpeed: number;
  roles: Record<string, number>;
}

export interface TeamState {
  members: TeamMember[];
  memoryCap: number;
}

// Guide types
export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: 'starter' | 'evolution' | 'strategy' | 'technical' | 'mechanics';
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  imageUrl?: string;
}

// SEO types
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
