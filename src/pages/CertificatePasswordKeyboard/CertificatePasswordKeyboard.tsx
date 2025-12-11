import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const passwordDots = Array(10).fill(null);

const topRowKeys = [
  { letter: "Q" },
  { letter: "W" },
  { letter: "E" },
  { letter: "R" },
  { letter: "T" },
  { letter: "Y" },
  { letter: "U" },
  { letter: "I" },
  { letter: "O" },
  { letter: "P" },
];

const middleRowKeys = [
  { letter: "A" },
  { letter: "S" },
  { letter: "D" },
  { letter: "F" },
  { letter: "G" },
  { letter: "H" },
  { letter: "J" },
  { letter: "K" },
  { letter: "L" },
];

const bottomRowKeys = [
  { letter: "Z" },
  { letter: "X" },
  { letter: "C" },
  { letter: "V" },
  { letter: "B" },
  { letter: "N" },
  { letter: "M" },
];

export const CertificatePasswordKeyboard = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35213:87606"
    >
      {/* Header */}
      <header className="flex flex-col w-full items-start">
        <div className="flex flex-col items-start w-full">
          <div className="h-[54px] items-center justify-around px-5 py-0 flex w-full relative">
            <img
              className="absolute h-8 top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/UrLjfz9Z/img/mini-6@2x.png"
            />
          </div>
        </div>
      </header>

      {/* Password Input Section */}
      <section className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start gap-[3px] pt-0 pb-6 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-end w-full">
              <div className="w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="w-[18px] h-[18px] p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-400" />
              </Button>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex items-start gap-2 w-full">
                <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                  <h2 className="flex-1 [font-family:'Pretendard',Helvetica] font-semibold text-[#003fbb] text-lg tracking-[-0.36px] leading-[130%]">
                    인증서 비밀번호를 입력해 주세요
                  </h2>
                </div>
              </div>

              <div className="w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="flex items-center gap-2.5 px-1.5 py-0 flex-1">
                      {passwordDots.map((_, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 bg-[#0b0c0e] rounded-md"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-0.5 bg-[#4c67f1]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[54px] flex items-center justify-center gap-2 rounded-xl w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-2 py-1 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto rounded-none">
              <span className="flex-1 [font-family:'Pretendard',Helvetica] font-bold text-white text-base text-center tracking-[-0.32px] leading-[130%]">
                확인
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Keyboard Section */}
      <section className="w-full bg-[#d3d6e2]">
        <div className="flex flex-col px-0 py-1 items-center">
          {/* Top Row */}
          <div className="flex justify-center gap-1.5 w-full px-[3px] mt-1.5">
            {topRowKeys.map((key, index) => (
              <button
                key={`top-${index}`}
                className="w-[33px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
                type="button"
              >
                <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center">
                  {key.letter}
                </span>
              </button>
            ))}
          </div>

          {/* Middle Row */}
          <div className="flex justify-center gap-1.5 w-full px-[18px] mt-3">
            {middleRowKeys.map((key, index) => (
              <button
                key={`middle-${index}`}
                className="w-[33px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
                type="button"
              >
                <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center">
                  {key.letter}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center gap-1.5 w-full px-[3px] mt-[11px]">
            <button
              className="w-[42px] h-[42px] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <img
                className="w-5 h-4"
                alt="Shift"
                src="https://c.animaapp.com/UrLjfz9Z/img/arrow-1.svg"
              />
            </button>

            {bottomRowKeys.map((key, index) => (
              <button
                key={`bottom-${index}`}
                className="w-[33px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
                type="button"
              >
                <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center">
                  {key.letter}
                </span>
              </button>
            ))}

            <button
              className="w-[42px] h-[42px] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <img
                className="w-5 h-4"
                alt="Delete"
                src="https://c.animaapp.com/UrLjfz9Z/img/key-3@2x.png"
              />
            </button>
          </div>

          {/* Space Row */}
          <div className="flex justify-center gap-1.5 w-full px-[3px] mt-[11px]">
            <button
              className="w-[44px] h-[42px] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center">
                123
              </span>
            </button>

            <button
              className="w-[42px] h-[42px] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <img
                className="w-6 h-5"
                alt="Emoji"
                src="https://c.animaapp.com/UrLjfz9Z/img/key-2@2x.png"
              />
            </button>

            <button
              className="flex-1 h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center">
                space
              </span>
            </button>

            <button
              className="w-[89px] h-[42px] bg-white rounded-[5px] shadow-[0px_1px_0px_#04040f5c] flex items-center justify-center"
              type="button"
            >
              <span className="[font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center">
                return
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
