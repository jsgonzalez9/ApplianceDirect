"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchParts, PartData } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PartData[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchParts(query);
        setResults(data);
        setShowResults(true);
      } catch (e) {
        console.error("Search error:", e);
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (partNumber: string) => {
    setShowResults(false);
    setQuery("");
    router.push(`/p/${partNumber}`);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search by part number, name, or category..."
          className="w-full pl-12 pr-4 py-6 bg-[#1e1e1e] border-[#333333] text-white placeholder:text-gray-500 rounded-lg text-lg focus:border-[#f96706] focus:ring-1 focus:ring-[#f96706]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
        />
        {loading && (
          <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 animate-spin" />
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e1e1e] border border-[#333333] rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
          {results.map((part) => (
            <button
              key={part.id}
              onClick={() => handleSelect(part.part_number)}
              className="w-full px-4 py-3 text-left hover:bg-[#2a2a2a] transition-colors border-b border-[#333333] last:border-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{part.name}</p>
                  <p className="text-sm text-gray-500">{part.part_number}</p>
                </div>
                <span className="text-[#f96706] font-semibold">
                  ${part.price?.toFixed(2) || "0.00"}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
