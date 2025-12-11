import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CertificateSelectEmpty = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="35213:25512"
    >
      <div className="flex flex-col items-start w-full flex-1">
        <BackSubHeader backTo="/" />

        <div className="flex flex-col w-full flex-1 bg-white">
          <section className="px-6 pt-[22px] pb-0 w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              인증서를 선택해주세요.
            </h1>
          </section>

          <section className="flex flex-col px-6 pt-[42px] pb-0 w-full flex-1">
            <Card className="border-[#dfe3ec] rounded-xl">
              <CardContent className="flex items-center gap-1.5 p-6">
                <div className="flex flex-col items-center justify-center gap-2 flex-1">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#2563eb] rounded-full">
                    <div className="w-3 h-3 text-white text-xl leading-none flex items-center justify-center">
                      +
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="w-[295px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-center tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                      인증서 가져오기
                    </div>
                    <div className="w-[295px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-center tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      가져오기를 통해 새로운 인증서를 등록합니다
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-center justify-center gap-[30px] pt-0 pb-[50px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#e8eaf0] rounded-full">
                      <div className="w-6 h-6 text-[#a2a8bf] text-2xl leading-none flex items-center justify-center">
                        !
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <div className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          선택 가능한 인증서가 없습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
