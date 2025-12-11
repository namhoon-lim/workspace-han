import React, { useState } from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Servicecert = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("pdf");

  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="36848:89362"
    >
      <BackSubHeader backTo="/" />

      <main className="flex-col items-start bg-white flex relative self-stretch w-full">
        <div className="flex-col gap-2 pt-[22px] pb-0 px-6 self-stretch w-full flex items-start relative">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              발급 방법을 선택해 주세요.
            </h1>
          </div>
        </div>
      </main>

      <section className="flex flex-col items-start gap-9 pt-[42px] pb-14 px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
          <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full">
            <div className="flex-col gap-2.5 self-stretch w-full flex items-start relative">
              <div className="h-[17px] relative self-stretch w-full">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      발급방법
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ToggleGroup
            type="single"
            value={selectedMethod}
            onValueChange={(value) => value && setSelectedMethod(value)}
            className="flex items-start gap-0 relative self-stretch w-full rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]"
          >
            <ToggleGroupItem
              value="email"
              className="flex items-center justify-center relative flex-1 grow bg-white data-[state=on]:bg-[#e9f1ff] rounded-none border-0 h-auto px-3.5 py-2.5"
            >
              <div className="flex items-center justify-center gap-[11px]">
                <img
                  className="relative w-[26px] h-[26px]"
                  alt="Check"
                  src={
                    selectedMethod === "email"
                      ? "https://c.animaapp.com/Oax14zk6/img/ico26-check-01-4.svg"
                      : "https://c.animaapp.com/Oax14zk6/img/ico26-check-01-5.svg"
                  }
                />
                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative">
                  <div
                    className={`relative w-fit mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                      selectedMethod === "email"
                        ? "text-[#0d56e4]"
                        : "text-[#5e616b]"
                    }`}
                  >
                    이메일
                  </div>
                </div>
              </div>
            </ToggleGroupItem>

            <div className="relative self-stretch w-px bg-[#dfe3ec]" />

            <ToggleGroupItem
              value="pdf"
              className="flex items-center justify-center relative flex-1 grow bg-white data-[state=on]:bg-[#e9f1ff] rounded-none border-0 h-auto px-3.5 py-2.5"
            >
              <div className="flex items-center justify-center gap-[11px]">
                <img
                  className="relative w-[26px] h-[26px]"
                  alt="Check"
                  src={
                    selectedMethod === "pdf"
                      ? "https://c.animaapp.com/Oax14zk6/img/ico26-check-01-4.svg"
                      : "https://c.animaapp.com/Oax14zk6/img/ico26-check-01-5.svg"
                  }
                />
                <div className="inline-flex flex-col items-center justify-center gap-2.5 relative">
                  <div
                    className={`relative w-fit mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)] ${
                      selectedMethod === "pdf"
                        ? "text-[#0d56e4]"
                        : "text-[#5e616b]"
                    }`}
                  >
                    PDF
                  </div>
                </div>
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 relative self-stretch w-full z-[3]">
          <div className="flex items-center gap-0.5 relative self-stretch w-full">
            <img
              className="relative w-5 h-5"
              alt="Img ars notice"
              src="https://c.animaapp.com/Oax14zk6/img/img-ars-notice.svg"
            />
            <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap relative w-fit text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <div className="flex items-start gap-[5px] relative self-stretch w-full">
              <div className="relative w-2 h-3.5">
                <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <p className="relative flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                이메일을 못 받으신 경우 스팸메일함도 확인해 주세요.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative self-stretch w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative self-stretch w-full">
            <Button className="min-h-[54px] flex-1 grow bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                발급하기
              </span>
            </Button>
          </div>
        </div>

        <div className="relative self-stretch w-full h-4 z-0" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full z-[-1] bg-white">
        </div>
      </footer>
    </div>
  );
};
