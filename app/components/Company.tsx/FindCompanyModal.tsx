"use client";

import React, { useState, useEffect } from "react";
import { X, Search, Lock, SlidersHorizontal } from "lucide-react";
import FindPeople from "./FindPeople";
import GridTable from "./GridTable";

interface FindCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FindCompanyModal({ isOpen, onClose }: FindCompanyModalProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[90vh] w-full max-w-7xl flex-col bg-[#ffffff] rounded-sm shadow-2xl overflow-hidden border border-slate-200/80 animate-in fade-in zoom-in-95 duration-200 p-4 md:p-5">
        
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-40 h-6 w-6 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors border border-slate-200/60 bg-slate-200 backdrop-blur-sm"
        >
          <X size={12} />
        </button>

        <div className="flex flex-1 gap-0 md:gap-1 overflow-hidden h-full">
          
          {showMobileFilters && (
            <div 
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs md:hidden"
              onClick={() => setShowMobileFilters(false)}
            />
          )}

          <aside className={`
            fixed inset-y-0 left-0 z-50 flex w-76 flex-col bg-white border-r border-slate-200 shadow-2xl transition-transform duration-300 md:hidden
            ${showMobileFilters ? "translate-x-0" : "-translate-x-full"}
          `}>
            <div className="flex-1 overflow-hidden h-full">
              <FindPeople 
                onPreviewClick={() => setShowMobileFilters(false)} 
                showMobileClose={true}
                onMobileClose={() => setShowMobileFilters(false)}
              />
            </div>
          </aside>

          <aside className="hidden md:flex md:w-80 shrink-0 flex-col bg-white overflow-hidden shadow-xs h-full">
            <FindPeople />
          </aside>

          <main className="flex-1 flex flex-col gap-3.5 min-w-0 overflow-hidden h-full">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0 pr-10">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all md:hidden cursor-pointer shadow-xs shrink-0"
                >
                  <SlidersHorizontal size={13} className="text-slate-500" />
                </button>
                <span className="text-xs font-medium text-slate-500">
                  Found 0 companies. Click preview to view results
                </span>
              </div>

              <div className="flex items-center gap-3 ml-auto sm:ml-0">
                <div className="flex items-center gap-1.2 rounded-full border border-amber-200 bg-amber-50/70 px-2.5 py-1 text-[11px] font-bold text-[#b45309] shrink-0">
                  <Search size={12} className="text-[#b45309]" />
                  <span>8000/50000</span>
                </div>

                <div className="flex items-center gap-1.2 text-[11px] font-bold text-[#d97706] hover:underline cursor-pointer shrink-0">
                  <Lock size={12} className="fill-[#d97706]/10 text-[#d97706] shrink-0" />
                  <span>Unlock 100,000 leads with Enterprise Plan*</span>
                </div>
              </div>

            </div>

            <div className="flex-1 bg-white border border-slate-200 overflow-hidden flex flex-col shadow-xs">
              <GridTable />
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}