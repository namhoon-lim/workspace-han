import { BackSubHeader } from "@/components/BackSubHeader";
import { ChevronRightIcon, CircleIcon, DeleteIcon, MoreVerticalIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pinDots = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  { row: 0, col: 0, value: "7" },
  { row: 0, col: 1, value: "5" },
  { row: 0, col: 2, value: "2" },
  { row: 1, col: 0, value: "1" },
  { row: 1, col: 1, value: "4" },
  { row: 1, col: 2, value: "6" },
  { row: 2, col: 0, value: "8" },
  { row: 2, col: 1, value: "0" },
  { row: 2, col: 2, value: "3" },
  { row: 3, col: 0, value: "refresh", icon: true },
  { row: 3, col: 1, value: "9" },
  { row: 3, col: 2, value: "delete", icon: true },
];

export const OverseasRemitPin = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000008:1187249"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 w-full">
        <div className="flex flex-col items-center gap-[50px] px-6 py-8">
          <div className="flex flex-col items-center gap-[26px] w-full">
            <h1 className="font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
              6자리 비밀번호를
              <br />
              입력해 주세요
            </h1>

            <div className="flex items-center justify-center gap-3">
              {pinDots.map((dot, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center justify-center px-0 py-1.5 gap-1"
          >
            <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              6자리 비밀번호(PIN) 변경
            </span>
            <ChevronRightIcon className="w-4 h-4 text-[#85888e]" />
          </Button>
        </div>

        <div className="flex items-center justify-center px-6 py-4">
          <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>
      </main>

      <div className="w-full bg-[#0d56e4] pb-8">
        <div className="grid grid-cols-3 gap-0 px-6 py-8">
          {keypadButtons.map((button, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto flex items-center justify-center py-4 text-white hover:bg-white/10"
            >
              {button.icon ? (
                button.value === "refresh" ? (
                  <RotateCcwIcon className="w-8 h-8" />
                ) : (
                  <DeleteIcon className="w-8 h-8" />
                )
              ) : (
                <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                  {button.value}
                </span>
              )}
            </Button>
          ))}
        </div>

        <div className="flex justify-center px-[105px] py-2"></div>
      </div>
    </div>
  );
};
