import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const nationalityOptions = [
  {
    id: "korean",
    label: "내국인",
    value: "korean",
  },
  {
    id: "chinese",
    label: "중국인",
    value: "chinese",
  },
];

export const Nationality = () => {
  const [selectedNationality, setSelectedNationality] = useState("chinese");

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45762"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            국적을 선택해주세요.
          </h1>

          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            국적은 신분증 상의 국적으로 선택하세요.
          </p>
        </section>

        <section className="flex flex-col gap-6 pt-[42px] pb-6 px-6 w-full flex-1">
          <div className="flex flex-col items-start gap-3.5 w-full">
            {nationalityOptions.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                className={`min-h-[54px] w-full h-auto px-4 py-4 rounded-lg ${
                  selectedNationality === option.value
                    ? "border-2 border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                    : "border border-[#dfe3ec]"
                }`}
                onClick={() => setSelectedNationality(option.value)}
              >
                <span
                  className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                    selectedNationality === option.value
                      ? "text-[#0d56e4]"
                      : "text-[#5e616b]"
                  }`}
                >
                  {option.label}
                </span>
              </Button>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex flex-col w-full bg-white">
        <div className="flex flex-col px-6 py-0">
          <Button
            className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto"
            asChild
          >
            <Link to="/signupphoneemailu95007">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Link>
          </Button>
        </div>

        <div className="h-4 w-full" />
      </footer>
    </div>
  );
};
