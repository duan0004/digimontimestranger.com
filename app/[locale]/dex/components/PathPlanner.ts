export type Edge = { from: string; to: string; weight?: number; conditions?: any };
export type Plan = { path: string[]; steps: number; score: number };

/**
 * 增强版路径规划函数
 * 支持查找多条路径
 */
export function planPaths(
  start: string,
  goal: string,
  edges: Edge[],
  mode: "minSteps" | "minGate",
  maxPaths: number = 5
): Plan[] {
  const graph = new Map<string, string[]>();
  edges.forEach(e => {
    if (!graph.has(e.from)) graph.set(e.from, []);
    graph.get(e.from)!.push(e.to);
  });

  if (mode === "minSteps") {
    // BFS - 查找所有最短路径
    const q: string[][] = [[start]];
    const visited = new Map<string, number>(); // node -> shortest distance
    visited.set(start, 0);
    const plans: Plan[] = [];
    let shortestLength = Infinity;

    while (q.length && plans.length < maxPaths) {
      const path = q.shift()!;
      const last = path[path.length - 1];
      const currentDist = path.length - 1;

      // 如果已经找到更短路径，跳过
      if (currentDist > shortestLength) continue;

      if (last === goal) {
        plans.push({ path, steps: path.length - 1, score: path.length - 1 });
        shortestLength = Math.min(shortestLength, path.length - 1);
        continue;
      }

      (graph.get(last) || []).forEach(n => {
        const newDist = currentDist + 1;
        // 允许访问相同距离的节点（找到多条路径）
        if (!visited.has(n) || visited.get(n)! >= newDist) {
          visited.set(n, newDist);
          q.push([...path, n]);
        }
      });
    }

    return plans;
  }

  // Dijkstra算法 - 考虑进化条件的权重
  return dijkstraMultiPath(start, goal, edges, maxPaths);
}

/**
 * Dijkstra算法寻找多条路径
 */
function dijkstraMultiPath(
  start: string,
  goal: string,
  edges: Edge[],
  maxPaths: number
): Plan[] {
  const graph = new Map<string, { to: string; weight: number }[]>();

  // 构建加权图
  edges.forEach(e => {
    if (!graph.has(e.from)) graph.set(e.from, []);
    const gate = e.conditions ? Object.keys(e.conditions).length : 0;
    const weight = 1 + gate * 0.2; // 进化条件越多，权重越高
    graph.get(e.from)!.push({ to: e.to, weight });
  });

  const allNodes = new Set<string>(edges.flatMap(e => [e.from, e.to]));
  const plans: Plan[] = [];
  const foundPaths = new Set<string>(); // 避免重复路径

  // K shortest paths algorithm (Yen's algorithm简化版)
  for (let k = 0; k < maxPaths; k++) {
    const result = dijkstraSinglePath(start, goal, graph, allNodes, foundPaths);
    if (!result) break;

    plans.push(result);
    foundPaths.add(result.path.join('->'));
  }

  return plans;
}

/**
 * 单次Dijkstra搜索
 */
function dijkstraSinglePath(
  start: string,
  goal: string,
  graph: Map<string, { to: string; weight: number }[]>,
  allNodes: Set<string>,
  excludePaths: Set<string>
): Plan | null {
  const cost = new Map<string, number>();
  const prev = new Map<string, string | null>();
  const pq: { node: string; cost: number }[] = [];

  allNodes.forEach(n => cost.set(n, Infinity));
  cost.set(start, 0);
  prev.set(start, null);
  pq.push({ node: start, cost: 0 });

  while (pq.length) {
    // 找最小cost节点（简单实现，可用优先队列优化）
    pq.sort((a, b) => a.cost - b.cost);
    const { node: u } = pq.shift()!;

    if (u === goal) break;

    const neighbors = graph.get(u) || [];
    for (const { to, weight } of neighbors) {
      const alt = cost.get(u)! + weight;
      if (alt < cost.get(to)!) {
        cost.set(to, alt);
        prev.set(to, u);
        pq.push({ node: to, cost: alt });
      }
    }
  }

  // 重建路径
  const path: string[] = [];
  let cur: string | null | undefined = goal;
  while (cur) {
    path.unshift(cur);
    cur = prev.get(cur);
  }

  if (path[0] !== start || path.length === 0) return null;

  const pathKey = path.join('->');
  if (excludePaths.has(pathKey)) return null;

  return {
    path,
    steps: path.length - 1,
    score: cost.get(goal)!
  };
}
