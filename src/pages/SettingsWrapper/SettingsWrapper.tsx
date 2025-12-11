import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const withdrawalSteps = [
  {
    number: "1",
    title: "탈퇴는 고객센터를 통해서만 가능합니다.",
    description: "탈퇴를 원하는 경우 고객센터로 접수해주세요.",
    hasConnector: true,
  },
  {
    number: "2",
    title:
      "탈퇴 후에는 회원정보 및 송금 내역이 모두 삭제되어 복구가 불가능합니다.",
    description: null,
    hasConnector: true,
  },
  {
    number: "3",
    title: "탈퇴할 경우 월렛에 충전된 잔액은 환불되지 않습니다.",
    description: null,
    hasConnector: false,
  },
];

export const SettingsWrapper = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="35382:74770"
    >
      <div className="flex flex-col items-start gap-[22px] pt-0 pb-[30px] px-0 relative flex-1 self-stretch w-full grow">
        <BackSubHeader backTo="/" />

        <main className="flex flex-col items-center gap-2.5 px-6 py-0 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            {withdrawalSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="flex flex-col items-start relative flex-1 grow bg-white">
                  <div className="flex flex-col min-h-[68px] items-start px-0 py-[3px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start justify-around relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-start justify-around gap-3 relative flex-1 grow">
                        <div className="flex items-start gap-3.5 relative flex-1 grow">
                          <div className="inline-flex flex-col items-center gap-1.5 relative self-stretch flex-[0_0_auto]">
                            <div className="relative w-8 h-8 bg-[url(https://c.animaapp.com/d5CwqEvt/img/group-2@2x.png)] bg-[100%_100%]">
                              <div className="absolute w-[75.00%] h-[65.62%] top-[18.75%] left-[12.50%] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#5e616b] text-[length:var(--title-16-SB-font-size)] text-center tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.number}
                              </div>
                            </div>

                            {step.hasConnector && (
                              <div className="relative flex-1 w-0.5 min-h-4 grow bg-[#e5e8eb] rounded-[41px]" />
                            )}
                          </div>

                          <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 relative flex-1 grow">
                            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                              <h2 className="relative self-stretch mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#1c253f] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.title}
                              </h2>

                              {step.description && (
                                <p className="text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] relative self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] [font-style:var(--caption-title-13-r-font-style)]">
                                  {step.description}
                                </p>
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
        </main>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="min-h-[54px] flex-1 grow flex items-start relative">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
              <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                고객센터로 이동
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
        </div>
      </footer>
    </div>
  );
};
