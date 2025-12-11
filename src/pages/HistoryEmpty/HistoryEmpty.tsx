import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

export const HistoryEmpty = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#f7f7f8]"
      data-model-id="34892:276594"
    >
      <BackSubHeader backTo="/historymainu95099" />

      {/* Title and Navigation */}
      <div className="flex flex-col bg-white">
        <div className="flex flex-col pt-[22px] px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            해외송금 내역
          </h1>
        </div>

        <nav className="flex justify-between items-center px-6 py-[18px] border-b border-[#dfe3ec] mt-[22px]">
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="flex items-center gap-4">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              2024.10
            </span>
          </div>

          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </nav>

        <div className="flex justify-end items-center gap-2 pt-5 pb-3 px-6">
          <Button variant="ghost" className="h-auto p-0 gap-1">
            <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
              최신순
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Empty State */}
      <main className="flex flex-col flex-1 px-6">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-6 py-14">
            <img
              className="w-12 h-12"
              alt="Empty"
              src="https://c.animaapp.com/u8GhiXiH/img/ico48-empty.svg"
            />

            <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              내역이 없습니다.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center px-6">
      </footer>
    </div>
  );
};
