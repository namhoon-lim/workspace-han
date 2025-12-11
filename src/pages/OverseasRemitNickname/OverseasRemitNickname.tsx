
import { BackSubHeader } from "@/components/BackSubHeader";
import React from "react";
import { Button } from "@/components/ui/button";
import { DisplaySection } from "./sections/DisplaySection/DisplaySection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const OverseasRemitNickname = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="34820:539228"
    >
      <BackSubHeader backTo="/" />

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 self-stretch w-full">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              닉네임 설정
            </h1>
          </div>
        </div>
      </section>

      <MainContentSection />
      <DisplaySection />
    </div>
  );
};
