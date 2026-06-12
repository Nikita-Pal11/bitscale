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
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0">
        <h2 className="text-lg font-bold text-slate-800">Find People</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
            <ChevronDown size={10} />
            Saved Search
          </button>
          {showMobileClose && (
            <button
              onClick={onMobileClose}
              className="md:hidden rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors border border-slate-200"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-3 space-y-5">

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("peopleKeyword")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <UserCheck size={15} className="text-slate-600" />
              <span>People Keyword</span>
            </div>
            {openSections.peopleKeyword ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.peopleKeyword && (
            <div className="mt-2.5 relative border-b-2 border-slate-400">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={14} className="text-slate-400" />
              </div>
              <input
                type="text"
                value={filters.keyword}
                onChange={(e) => handleInputChange("keyword", e.target.value)}
                placeholder="Enter single keyword here..."
                className="w-full border-none bg-white py-2 pl-9 pr-3 text-xs outline-none transition"
              />
            </div>
          )}
        </div>

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("jobTitle")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <Briefcase size={15} className="text-slate-600" />
              <span>Job Title</span>
            </div>
            {openSections.jobTitle ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.jobTitle && (
            <span className="mt-2.5 text-xs text-slate-500">E.g: Manager, Software Engineer</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("companyWebsite")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <Globe size={15} className="text-slate-600" />
              <span>Company Website</span>
            </div>
            {openSections.companyWebsite ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.companyWebsite && (
            <span className="mt-2.5 text-xs text-slate-500">Eg: Google.com, LinkedIn.com</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("personLocation")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <MapPin size={15} className="text-slate-600" />
              <span>Person Location</span>
            </div>
            {openSections.personLocation ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.personLocation && (
            <span className="mt-2.5 text-xs text-slate-500">Eg: London, Great New York City</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("companyLocation")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <MapPin size={15} className="text-slate-600" />
              <span>Company Location</span>
            </div>
            {openSections.companyLocation ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.companyLocation && (
            <span className="mt-2.5 text-xs text-slate-500">Eg: United States, UAE</span>
          )}
        </div>

        <div className="border-b border-slate-200 pb-3.5">
          <button
            onClick={() => toggleSection("companyHeadcount")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <Users size={15} className="text-slate-600" />
              <span>Company Headcount</span>
            </div>
            {openSections.companyHeadcount ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.companyHeadcount && (
            <span className="mt-2.5 text-xs text-slate-500">E.g: 11-50 , 10000+</span>
          )}
        </div>

        <div className="pb-2">
          <button
            onClick={() => toggleSection("managementLevel")}
            className="flex w-full items-center justify-between py-1.5 font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <BarChart size={15} className="text-slate-600" />
              <span>Management Level</span>
            </div>
            {openSections.managementLevel ? (
              <ChevronUp size={15} className="text-slate-400" />
            ) : (
              <ChevronDown size={15} className="text-slate-400" />
            )}
          </button>

          {openSections.managementLevel && (
            <span className="mt-2.5 text-xs text-slate-500">E.g: Owner, Founder</span>
          )}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-white p-4 flex items-center justify-between gap-2.5 shrink-0">
        <button
          onClick={onPreviewClick}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 px-3 py-2.5 text-xs font-semibold text-slate-700 active:scale-95 transition-all cursor-pointer"
        >
          <Save size={13} className="text-slate-500" />
          Save Search
        </button>

        <button
          onClick={onPreviewClick}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 px-3 py-2.5 text-xs font-semibold text-white active:scale-95 transition-all cursor-pointer shadow-sm"
        >
          <Eye size={13} className="text-white" />
          Preview Result
        </button>
      </div>
    </div>
  );
}