import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { InputViewSection } from "./sections/InputViewSection/InputViewSection";

export const Common = () => {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-white"
      data-model-id="40000001:46028"
    >
      <BackSubHeader backTo="/" />

      <section className="flex flex-col items-start bg-white w-full">
        <div className="flex flex-col gap-2 pt-22 pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-grayscale-01 text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start pt-42 pb-6 px-6 flex-1 w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center w-full min-h-42 pl-1">
            <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-placeholder text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
              비밀번호를 입력해주세요.
            </div>
          </div>
          <div className="w-full h-px bg-grayscale-bg-09" />
        </div>
      </section>

      <InputViewSection />
    </div>
  );
};
