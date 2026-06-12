"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  Star,
  MoreHorizontal,
  Search,
  ListFilter,
} from "lucide-react";

const data = [
  {
    name: "Workbook - Testing design Ideas for grid and workbook",
    editor: "Sam Taylor",
    date: "06 Aug, 2025",
    expanded: true,
    icon: "https://img.icons8.com/color/48/notebook.png",
  },
  {
    name: "LinkedIn",
    editor: "Chris Parker",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/linkedin.png",
  },
  {
    name: "Sales nav",
    editor: "Jone Doe",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/salesforce.png",
  },
  {
    name: "find company",
    editor: "Alex Morgan",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/company.png",
  },
  {
    name: "import csv",
    editor: "Drew Wilson",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/csv.png",
  },
  {
    name: "Find people",
    editor: "Jone Doe",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/conference-call.png",
  },
  {
    name: "Google Maps",
    editor: "Chris Parker",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/google-maps.png",
  },
  {
    name: "Google search results",
    editor: "Sam Taylor",
    date: "06 Aug, 2025",
    icon: "https://img.icons8.com/color/48/google-logo.png",
  },
];

export default function Table() {
  const [starred, setStarred] = useState<Set<number>>(new Set());

  const toggleStar = (index: number) => {
    setStarred((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="rounded-2xl bg-white p-4 md:p-6">
      
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        <div className="flex border-b">
          <button className="border-b-2 border-blue-600 px-5 py-3 font-medium text-blue-600">
            My Grids
          </button>

          <button className="px-5 py-3 font-medium text-slate-500">
            Starred
          </button>
        </div>

        
        <div className="flex items-center gap-3">
          <div className="flex h-10 items-center gap-2 rounded-xl bg-slate-100 px-4">
            <Search size={18} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search grids and workbooks..."
              className="w-[220px] bg-transparent text-sm outline-none md:w-[280px]"
            />
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
            <ListFilter size={18} />
          </button>
        </div>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-[950px] w-full">
          <thead>
            <tr className="border-b text-left text-sm text-slate-600">
              <th className="w-20 py-4"></th>

              <th className="py-4 pl-4">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  Name
                  <span className="text-gray-800 font-bold">↑</span>
                </div>
              </th>

              <th className="w-48 py-4 font-bold text-gray-800">Edited by</th>

              <th className="w-40 py-4 font-bold text-gray-800">Last edited</th>

              <th className="w-20 py-4 font-bold text-gray-800">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-slate-50">
                
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    {item.expanded ? (
                      <ChevronDown size={16} className="text-slate-500" />
                    ) : (
                      <div className="w-4"></div>
                    )}

                    <button
                      onClick={() => toggleStar(index)}
                      className="transition-transform hover:scale-110 active:scale-95"
                      aria-label={starred.has(index) ? "Unstar" : "Star"}
                    >
                      <Star
                        size={20}
                        className={`transition-colors ${
                          starred.has(index)
                            ? "text-amber-400"
                            : "fill-transparent text-slate-400 hover:text-amber-300"
                        }`}
                      />
                    </button>

                    {item.expanded ? (
                      <AvatarGroup>
                        <Avatar size="sm">
                          <AvatarImage
                            src={"https://img.icons8.com/color/48/linkedin.png"}
                          />
                          <AvatarFallback>{item.editor}</AvatarFallback>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage
                            src={"https://img.icons8.com/color/48/csv.png"}
                          />
                          <AvatarFallback>{item.editor}</AvatarFallback>
                        </Avatar>
                        <Avatar size="sm">
                          <AvatarImage
                            src={"https://img.icons8.com/color/48/linkedin.png"}
                          />
                          <AvatarFallback>{item.editor}</AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                    ) : (
                      <Avatar size="sm">
                        <AvatarImage
                          src={item.icon}
                        />
                        <AvatarFallback>{item.editor}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </td>

                
                <td className="py-4 pl-4">
                  <p className="font-medium text-slate-700">{item.name}</p>
                </td>

                
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 10}`}
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />

                    <span className="text-slate-700">{item.editor}</span>
                  </div>
                </td>

                
                <td className="py-4 text-slate-700">{item.date}</td>

                
                <td className="py-4">
                  <button>
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}