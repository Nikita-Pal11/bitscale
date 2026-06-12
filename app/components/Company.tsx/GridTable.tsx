"use client";

import React from "react";

export default function GridTable() {
  const columns = [
    "NAME",
    "TITLE",
    "HEADLINE",
    "LINKEDIN URL",
    "COMPANY",
    "COMPANY URL",
    "COMPANY HEADCOUNT",
  ];

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-white">
      
      <div className="w-full overflow-x-auto border-b border-slate-100 bg-[#f8fafc] shrink-0 scrollbar-none">
        <div className="flex min-w-[950px] divide-x divide-slate-100/70">
          {columns.map((col, index) => (
            <div
              key={col}
              className={`flex-1 px-4 py-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase select-none ${
                index === 0 ? "pl-6" : ""
              }`}
            >
              {col}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 text-center select-none bg-white">
        
        <div className="relative mb-6 h-48 w-72 flex items-center justify-center">
          <img src="/img.png" alt="" />
        </div>

        <div className="max-w-md space-y-3 px-4">
          <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">
            Start your Company search , preview, and import companies 
            <br />
            for enrichment by applying any filter in the left panel.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">OR</span>
            <span className="h-px w-10 bg-slate-200" />
          </div>
          <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">
            Import companies from saved Search.
          </p>
        </div>
      </div>
      
    </div>
  );
}