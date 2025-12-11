import React from "react";
import { ContentsWrapperSubsection } from "../MypageScreen/sections/ContentsWrapperSubsection/ContentsWrapperSubsection";
import { UiStatusBarWrapperSubsection } from "../MypageScreen/sections/UiStatusBarWrapperSubsection/UiStatusBarWrapperSubsection";
import { ContentsSubsection } from "./sections/ContentsSubsection/ContentsSubsection";
import { UiStatusBarSubsection } from "./sections/UiStatusBarSubsection/UiStatusBarSubsection";
import { ViewSubsection } from "./sections/ViewSubsection/ViewSubsection";

export const ServicecertWrapper = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="36848:89371"
    >
      <UiStatusBarSubsection />
      <UiStatusBarWrapperSubsection />

      <div className="flex-col items-start bg-white flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              발급 방법을 선택해 주세요.
            </h1>
          </div>
        </div>
      </div>

      <ContentsSubsection />
      <ViewSubsection />
      <ContentsWrapperSubsection />
    </div>
  );
};
