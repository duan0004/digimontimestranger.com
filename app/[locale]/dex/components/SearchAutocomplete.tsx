"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Suggestion {
  slug: string;
  name: string;
  name_en?: string;
  name_ja?: string;
  stage?: string;
  attribute?: string;
}

interface SearchAutocompleteProps {
  initialValue?: string;
  stage?: string;
  attribute?: string;
}

const SEARCH_HISTORY_KEY = "time-stranger-search-history";
const MAX_HISTORY = 10;

export default function SearchAutocomplete({
  initialValue = "",
  stage,
  attribute,
}: SearchAutocompleteProps) {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const router = useRouter();
  const t = useTranslations();

  // Load search history on mount
  useEffect(() => {
    const history = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  // Save to search history
  const saveToHistory = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return;

    const history = JSON.parse(
      localStorage.getItem(SEARCH_HISTORY_KEY) || "[]"
    ) as string[];

    // Remove if exists, add to front
    const newHistory = [
      searchQuery,
      ...history.filter((item) => item !== searchQuery),
    ].slice(0, MAX_HISTORY);

    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
    setSearchHistory(newHistory);
  }, []);

  // Clear search history
  const clearHistory = useCallback(() => {
    localStorage.removeItem(SEARCH_HISTORY_KEY);
    setSearchHistory([]);
  }, []);

  // Fetch suggestions
  const fetchSuggestions = useCallback(async (q: string) => {
    if (q.length < 1) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(`/api/search/suggest?q=${encodeURIComponent(q)}&limit=8`);
      if (res.ok) {
        const data = await res.json();
        setSuggestions(data.results || []);
      }
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    }
  }, []);

  // Handle input change with debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      fetchSuggestions(value);
      setShowSuggestions(value.length > 0);
      setShowHistory(false);
    }, 300);
  };

  // Handle input focus
  const handleFocus = () => {
    if (query.length > 0) {
      setShowSuggestions(true);
    } else if (searchHistory.length > 0) {
      setShowHistory(true);
    }
  };

  // Handle input blur (delayed to allow click on suggestions)
  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
      setShowHistory(false);
    }, 200);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions && !showHistory) return;

    const items = showSuggestions ? suggestions : searchHistory.map((h) => ({ name: h }));
    const maxIndex = items.length - 1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          if (showSuggestions) {
            const selected = suggestions[selectedIndex];
            router.push(`/dex/${selected.slug}`);
          } else {
            const selected = searchHistory[selectedIndex];
            setQuery(selected);
            handleSearch(selected);
          }
        } else {
          handleSearch(query);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setShowHistory(false);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle search submission
  const handleSearch = (searchQuery?: string) => {
    const q = searchQuery || query;
    if (q.trim()) {
      saveToHistory(q.trim());
    }

    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (stage) params.set("stage", stage);
    if (attribute) params.set("attribute", attribute);

    router.push(`/dex${params.toString() ? "?" + params.toString() : ""}`);
    setShowSuggestions(false);
    setShowHistory(false);
  };

  return (
    <div className="relative flex-1">
      <input
        ref={inputRef}
        name="q"
        type="search"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={t("common.searchPlaceholder")}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoComplete="off"
      />

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto"
        >
          {suggestions.map((item, index) => (
            <Link
              key={item.slug}
              href={`/dex/${item.slug}`}
              className={`block px-4 py-3 hover:bg-gray-100 transition ${
                index === selectedIndex ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {item.name_en || item.name}
                  </div>
                  {item.name_en && item.name_ja && (
                    <div className="text-sm text-gray-600">{item.name_ja}</div>
                  )}
                </div>
                <div className="text-xs text-gray-500 ml-3 flex flex-col items-end">
                  {item.stage && <span>{item.stage}</span>}
                  {item.attribute && <span>{item.attribute}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Search History Dropdown */}
      {showHistory && searchHistory.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{t("common.searchHistory")}</span>
            <button
              type="button"
              onClick={clearHistory}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              {t("common.clear")}
            </button>
          </div>
          {searchHistory.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setQuery(item);
                handleSearch(item);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition ${
                index === selectedIndex ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
