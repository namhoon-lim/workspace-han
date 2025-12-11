import React from "react";
import { Button } from "@/components/ui/button";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { TopSubsection } from "./sections/TopSubsection/TopSubsection";
import { ViewWrapperSubsection } from "./sections/ViewWrapperSubsection/ViewWrapperSubsection";

export const Mypage = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="36848:79034"
    >

      <header className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="/img/wechat-hd.png"
              />
            </div>

            <img
              className="h-4 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/kp7cm7rf/img/event@2x.png"
            />
          </div>
        </div>
      </header>

      <TopSubsection />

      <ViewWrapperSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <DivWrapperSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <DivSubsection />

      <div className="w-full h-3 bg-[#f7f7f8]" />

      <FrameSubsection />

      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-8">
        <Button
          variant="link"
          className="h-auto p-0 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#85888e] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline [font-style:var(--body-15-r-font-style)]"
        >
          로그아웃
        </Button>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full mt-auto">
        <div className="w-full h-4" />
      </footer>

      <div className="flex flex-col w-full items-start gap-2.5 px-6 py-0 fixed left-0 bottom-[37px]">
        <div className="flex h-[38px] items-center justify-center gap-2.5 px-4 py-2.5 w-full bg-[#252e33d6] rounded-xl">
          <div className="flex items-center justify-center flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            6자리 비밀번호(PIN)가 변경되었어요.
          </div>
        </div>
      </div>
    </div>
  );
};
