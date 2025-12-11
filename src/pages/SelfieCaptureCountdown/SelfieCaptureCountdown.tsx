import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SelfieCaptureCountdown = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="40000003:530210"
    >
      {/* Header */}
      <header className="w-full flex flex-col items-start flex-shrink-0">
      </header>

      {/* Navigation */}
      <nav className="flex flex-col items-start w-full flex-shrink-0">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-auto w-8 p-0 absolute left-1.5 top-1/2 -translate-y-1/2"
              asChild
            >
              <Link to="/verificationstepsu95024">
                <XIcon className="w-8 h-8 text-white" />
              </Link>
            </Button>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/SXpbAKOQ/img/mini-9@2x.png"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-[41px] pt-3.5 pb-0 px-0 w-full flex-shrink-0">
        <div className="flex flex-col items-start gap-[7px] px-6 py-0 w-full">
          <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            셀카 촬영
          </h1>

          <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
            가이드라인에 얼굴을 맞추고 촬영버튼을 눌러 주세요.
          </p>
        </div>
      </div>

      {/* Face Outline */}
      <div className="flex items-center justify-center gap-2.5 pt-[50px] pb-0 px-0 flex-1 w-full">
        <div className="w-[260px] h-[290px] bg-white rounded-[160px]" />
      </div>

      {/* Footer */}
      <footer className="h-[150px] flex flex-col items-center justify-between pt-0 pb-[30px] px-0 w-full">
        <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-white text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
          촬영이 끝날 때까지 그대로 유지해주세요.
        </p>

        <div className="relative w-[72px] h-[70px]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-title-24-b font-[number:var(--title-24-b-font-weight)] text-white text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] whitespace-nowrap [font-style:var(--title-24-b-font-style)]">
            1
          </span>

          <img
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[67px] h-[70px]"
            alt="Ellipse"
            src="https://c.animaapp.com/SXpbAKOQ/img/ellipse-4638.svg"
          />
        </div>
      </footer>

      {/* Home Indicator */}
      <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full flex-shrink-0">
        <div className="w-[134px] flex flex-col items-center gap-2.5">
          <div className="w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>
      </div>
    </div>
  );
};
