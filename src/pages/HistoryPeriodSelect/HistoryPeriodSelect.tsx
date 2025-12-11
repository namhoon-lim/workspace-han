import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const periodOptions = [
  "2025.11",
  "2025.10",
  "2025.09",
  "2025.08",
  "2025.07",
  "2025.06",
  "2025.05",
  "2025.04",
];

export const HistoryPeriodSelect = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="34892:34049"
    >
      {/* Header */}
      <header className="flex flex-col w-full items-start absolute top-0 left-0 z-10">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/u8GhiXiH/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
          <div className="flex-col flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />
              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0"
                aria-label="Close"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <h1 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    기간 선택
                  </h1>
                </div>
              </div>
              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <ScrollArea className="flex-col items-start gap-[18px] self-stretch w-full flex-[0_0_auto] flex relative">
            <nav className="flex flex-col items-start gap-[18px] w-full">
              {periodOptions.map((period, index) => (
                <Button
                  key={`period-${index}`}
                  variant="ghost"
                  className="flex items-start relative self-stretch w-full flex-[0_0_auto] h-auto justify-start p-0 hover:bg-transparent"
                >
                  <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
                    <div className="flex items-center gap-1.5 relative flex-1 grow">
                      <span className="relative flex-1 mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                        {period}
                      </span>
                    </div>
                  </div>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </div>

        {/* Footer */}
        <footer className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
        </footer>
      </section>
    </div>
  );
};
