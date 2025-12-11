import { BackSubHeader } from "@/components/BackSubHeader";
import { ChevronRightIcon, CircleIcon, DeleteIcon, MoreHorizontalIcon, RotateCcwIcon } from "lucide-react";
import React from "react";
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
  { number: "7", position: "top-[33px] left-14" },
  { number: "5", position: "top-[33px] left-[180px]" },
  { number: "2", position: "top-[33px] left-[306px]" },
  { number: "1", position: "top-[99px] left-[57px]" },
  { number: "4", position: "top-[99px] left-[180px]" },
  { number: "6", position: "top-[99px] left-[305px]" },
  { number: "8", position: "top-[165px] left-[55px]" },
  { number: "0", position: "top-[165px] left-[180px]" },
  { number: "3", position: "top-[165px] left-[305px]" },
  { number: "9", position: "top-[231px] left-[180px]" },
];

export const PinEntry = () => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="34892:269048"
    >
      <div className="flex w-[375px] h-[800px] relative flex-col items-start bg-white">
        <BackSubHeader backTo="/" />

        <footer className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px] mr-[-20.00px]">
            <div className="absolute top-0 left-0 w-[375px] h-[292px] bg-[#0d56e4]" />

            {keypadNumbers.map((item, index) => (
              <Button
                key={`keypad-${index}`}
                variant="ghost"
                className={`${item.position} w-auto h-auto p-2 absolute font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)] hover:bg-white/10`}
              >
                {item.number}
              </Button>
            ))}

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_-_151px)] w-[31px] h-[30px] p-0 hover:bg-white/10"
            >
              <RotateCcwIcon className="w-6 h-6 text-white" />
            </Button>

            <Button
              variant="ghost"
              className="absolute top-[calc(50.00%_+_81px)] left-[calc(50.00%_+_99px)] w-[31px] h-[30px] p-0 hover:bg-white/10"
            >
              <DeleteIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </footer>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#0d56e4]">
        </div>
      </div>
    </div>
  );
};
