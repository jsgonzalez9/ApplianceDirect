"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickFiltersProps {
  onFilterChange: (filters: {
    year?: string;
    make?: string;
    model?: string;
    category?: string;
  }) => void;
}

const YEARS = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
const MAKES = ["GMC", "Chevrolet", "Ford", "Toyota", "Honda", "Dodge", "Jeep"];
const CATEGORIES = ["Engine", "Transmission", "Brakes", "Suspension", "Electrical", "Filters", "Belts"];

export function QuickFilters({ onFilterChange }: QuickFiltersProps) {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleApply = () => {
    onFilterChange({
      year: year || undefined,
      make: make || undefined,
      model: model || undefined,
      category: category || undefined,
    });
  };

  const handleReset = () => {
    setYear("");
    setMake("");
    setModel("");
    setCategory("");
    onFilterChange({});
  };

  return (
    <div className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Quick Filters</h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-white"
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-[#121212] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:border-[#f96706] outline-none"
          >
            <option value="">All Years</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-500 mb-1 block">Make</label>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="w-full bg-[#121212] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:border-[#f96706] outline-none"
          >
            <option value="">All Makes</option>
            {MAKES.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {expanded && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. Sierra 1500"
                className="w-full bg-[#121212] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:border-[#f96706] outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#121212] border border-[#333333] text-white rounded px-3 py-2 text-sm focus:border-[#f96706] outline-none"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div className="flex gap-2 pt-2">
        <Button
          onClick={handleApply}
          className="flex-1 bg-[#f96706] hover:bg-orange-600 text-white"
        >
          <Check size={16} className="mr-2" />
          Apply
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="border-[#333333] text-gray-400 hover:text-white"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
