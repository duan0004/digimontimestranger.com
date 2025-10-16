export interface DigimonListEntry {
  slug: string;
  name?: string;
  name_en?: string;
  name_ja?: string;
}

export type DigimonLookup = Map<string, DigimonListEntry>;

export const normalizeNameKey = (value?: string | null) => {
  if (!value) return "";
  return value
    .toString()
    .toLowerCase()
    .replace(/\u3000/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[\uFF08]/g, "(")
    .replace(/[\uFF09]/g, ")")
    .replace(/[’＇]/g, "'")
    .trim();
};

export const createDigimonLookup = (list: DigimonListEntry[]): DigimonLookup => {
  const map: DigimonLookup = new Map();
  if (!Array.isArray(list)) return map;

  for (const entry of list) {
    const candidates = new Set<string>();
    if (entry.slug) candidates.add(entry.slug);
    if (entry.name) candidates.add(entry.name);
    if (entry.name_en) candidates.add(entry.name_en);
    if (entry.name_ja) candidates.add(entry.name_ja);

    for (const value of candidates) {
      const key = normalizeNameKey(value);
      if (key && !map.has(key)) {
        map.set(key, entry);
      }
    }
  }

  return map;
};

export interface ResolvedRelation {
  raw: string;
  match?: DigimonListEntry;
}

export const resolveRelations = (
  names: string[] | undefined,
  lookup: DigimonLookup
): ResolvedRelation[] => {
  if (!names || names.length === 0) return [];
  return names.map((raw) => {
    const match = lookup.get(normalizeNameKey(raw));
    return { raw, match };
  });
};

export const getLocalizedDigimonName = (
  entry: DigimonListEntry | undefined,
  locale: string
): string => {
  if (!entry) return "";

  const fallback = entry.slug || "";

  if (locale === "ja") {
    return (
      entry.name_ja ||
      entry.name ||
      entry.name_en ||
      fallback
    ) ?? fallback;
  }

  if (locale === "en") {
    if (entry.name_en) return entry.name_en;
    if (entry.name && entry.name !== entry.name_ja) return entry.name;
    return entry.slug || entry.name || entry.name_ja || fallback;
  }

  // 默认中文
  if (entry.name && entry.name !== entry.name_ja) return entry.name;
  if (entry.name_en) return entry.name_en;
  if (entry.slug) return entry.slug;
  return entry.name_ja || fallback;
};
