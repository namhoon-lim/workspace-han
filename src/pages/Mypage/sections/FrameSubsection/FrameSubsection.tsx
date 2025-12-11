import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FrameSubsection = () => {
  return (
    <section className="flex flex-col items-start gap-2.5 pt-8 pb-0 px-6 w-full">
      <Card className="w-full bg-[#f4f7fd] border-0 rounded-2xl overflow-hidden cursor-pointer hover:bg-[#e8eef9] transition-colors">
        <CardContent className="flex items-center p-0">
          <div className="flex items-center justify-center gap-2 flex-1">
            <div className="flex flex-col items-start justify-center gap-1 px-4 py-3 flex-1">
              <h3 className="w-full font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                궁금한 사항이 있으세요?
              </h3>
              <p className="w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#4f4f4f] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                고객센터로 이동 &gt;
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-[22px]">
            <img
              src="https://c.animaapp.com/kp7cm7rf/img/free-icon-consulting-services-14274100-1@2x.png"
              alt="Customer service"
              className="w-10 h-10"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
