import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const actionItems = [
  {
    icon: "https://c.animaapp.com/kp7cm7rf/img/event@2x.png",
    label: "내 쿠폰",
  },
  {
    icon: "https://c.animaapp.com/kp7cm7rf/img/event@2x.png",
    label: "친구초대",
  },
];

export const TopSubsection = () => {
  return (
    <section className="flex flex-col items-start gap-2 px-5 py-0 w-full">
      <Card className="w-full bg-white rounded-2xl border border-[#e6eaec] shadow-[0px_4px_8px_#00000014]">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="flex h-auto min-h-[52px] items-center gap-3 w-full">
            <img
              src="/img/country.svg"
              alt="Country flag"
              className="w-[30px] h-[30px] flex-shrink-0"
            />

            <h2 className="flex-1 font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--title-18-b-font-style)]">
              HanpassName 이름이 길어질 경우 2줄 까지 노출HanpassName 이름이
              길어질 경우 2줄 까지 노출HanpassName 이름이 길어질 경우 2줄 까지
              노출
            </h2>

            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 p-0 flex-shrink-0 hover:bg-transparent"
            >
              <img
                className="w-6 h-6"
                alt="Mypage edit"
                src="/img/mypage-edit.png"
              />
            </Button>
          </div>

          <div className="flex items-center gap-4 px-2 py-3 w-full bg-[#f7f7f8] rounded-lg">
            {actionItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-[54px] bg-[#e6eaec]"
                  />
                )}
                <Button
                  variant="ghost"
                  className="flex flex-col items-center justify-center gap-1 flex-1 h-auto py-0 hover:bg-transparent"
                >
                  <div className="w-8 h-8 overflow-hidden">
                    <img
                      className="w-9 h-9 aspect-[1] object-cover"
                      alt={item.label}
                      src={item.icon}
                    />
                  </div>

                  <span className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#525357] text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [font-style:var(--body-14-SB-font-style)]">
                    {item.label}
                  </span>
                </Button>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
