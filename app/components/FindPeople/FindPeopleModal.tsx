"use client";

import React, { useState, useEffect } from "react";
import FindPeople from "./FindPeople";
import ResultsPanel from "./ResultsTopBar";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
      <div
        className="fixed inset-0 bg-slate-900/60 duration-300"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[80vh] w-full max-w-5xl flex-col bg-[#ffffff] rounded-sm shadow-2xl overflow-hidden border border-slate-200/80 animate-in fade-in zoom-in-95 duration-200 p-2 md:p-3">

        <div className="relative flex flex-1 gap-0 md:gap-1 overflow-hidden h-full">

          {showMobileFilters && (
            <div
              className="absolute inset-0 z-40 bg-slate-900/50 backdrop-blur-xs md:hidden"
              onClick={() => setShowMobileFilters(false)}
            />
          )}

          <aside className={`
            absolute inset-y-0 left-0 z-50 flex w-60 flex-col bg-white border-r border-slate-200 shadow-2xl transition-transform duration-300 md:hidden
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

          <aside className="hidden md:flex md:w-60 shrink-0 flex-col bg-white overflow-hidden shadow-xs h-full">
            <FindPeople />
          </aside>

          <ResultsPanel
            onClose={onClose}
            onMobileFiltersOpen={() => setShowMobileFilters((prev) => !prev)}
            isMobileFiltersOpen={showMobileFilters}
          />

        </div>
      </div>
    </div>
  );
}