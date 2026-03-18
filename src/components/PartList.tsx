"use client";

import React from 'react';
import Image from 'next/image';
import { StaticPart } from '@/lib/static-data';
import { MoreHorizontal, ExternalLink, ShieldCheck } from 'lucide-react';

interface PartListProps {
  parts: StaticPart[];
  isLoading?: boolean;
}

const PartList: React.FC<PartListProps> = ({ parts, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 bg-slate-50 dark:bg-slate-900/50 animate-pulse rounded-xl border border-slate-100 dark:border-slate-800" />
        ))}
      </div>
    );
  }

  if (parts.length === 0) {
    return (
      <div className="text-center py-20 px-4 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 rounded-xl">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-black uppercase tracking-widest opacity-60">No compatible parts found for this selection.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Table Head (Internal Header) */}
      <div className="hidden md:block bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-900 text-slate-500 dark:text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] border-b border-slate-200 dark:border-slate-800">
              <th className="px-8 py-5">Component</th>
              <th className="px-8 py-5">Manufacturer / SKU</th>
              <th className="px-8 py-5">Price Audit</th>
              <th className="px-8 py-5">Availability</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {parts.map((part) => (
              <tr key={part.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700 shadow-inner">
                      <div className="text-slate-400 font-bold text-xs">{part.part_number.slice(0, 2)}</div>
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-industrial-primary transition-colors">{part.name}</p>
                      <div className="flex items-center gap-1.5 mt-0.5 opacity-60">
                        <ShieldCheck size={12} className="text-industrial-primary" />
                        <span className="text-[9px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">OEM Verified</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <p className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">{part.brand}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1 opacity-60">{part.part_number}</p>
                </td>
                <td className="px-8 py-5">
                  <p className="text-sm font-black text-slate-900 dark:text-white tracking-tight">${part.price.toFixed(2)}</p>
                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">Direct Rate</span>
                </td>
                <td className="px-8 py-5">
                  <span className="px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest bg-green-500/10 text-green-500">
                    In Stock
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-industrial-primary transition-all hover:bg-industrial-primary/5 rounded-lg">
                      <ExternalLink size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-industrial-primary transition-all hover:bg-industrial-primary/5 rounded-lg">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {parts.map((part) => (
          <div key={part.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-industrial-primary/30 transition-all shadow-sm">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-100 dark:border-slate-700">
              <div className="text-slate-400 font-bold text-xs">{part.part_number.slice(0, 2)}</div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center text-slate-900 dark:text-white mb-1">
                <span className="text-sm font-black uppercase tracking-tight">{part.name}</span>
                <span className="text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest bg-green-500/10 text-green-500">
                  Ready
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  ${part.price.toFixed(2)} • {part.brand}
                </p>
                <p className="text-[9px] text-slate-400 font-mono tracking-tighter opacity-60">{part.part_number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartList;
