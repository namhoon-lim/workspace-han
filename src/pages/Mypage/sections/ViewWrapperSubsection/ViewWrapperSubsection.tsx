import { ChevronRightIcon, InfoIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const idItems = [
  {
    title: "여권 인증",
    badgeText: "미등록",
    showTooltip: true,
  },
  {
    title: "신분증 인증",
    badgeText: "재등록",
    showTooltip: false,
  },
];

export const ViewWrapperSubsection = () => {
  return (
    <section className="flex flex-col items-start gap-1.5 px-6 py-8 w-full">
      <header className="flex items-center gap-1 w-full">
        <div className="flex items-center gap-1 flex-1">
          <h2 className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
            신분증 관리
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start w-full relative">
        <div className="flex flex-col items-start w-full">
          {idItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <Button
                variant="ghost"
                className="flex h-16 items-center gap-3 w-full justify-between px-0 hover:bg-transparent"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#1a1a1a] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                      {item.title}
                    </span>

                    <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#0d56e4] rounded-[50px] hover:bg-[#0d56e4]">
                      <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-white text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]">
                        {item.badgeText}
                      </span>
                    </Badge>
                  </div>

                  <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
                </div>
              </Button>

              {index === 1 && (
                <div className="flex items-start gap-1 px-3 py-3.5 w-full bg-[#f7f7f8] rounded-xl">
                  <InfoIcon className="w-4 h-4 text-[#717682] flex-shrink-0 mt-0.5" />
                  <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    실물 신분증만 승인이 가능합니다. (셀카, 임시발급확인서, 사물
                    사진 등
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute top-[46px] -left-1 flex flex-col items-start z-10">
          <div className="flex h-1.5 items-center pl-[34px] pr-0 py-0 w-full">
            <div className="w-[11px] h-1.5 overflow-hidden">
              <div className="w-0 h-0 border-l-[5.5px] border-l-transparent border-r-[5.5px] border-r-transparent border-b-[6px] border-b-white" />
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-0.5 px-4 py-3 -mt-0.5 bg-white rounded-[20px] border-2 border-solid border-[#6df1c3] shadow-[0px_4px_8px_#00000014]">
            <span className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#37373d] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
              여권을 등록하면 송금이 쉬워져요!
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 p-0 hover:bg-transparent"
            >
              <XIcon className="w-4 h-4 text-[#85888e]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
