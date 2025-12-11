import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EmailInput = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="2674:67408"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col pt-[22px] px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            고객님의 금융거래 정보 제공 내역 통지를 위해 이메일 확인이 반드시
            필요해요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-2.5 pt-[42px] pb-6 px-6 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center gap-1 h-[17px]">
              <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                이메일
              </Label>
              <span className="font-body-14-m text-[#f10000] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] font-[number:var(--body-14-m-font-weight)] text-[length:var(--body-14-m-font-size)] [font-style:var(--body-14-m-font-style)]">
                (필수)
              </span>
            </div>

            <div className="flex flex-col w-full">
              <Input
                placeholder="이메일을 입력해주세요."
                className="h-[42px] border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center px-6 w-full bg-white">
        <Button
          disabled
          className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] h-auto"
        >
          다음
        </Button>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
