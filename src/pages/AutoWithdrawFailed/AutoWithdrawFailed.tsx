import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

export const AutoWithdrawFailed = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35139:61481"
    >
      <BackSubHeader backTo="/arsverificationu95079" />

      <div className="flex flex-col items-center gap-2.5 px-6 py-0 flex-1 w-full">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 w-full">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
              alt="Group"
              src="https://c.animaapp.com/dojq12ez/img/group-1261168836@2x.png"
            />
          </div>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                자동출금 등록에 실패했습니다.
              </h1>

              <p className="w-full font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                등록 불가한 계좌입니다.
                <br />
                (A191822)
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start flex-1">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다시하기
                </span>
              </Button>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center gap-0.5">
            <span className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>
            <ChevronRightIcon className="w-[18px] h-[18px] text-[#717682]" />
          </Link>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
