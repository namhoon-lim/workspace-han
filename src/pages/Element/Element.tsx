import React from "react";
import { PopupHeader } from "@/components/PopupHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Element = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46464"
    >
      <div className="flex w-full h-screen items-center justify-center gap-2.5 px-6 py-12 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <Card className="flex flex-col w-full max-w-[432px] bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
            <h1 className="self-stretch mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              안내
            </h1>

            <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              새로운 쿠폰을 확인하세요!
            </p>

            <Card className="w-full bg-white rounded-2xl shadow-[0px_6px_20px_4px_#b4bfe745] border-0">
              <CardContent className="flex flex-col items-start gap-4 p-5">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Badge
                      variant="outline"
                      className="bg-white rounded-[50px] border-[#0d56e4] px-2.5 py-1 h-auto"
                    >
                      <span className="font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[#0d56e4] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)]">
                        NEW
                      </span>
                    </Badge>

                    <h2 className="self-stretch font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                      신규가입 웰컴쿠폰
                    </h2>

                    <p className="self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      5,000원 할인
                    </p>
                  </div>
                </div>

                <img
                  className="w-full object-cover"
                  alt="Frame"
                  src="https://c.animaapp.com/FyEwllI9/img/frame-1261169143.svg"
                />

                <div className="flex items-end gap-1 w-full">
                  <div className="flex flex-wrap items-center gap-[4px_4px] flex-1">
                    <span className="font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#85888e] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)]">
                      만료일
                    </span>

                    <span className="font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[#5e616b] text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--navigation-12-r-font-style)]">
                      2024.12.12
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 rounded-xl">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] min-h-12 bg-[#afb4ca] hover:bg-[#9ba0b5] rounded-[14px] h-auto"
              >
                <span className="text-[15px] tracking-[-0.30px] leading-[19.5px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-white">
                  아니오
                </span>
              </Button>

              <Button className="flex-1 min-h-12 bg-[#0d56e4] hover:bg-[#0b4ac7] rounded-[14px] h-auto">
                <span className="text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white [font-style:var(--title-16-b-font-style)]">
                  쿠폰 확인하기
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
