import { BackSubHeader } from "@/components/BackSubHeader";
import { ChevronLeftIcon, CircleIcon, MoreHorizontalIcon, RotateCcwIcon, XIcon } from "lucide-react";
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

const keypadButtons = [
  { row: 0, keys: [{ value: "7" }, { value: "5" }, { value: "2" }] },
  { row: 1, keys: [{ value: "1" }, { value: "4" }, { value: "6" }] },
  { row: 2, keys: [{ value: "8" }, { value: "0" }, { value: "3" }] },
  {
    row: 3,
    keys: [
      { value: "reset", icon: true },
      { value: "9" },
      { value: "delete", icon: true },
    ],
  },
];

export const PinConfirm = () => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] flex"
      data-model-id="34892:269047"
    >
      <div className="flex w-[375px] h-[800px] flex-col items-start bg-white">
        <BackSubHeader backTo="/" />

        <main className="flex flex-col items-center gap-[50px] px-6 py-0 w-full flex-1">
          <section className="flex flex-col items-center gap-[26px] w-full">
            <div className="flex flex-col items-center gap-[50px] w-full">
              <div className="flex flex-col items-center gap-[26px] w-full">
                <h1 className="flex items-start justify-center w-full">
                  <span className="flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-20-b-font-size)] text-center tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] [font-style:var(--title-20-b-font-style)]">
                    다시 한번 입력해 주세요
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-3 w-full">
                  {pinDots.map((dot, index) => (
                    <div
                      key={`pin-dot-${index}`}
                      className={`w-3 h-3 rounded-full ${
                        dot.filled ? "bg-[#0d56e4]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="inline-flex flex-col items-center gap-3">
            <Button
              variant="ghost"
              className="h-auto inline-flex items-center justify-center px-0 py-1.5"
            >
              <span className="font-body-14-m text-[#85888e] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
                생체 정보 등록하기
              </span>
              <ChevronLeftIcon className="h-4 w-4 rotate-180" />
            </Button>
          </div>
        </main>

        <footer className="flex flex-col items-start gap-6 w-full">
          <div className="flex items-center justify-center gap-2.5 px-6 py-0 w-full">
            <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6자리 비밀번호(PIN)는 한패스 서비스를 이용할 때 필요하며, 비밀번호
              입력 대신 Face ID 및 지문 인증을 이용할 수 있습니다.(해외송금,
              국내송금, 월렛 충전 등)
            </p>
          </div>

          <div className="w-full h-[292px] bg-[#0d56e4]">
            <div className="grid grid-cols-3 gap-0 w-full h-full p-0">
              {keypadButtons.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  {row.keys.map((key, keyIndex) => (
                    <Button
                      key={`key-${rowIndex}-${keyIndex}`}
                      variant="ghost"
                      className="h-[73px] w-full rounded-none hover:bg-[#0d56e4]/90 flex items-center justify-center"
                    >
                      {key.icon ? (
                        key.value === "reset" ? (
                          <RotateCcwIcon className="h-8 w-8 text-white" />
                        ) : (
                          <XIcon className="h-8 w-8 text-white" />
                        )
                      ) : (
                        <span className="font-title-22-b font-[number:var(--title-22-b-font-weight)] text-white text-[length:var(--title-22-b-font-size)] text-center tracking-[var(--title-22-b-letter-spacing)] leading-[var(--title-22-b-line-height)] [font-style:var(--title-22-b-font-style)]">
                          {key.value}
                        </span>
                      )}
                    </Button>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
