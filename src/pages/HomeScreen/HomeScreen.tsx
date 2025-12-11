import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { ActionBar } from "@/components/common/ActionBar";
import { ExchangeRateSection } from "./sections/ExchangeRateSection/ExchangeRateSection";

export const HomeScreen = () => {
  return (
    <div
      className="flex flex-col w-full bg-white pb-20"
      data-model-id="40000001:46356"
    >
      <BackSubHeader backTo="/" />
      <ExchangeRateSection />
      <ActionBar activeId="transfer" />
    </div>
  );
};
