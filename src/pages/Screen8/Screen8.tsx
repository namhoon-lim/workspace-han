import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { ActionBar } from "@/components/common/ActionBar";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection/TransactionDetailsSection";

export const Screen8 = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-white pb-20"
      data-model-id="40000001:46294"
    >
      <BackSubHeader backTo="/" />
      <TransactionDetailsSection />
      <ActionBar activeId="transfer" />
    </div>
  );
};
