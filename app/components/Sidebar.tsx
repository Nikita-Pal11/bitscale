"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Link2,
  Settings,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Rocket,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { HiChevronUpDown } from "react-icons/hi2";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  const menuItems = [
    {
      name: "My Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Playbooks",
      icon: BookOpen,
      badge: (
        <div className="flex items-center justify-center bg-[#fef3c7] text-[#b45309] rounded-full px-2.5 py-1">
          <Rocket size={12} strokeWidth={2.5} />
        </div>
      ),
    },
    {
      name: "Integrations",
      icon: Link2,
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-[9px] left-4 z-50 flex h-[38px] w-[38px] items-center justify-center rounded-xl border border-slate-200/80 bg-white shadow-xs md:hidden hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
      >
        <Menu size={20} className="text-slate-700" />
      </button>

      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[260px]
          bg-white border-r transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200">
          <img
            src="/logo.png"
            alt="Bitscale Logo"
            className="h-8 object-contain"
          />
          <button onClick={closeSidebar} className="md:hidden text-slate-700 hover:text-slate-900 transition-colors pr-2">
            <X size={20} />
          </button>
        </div>

        <div className="mx-4 mb-6 flex items-center justify-between px-3 py-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <AvatarGroup>
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                <AvatarImage src="https://i.pravatar.cc/40" alt="User avatar" />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-bold dark:bg-green-900 dark:text-green-300">
                  CN
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                <AvatarImage src="https://i.pravatar.cc/150" alt="User avatar" />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-bold dark:bg-green-900 dark:text-green-300">
                  CN
                </AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="font-medium">GTM Spaces</span>
          </div>
          <HiChevronUpDown size={16}/>
        </div>

        <div className="px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-500">
            Home
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={closeSidebar}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 transition ${
                    item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>

                  {item.badge ? item.badge : item.active && <ChevronRight size={16} />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-400">
            Other
          </p>

          <div className="space-y-1">
            <button
              onClick={closeSidebar}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-gray-600 hover:bg-gray-100"
            >
              <BookOpen size={18} />
              Documentation
            </button>

            <button
              onClick={closeSidebar}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-gray-600 hover:bg-gray-100"
            >
              <Settings size={18} />
              Settings
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 w-full border-t bg-gray-50 p-4 flex flex-col gap-1">
          <img
            src="/logo.png"
            alt="Bitscale Logo"
            className="h-5 object-contain self-start"
          />
          <p className="text-xs text-gray-500">Get Support at Bitscale</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
