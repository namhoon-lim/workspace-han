import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PhotoConfirmDialog = () => {
  return (
    <div
      className="w-full min-w-[375px] min-h-screen relative"
      data-model-id="40000003:533503"
    >
      <div className="flex w-full min-h-screen items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="items-center pt-8 pb-9 px-[22px] flex flex-col gap-2.5">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              사진 확인
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              촬영하신 사진을 확인해주세요.
            </p>

            <div className="flex flex-col items-start gap-6 pt-[18px] pb-0 px-0 self-stretch w-full rounded-xl">
              <div className="items-start flex flex-col gap-2.5 self-stretch w-full">
                <div className="self-stretch w-full h-[152px] bg-[#393939] rounded-[20px]" />
              </div>
            </div>

            <div className="min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex self-stretch w-full">
              <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
                <Button className="w-[100px] px-2 py-1 bg-[#afb4ca] hover:bg-[#9ba0b5] min-h-12 rounded-[14px] h-auto">
                  <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                    재시도
                  </span>
                </Button>

                <Button className="px-[26px] py-1.5 flex-1 bg-[#0d56e4] hover:bg-[#0a45c0] min-h-12 rounded-[14px] h-auto">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    확인
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <div className="flex flex-col items-start self-stretch w-full">
          <div className="flex flex-col items-start gap-2 self-stretch w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/SXpbAKOQ/img/mini-9@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
