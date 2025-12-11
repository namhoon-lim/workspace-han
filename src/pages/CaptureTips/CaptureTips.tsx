import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const tipItems = [
  {
    id: 1,
    content: [
      { text: "복사본이나 모니터", bold: true },
      { text: "로 촬영한 신분증은 사용할 수 없어요.", bold: false },
    ],
  },
  {
    id: 2,
    content: [
      { text: "신분증의 앞면", bold: true },
      {
        text: "을 촬영해주세요. 밝은 바닥보다 어두운 바닥에 놓고 촬영하면 인식이 더 잘됩니다.",
        bold: false,
      },
    ],
  },
  {
    id: 3,
    content: [
      { text: "촬영 화면에서 ", bold: false },
      { text: "가이드 선에 맞춰", bold: true },
      { text: " 신분증 실물 또는 얼굴 정면을 촬영해주세요.", bold: false },
    ],
  },
  {
    id: 4,
    content: [
      { text: "셀카 촬영 시 마스크, 선글라스 등으로 ", bold: false },
      { text: "얼굴을 가리지 않고 촬영", bold: true },
      { text: "해주세요.", bold: false },
    ],
  },
];

export const CaptureTips = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="2674:64024"
    >
      {/* Header */}
      <header className="flex flex-col w-full items-start absolute top-0 left-0 z-10">
        <nav className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/SXpbAKOQ/img/mini-9@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Sheet */}
      <section className="flex-col items-start w-full flex">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-end w-full">
              <div className="w-full h-[22px]" />
              <Button variant="ghost" size="icon" className="h-auto w-auto p-0" asChild>
                <Link to="/verificationstepsu95024">
                  <XIcon className="w-[18px] h-[18px]" />
                </Link>
              </Button>
            </div>

            <div className="flex-col flex items-center w-full">
              <div className="items-start gap-2 w-full flex">
                <img
                  className="w-8 h-8"
                  alt="Tip"
                  src="https://c.animaapp.com/SXpbAKOQ/img/ico32-tip.svg"
                />
                <div className="items-center gap-1 px-0 py-1.5 flex-1 flex">
                  <h1 className="font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] flex-1 mt-[-1.00px] [font-style:var(--title-18-SB-font-style)]">
                    촬영 TIP을 확인하세요
                  </h1>
                </div>
              </div>
              <div className="w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <ul className="flex-col items-start gap-2 w-full flex">
            {tipItems.map((item) => (
              <li key={item.id} className="flex items-start w-full">
                <div className="flex items-start gap-[5px] flex-1">
                  <div className="w-[5px] h-[21px] relative">
                    <div className="absolute top-[calc(50.00%_-_2px)] left-[calc(50.00%_-_2px)] w-[5px] h-[5px] bg-[#0d56e4] rounded-[2.5px]" />
                  </div>
                  <p className="flex-1 mt-[-1.00px] text-[#1c253f] text-[15px] tracking-[-0.30px] leading-[19.5px]">
                    {item.content.map((segment, index) => (
                      <span
                        key={index}
                        className={
                          segment.bold
                            ? "font-title-15-b font-[number:var(--title-15-b-font-weight)] tracking-[var(--title-15-b-letter-spacing)] [font-style:var(--title-15-b-font-style)] leading-[var(--title-15-b-line-height)] text-[length:var(--title-15-b-font-size)]"
                            : "font-body-15-r tracking-[var(--body-15-r-letter-spacing)] [font-style:var(--body-15-r-font-style)] font-[number:var(--body-15-r-font-weight)] leading-[var(--body-15-r-line-height)] text-[length:var(--body-15-r-font-size)]"
                        }
                      >
                        {segment.text}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        </div>
      </section>
    </div>
  );
};
