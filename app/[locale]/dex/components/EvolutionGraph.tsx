"use client";
import React, { useEffect, useRef, useCallback } from "react";
import cytoscape, { ElementsDefinition } from "cytoscape";
import dagre from "cytoscape-dagre";
import { useTranslations } from "next-intl";
(cytoscape as any).use(dagre as any);

type EdgeCond = { rank?: number; hp?: number; atk?: number; def?: number; spd?: number; personality?: string; item?: string; time?: string; };
type Edge = { from: string; to: string; method: string; conditions: EdgeCond; sources: string[]; confidence: number; };
type Props = { centerSlug: string; nodes: { slug: string; name: string; attr?: string; stage?: string; }[]; edges: Edge[]; };

export default function EvolutionGraph({ centerSlug, nodes, edges }: Props) {
  const t = useTranslations("dex.graph");
  const formatConditions = useCallback((c: EdgeCond) => {
    const parts: string[] = [];
    if (c.rank !== undefined) parts.push(t("rank", { value: c.rank }));
    if (c.hp !== undefined) parts.push(t("hp", { value: c.hp }));
    if (c.atk !== undefined) parts.push(t("atk", { value: c.atk }));
    if (c.def !== undefined) parts.push(t("def", { value: c.def }));
    if (c.spd !== undefined) parts.push(t("spd", { value: c.spd }));
    if (c.item) parts.push(t("item", { value: c.item }));
    if (c.personality) parts.push(t("personality", { value: c.personality }));
    if (c.time) parts.push(t("time", { value: c.time }));
    return parts.join(" / ");
  }, [t]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const elements: ElementsDefinition = {
      nodes: nodes.map(n => ({
        data: { id: n.slug, label: n.name, stage: n.stage, attr: n.attr }
      })),
      edges: edges.map(e => ({
        data: { id: `${e.from}->${e.to}`, source: e.from, target: e.to, label: formatConditions(e.conditions) }
      }))
    };
    const cy = cytoscape({
      container: ref.current,
      elements,
      layout: { name: "dagre", rankDir: "LR", nodeSep: 40, edgeSep: 20, rankSep: 80 },
      style: [
        { selector: "node",
          style: { "label": "data(label)", "text-valign": "center", "background-color": "#9bd" } },
        { selector: `node[id = "${centerSlug}"]`,
          style: { "background-color": "#ffcc00", "border-width": 3, "border-color": "#333" } },
        { selector: "edge",
          style: { "curve-style": "bezier", "target-arrow-shape": "triangle", "label": "data(label)", "font-size": 10 } }
      ]
    });
    return () => cy.destroy();
  }, [centerSlug, nodes, edges, formatConditions]);
  return <div className="w-full h-[360px] sm:h-[480px] md:h-[520px] rounded-xl border" ref={ref} />;
}
