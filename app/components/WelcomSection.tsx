"use client";

import { useState, useEffect } from "react";
import { Building2, Users, Plus, CheckCircle2, Circle } from "lucide-react";
import FindCompanyModal from "./FindPeople/FindPeopleModal";
import { FaFileCircleCheck } from "react-icons/fa6";

const CAROUSEL_DATA = [
  {
    theme: { bg: "#f2f7fb", accent: "#417e9f", dotInactive: "#a4bed0" },
    title: "How to Integrate 2 Way HubSpot",
    description:
      "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...",
  },
  {
    theme: { bg: "#fdf4f6", accent: "#c44a78", dotInactive: "#dfa6ba" },
    title: "How to find LinkedIn Post using Bitscale",
    description:
      "This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...",
  },
  {
    theme: { bg: "#f4f8f4", accent: "#468364", dotInactive: "#97bca9" },
    title: "How to set Custom API in waterfall",
    description:
      "This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...",
  },
  {
    theme: { bg: "#f7f5f9", accent: "#876ea4", dotInactive: "#c0b0cf" },
    title: "Introducing Grid Scheduling",
    description:
      "This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...",
  },
];

const WelcomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const slide = CAROUSEL_DATA[currentSlide];

  return (
    <section className="w-full p-4 md:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Welcome back, Tim!
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Here's your daily scoop on Bitscale!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto md:flex md:w-auto">
          <button className="flex items-center justify-center gap-1.5 rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 w-full md:w-auto">
            <Building2 size={14} className="text-[#438361]" />
            Find Companies
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-1.5 rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 w-full md:w-auto"
          >
            <Users size={14} className="text-[#876ea4]" />
            Find People
          </button>

          <button className="col-span-2 flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 w-full md:w-auto">
            <Plus size={14} />
            New Grid
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div
          className="rounded-xl p-4 transition-all duration-500"
          style={{ backgroundColor: slide.theme.bg }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3
              className="font-medium transition-colors duration-500"
              style={{ color: slide.theme.accent }}
            >
              Latest from Bitscale
            </h3>

            <div className="flex gap-1">
              {CAROUSEL_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-[6px] rounded-full transition-all duration-350 cursor-pointer ${
                    index === currentSlide ? "w-[24px]" : "w-[6px]"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide
                        ? slide.theme.accent
                        : slide.theme.dotInactive,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row transition-all duration-500">
            <div className="relative overflow-hidden rounded-lg shrink-0">
              <img
                src="/video.png"
                alt={slide.title}
                className="h-[97px] w-full object-cover sm:w-[143px]"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                  ▶
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-[97px] flex flex-col justify-between">
              <div>
                <h4 className="font-medium text-slate-800 transition-all duration-300">
                  {slide.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500 line-clamp-2 transition-all duration-300">
                  {slide.description}
                </p>
              </div>

              <p className="mt-2 text-xs text-slate-400 transition-all duration-300">
                Video tutorial
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl border-[#E7F3F8] p-5 border-[1px]"
          style={{
            background: "linear-gradient(180deg, #E7F3F8 0%, #ffffff 100%)",
          }}
        >
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-slate-100 p-2">
              <FaFileCircleCheck size={20} color="#551063ff" />
            </div>

            <div>
              <h3 className="font-medium text-slate-800">
                Complete product demo
              </h3>

              <p className="text-sm text-slate-500">
                92% of users nailed BitScale after this walkthrough
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[75%] rounded-full bg-emerald-600"></div>
            </div>

            <div className="mt-1 text-right text-xs font-medium text-emerald-600">
              75%
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="fill-[#417e9f] text-white" />
              Create your data list
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="fill-[#417e9f] text-white" />
              Learn about BitAgent
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="fill-[#417e9f] text-white" />
              Connect an integration
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Circle size={16} className="text-slate-300" />
              Customize waterfall providers
            </div>
          </div>
        </div>
      </div>
      <FindCompanyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default WelcomeSection;
