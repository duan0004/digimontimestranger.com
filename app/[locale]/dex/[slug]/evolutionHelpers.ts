/**
 * Helper functions to build evolution graph data from simple evolution lists
 */

type DigimonNode = {
  slug: string;
  name: string;
  attr?: string;
  stage?: string;
};

type EdgeConditions = {
  rank?: number;
  hp?: number;
  atk?: number;
  def?: number;
  spd?: number;
  personality?: string;
  item?: string;
  time?: string;
};

type DigimonEdge = {
  from: string;
  to: string;
  method: string;
  conditions: EdgeConditions;
  sources: string[];
  confidence: number;
};

/**
 * Convert a digimon name to a slug-like id
 * Since we don't have actual slugs for evolution targets, we'll create simple ids
 */
function nameToId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Build evolution graph data from simple evolution lists
 */
export function buildEvolutionGraphData(
  currentSlug: string,
  currentName: string,
  currentStage: string | undefined,
  currentAttribute: string | undefined,
  evolvesFrom: string[],
  evolvesTo: string[]
): {
  centerSlug: string;
  nodes: DigimonNode[];
  edges: DigimonEdge[];
} {
  const nodes: DigimonNode[] = [];
  const edges: DigimonEdge[] = [];

  // Add center node (current digimon)
  nodes.push({
    slug: currentSlug,
    name: currentName,
    stage: currentStage,
    attr: currentAttribute,
  });

  // Add "evolves from" nodes and edges
  evolvesFrom.forEach((name) => {
    const id = nameToId(name);
    nodes.push({
      slug: id,
      name: name,
      stage: undefined, // We don't have this info
      attr: undefined,
    });
    edges.push({
      from: id,
      to: currentSlug,
      method: "evolution",
      conditions: {},
      sources: [],
      confidence: 1.0,
    });
  });

  // Add "evolves to" nodes and edges
  evolvesTo.forEach((name) => {
    const id = nameToId(name);
    nodes.push({
      slug: id,
      name: name,
      stage: undefined,
      attr: undefined,
    });
    edges.push({
      from: currentSlug,
      to: id,
      method: "evolution",
      conditions: {},
      sources: [],
      confidence: 1.0,
    });
  });

  return {
    centerSlug: currentSlug,
    nodes,
    edges,
  };
}

/**
 * Check if we should show the evolution graph
 * (only show if there are evolution relationships)
 */
export function shouldShowEvolutionGraph(
  evolvesFrom: string[],
  evolvesTo: string[]
): boolean {
  return evolvesFrom.length > 0 || evolvesTo.length > 0;
}
