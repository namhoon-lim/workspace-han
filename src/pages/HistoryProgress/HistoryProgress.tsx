import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const progressSteps = [
  {
    id: 1,
    title: "송금 신청 완료",
    timestamp: "2025.11.03 11:29:35 KST",
    icon: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-10.svg",
    isActive: true,
    hasConnector: true,
  },
  {
    id: 2,
    title: "입금 완료",
    timestamp: null,
    icon: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-13.svg",
    isActive: false,
    hasConnector: true,
  },
  {
    id: 3,
    title: "송금 처리 중",
    timestamp: null,
    icon: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-13.svg",
    isActive: false,
    hasConnector: true,
  },
  {
    id: 4,
    title: "송금 완료",
    timestamp: null,
    icon: "https://c.animaapp.com/u8GhiXiH/img/element-step-icon-13.svg",
    isActive: false,
    hasConnector: false,
  },
];

export const HistoryProgress = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="35139:46485"
    >
      {/* Header */}
      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/u8GhiXiH/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Card */}
      <Card className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 relative w-full bg-white rounded-[30px_30px_0px_0px] border-0">
        <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-0">
          {/* Header with Close Button */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />
              <Button
                variant="ghost"
                size="icon"
                className="relative w-[18px] h-[18px] p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-600" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-1 px-0 py-1.5 relative flex-1 grow">
                  <h2 className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    해외송금 진행 상황
                  </h2>
                </div>
              </div>
              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {progressSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="flex flex-col items-start relative flex-1 grow bg-white">
                    <div className="flex flex-col min-h-[68px] items-start px-0 py-[3px] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start justify-around gap-3 relative flex-1 grow">
                          <div className="flex items-start gap-3.5 relative flex-1 grow">
                            <div className="inline-flex flex-col items-center gap-1.5 relative self-stretch flex-[0_0_auto]">
                              <img
                                className="relative w-8 h-8"
                                alt="Element step icon"
                                src={step.icon}
                              />
                              {step.hasConnector && (
                                <div
                                  className={`relative flex-1 w-0.5 min-h-4 grow ${
                                    step.id === 3 ? "mb-[-13.00px]" : ""
                                  } bg-[#e5e8eb] rounded-[41px]`}
                                />
                              )}
                            </div>
                            <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 relative flex-1 grow">
                              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                <div
                                  className={`mt-[-1.00px] ${
                                    step.isActive
                                      ? "font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4]"
                                      : "font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#5e616b]"
                                  } text-[length:var(${
                                    step.isActive
                                      ? "--title-16-b-font-size"
                                      : "--body-16-r-font-size"
                                  })] tracking-[var(${
                                    step.isActive
                                      ? "--title-16-b-letter-spacing"
                                      : "--body-16-r-letter-spacing"
                                  })] leading-[var(${
                                    step.isActive
                                      ? "--title-16-b-line-height"
                                      : "--body-16-r-line-height"
                                  })] relative self-stretch [font-style:var(${
                                    step.isActive
                                      ? "--title-16-b-font-style"
                                      : "--body-16-r-font-style"
                                  })]`}
                                >
                                  {step.title}
                                </div>
                                {step.timestamp && (
                                  <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] relative self-stretch [font-style:var(--caption-title-13-r-font-style)]">
                                    {step.timestamp}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="flex flex-col items-end justify-center gap-2.5 px-5 py-[22px] relative self-stretch w-full flex-[0_0_auto] bg-[#f4f7fd] rounded-xl">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] relative mt-[-1.00px] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                      송금 신청이 완료되었습니다. 송금액 입금이 확인되면 다음
                      단계로 진행됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Home Indicator */}
      <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
      </div>
    </div>
  );
};
