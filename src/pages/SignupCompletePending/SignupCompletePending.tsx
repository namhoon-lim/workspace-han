import {
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SignupCompletePending = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="2674:64356"
    >
      <BackSubHeader backTo="/signupcompleteu95043" />

      <main className="flex flex-col items-center pt-0 pb-5 px-6 flex-1 w-full">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 flex-1 w-full">
          <Card className="w-60 h-[154px] bg-[#ff00001a] border-0 overflow-hidden">
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute w-[25.42%] h-[39.61%] top-[34.90%] left-[40.46%]"
                alt="Ellipse"
                src="https://c.animaapp.com/NpKP4m4n/img/ellipse-4759.svg"
              />
              <div className="absolute w-[10.19%] h-[15.87%] top-[46.61%] left-[44.91%] rounded-[12.22px] bg-[linear-gradient(135deg,rgba(71,122,253,1)_3%,rgba(58,55,237,1)_48%,rgba(124,79,249,1)_100%)]" />
              <img
                className="absolute w-[41.67%] h-[64.94%] top-[22.08%] left-[29.17%]"
                alt="Exclude"
                src="https://c.animaapp.com/NpKP4m4n/img/exclude.svg"
              />
              <img
                className="absolute w-[6.67%] h-[24.89%] top-[35.93%] left-[42.18%]"
                alt="Vector"
                src="https://c.animaapp.com/NpKP4m4n/img/vector-993.svg"
              />
              <div className="absolute w-[10.00%] h-[12.99%] top-[15.58%] left-[45.00%] bg-[#0044eb] rounded-[20px]" />
              <div className="absolute top-1.5 left-2.5 [font-family:'Pretendard-Black',Helvetica] font-black text-white text-xl tracking-[-0.40px] leading-[26.0px] whitespace-nowrap">
                Lottie
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                회원가입이 완료되었습니다.
              </h1>

              <p className="w-full font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-18-SB-font-size)] text-center tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                신분증 승인 대기 중
              </p>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                신분증 승인이 완료되어야 서비스 이용이 가능해요. 빠른 시간 내
                처리해드릴게요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5 flex-shrink-0">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                신분증 승인은 업무 시간 내 처리되며, 업무가 종료된 후에는 다음날
                처리됩니다. <br />
                (평일 09:00 ~22:00 / 주말 및 공휴일 10:00~19:00)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <Button
              className="flex-1 min-h-[54px] h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
              asChild
            >
              <Link to="/addressdetailinputu95045">
                다음 단계 진행하기
              </Link>
            </Button>
          </div>

          <button className="inline-flex items-center gap-0.5 cursor-pointer bg-transparent border-0 p-0">
            <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>
            <ChevronRightIcon className="w-[18px] h-[18px] text-[#717682]" />
          </button>
        </div>

        <div className="w-full h-4 z-0" />
      </footer>
    </div>
  );
};
