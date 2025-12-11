import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SelfieCapture = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#1e1e1e] relative"
      data-model-id="40000003:240088"
    >
      {/* Close Button */}
      <header className="flex justify-end p-4 relative z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 p-0 text-white hover:bg-white/10"
          asChild
        >
          <Link to="/passwordresetu95020">
            <XIcon className="w-6 h-6" />
          </Link>
        </Button>
      </header>

      {/* Camera View Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Face Guide Oval */}
        <div className="relative w-[260px] h-[290px]">
          {/* Oval border */}
          <div className="absolute inset-0 rounded-[50%] border-4 border-white" />

          {/* Guide Text */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center">
            <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              원 안에 얼굴을 맞춰주세요
            </p>
          </div>
        </div>

        {/* Countdown Display */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-[#003fbb] flex items-center justify-center">
            <span className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-4xl tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Safe Area */}
      <footer className="h-[34px] bg-[#1e1e1e]" />
    </div>
  );
};
