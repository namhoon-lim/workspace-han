import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  { value: "favorites", label: "즐겨찾기" },
  { value: "recent", label: "최근 송금내역" },
];

export const ActionButtonsSection = () => {
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <section className="flex flex-col items-start gap-[22px] w-full">
      <header className="bg-white w-full">
        <div className="pt-[22px] px-6">
          <h2 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            즐겨찾는 내역을 관리해보세요
          </h2>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full h-auto bg-transparent p-0 border-b border-[#dfe3ec] rounded-none">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 data-[state=active]:border-[#003fbb] data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=active]:shadow-none ${
                activeTab === tab.value
                  ? "font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#003fbb] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
                  : "font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]"
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
};
