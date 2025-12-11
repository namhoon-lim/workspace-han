import React from "react";
import { Link } from "react-router-dom";
import { PopupHeader } from "@/components/PopupHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Screen4 = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46420"
    >
      <div className="flex w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              개인정보를 업데이트 해주세요!
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              안전한 금융거래를 위해 정보를 확인하고 있어요. 본인의 한국어 이름,
              주소를 입력해주세요.
            </p>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button className="flex min-h-12 items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-[14px] h-auto hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  등록하기
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <PopupHeader />
      </div>
    </div>
  );
};
