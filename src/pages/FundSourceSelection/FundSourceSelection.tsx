import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const fundSourceOptions = [
  { id: 1, label: "근로소득" },
  { id: 2, label: "퇴직소득" },
  { id: 3, label: "사업소득" },
  { id: 4, label: "부동산양도소득" },
  { id: 5, label: "부동산임대소득" },
  { id: 6, label: "금융소득(이자/배당)" },
  { id: 7, label: "상속/증여" },
  { id: 8, label: "대출" },
];

export const FundSourceSelection = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="34919:52540"
    >
      <header className="absolute top-0 left-0 w-full flex flex-col items-start">
        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="gap-2 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Kel660N3/img/mini-7@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

      <section className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />
              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0 h-auto"
                aria-label="Close"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <h1 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    자금의 원천을 선택해주세요.
                  </h1>
                </div>
              </div>
              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <ul className="flex-col items-start gap-[18px] self-stretch w-full flex-[0_0_auto] flex relative">
            {fundSourceOptions.map((option) => (
              <li
                key={option.id}
                className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
              >
                <Button
                  variant="ghost"
                  className="flex min-h-8 items-center relative flex-1 self-stretch grow justify-start px-0 h-auto hover:bg-transparent"
                >
                  <div className="flex items-center gap-1.5 relative flex-1 grow">
                    <span className="relative flex-1 mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-left">
                      {option.label}
                    </span>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
        </div>
      </section>
    </div>
  );
};
