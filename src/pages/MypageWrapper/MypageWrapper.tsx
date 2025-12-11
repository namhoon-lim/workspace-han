import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection/UiStatusBarSubsection";
import { ViewSubsection } from "./sections/ViewSubsection/ViewSubsection";

export const MypageWrapper = () => {
  const dots = Array(10).fill(null);

  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="34894:24910"
    >
      <UiStatusBarSubsection />

      <BackSubHeader backTo="/" />

      <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 relative w-full">
        <h1 className="relative w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          신분증 번호입력을 해주세요
        </h1>
      </div>

      <main className="flex flex-col items-start gap-9 pt-[42px] pb-[30px] px-6 relative flex-1 w-full">
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
            신분증 번호
          </Label>

          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 relative w-full">
              <div className="flex flex-col h-[42px] items-start relative w-full">
                <div className="flex-1 w-full flex items-center relative">
                  <div className="gap-2.5 px-1.5 py-0 flex-1 flex items-center relative">
                    {dots.map((_, index) => (
                      <div
                        key={index}
                        className="relative w-3 h-3 bg-[#0b0c0e] rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <div className="relative w-full h-0.5 bg-[#4c67f1]" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <ViewSubsection />
    </div>
  );
};
