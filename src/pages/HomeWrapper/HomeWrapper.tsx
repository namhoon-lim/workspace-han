import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { ActionBar } from "@/components/common/ActionBar";
import { CurrencyExchangeSection } from "./sections/CurrencyExchangeSection/CurrencyExchangeSection";

export const HomeWrapper = () => {
  return (
    <div
      className="flex flex-col w-full bg-white pb-20"
      data-model-id="40000001:46032"
    >
      <BackSubHeader backTo="/" />
      <CurrencyExchangeSection />
      <ActionBar activeId="transfer" />
    </div>
  );
};
