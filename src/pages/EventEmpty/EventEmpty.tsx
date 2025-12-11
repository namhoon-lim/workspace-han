import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabsData = [
  { value: "ongoing", label: "진행 중인 이벤트" },
  { value: "past", label: "지난 이벤트" },
];

export const EventEmpty = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34877:79297"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            이벤트
          </h1>
        </div>

        <Tabs defaultValue="past" className="w-full pt-[22px]">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:border-[#dfe3ec] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="ongoing"
            className="flex flex-col items-center gap-[42px] pt-0 pb-[50px] px-6 flex-1 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-[30px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/dhMJne4N/img/ico48-empty.svg"
                    />
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근 종료된 이벤트가 없습니다
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="past"
            className="flex flex-col items-center gap-[42px] pt-0 pb-[50px] px-6 flex-1 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-[30px] flex-1 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center gap-6 px-0 py-14 w-full">
                    <img
                      className="w-12 h-12"
                      alt="Empty"
                      src="https://c.animaapp.com/dhMJne4N/img/ico48-empty.svg"
                    />
                    <div className="flex flex-col items-center gap-1 w-full">
                      <div className="flex items-start gap-1 w-full">
                        <p className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          최근 종료된 이벤트가 없습니다
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />
      </footer>
    </div>
  );
};
