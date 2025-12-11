import React from "react";
import { AccountDetailsSection } from "./sections/AccountDetailsSection/AccountDetailsSection";
import { CurrencySelectionSection } from "./sections/CurrencySelectionSection/CurrencySelectionSection";
import { TransferInformationSection } from "./sections/TransferInformationSection/TransferInformationSection";

export const OverseasRemitTransferInfo = () => {
  return (
    <div className="flex flex-col w-full bg-white" data-model-id="35154:42942">
      <TransferInformationSection />
      <CurrencySelectionSection />
      <AccountDetailsSection />
    </div>
  );
};
