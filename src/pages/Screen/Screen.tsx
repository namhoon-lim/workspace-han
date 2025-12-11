import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Screen = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="36848:80951"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col w-full flex-1 bg-white">
        <div className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            버전 정보
          </h1>
        </div>

        <div className="flex flex-col items-start gap-9 pt-[34px] pb-0 px-6 flex-1 w-full">
          <Card className="w-full bg-[#f4f7fd] border-0 rounded-xl">
            <CardContent className="flex items-start gap-4 px-5 py-[22px]">
              <div className="inline-flex flex-col items-start justify-center">
                <img
                  className="relative w-[49.17px] h-[12.48px]"
                  alt="현재 버전"
                  src="https://c.animaapp.com/MgOgZxnr/img/-----@4x.png"
                />
              </div>

              <div className="flex items-center justify-end gap-0.5 flex-1">
                <div className="flex items-center justify-center flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] text-right tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] mt-[-1.00px] [font-style:var(--title-16-b-font-style)]">
                  5.0.8
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-2.5 pt-4 pb-0 px-0 w-full">
          <p className="mt-[-1.00px] font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#717682] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] flex-1 text-center [font-style:var(--navigation-12-r-font-style)]">
            ⓒ HANPASS Co.,Ltd. 2018 All rights reserved
          </p>
        </div>
      </main>

      <footer className="flex flex-col items-center pt-6 pb-0 px-6 w-full">
        <Button className="w-full min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            업데이트 하기
          </span>
        </Button>
      </footer>
    </div>
  );
};
