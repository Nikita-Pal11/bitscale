"use client";

import React, { useState } from "react";
import { 
  UserCheck, 
  Briefcase, 
  Globe, 
  MapPin, 
  Users, 
  BarChart, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Save, 
  Eye,
  X
} from "lucide-react";

interface FindPeopleProps {
  onPreviewClick?: () => void;
  showMobileClose?: boolean;
  onMobileClose?: () => void;
}

export default function FindPeople({ onPreviewClick, showMobileClose, onMobileClose }: FindPeopleProps) {
  const [openSections, setOpenSections] = useState({
    peopleKeyword: true,
    jobTitle: true,
    companyWebsite: true,
    personLocation: true,
    companyLocation: true,
    companyHeadcount: true,
    managementLevel: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const [filters, setFilters] = useState({
    keyword: "",
    jobTitle: "",
    website: "",
    personLocation: "",
    companyLocation: "",
    headcount: "",
    managementLevel: "",
  });

  const handleInputChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Header */}
      <div className="px-2 py-2.5 border-b border-slate-100 flex items-center justify-between shrink-0">
        <h2 className="text-sm font-bold text-slate-800">Find People</h2>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
            <ChevronDown size={9} />
            Saved Search
          </button>
          {showMobileClose && (
            <button
              onClick={onMobileClose}
              className="md:hidden rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors border border-slate-200"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-2 space-y-2">

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("peopleKeyword")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <UserCheck size={12} className="text-slate-600" />
              <span>People Keyword</span>
            </div>
            {openSections.peopleKeyword ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.peopleKeyword && (
            <div className="mt-1.5 relative border-b-2 border-slate-400">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5">
                <Search size={11} className="text-slate-400" />
              </div>
              <input
                type="text"
                value={filters.keyword}
                onChange={(e) => handleInputChange("keyword", e.target.value)}
                placeholder="Enter single keyword here..."
                className="w-full border-none bg-white py-1.5 pl-7 pr-2 text-[10px] outline-none transition"
              />
            </div>
          )}
        </div>

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("jobTitle")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <Briefcase size={12} className="text-slate-600" />
              <span>Job Title</span>
            </div>
            {openSections.jobTitle ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.jobTitle && (
            <span className="mt-1.5 block text-[9px] text-slate-500">E.g: Manager, Software Engineer</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("companyWebsite")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <Globe size={12} className="text-slate-600" />
              <span>Company Website</span>
            </div>
            {openSections.companyWebsite ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.companyWebsite && (
            <span className="mt-1.5 block text-[9px] text-slate-500">Eg: Google.com, LinkedIn.com</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("personLocation")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <MapPin size={12} className="text-slate-600" />
              <span>Person Location</span>
            </div>
            {openSections.personLocation ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.personLocation && (
            <span className="mt-1.5 block text-[9px] text-slate-500">Eg: London, Great New York City</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("companyLocation")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <MapPin size={12} className="text-slate-600" />
              <span>Company Location</span>
            </div>
            {openSections.companyLocation ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.companyLocation && (
            <span className="mt-1.5 block text-[9px] text-slate-500">Eg: United States, UAE</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-2">
          <button
            onClick={() => toggleSection("companyHeadcount")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <Users size={12} className="text-slate-600" />
              <span>Company Headcount</span>
            </div>
            {openSections.companyHeadcount ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.companyHeadcount && (
            <span className="mt-1.5 block text-[9px] text-slate-500">E.g: 11-50 , 10000+</span>
          )}
        </div>

        <div className="pb-1">
          <button
            onClick={() => toggleSection("managementLevel")}
            className="flex w-full items-center justify-between py-1 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <BarChart size={12} className="text-slate-600" />
              <span>Management Level</span>
            </div>
            {openSections.managementLevel ? (
              <ChevronUp size={12} className="text-slate-400" />
            ) : (
              <ChevronDown size={12} className="text-slate-400" />
            )}
          </button>

          {openSections.managementLevel && (
            <span className="mt-1.5 block text-[9px] text-slate-500">E.g: Owner, Founder</span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t border-slate-100 bg-white px-2 py-2 flex items-center justify-between gap-2 shrink-0">
        <button
          onClick={onPreviewClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-md border border-slate-200 bg-slate-50 hover:bg-slate-100 px-2 py-1.5 text-[10px] font-semibold text-slate-700 active:scale-95 transition-all cursor-pointer"
        >
          <Save size={10} className="text-slate-500" />
          Save Search
        </button>

        <button
          onClick={onPreviewClick}
          className="flex flex-1 items-center justify-center gap-1 rounded-md bg-slate-900 hover:bg-slate-800 px-2 py-1.5 text-[10px] font-semibold text-white active:scale-95 transition-all cursor-pointer shadow-sm"
        >
          <Eye size={10} className="text-white" />
          Preview Result
        </button>
      </div>
    </div>
  );
}