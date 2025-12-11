import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon, RotateCcwIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const pinIndicators = [
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: true },
  { filled: false },
  { filled: false },
];

const keypadButtons = [
  { row: 0, keys: ["7", "5", "2"] },
  { row: 1, keys: ["1", "4", "6"] },
  { row: 2, keys: ["8", "0", "3"] },
];

export const PinInput = () => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="34892:269046"
    >
      <div className="flex w-[375px] h-[800px] relative flex-col items-start bg-white">
        <BackSubHeader backTo="/" />

        <main className="flex flex-col items-center gap-[50px] px-6 py-0 relative self-stretch w-full flex-1">
          <div className="flex flex-col items-center gap-[26px] relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
              6자리 비밀번호를
              <br />
              입력해 주세요
            </h1>

            <div className="flex items-center gap-3 relative">
              {pinIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`w-[18px] h-[18px] rounded-full ${
                    indicator.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-auto inline-flex items-center gap-1 px-0 py-1.5"
          >
            <span className="font-body-14-m text-[#85888e] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
              생체 정보 등록하기
            </span>
            <img
              className="w-4 h-4"
              alt="Ico next line"
              src="https://c.animaapp.com/X2DaSZUE/img/ico-16-next-line-01-3.svg"
            />
          </Button>
        </main>

        <footer className="flex flex-col items-start gap-6 relative self-stretch w-full">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 relative self-stretch w-full">
            <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="relative self-stretch w-full h-[292px] bg-[#0d56e4]">
            <div className="grid grid-cols-3 gap-0 w-full h-full p-8">
              {keypadButtons.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.keys.map((key, keyIndex) => (
                    <Button
                      key={`${rowIndex}-${keyIndex}`}
                      variant="ghost"
                      className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
                    >
                      <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                        {key}
                      </span>
                    </Button>
                  ))}
                </React.Fragment>
              ))}

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <RotateCcwIcon className="w-8 h-8 text-white" />
              </Button>

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                  9
                </span>
              </Button>

              <Button
                variant="ghost"
                className="h-auto flex items-center justify-center p-4 hover:bg-white/10"
              >
                <XIcon className="w-8 h-8 text-white" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
