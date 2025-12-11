import React from "react";
import { PopupHeader } from "@/components/PopupHeader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ElementWrapper = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46422"
    >
      <div className="flex w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-overlay-dark">
      <Card className="flex flex-col max-w-432 items-center justify-center relative flex-1 grow bg-white rounded-22 shadow-card border-0">
        <CardContent className="flex items-center pt-8 pb-4 px-22 self-stretch w-full flex-col gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-[60px] h-[60px]">
            <img
              className="absolute top-0 left-0.5 w-[58px] h-[60px]"
              alt="Shutterstock"
              src="https://c.animaapp.com/FyEwllI9/img/shutterstock-2219429455-1@2x.png"
            />
          </div>

          <h1 className="relative self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-blue-01 text-[length:var(--title-18-b-font-size)] text-center tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
            보이스피싱 주의 안내
          </h1>

          <p className="relative self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-grayscale-01 text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            가족, 지인, 한패스 직원을 사칭한 보이스피싱에 주의하세요!
          </p>

          <Alert className="flex flex-col items-center gap-6 p-4 relative self-stretch w-full flex-[0_0_auto] bg-warning-light rounded-xl border-0">
            <AlertDescription className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-error-red text-sm text-center tracking-[-0.28px] leading-[18.2px]">
                <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                  한패스 직원은 절대 고객님의{" "}
                </span>
                <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] tracking-[var(--body-14-b-letter-spacing)] [font-style:var(--body-14-b-font-style)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                  아이디, 비밀번호, 핀번호
                </span>
                <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                  를 요구하지 않습니다.
                </span>
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>

        <div className="flex min-h-[54px] items-center justify-center gap-2 px-3.5 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl">
          <div className="flex min-h-12 max-h-12 items-start gap-[7px] relative flex-1 grow">
            <Button className="flex min-h-12 items-center justify-center gap-2 px-26 py-1.5 relative flex-1 self-stretch grow bg-primary rounded-14 h-auto hover:bg-primary/90">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                닫기
              </span>
            </Button>
          </div>
        </div>

        <footer className="inline-flex items-start pt-3 pb-22 px-0 flex-col gap-2.5 relative flex-[0_0_auto]">
          <button className="inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto] bg-transparent border-0 cursor-pointer">
            <span className="relative w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-grayscale-05 text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
              오늘 하루 보지 않기
            </span>
          </button>
        </footer>
      </Card>

      <PopupHeader />
      </div>
    </div>
  );
};
