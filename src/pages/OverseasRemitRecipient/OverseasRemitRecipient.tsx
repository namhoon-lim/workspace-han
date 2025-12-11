import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ReceiveCountrySection } from "./sections/ReceiveCountrySection/ReceiveCountrySection";
import { PaymentMethodSection } from "./sections/PaymentMethodSection/PaymentMethodSection";
import { SenderInformationSection } from "./sections/SenderInformationSection/SenderInformationSection";
import { AdditionalNotesSection } from "./sections/AdditionalNotesSection/AdditionalNotesSection";

export const OverseasRemitRecipient = () => {
  return (
    <div className="flex flex-col items-start relative bg-white w-full min-h-screen">
      <BackSubHeader backTo="/overseasremitcontactsu95089" />

      {/* Status Bar */}
      <div className="flex items-center justify-center gap-2.5 pt-3 pb-0 px-0 relative self-stretch w-full">
        <div className="relative w-[375px] h-2.5">
          <div className="relative w-[361px] h-[5px] top-[3px] left-[7px] bg-[#f7f7f8] rounded-[100px]">
            <div className="w-[217px] h-[5px] bg-[#004de5] rounded-[100px]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="flex items-center gap-2.5 px-6 py-[30px] w-full">
        <div className="flex flex-col items-start gap-2.5 flex-1">
          <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#1e1e1e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 대상자 등록
          </h1>
        </div>
      </section>

      {/* Receive Country Section */}
      <ReceiveCountrySection />

      <Separator className="h-3 bg-[#f7f7f8] border-0" />

      {/* Payment Method Section */}
      <PaymentMethodSection />

      <Separator className="h-3 bg-[#f7f7f8] border-0" />

      {/* Sender Information Section */}
      <SenderInformationSection />

      <Separator className="h-3 bg-[#f7f7f8] border-0" />

      {/* Additional Notes Section */}
      <AdditionalNotesSection />

      {/* Footer */}
      <footer className="flex flex-col items-start gap-2.5 px-6 py-[42px] w-full mt-auto">
        <Button
          disabled
          className="flex items-center justify-center gap-2 px-6 py-4 w-full bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7] disabled:opacity-100"
        >
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            송금대상자 등록
          </span>
        </Button>
      </footer>
    </div>
  );
};
