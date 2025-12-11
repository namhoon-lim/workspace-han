import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const idOptions = [
  {
    id: "resident-card",
    title: "주민등록증",
    subtitle: null,
  },
  {
    id: "driver-license",
    title: "운전면허증",
    subtitle: null,
  },
  {
    id: "passport",
    title: "대한민국 여권",
    subtitle: "신여권 승인 불가",
  },
];

export const IdTypeSelection = () => {
  const [selectedId, setSelectedId] = useState("resident-card");

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="2674:63885"
    >
      <BackSubHeader backTo="/verificationstepsu95024" />

      <section className="flex flex-col bg-white w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              인증 받을 신분증 종류를
              <br />
              선택해주세요.
            </h1>
          </div>

          <div className="gap-2 flex w-full">
            <div className="justify-center flex-1 grow flex flex-col">
              <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                복사본이나 모니터로 촬영한 신분증은 <br />
                사용할 수 없어요!
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col gap-3.5 pt-[42px] pb-0 px-6 flex-1 w-full">
        {idOptions.map((option) => (
          <Card
            key={option.id}
            className={`min-h-[68px] cursor-pointer transition-all ${
              selectedId === option.id
                ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                : "border border-[#dfe3ec] shadow-[0px_4px_4px_-4px_#0c0c0d0d]"
            } rounded-lg overflow-hidden bg-white`}
            onClick={() => setSelectedId(option.id)}
          >
            <CardContent className="flex items-center gap-5 px-4 py-3.5 h-full">
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center ${
                  selectedId === option.id
                    ? "bg-[#4c67f1]"
                    : "bg-transparent border-2 border-[#dfe3ec]"
                }`}
              >
                {selectedId === option.id && (
                  <CheckIcon className="w-4 h-4 text-white" />
                )}
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <h3
                  className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                    selectedId === option.id
                      ? "text-[#0d56e4]"
                      : "text-[#5e616b]"
                  }`}
                >
                  {option.title}
                </h3>
                {option.subtitle && (
                  <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {option.subtitle}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] flex w-full rounded-xl">
          <Button
            className="min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto"
            size="lg"
          >
            <span className="flex-1 text-white text-center font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
