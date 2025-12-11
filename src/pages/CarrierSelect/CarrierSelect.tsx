import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, InfoIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const carrierOptions = [
  { id: 1, name: "SKT", isMvno: false },
  { id: 2, name: "KT", isMvno: false },
  { id: 3, name: "LG U+", isMvno: false },
  { id: 4, name: "SKT", subtitle: "알뜰폰", isMvno: true },
  { id: 5, name: "KT", subtitle: "알뜰폰", isMvno: true },
  { id: 6, name: "LG U+", subtitle: "알뜰폰", isMvno: true },
];

export const CarrierSelect = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88115"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 px-5 pt-8 pb-6 w-full">
        <div className="flex items-center justify-between mb-8">
          <img
            className="h-12"
            alt="PASS Logo"
            src="https://c.animaapp.com/UrLjfz9Z/img/img-4819.png"
          />
          <div className="text-right">
            <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%]">
              인증을 넘어
            </div>
            <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%]">
              일상으로 PASS
            </div>
          </div>
        </div>

        <h1 className="[font-family:'Pretendard',Helvetica] font-bold text-black text-2xl tracking-[-0.48px] leading-[130%] mb-2">
          이용중인 통신사를
        </h1>
        <h1 className="[font-family:'Pretendard',Helvetica] font-bold text-black text-2xl tracking-[-0.48px] leading-[130%] mb-8">
          선택해 주세요
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {carrierOptions.map((carrier) => (
            <Card
              key={carrier.id}
              className="cursor-pointer hover:bg-gray-50 transition-colors border border-gray-200 rounded-2xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 min-h-[120px]">
                <div className="[font-family:'Pretendard',Helvetica] font-semibold text-black text-lg tracking-[-0.36px] leading-[130%] text-center">
                  {carrier.name}
                </div>
                {carrier.subtitle && (
                  <div className="[font-family:'Pretendard',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[130%] text-center mt-1">
                    {carrier.subtitle}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <InfoIcon className="h-4 w-4" />
          <span className="[font-family:'Pretendard',Helvetica] font-normal text-sm tracking-[-0.28px] leading-[130%]">
            알뜰폰 사업자 확인
          </span>
        </div>
      </div>

      <footer className="flex flex-col items-center px-5 py-6 w-full bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="[font-family:'Pretendard',Helvetica] font-normal text-gray-600 text-xs tracking-[-0.24px] leading-[130%]">
            이용약관 개인정보처리방침 API 도입문의
          </div>
          <div className="px-2 py-1 bg-white border border-gray-300 rounded">
            <span className="[font-family:'Pretendard',Helvetica] font-medium text-xs tracking-[-0.24px] leading-[130%]">
              NICE평가정보
            </span>
          </div>
        </div>
        <div className="[font-family:'Pretendard',Helvetica] font-normal text-gray-600 text-xs tracking-[-0.24px] leading-[130%]">
          VeriSign 256-bit SSL 안호화 적용
        </div>
      </footer>
    </div>
  );
};
