import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

export const OverseasRemitFail = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <BackSubHeader backTo="/overseasremitconfirmu95092" />

      {/* Main Content */}
      <main className="flex flex-col flex-1 items-center justify-center px-6 py-0 gap-2.5">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
              alt="Error illustration"
              src="https://c.animaapp.com/vuYaFJZH/img/group-1261168836-1@2x.png"
            />
          </div>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                송금 신청 실패
              </h1>

              <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                실패 사유 : 6자리 비밀번호가 일치하지 않아요 (1/6)
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-end px-6 py-0 bg-white">
        <div className="flex flex-col gap-1.5 pt-0 pb-3.5 px-0 w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-start gap-[5px] w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                송금신청 결과에 대한 자세한 문의는 고객센터로 문의해주시기
                바랍니다.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <Button className="flex-1 min-h-[54px] bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90 h-auto">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
