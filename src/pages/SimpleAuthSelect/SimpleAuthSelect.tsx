import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

const authServices = [
  {
    id: 1,
    name: "토스 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/toss-icon.svg",
    bgColor: "bg-[#0064FF]",
  },
  {
    id: 2,
    name: "우리WON인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/woori-icon.svg",
    bgColor: "bg-[#0099CC]",
  },
  {
    id: 3,
    name: "카카오뱅크",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kakao-bank-icon.svg",
    bgColor: "bg-[#FFEB00]",
  },
  {
    id: 4,
    name: "PASS 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/pass-icon.svg",
    bgColor: "bg-[#FF4444]",
  },
  {
    id: 5,
    name: "신한 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/shinhan-icon.svg",
    bgColor: "bg-[#0046FF]",
  },
  {
    id: 6,
    name: "삼성패스 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/samsung-pass-icon.svg",
    bgColor: "bg-[#5B5FFF]",
  },
  {
    id: 7,
    name: "하나 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/hana-icon.svg",
    bgColor: "bg-[#00857D]",
  },
  {
    id: 8,
    name: "금융인증서",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/finance-cert-icon.svg",
    bgColor: "bg-[#0080C6]",
  },
  {
    id: 9,
    name: "네이버 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/naver-icon.svg",
    bgColor: "bg-[#00C73C]",
  },
  {
    id: 10,
    name: "KB국민인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kb-icon.svg",
    bgColor: "bg-[#FFBB00]",
  },
  {
    id: 11,
    name: "카카오톡 인증",
    icon: "https://c.animaapp.com/UrLjfz9Z/img/kakao-talk-icon.svg",
    bgColor: "bg-[#FFE812]",
  },
];

const infoTexts = [
  "본인 명의의 인증서로 간편인증이 가능합니다.",
  "인력한 정보는 간편인증을 위해서만 활용됩니다.",
  "각 인증서는 해당 인증서의 앱 설치 후 발급 가능 (금융인증서는 각 은행에서 발급 가능)",
];

export const SimpleAuthSelect = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88025"
    >
      <BackSubHeader backTo="/" />

      <main className="flex-1 flex flex-col w-full bg-white px-5 pt-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[#6B3FA0] [font-family:'Pretendard',Helvetica] font-bold text-lg tracking-[-0.36px] leading-[normal]">
            KG 이니시스
          </h1>
          <span className="[font-family:'Pretendard',Helvetica] font-medium text-black text-base tracking-[-0.32px] leading-[normal]">
            간편인증
          </span>
        </div>

        <section className="grid grid-cols-4 gap-4 mb-6">
          {authServices.map((service) => (
            <Button
              key={service.id}
              variant="ghost"
              className="h-auto flex flex-col items-center gap-2 p-2 hover:bg-gray-50"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg" />
              </div>
              <span className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-black tracking-[-0.24px] leading-[normal] text-center">
                {service.name}
              </span>
            </Button>
          ))}
        </section>

        <section className="flex flex-col gap-2 mb-8">
          {infoTexts.map((text, index) => (
            <p
              key={index}
              className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-gray-600 tracking-[-0.24px] leading-[1.3]"
            >
              · {text}
            </p>
          ))}
        </section>
      </main>

      <footer className="flex flex-col items-center gap-4 px-5 pb-8 bg-white">
        <Button
          variant="secondary"
          className="w-full h-14 rounded-xl bg-gray-200 hover:bg-gray-300 [font-family:'Pretendard',Helvetica] font-semibold text-base text-black tracking-[-0.32px]"
        >
          취소
        </Button>
        <p className="[font-family:'Pretendard',Helvetica] font-normal text-xs text-gray-500 tracking-[-0.24px] leading-[normal]">
          고객지원 1588-4954 | 개인정보처리방침
        </p>
      </footer>
    </div>
  );
};
