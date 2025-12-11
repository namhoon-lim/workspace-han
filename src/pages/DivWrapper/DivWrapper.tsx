import { BackSubHeader } from "@/components/BackSubHeader";
import { MoreHorizontalIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DivWrapper = () => {
  // Transaction data
  const transactionsData = [
    {
      id: 1,
      date: "2024.10.08",
      time: "11:00",
      description: "한패스",
      type: "입금",
      amount: "+430,000원",
      balance: "1,192,300원",
    },
    {
      id: 2,
      date: "2024.10.07",
      time: "11:00",
      description: "한패스",
      type: "입금",
      amount: "+430,000원",
      balance: "762,300원",
    },
    {
      id: 3,
      date: "2024.10.06",
      time: "11:00",
      description: "한패스",
      type: "입금",
      amount: "+430,000원",
      balance: "332,300원",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="35202:90012"
    >
      <BackSubHeader backTo="/" />

      {/* Account Info */}
      <section className="flex items-center gap-1.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-8 h-8"
          alt="Round bank"
          src="https://c.animaapp.com/ELrb3VWQ/img/bank32-round-bank-045-round.svg"
        />
        <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
          <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-0.5 relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  새마을 금고
                </div>
                <div className="relative self-stretch font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                  9002029482947
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction List */}
      <main className="flex flex-col items-start pt-6 px-5 relative self-stretch w-full flex-1">
        {transactionsData.map((transaction) => (
          <div
            key={transaction.id}
            className="flex flex-col items-start gap-2.5 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b border-solid border-[#dfe3ec]"
          >
            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit font-caption-title-12-r font-[number:var(--caption-title-12-r-font-weight)] text-[#5c6580] text-[length:var(--caption-title-12-r-font-size)] tracking-[var(--caption-title-12-r-letter-spacing)] leading-[var(--caption-title-12-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-12-r-font-style)]">
                    {transaction.date}
                  </div>
                  <div className="relative w-fit font-caption-title-12-r font-[number:var(--caption-title-12-r-font-weight)] text-[#5c6580] text-[length:var(--caption-title-12-r-font-size)] tracking-[var(--caption-title-12-r-letter-spacing)] leading-[var(--caption-title-12-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-12-r-font-style)]">
                    {transaction.time}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {transaction.description}
                    </div>
                    <Badge
                      variant="outline"
                      className="inline-flex items-center justify-center gap-2.5 px-1.5 py-0.5 relative flex-[0_0_auto] bg-white rounded-md border border-solid border-[#dfe3ec]"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-caption-title-11-r font-[number:var(--caption-title-11-r-font-weight)] text-[#5c6580] text-[length:var(--caption-title-11-r-font-size)] tracking-[var(--caption-title-11-r-letter-spacing)] leading-[var(--caption-title-11-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-11-r-font-style)]">
                        {transaction.type}
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2 relative flex-[0_0_auto]">
                <div className="relative w-fit font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                  {transaction.amount}
                </div>
                <div className="relative w-fit font-caption-title-12-r font-[number:var(--caption-title-12-r-font-weight)] text-[#a4a8b5] text-[length:var(--caption-title-12-r-font-size)] tracking-[var(--caption-title-12-r-letter-spacing)] leading-[var(--caption-title-12-r-line-height)] whitespace-nowrap [font-style:var(--caption-title-12-r-font-style)]">
                  잔액 {transaction.balance}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="flex flex-col items-center w-full mt-auto">
        <div className="flex justify-center py-2 w-full bg-white"></div>
      </footer>
    </div>
  );
};
