import { Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Screen6 = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35202:89897"
    >
      <header className="flex flex-col w-full items-start absolute top-0 left-0 z-10">
        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col gap-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[54px] justify-around px-5 py-0 self-stretch w-full items-center relative">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/ELrb3VWQ/img/mini-7@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

      <section className="flex flex-col items-center gap-1.5 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch w-full h-[22px]" />
            <Button
              variant="ghost"
              size="icon"
              className="relative w-[18px] h-[18px] p-0"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col self-stretch w-full flex-[0_0_auto] items-center relative">
            <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                <h1 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                  주계좌를 선택해주세요
                </h1>
              </div>
            </div>
            <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
          </div>
        </div>

        <div className="flex-col items-start gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex min-h-8 items-center relative flex-1 self-stretch grow">
              <div className="flex items-center gap-1.5 relative flex-1 grow">
                <p className="relative flex-1 mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                  월렛 잔액이 부족한 경우 주계좌에서 출금됩니다.
                </p>
              </div>
            </div>
          </div>

          <Card className="relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-2xl overflow-hidden border border-solid border-[#dfe3ec]">
            <CardContent className="flex flex-col items-start pt-5 pb-0 px-0 relative self-stretch w-full">
              <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex-col items-start justify-center gap-2.5 pt-0 pb-4 px-0 self-stretch w-full flex-[0_0_auto] flex relative">
                  <div className="items-center gap-1.5 px-5 py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="items-center justify-between flex-1 grow flex relative">
                      <div className="flex-wrap items-center gap-[8px_8px] flex-1 grow flex relative">
                        <Badge
                          variant="outline"
                          className="inline-flex justify-center gap-2.5 px-2.5 py-1 flex-[0_0_auto] bg-white rounded-[50px] border border-solid border-[#dfe3ec] items-center h-auto"
                        >
                          <span className="relative w-fit mt-[-1.00px] font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] whitespace-nowrap [font-style:var(--navigation-12-b-font-style)]">
                            Auto
                          </span>
                        </Badge>

                        <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 relative flex-[0_0_auto] bg-[#e9f1ff] rounded-[50px] h-auto hover:bg-[#e9f1ff]">
                          <span className="relative w-fit mt-[-1.00px] font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
                            주계좌
                          </span>
                        </Badge>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="relative w-5 h-5 p-0"
                      >
                        <Trash2Icon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="items-center gap-1.5 px-5 py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                    <img
                      className="relative w-8 h-8"
                      alt="Round bank"
                      src="https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round-3.svg"
                    />

                    <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex-col items-start gap-0.5 flex-1 grow flex relative">
                            <div className="relative self-stretch mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                              새마을 금고
                            </div>
                            <div className="relative self-stretch font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                              9002029482947
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-col items-start gap-4 pt-0 pb-5 px-5 self-stretch w-full flex-[0_0_auto] flex relative">
                  <img
                    className="relative self-stretch w-full h-px mt-[-0.50px] object-cover"
                    alt="Vector"
                    src="https://c.animaapp.com/ELrb3VWQ/img/vector-1236.svg"
                  />

                  <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-end gap-1.5 relative flex-1 grow">
                      <div className="relative w-fit font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-r-font-style)]">
                        계좌 잔액
                      </div>
                      <div className="relative w-fit mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#5c6580] text-[length:var(--title-15-SB-font-size)] text-right tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                        29,038,028원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
      </footer>
    </div>
  );
};
