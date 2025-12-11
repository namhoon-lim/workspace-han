import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const IdFrontCapture = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] w-full min-w-[375px] min-h-screen relative flex flex-col"
      data-model-id="40000003:687579"
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between px-5 py-4 relative w-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-0 hover:bg-transparent"
            asChild
          >
            <Link to="/verificationstepsu95024">
              <XIcon className="w-6 h-6 text-white" />
            </Link>
          </Button>

          <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-2">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-black"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 px-6 py-0 mt-4">
          <h1 className="flex-1 font-title-24-b font-[number:var(--title-24-b-font-weight)] text-transparent text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#45a6ff]">신분증 앞면</span>
            <span className="text-white">을 촬영해주세요.</span>
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <img
            className="w-full max-w-[332px] h-auto object-cover rounded-2xl"
            alt="ID Card"
            src="https://c.animaapp.com/SXpbAKOQ/img/------@2x.png"
          />
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 px-6 py-0 mb-8">
          <p className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-white text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            촬영 시 흔들림이나 빛 반사에 주의하세요.
          </p>
        </div>

        <div className="flex items-center justify-center pb-8">
          <Button
            variant="ghost"
            size="icon"
            className="h-[70px] w-[70px] rounded-full border-[1.5px] border-[#d2dbe6] bg-transparent hover:bg-transparent p-0"
          >
            <div className="w-[85%] h-[85%] bg-white rounded-full" />
          </Button>
        </div>

        <div className="flex flex-col w-full items-center gap-2.5 px-[105px] py-2 pb-4">
          <div className="flex flex-col w-[134px] items-center gap-2.5">
            <div className="w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
