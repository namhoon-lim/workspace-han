import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const actionItems = [
  {
    icon: "https://c.animaapp.com/ZJs2rWA4/img/chatgpt-image-2025----9----10---------05-28-23-1@2x.png",
    label: "내 쿠폰",
  },
  {
    icon: "https://c.animaapp.com/ZJs2rWA4/img/event@2x.png",
    label: "친구초대",
  },
];

export const LoginSection = () => {
  return (
    <section className="flex flex-col items-start gap-8 pt-0 pb-8 px-5 w-full">
      <Card className="w-full bg-white rounded-2xl border border-[#e6eaec] shadow-[0px_4px_8px_#00000014]">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <div className="flex h-[52px] items-center gap-3 w-full">
            <h2 className="flex-1 font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--title-18-b-font-style)]">
              로그인을 해주세요
            </h2>
          </div>

          <div className="flex items-center gap-4 px-2 py-3 w-full bg-[#f7f7f8] rounded-lg">
            {actionItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-auto bg-[#e6eaec]"
                  />
                )}
                <button className="flex flex-col items-center justify-center gap-1 flex-1 cursor-pointer bg-transparent border-none p-0">
                  <div
                    className="w-8 h-8 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <span className="w-full font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#525357] text-[length:var(--body-14-SB-font-size)] text-center tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [font-style:var(--body-14-SB-font-style)]">
                    {item.label}
                  </span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <button className="flex items-center w-full bg-[#f4f7fd] rounded-2xl overflow-hidden cursor-pointer border-none p-0">
        <div className="flex items-center justify-center gap-2 flex-1 pl-4">
          <div className="flex flex-col items-start justify-center gap-1 py-3 flex-1">
            <h3 className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              가입이 어렵다면?
            </h3>
            <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#4f4f4f] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              간편하게 상담해 보세요
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2.5 px-4 py-[22px]">
          <div
            className="w-10 h-10 aspect-square bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/ZJs2rWA4/img/free-icon-consulting-services-14274100-1@2x.png)",
            }}
          />
        </div>
      </button>
    </section>
  );
};
