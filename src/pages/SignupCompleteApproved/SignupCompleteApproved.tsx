import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

export const SignupCompleteApproved = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="2674:64345"
    >
      <BackSubHeader backTo="/addresssearchresultu95042" />

      <main className="flex items-start justify-center gap-2.5 px-6 py-0 flex-1 w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 flex-1 grow">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[13.99%] h-[15.02%] top-[48.98%] left-[41.96%]"
              alt="Vector"
              src="https://c.animaapp.com/NpKP4m4n/img/vector-992.svg"
            />
            <img
              className="absolute w-[51.83%] h-[68.42%] top-[5.61%] left-[19.84%]"
              alt="Idcard"
              src="https://c.animaapp.com/NpKP4m4n/img/idcard@2x.png"
            />
            <img
              className="absolute w-[20.83%] h-[32.47%] top-[53.25%] left-[60.83%]"
              alt="Status"
              src="https://c.animaapp.com/NpKP4m4n/img/ico50-status.svg"
            />
          </div>

          <div className="gap-[30px] w-full flex flex-col items-center">
            <div className="gap-3 w-full flex flex-col items-center">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                회원가입이 완료되었습니다.
              </h1>

              <div className="w-full font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-18-SB-font-size)] text-center tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                신분증 승인 완료
              </div>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                한패스의 금융 서비스를 이용하기 위해서는 출금 계좌등록 절차가
                필요해요. 다음단계를 진행해주세요.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="gap-6 w-full z-0 flex flex-col items-center">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start flex-1 grow">
              <Button
                className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90"
                asChild
              >
                <Link to="/addressdetailinputu95045">
                  <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    다음 단계 진행하기
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <button className="inline-flex items-center gap-0.5 cursor-pointer bg-transparent border-0 p-0">
            <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>
            <ChevronRightIcon className="w-[18px] h-[18px] text-[#0d56e4]" />
          </button>
        </div>

        <div className="w-full h-4 z-[-1]" />
      </footer>
    </div>
  );
};
