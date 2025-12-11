import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const occupations = [
  "농림축산/수산/광업 종사자",
  "제조/건설/서비스업 종사자",
  "카지노/대부/귀금속/환전업 종사자",
  "가상자산사업자 관련 종사자",
  "의료/법조/금융업 전문직 종사자",
  "일반 전문직",
  "비금융 전문직(예술품 및 골동품판매, 부동산중개사, 변호사, 공인회계사, 세무사)",
  "개인사업자/자영업자",
  "자유직/프리랜서",
  "기타 회사원",
  "공무원",
];

export const OccupationSelection = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="34919:52198"
    >
      <header className="items-start absolute top-0 left-0 flex flex-col w-full z-10">
        <nav className="flex flex-col items-start relative self-stretch w-full">
          <div className="flex flex-col items-start relative self-stretch w-full">
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

      <div className="flex-col items-start self-stretch w-full flex relative">
        <div className="items-center gap-1.5 pt-0 pb-3.5 px-6 relative self-stretch bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-end relative self-stretch w-full">
              <div className="relative self-stretch w-full h-[22px]" />
              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0 h-auto"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <h1 className="relative flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    직업을 선택해주세요.
                  </h1>
                </div>
              </div>
              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <ScrollArea className="w-full">
            <div className="items-center justify-end gap-[18px] relative flex flex-col w-full">
              {occupations.map((occupation, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-start justify-start relative self-stretch w-full h-auto min-h-8 px-0 hover:bg-accent"
                >
                  <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
                    <div className="flex items-center gap-1.5 relative flex-1 grow">
                      <span className="relative flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-left">
                        {occupation}
                      </span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-white">
        </footer>
      </div>
    </div>
  );
};
