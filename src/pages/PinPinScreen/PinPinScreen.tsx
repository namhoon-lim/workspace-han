import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon, RotateCcwIcon, XIcon } from "lucide-react";
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

const keypadNumbers = [
  [
    { value: "7", position: "top-[33px] left-14" },
    { value: "5", position: "top-[33px] left-[180px]" },
    { value: "2", position: "top-[33px] left-[306px]" },
  ],
  [
    { value: "1", position: "top-[99px] left-[57px]" },
    { value: "4", position: "top-[99px] left-[180px]" },
    { value: "6", position: "top-[99px] left-[305px]" },
  ],
  [
    { value: "8", position: "top-[165px] left-[55px]" },
    { value: "0", position: "top-[165px] left-[180px]" },
    { value: "3", position: "top-[165px] left-[305px]" },
  ],
];

export const PinPinScreen = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="40000016:2572120"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 items-center gap-[50px] px-6 py-0 self-stretch w-full">
        <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
          <div className="flex flex-col items-center gap-[50px] relative self-stretch w-full">
            <div className="flex flex-col items-center gap-[26px] self-stretch w-full">
              <h1 className="relative flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                6자리 비밀번호를
                <br />
                입력해 주세요
              </h1>

              <div className="flex items-center justify-center gap-3 w-[198px]">
                {pinDots.map((dot, index) => (
                  <div
                    key={`pin-dot-${index}`}
                    className={`w-6 h-6 rounded-full ${
                      dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-start gap-6 self-stretch w-full">
        <div className="flex items-center justify-center px-6 py-0 self-stretch w-full">
          <p className="relative flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
            입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
            국내송금, 월렛 충전 등)
          </p>
        </div>

        <div className="relative self-stretch w-full h-[292px]">
          <div className="absolute top-0 left-0 w-full h-[292px] bg-[#0d56e4]" />

          {keypadNumbers.map((row, rowIndex) =>
            row.map((number, colIndex) => (
              <Button
                key={`keypad-${rowIndex}-${colIndex}`}
                variant="ghost"
                className={`absolute ${number.position} h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent`}
              >
                {number.value}
              </Button>
            )),
          )}

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] h-auto p-0 hover:bg-transparent"
          >
            <RotateCcwIcon className="w-[31px] h-[30px] text-white" />
          </Button>

          <Button
            variant="ghost"
            className="absolute top-[231px] left-[180px] h-auto p-0 font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-transparent"
          >
            9
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] h-auto p-0 hover:bg-transparent"
          >
            <XIcon className="w-[31px] h-[30px] text-white" />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full bg-[#0d56e4]">
        </div>
      </footer>
    </div>
  );
};
