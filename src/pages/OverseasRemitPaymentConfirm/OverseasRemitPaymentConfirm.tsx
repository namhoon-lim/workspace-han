import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { PaymentInformationSection } from "./sections/PaymentInformationSection/PaymentInformationSection";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection/TransactionDetailsSection";

export const OverseasRemitPaymentConfirm = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col flex-1">
        <BackSubHeader backTo="/overseasremitfailu95093" />
        <TransactionDetailsSection />
        <PaymentInformationSection />
      </div>

      <footer className="flex flex-col bg-white">
        <div className="px-6 pb-6">
          <Button className="w-full min-h-[54px] h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </span>
          </Button>
        </div>

        <div className="flex justify-center py-2 bg-white"></div>
      </footer>
    </div>
  );
};
