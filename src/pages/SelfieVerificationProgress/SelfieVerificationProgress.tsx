import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SelfieVerificationProgress = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34892:269224"
    >
      <BackSubHeader backTo="/autowithdrawcompleteu95081" />

      <main className="flex flex-col items-start gap-2.5 pt-0 pb-14 px-6 flex-1 w-full">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
          <Card className="w-60 h-[154px] bg-[#ff00001a] border-0">
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute w-[25.42%] h-[39.61%] top-[34.90%] left-[40.46%]"
                alt="Ellipse"
                src="https://c.animaapp.com/dojq12ez/img/ellipse-4759.svg"
              />

              <div className="absolute w-[10.19%] h-[15.87%] top-[46.61%] left-[44.91%] rounded-[12.22px] bg-[linear-gradient(135deg,rgba(71,122,253,1)_3%,rgba(58,55,237,1)_48%,rgba(124,79,249,1)_100%)]" />

              <img
                className="absolute w-[41.67%] h-[64.94%] top-[22.08%] left-[29.17%]"
                alt="Exclude"
                src="https://c.animaapp.com/dojq12ez/img/exclude.svg"
              />

              <img
                className="absolute w-[6.67%] h-[24.89%] top-[35.93%] left-[42.18%]"
                alt="Vector"
                src="https://c.animaapp.com/dojq12ez/img/vector-993.svg"
              />

              <div className="absolute w-[10.00%] h-[12.99%] top-[15.58%] left-[45.00%] bg-[#0044eb] rounded-[20px]" />

              <div className="absolute top-1.5 left-2.5 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-white text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap [font-style:var(--title-20-b-font-style)]">
                Lottie
              </div>
            </CardContent>
          </Card>

          <div className="items-center gap-[30px] w-full flex flex-col">
            <div className="items-center gap-3 w-full flex flex-col">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                셀카인증 진행중 이예요.
              </h1>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                셀카 인증이 완료되어야 자동출금계좌를 이용할 수 있어요.
                수동계좌는 계속 이용 가능해요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="w-2 h-3.5">
                <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>

              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                셀카인증은 업무 시간 내 처리되며, 업무가 종료된 후에는 다음날
                처리되어요. (평일 09:00 ~ 22:00) / 주말 및 공휴일 10:00 ~
                19:00)
              </p>
            </div>
          </div>
        </div>

        <div className="items-center gap-6 w-full flex flex-col">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start flex-1">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  확인
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
