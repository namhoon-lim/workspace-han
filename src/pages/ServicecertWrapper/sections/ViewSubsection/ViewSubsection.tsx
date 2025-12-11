import React from "react";
import { Button } from "@/components/ui/button";

const keyboardRows = [
  [
    { letter: "Q", image: "https://c.animaapp.com/Oax14zk6/img/keycap-28.svg" },
    { letter: "W", image: "https://c.animaapp.com/Oax14zk6/img/keycap-27.svg" },
    { letter: "E", image: "https://c.animaapp.com/Oax14zk6/img/keycap-26.svg" },
    { letter: "R", image: "https://c.animaapp.com/Oax14zk6/img/keycap-25.svg" },
    { letter: "T", image: "https://c.animaapp.com/Oax14zk6/img/keycap-24.svg" },
    { letter: "Y", image: "https://c.animaapp.com/Oax14zk6/img/keycap-23.svg" },
    { letter: "U", image: "https://c.animaapp.com/Oax14zk6/img/keycap-22.svg" },
    { letter: "O", image: "https://c.animaapp.com/Oax14zk6/img/keycap-21.svg" },
    { letter: "I", image: "https://c.animaapp.com/Oax14zk6/img/keycap-20.svg" },
    { letter: "P", image: "https://c.animaapp.com/Oax14zk6/img/keycap-19.svg" },
  ],
  [
    { letter: "A", image: "https://c.animaapp.com/Oax14zk6/img/keycap-18.svg" },
    { letter: "S", image: "https://c.animaapp.com/Oax14zk6/img/keycap-17.svg" },
    { letter: "D", image: "https://c.animaapp.com/Oax14zk6/img/keycap-16.svg" },
    { letter: "F", image: "https://c.animaapp.com/Oax14zk6/img/keycap-15.svg" },
    { letter: "G", image: "https://c.animaapp.com/Oax14zk6/img/keycap-14.svg" },
    { letter: "H", image: "https://c.animaapp.com/Oax14zk6/img/keycap-13.svg" },
    { letter: "J", image: "https://c.animaapp.com/Oax14zk6/img/keycap-12.svg" },
    { letter: "K", image: "https://c.animaapp.com/Oax14zk6/img/keycap-11.svg" },
    { letter: "L", image: "https://c.animaapp.com/Oax14zk6/img/keycap-10.svg" },
  ],
  [
    { letter: "Z", image: "https://c.animaapp.com/Oax14zk6/img/keycap-8.svg" },
    { letter: "X", image: "https://c.animaapp.com/Oax14zk6/img/keycap-7.svg" },
    { letter: "C", image: "https://c.animaapp.com/Oax14zk6/img/keycap-6.svg" },
    { letter: "V", image: "https://c.animaapp.com/Oax14zk6/img/keycap-5.svg" },
    { letter: "B", image: "https://c.animaapp.com/Oax14zk6/img/keycap-4.svg" },
    { letter: "N", image: "https://c.animaapp.com/Oax14zk6/img/keycap-3.svg" },
    { letter: "M", image: "https://c.animaapp.com/Oax14zk6/img/keycap-2.svg" },
  ],
];

export const ViewSubsection = () => {
  return (
    <section className="flex flex-col justify-end gap-2.5 w-full items-center">
      <div className="flex flex-col items-start w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 h-auto rounded-none">
              <span className="flex-1 text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] [font-style:var(--title-16-b-font-style)]">
                발급하기
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="w-full flex">
            <div className="flex-1 flex flex-col px-0 py-1 items-center bg-[#d3d6e2] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
              <div className="w-full max-w-[365px] h-[42px] relative mt-1.5">
                {keyboardRows[0].map((key, index) => (
                  <div
                    key={`row1-${index}`}
                    className="absolute w-[9.04%] h-full top-0"
                    style={{ left: `${index * 10.41}%` }}
                  >
                    <img
                      className="absolute w-[93.94%] h-full top-0 left-0"
                      alt="Keycap"
                      src={key.image}
                    />
                    <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                      {key.letter}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-[327px] mt-3 h-[42px] relative">
                {keyboardRows[1].map((key, index) => (
                  <div
                    key={`row2-${index}`}
                    className="absolute w-[10.09%] h-full top-0"
                    style={{ left: `${index * 11.31}%` }}
                  >
                    <img
                      className="absolute w-[93.94%] h-full top-0 left-0"
                      alt="Keycap"
                      src={key.image}
                    />
                    <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                      {key.letter}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-[365px] mt-[11px] h-[42px] relative">
                <img
                  className="absolute w-[11.51%] h-full top-0 left-[88.49%]"
                  alt="Key"
                  src="https://c.animaapp.com/Oax14zk6/img/key-1@2x.png"
                />

                {keyboardRows[2].map((key, index) => (
                  <div
                    key={`row3-${index}`}
                    className="absolute w-[9.04%] h-full top-0"
                    style={{ left: `${15.34 + index * 10.14}%` }}
                  >
                    <img
                      className="w-[93.92%] absolute h-full top-0 left-0"
                      alt="Keycap"
                      src={key.image}
                    />
                    <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                      {key.letter}
                    </div>
                  </div>
                ))}

                <div className="absolute w-[11.51%] h-full top-0 left-0">
                  <img
                    className="w-full absolute h-full top-0 left-0"
                    alt="Keycap"
                    src="https://c.animaapp.com/Oax14zk6/img/keycap-9.svg"
                  />
                  <img
                    className="absolute w-[47.59%] h-[38.10%] top-[30.95%] left-[26.19%]"
                    alt="Arrow"
                    src="https://c.animaapp.com/Oax14zk6/img/arrow.svg"
                  />
                </div>
              </div>

              <div className="w-full max-w-[364px] mt-[11px] ml-[1.0px] h-[42px] relative">
                <div className="absolute w-[24.45%] h-full top-0 left-[76.10%]">
                  <img
                    className="w-[97.75%] absolute h-full top-0 left-0"
                    alt="Keycap"
                    src="https://c.animaapp.com/Oax14zk6/img/keycap.svg"
                  />
                  <div className="absolute w-[97.75%] h-[45.24%] top-[26.19%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.05px] leading-[normal]">
                    return
                  </div>
                </div>

                <div className="absolute w-[49.73%] h-full top-0 left-[25.27%]">
                  <img
                    className="w-[98.90%] absolute h-full top-0 left-0"
                    alt="Keycap"
                    src="https://c.animaapp.com/Oax14zk6/img/keycap-1.svg"
                  />
                  <div className="w-[78.45%] top-[26.19%] left-[9.94%] absolute h-[45.24%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.30px] leading-[normal]">
                    space
                  </div>
                </div>

                <div className="absolute w-[12.09%] h-full top-0 left-0">
                  <div className="w-[95.45%] bg-[#a2a8bf] rounded-[5px] shadow-[0px_1px_0px_#04040f5c] absolute h-full top-0 left-0" />
                  <div className="w-[95.45%] top-[28.57%] left-0 absolute h-[45.24%] [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.30px] leading-[normal]">
                    123
                  </div>
                </div>

                <img
                  className="absolute w-[11.54%] h-full top-0 left-[12.64%]"
                  alt="Key"
                  src="https://c.animaapp.com/Oax14zk6/img/key@2x.png"
                />
              </div>
            </div>
          </div>

          <img
            className="w-full h-auto"
            alt="Group"
            src="https://c.animaapp.com/Oax14zk6/img/group.svg"
          />

          <div className="w-full h-[34px] flex items-end justify-center">
            <div className="mb-2 w-[134px] h-[5px] ml-px bg-black rounded-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
