"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Part as PartData } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Loader2 } from "lucide-react";

interface CatalogGridProps {
  parts: PartData[];
  isLoading?: boolean;
}

export function CatalogGrid({ parts, isLoading }: CatalogGridProps) {
  const router = useRouter();
  const [compareList, setCompareList] = useState<string[]>([]);

  const toggleCompare = (partNumber: string) => {
    setCompareList((prev) =>
      prev.includes(partNumber)
        ? prev.filter((p) => p !== partNumber)
        : [...prev, partNumber]
    );
  };

  const getAvailabilityColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "in stock":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "low stock":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "out of stock":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-4 animate-pulse"
          >
            <div className="h-40 bg-[#2a2a2a] rounded mb-4" />
            <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-2" />
            <div className="h-4 bg-[#2a2a2a] rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {parts.map((part) => (
        <div
          key={part.id}
          className="bg-[#1e1e1e] border border-[#333333] rounded-lg overflow-hidden hover:border-[#f96706]/50 transition-colors group"
        >
          {/* Image */}
          <div className="relative h-48 bg-[#2a2a2a] flex items-center justify-center">
            <div className="text-gray-600 text-4xl font-bold">
              {part.part_number?.slice(0, 2)}
            </div>
            <div className="absolute top-2 right-2">
              <Badge className={getAvailabilityColor(part.availability)}>
                {part.availability || "Unknown"}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-1">{part.part_number}</p>
            <h3 className="text-white font-medium mb-2 line-clamp-2">{part.name}</h3>
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-[#f96706]">
                ${part.price?.toFixed(2) || "0.00"}
              </span>
              {part.brand && (
                <span className="text-xs text-gray-500">{part.brand}</span>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => router.push(`/p/${part.part_number}`)}
                className="flex-1 bg-[#f96706] hover:bg-orange-600 text-white text-sm"
              >
                <ShoppingCart size={16} className="mr-2" />
                View
              </Button>
              
              <Button
                onClick={() => toggleCompare(part.part_number)}
                variant="outline"
                className={`border-[#333333] ${
                  compareList.includes(part.part_number)
                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                    : "text-gray-400"
                }`}
              >
                <Check size={16} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
