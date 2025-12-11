import { BackSubHeader } from "@/components/BackSubHeader";
import { ChevronRightIcon, CircleIcon, DeleteIcon, MoreHorizontalIcon, RotateCcwIcon } from "lucide-react";
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
  { number: "7", position: "row-1 col-1" },
  { number: "5", position: "row-1 col-2" },
  { number: "2", position: "row-1 col-3" },
  { number: "1", position: "row-2 col-1" },
  { number: "4", position: "row-2 col-2" },
  { number: "6", position: "row-2 col-3" },
  { number: "8", position: "row-3 col-1" },
  { number: "0", position: "row-3 col-2" },
  { number: "3", position: "row-3 col-3" },
  { number: "9", position: "row-4 col-2" },
];

export const PinPin = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="40000016:2694299"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col items-start gap-6 w-full mt-auto">
        <div className="flex items-center justify-center gap-2.5 px-6 py-0 w-full">
          <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>

        <div className="w-full h-[292px] bg-[#0d56e4] grid grid-cols-3 gap-0 p-0">
          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              7
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              5
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              2
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              1
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              4
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              6
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              8
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              3
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <RotateCcwIcon className="w-[31px] h-[30px] text-white" />
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
              9
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center justify-center py-[33px] hover:bg-[#0d56e4]/90 rounded-none"
          >
            <DeleteIcon className="w-[31px] h-[30px] text-white" />
          </Button>
        </div>
      </div>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-[#0d56e4]">
      </footer>
    </div>
  );
};
