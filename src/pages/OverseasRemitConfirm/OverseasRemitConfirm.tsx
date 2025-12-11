import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { TransactionDetailsSection } from "./sections/TransactionDetailsSection/TransactionDetailsSection";
import { UserInformationSection } from "./sections/UserInformationSection/UserInformationSection";

export const OverseasRemitConfirm = () => {
  return (
    <div className="flex flex-col relative bg-white min-h-screen">
      <BackSubHeader backTo="/overseasremitidinputu95091" />

      <UserInformationSection />

      <main className="flex-1 w-full">
        <TransactionDetailsSection />
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative w-full bg-white">
        <div className="flex flex-col items-center gap-6 w-full">
          <Button className="w-full min-h-[54px] h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              송금
            </span>
          </Button>
        </div>

        <div className="relative w-full h-4" />
      </footer>
    </div>
  );
};
