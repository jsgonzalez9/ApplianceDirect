"use client";

import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceSource {
  retailer: string;
  price: number;
  shipping: number;
  url: string;
}

interface PriceComparisonProps {
  prices: PriceSource[];
}

export function PriceComparison({ prices }: PriceComparisonProps) {
  const sortedPrices = [...prices].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping));
  const bestPrice = sortedPrices[0];

  return (
    <div className="bg-[#1e1e1e] border border-[#333333] rounded-lg p-4">
      <h3 className="text-sm font-semibold text-white mb-4">Price Comparison</h3>

      <div className="space-y-3">
        {sortedPrices.map((retailer, idx) => (
          <div
            key={retailer.retailer}
            className={`flex items-center justify-between p-3 rounded-lg ${
              idx === 0
                ? "bg-green-500/10 border border-green-500/30"
                : "bg-[#2a2a2a]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#333333] rounded flex items-center justify-center text-xs font-bold text-white">
                {retailer.retailer[0]}
              </div>
              <div>
                <p className="text-white font-medium">{retailer.retailer}</p>
                <p className="text-xs text-gray-500">
                  {retailer.shipping === 0 ? "Free shipping" : `$${retailer.shipping.toFixed(2)} shipping`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-lg font-bold text-white">
                  ${retailer.price.toFixed(2)}
                </p>
                {idx === 0 && (
                  <span className="text-xs text-green-400">Best Price</span>
                )}
              </div>

              <a href={retailer.url} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className={
                    idx === 0
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-[#333333] hover:bg-[#444444] text-white"
                  }
                >
                  <ExternalLink size={14} />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[#333333]">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Potential Savings</span>
          <span className="text-green-400 font-bold">
            Up to ${(sortedPrices[sortedPrices.length - 1].price - bestPrice.price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
