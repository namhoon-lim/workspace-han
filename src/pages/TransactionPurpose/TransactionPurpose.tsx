import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const transactionOptions = [
  { id: 1, label: "해외송금 보내기" },
  { id: 2, label: "해외송금 받기" },
  { id: 3, label: "간편송금" },
  { id: 4, label: "한패스 선불카드" },
  { id: 5, label: "생활편의 서비스" },
];

export const TransactionPurpose = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="34919:52431"
    >
      <header className="absolute top-0 left-0 w-full flex flex-col items-start">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Kel660N3/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start w-full">
        <div className="items-center gap-1.5 pt-0 pb-3.5 px-6 bg-white rounded-[30px_30px_0px_0px] flex flex-col w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-end w-full">
              <div className="w-full h-[22px]" />
              <Button variant="ghost" size="icon" className="h-auto w-auto p-0">
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="items-start gap-2 w-full flex">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 flex">
                  <h2 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    거래목적을 선택해주세요.
                  </h2>
                </div>
              </div>
              <div className="w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[18px] w-full">
            {transactionOptions.map((option) => (
              <Button
                key={option.id}
                variant="ghost"
                className="flex items-start w-full h-auto p-0 justify-start hover:bg-transparent"
              >
                <div className="flex min-h-8 items-center flex-1">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-left">
                      {option.label}
                    </span>
                  </div>
                </div>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
