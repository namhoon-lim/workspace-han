import React from "react";
import { Button } from "@/components/ui/button";

const keyboardRows = [
  {
    keys: [
      { letter: "Q", left: "left-0" },
      { letter: "W", left: "left-[10.14%]" },
      { letter: "E", left: "left-[20.27%]" },
      { letter: "R", left: "left-[30.41%]" },
      { letter: "T", left: "left-[40.55%]" },
      { letter: "Y", left: "left-[50.68%]" },
      { letter: "U", left: "left-[60.82%]" },
      { letter: "O", left: "left-[70.96%]" },
      { letter: "I", left: "left-[81.10%]" },
      { letter: "P", left: "left-[91.51%]" },
    ],
    width: "w-[365px]",
    marginTop: "mt-1.5",
    keyWidth: "w-[9.04%]",
  },
  {
    keys: [
      { letter: "A", left: "left-0" },
      { letter: "S", left: "left-[11.31%]" },
      { letter: "D", left: "left-[22.63%]" },
      { letter: "F", left: "left-[33.94%]" },
      { letter: "G", left: "left-[45.26%]" },
      { letter: "H", left: "left-[56.57%]" },
      { letter: "J", left: "left-[67.89%]" },
      { letter: "K", left: "left-[79.20%]" },
      { letter: "L", left: "left-[90.52%]" },
    ],
    width: "w-[327px]",
    marginTop: "mt-3",
    keyWidth: "w-[10.09%]",
  },
  {
    keys: [
      { letter: "Z", left: "left-[15.34%]" },
      { letter: "X", left: "left-[25.48%]" },
      { letter: "C", left: "left-[35.62%]" },
      { letter: "V", left: "left-[45.75%]" },
      { letter: "B", left: "left-[55.89%]" },
      { letter: "N", left: "left-[66.03%]" },
      { letter: "M", left: "left-[76.16%]" },
    ],
    width: "w-[365px]",
    marginTop: "mt-[11px]",
    keyWidth: "w-[9.04%]",
  },
];

export const ViewSubsection = () => {
  return (
    <section className="flex-col justify-end w-full flex-[0_0_auto] flex items-center self-stretch">
      <div className="min-h-[54px] items-center justify-center gap-2 flex-[0_0_auto] rounded-xl shadow-[0px_-20px_20px_#ffffff] flex self-stretch w-full">
        <div className="min-h-[54px] flex-1 grow flex items-start">
          <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-none h-auto">
            <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-[375px] h-[291px]">
        <div className="absolute w-full h-[calc(100%_-_75px)] top-0 left-0 flex">
          <div className="flex-1 w-full flex flex-col px-0 py-1 items-center min-h-full bg-[#d3d6e2] backdrop-blur-[13.59px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.59px)_brightness(100%)]">
            {keyboardRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`${row.width} h-[42px] relative ${row.marginTop}`}
              >
                {row.keys.map((key, keyIndex) => (
                  <div
                    key={`key-${rowIndex}-${keyIndex}`}
                    className={`absolute ${row.keyWidth} h-full top-0 ${key.left}`}
                  >
                    <img
                      className="absolute w-[93.94%] h-full top-0 left-0"
                      alt="Keycap"
                      src={`https://c.animaapp.com/KuxympCS/img/keycap-${rowIndex === 0 ? 28 - keyIndex : rowIndex === 1 ? 18 - keyIndex : keyIndex + 2}.svg`}
                    />
                    <div className="absolute w-[93.94%] h-[64.29%] top-[16.67%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-[23px] text-center tracking-[0] leading-[normal]">
                      {key.letter}
                    </div>
                  </div>
                ))}
                {rowIndex === 2 && (
                  <>
                    <div className="absolute w-[11.51%] h-full top-0 left-0">
                      <img
                        className="w-full absolute h-full top-0 left-0"
                        alt="Keycap"
                        src="https://c.animaapp.com/KuxympCS/img/keycap-9.svg"
                      />
                      <img
                        className="absolute w-[47.59%] h-[38.10%] top-[30.95%] left-[26.19%]"
                        alt="Arrow"
                        src="https://c.animaapp.com/KuxympCS/img/arrow.svg"
                      />
                    </div>
                    <img
                      className="absolute w-[11.51%] h-full top-0 left-[88.49%]"
                      alt="Key"
                      src="https://c.animaapp.com/KuxympCS/img/key-1@2x.png"
                    />
                  </>
                )}
              </div>
            ))}

            <div className="w-[364px] mt-[11px] ml-[1.0px] h-[42px] relative">
              <div className="absolute w-[24.45%] h-full top-0 left-[76.10%]">
                <img
                  className="w-[97.75%] absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/KuxympCS/img/keycap.svg"
                />
                <div className="absolute w-[97.75%] h-[45.24%] top-[26.19%] left-0 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0.05px] leading-[normal]">
                  return
                </div>
              </div>

              <div className="absolute w-[49.73%] h-full top-0 left-[25.27%]">
                <img
                  className="w-[98.90%] absolute h-full top-0 left-0"
                  alt="Keycap"
                  src="https://c.animaapp.com/KuxympCS/img/keycap-1.svg"
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
                src="https://c.animaapp.com/KuxympCS/img/key@2x.png"
              />
            </div>
          </div>
        </div>

        <img
          className="absolute w-full h-[25.77%] top-[74.23%] left-0"
          alt="Group"
          src="https://c.animaapp.com/KuxympCS/img/group.svg"
        />

        <div className="absolute top-[257px] left-0 w-full h-[34px] flex items-end justify-center">
          <div className="mb-2 w-[134px] h-[5px] ml-px bg-black rounded-[100px]" />
        </div>
      </div>
    </section>
  );
};
