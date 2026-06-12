"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaCoins } from "react-icons/fa";
const TOTAL_CREDITS = 5500000;
const USED_CREDITS = 450000;
const PERCENT = Math.round((USED_CREDITS / TOTAL_CREDITS) * 100);

function formatNumber(n: number) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

export default function Topbar() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-end gap-2 px-3 sm:gap-3 sm:px-5">
        <div className="flex justify-between items-center h-[34px] w-auto sm:w-[303px] gap-[16px] rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted sm:px-3 sm:text-sm">
          <div className="flex items-center gap-2">
            <FaCoins className="h-3.5 w-3.5 shrink-0 text-[#438361] sm:h-4 sm:w-4" />
            <span className="sm:hidden">
              {formatNumber(USED_CREDITS)}
              <span className="text-[#438361] mx-0.5">/</span>
              {formatNumber(TOTAL_CREDITS)}
            </span>
            <span className="hidden sm:inline">
              {USED_CREDITS.toLocaleString()}
              <span className="text-[#438361] mx-1">/</span>
              {TOTAL_CREDITS.toLocaleString()}
            </span>
          </div>
          <div>
            <Badge className="hidden h-[24px] w-[120px] cursor-default select-none rounded-full bg-[#438361] px-2.5 py-1 text-xs text-[#ffffff] ring-1 ring-green-500/30 hover:bg-green-500/20 dark:text-green-400 sm:flex sm:items-center">
              Booster Plan
            </Badge>
            <Badge className="flex cursor-default select-none rounded-full bg-[#438361] px-2 py-0.5 text-[10px] text-[#ffffff] ring-1 ring-green-500/30 dark:text-white sm:hidden">
              Booster
            </Badge>
          </div>
        </div>
        <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
          <AvatarImage src="https://i.pravatar.cc/40" alt="User avatar" />
          <AvatarFallback className="bg-green-100 text-green-700 text-xs font-bold dark:bg-green-900 dark:text-green-300">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
