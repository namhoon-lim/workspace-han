import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SettingsScreen = () => {

  return (
    <div
      className="w-full min-w-[375px] min-h-[740px] flex"
      data-model-id="35166:121215"
    >
      <div className="flex w-[375px] h-[740px] relative items-center justify-center gap-2.5 px-6 py-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col max-w-[432px] flex-1 bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              한패스페이 월렛에 잔액이 있습니다.
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              잔액은 환불이 불가하니 회원 탈퇴를 원하실 경우, 잔액을 먼저
              소진해주시기 바랍니다.
            </p>

            <div className="flex flex-col items-center gap-6 p-4 self-stretch w-full bg-[#f7f7f8] rounded-xl">
              <div className="flex flex-col items-center justify-center self-stretch w-full">
                <div className="self-stretch mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#1c253f] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  월렛 잔액
                </div>

                <div className="self-stretch font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0d56e4] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  11,000원
                </div>
              </div>
            </div>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 self-stretch w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] hover:bg-[#9ba0b6] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  닫기
                </span>
              </Button>

              <Button
                variant="default"
                className="px-[26px] py-1.5 h-auto flex-1 bg-[#0d56e4] hover:bg-[#0b47c0] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  고객센터로 이동
                </span>
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};
