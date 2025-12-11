import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const keypadData = [
  {
    number: "1",
    letters: "",
    className: "w-[31.73%] h-[21.30%] top-[2.78%] left-0",
  },
  {
    number: "2",
    letters: "ABC",
    className: "w-[32.27%] h-[21.30%] top-[2.78%] left-[34.40%]",
  },
  {
    number: "3",
    letters: "DEF",
    className: "w-[32.27%] h-[21.30%] top-[2.78%] left-[67.20%]",
  },
  {
    number: "4",
    letters: "GHI",
    className: "w-[32.27%] h-[21.76%] top-[27.31%] left-0",
  },
  {
    number: "5",
    letters: "JKL",
    className: "w-[32.27%] h-[21.76%] top-[27.31%] left-[34.40%]",
  },
  {
    number: "6",
    letters: "MNO",
    className: "w-[32.27%] h-[21.76%] top-[27.31%] left-[67.20%]",
  },
  {
    number: "7",
    letters: "PGRS",
    className: "w-[32.27%] h-[21.76%] top-[52.31%] left-0",
  },
  {
    number: "8",
    letters: "TUV",
    className: "w-[32.27%] h-[21.76%] top-[52.31%] left-[34.40%]",
  },
  {
    number: "9",
    letters: "WXYZ",
    className: "w-[32.27%] h-[21.76%] top-[52.31%] left-[67.20%]",
  },
  {
    number: "0",
    letters: "",
    className: "w-[31.73%] h-[21.30%] top-[77.31%] left-[34.40%]",
  },
];

export const ViewSubsection = () => {
  return (
    <section className="flex flex-col justify-end gap-2.5 w-full items-center relative">
      <div className="flex flex-col items-start relative w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex relative w-full">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 grow bg-[#b7ccf7] hover:bg-[#a3bce8] h-auto rounded-xl">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="gap-10 w-full flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
          <div className="w-full gap-2.5 flex flex-col items-start relative bg-[linear-gradient(0deg,rgba(211,214,226,1)_0%,rgba(211,214,226,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="relative w-full h-[216px] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
              <button className="absolute w-[6.03%] h-[8.33%] top-[83.33%] left-[80.53%] flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer">
                <XIcon className="w-full h-full text-black" />
              </button>

              {keypadData.map((key, index) => (
                <button
                  key={`key-${index}`}
                  className={`absolute ${key.className} bg-transparent border-0 p-0 cursor-pointer`}
                >
                  <img
                    className="absolute w-[96.69%] h-full top-0 left-0"
                    alt="Key background"
                    src={
                      key.number === "1"
                        ? "https://c.animaapp.com/w2kCT5wM/img/key-background-8.svg"
                        : key.number === "2"
                          ? "https://c.animaapp.com/w2kCT5wM/img/key-background-7.svg"
                          : key.number === "3"
                            ? "https://c.animaapp.com/w2kCT5wM/img/key-background-6.svg"
                            : key.number === "4"
                              ? "https://c.animaapp.com/w2kCT5wM/img/key-background-5.svg"
                              : key.number === "5"
                                ? "https://c.animaapp.com/w2kCT5wM/img/key-background-4.svg"
                                : key.number === "6"
                                  ? "https://c.animaapp.com/w2kCT5wM/img/key-background-3.svg"
                                  : key.number === "7"
                                    ? "https://c.animaapp.com/w2kCT5wM/img/rectangle.svg"
                                    : key.number === "8"
                                      ? "https://c.animaapp.com/w2kCT5wM/img/key-background-2.svg"
                                      : key.number === "9"
                                        ? "https://c.animaapp.com/w2kCT5wM/img/key-background-1.svg"
                                        : "https://c.animaapp.com/w2kCT5wM/img/key-background.svg"
                    }
                  />

                  {key.letters && (
                    <div
                      className={`absolute ${
                        key.number === "1" || key.number === "0"
                          ? "w-[98.32%] h-[26.09%] top-[63.04%]"
                          : "h-[25.53%] top-[63.83%] w-[96.69%]"
                      } left-0 [font-family:'SF_Pro_Text-Bold',Helvetica] font-bold text-black text-[10px] text-center leading-[normal] tracking-[2.00px]`}
                    >
                      {key.number === "2" ? (
                        <>
                          <span className="tracking-[0.20px]">AB</span>
                          <span className="tracking-[0]">C</span>
                        </>
                      ) : (
                        key.letters
                      )}
                    </div>
                  )}

                  <div
                    className={`${
                      key.number === "1" || key.number === "0"
                        ? "w-[98.32%] h-[65.22%] top-[2.17%]"
                        : key.number === "2" || key.number === "3"
                          ? "w-[96.69%] h-[65.22%] top-[2.17%]"
                          : "w-[96.69%] h-[63.83%] top-[3.19%]"
                    } absolute left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[25px] text-center tracking-[0.29px] leading-[normal]`}
                  >
                    {key.number}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[34px]"></div>
        </div>
      </div>
    </section>
  );
};
