"use client";

import { useState } from "react";
import { Building2, Users, Plus, CheckCircle2, Circle } from "lucide-react";
import FindCompanyModal from "./Company.tsx/FindCompanyModal";
import { FaFileCircleCheck } from "react-icons/fa6";
const WelcomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Building2 size={16} className="text-[#438361]" />
            Find Companies
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Users size={16} className="text-purple-600" />
            Find People
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <Plus size={16} />
            New Grid
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="rounded-xl p-4 bg-[#E7F3F8]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-[#347FA9]">Latest from Bitscale</h3>

            <div className="flex gap-1">
              <div className="h-[6PX] w-[24PX] rounded-full bg-[#347FA9]"></div>
              <div className="h-[6PX] w-[6PX] rounded-full bg-[#8DBAD0]"></div>
              <div className="h-[6PX] w-[6PX] rounded-full bg-[#8DBAD0]"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/video.png"
                alt="Video Thumbnail"
                className="h-[97px] w-full object-cover sm:w-[143px]"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  ▶
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-slate-800">
                How to Integrate 2 Way HubSpot
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Prerequisites for this Integration is that you should have a
                HubSpot account and Copy the API key. We simple aad our API key
                through the integrations pa...
              </p>

              <p className="mt-2 text-xs text-slate-400">Posted today</p>
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
              <CheckCircle2 size={16} className="fill-sky-500 text-white" />
              Create your data list
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="fill-sky-500 text-white" />
              Learn about BitAgent
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 size={16} className="fill-sky-500 text-white" />
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
