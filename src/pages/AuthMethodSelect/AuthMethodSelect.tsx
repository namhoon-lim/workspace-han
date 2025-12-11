import {
  ChevronRightIcon,
  CircleIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const authenticationOptions = [
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40.svg",
    title: "휴대폰 문자(SMS) 인증",
    description: "한패스에 등록된 휴대폰번호로 인증",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-1.svg",
    title: "휴대폰 PASS 인증",
    description: "PASS앱에서 PIN번호, 지문 등으로 인증",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-2.svg",
    title: "공동인증서 본인 인증",
    description: "공동인인증기관의 인증서를 통한 인증",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/img40-3.svg",
    title: "신용카드 본인 인증",
    description: "본인명의 신용카드, 체크카드로 인증",
  },
  {
    icon: "https://c.animaapp.com/sCCrT5uL/img/ico-sns-certification-40.svg",
    title: "간편 인증",
    description: "네이버, 토스, 페이코, PASS 등 인증기관을 통한 인증",
  },
];

export const AuthMethodSelect = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35202:90825"
    >
      <BackSubHeader backTo="/autowithdrawconsentu95063" />

      <div className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            본인인증을 위한
            <br />
            방법을 선택해주세요.
          </h1>
        </section>

        <section className="flex flex-col items-start gap-2.5 pt-[34px] pb-4 px-6 flex-1 w-full">
          {authenticationOptions.map((option, index) => (
            <Card
              key={index}
              className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec] overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CardContent className="flex items-center justify-between p-0 py-[27px] pl-4 pr-2.5">
                <div className="flex items-start gap-3 flex-1">
                  <img
                    className="w-10 h-10"
                    alt={option.title}
                    src={option.icon}
                  />
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <h2 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {option.title}
                    </h2>
                    <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {option.description}
                    </p>
                  </div>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-[#5e616b]" />
              </CardContent>
            </Card>
          ))}
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
      </footer>
    </div>
  );
};
