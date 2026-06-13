import { Lock, Menu, Search, X } from "lucide-react";
import GridTable from "./GridTable";

interface ResultsPanelProps {
  onClose: () => void;
  onMobileFiltersOpen: () => void;
  isMobileFiltersOpen: boolean;
}

const ResultsPanel = ({ onClose, onMobileFiltersOpen, isMobileFiltersOpen }: ResultsPanelProps) => (
  <div className={`flex-1 flex flex-col overflow-hidden ${isMobileFiltersOpen ? 'opacity-[0.37]': ''}`}>
    <div className="relative px-4 md:pl-0 md:pr-6 shrink-0 flex flex-col justify-end min-h-[71px] pb-3">
      <button
        className="md:hidden absolute top-4 left-3 p-1 text-gray-600 hover:text-gray-900"
        onClick={onMobileFiltersOpen}
        aria-label="Open filters"
      >
        <Menu size={18} />
      </button>

      <div>
        <button
          disabled={isMobileFiltersOpen}
          onClick={onClose}
          className="p-0 absolute top-2 right-2 md:top-1 md:right-2 w-[12px] h-[12px] md:w-[15px] md:h-[15px] bg-[#f1f5f9] rounded-full flex items-center justify-center text-[#475569] hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-[10px] h-[10px] md:w-[11px] md:h-[11px]" strokeWidth={2} />
        </button>
      </div>

      <div className="flex md:flex-row md:items-end justify-between gap-3 pt-10 md:pt-5 md:gap-2">
        <span className="text-[10px] md:text-[11px] text-[#334155] leading-snug self-end">
          Found 0 companies. <br className="md:hidden" /> Click preview to view results
        </span>

        <div className="flex flex-col-reverse md:flex-col md:items-end justify-between md:justify-start w-[50%] md:w-auto gap-2 items-end">
          <div className="flex items-center gap-1.5 px-2 md:px-3.5 py-1 text-[10px] md:text-[11px] text-[#d97706] bg-[#fffbeb] rounded-full order-2 md:order-1">
            <Search className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] text-[#d97706]" strokeWidth={2.5} />
            8000/50000
          </div>

          <button className="flex items-center gap-1 md:gap-1.5 bg-transparent border-none cursor-pointer p-0 text-left order-1 md:order-2">
            <Lock className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] text-[#d97706] shrink-0" strokeWidth={2.5} />
            <span className="text-[10px] md:text-[11px] text-[#d97706] font-semibold leading-tight">
              Unlock 100,000 leads <br className="md:hidden" /> with Enterprise Plan*
            </span>
          </button>
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-hidden px-4 md:pl-0 md:pr-6 pb-4 md:pb-[96px] flex flex-col">
      <GridTable />
    </div>
  </div>
);

export default ResultsPanel;
