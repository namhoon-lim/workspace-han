import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/common/Button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const transactionData = [
  {
    timestamp: "2024-08-27 17:18:57",
    badgeText: "Auto",
    badgeVariant: "outline" as const,
    badgeTextColor: "text-[#003fbb]",
    badgeBgColor: "bg-white",
    title: "FTKK VDCC",
    amount: "6",
    currency: "USD",
    conversionText: "15,000 KRW (1 KRW = 0.00069664 USD)",
    statusText: "송금신청 완료",
    statusColor: "text-[#003fbb]",
    hasActionButton: true,
    actionButtonText: "취소",
    actionButtonColor: "text-[#f10000]",
  },
  {
    timestamp: "2024-08-27 17:18:57",
    badgeText: "Manual",
    badgeVariant: "outline" as const,
    badgeTextColor: "text-[#0b0c0e]",
    badgeBgColor: "bg-white",
    title: "FTKK VDCC",
    amount: "6",
    currency: "USD",
    conversionText: "15,000 KRW (1 KRW = 0.00069664 USD)",
    statusText: "송금 취소",
    statusColor: "text-[#003fbb]",
    hasActionButton: false,
    actionButtonText: "",
    actionButtonColor: "",
  },
  {
    timestamp: "2024-08-27 17:18:57",
    badgeText: "Wallet",
    badgeVariant: "secondary" as const,
    badgeTextColor: "text-[#003fbb]",
    badgeBgColor: "bg-[#e9f1ff]",
    title: "FTKK VDCC",
    amount: "6",
    currency: "USD",
    conversionText: "15,000 KRW (1 KRW = 0.00069664 USD)",
    statusText: "송금완료",
    statusColor: "text-[#003fbb]",
    hasActionButton: true,
    actionButtonText: "확인증 발급",
    actionButtonColor: "text-[#0d56e4]",
  },
];

export const HistoryMain = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen items-center bg-[#f7f7f8]"
      backTo="/overseasremitpinu95098"
    >
      
      {/* Title and Navigation Section */}
      <section className="flex flex-col items-start gap-[22px] w-full bg-white">
        <div className="flex flex-col items-start w-full bg-white">
          <div className="gap-2 pt-[22px] pb-0 px-6 flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                해외송금 내역
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between px-6 py-[18px] w-full border-b border-solid border-[#dfe3ec] items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-auto p-0 hover:bg-transparent"
              >
                <ChevronLeftIcon className="w-6 h-6 text-[#0b0c0e]" />
              </Button>

              <div className="inline-flex justify-center gap-4 items-center">
                <div className="w-fit mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                  2024.10
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-auto p-0 hover:bg-transparent"
              >
                <ChevronRightIcon className="w-6 h-6 text-[#0b0c0e]" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center justify-end gap-2 pt-5 pb-3 px-6 w-full bg-white">
                <Select defaultValue="latest">
                  <SelectTrigger className="w-auto h-auto border-0 gap-1 p-0 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] focus:ring-0 focus:ring-offset-0">
                    <SelectValue />
                    <ChevronDownIcon className="w-4 h-4 opacity-100" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">최신순</SelectItem>
                    <SelectItem value="oldest">오래된순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Cards */}
      <section className="flex flex-col items-start gap-3.5 p-6 w-full">
        {transactionData.map((transaction, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-2xl overflow-hidden border border-solid border-[#dfe3ec]"
          >
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-2 p-5">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    {transaction.timestamp}
                  </div>

                  <Badge
                    variant={transaction.badgeVariant}
                    className={`${transaction.badgeBgColor} ${transaction.badgeTextColor} rounded-[50px] px-2.5 py-1 font-navigation-12-b font-[number:var(--navigation-12-b-font-weight)] text-[length:var(--navigation-12-b-font-size)] tracking-[var(--navigation-12-b-letter-spacing)] leading-[var(--navigation-12-b-line-height)] [font-style:var(--navigation-12-b-font-style)] border-[#dfe3ec] h-auto`}
                  >
                    {transaction.badgeText}
                  </Badge>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-center w-full">
                    <div className="flex-1 font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                      {transaction.title}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-end gap-1.5 w-full">
                  <div className="flex flex-col items-end justify-center gap-0.5 w-full">
                    <div className="flex items-center justify-end gap-0.5 w-full">
                      <div className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-right tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                        {transaction.amount}
                      </div>

                      <div className="font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] text-right tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                        {transaction.currency}
                      </div>
                    </div>

                    <div className="w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                      {transaction.conversionText}
                    </div>
                  </div>

                  <button className="inline-flex items-center">
                    <div className="inline-flex flex-col items-start justify-center gap-2.5 rounded-lg">
                      <div className="inline-flex items-center justify-center gap-0.5">
                        <div className="inline-flex items-center gap-0.5">
                          <div
                            className={`flex items-center justify-center font-title-15-SB font-[number:var(--title-15-SB-font-weight)] ${transaction.statusColor} text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]`}
                          >
                            {transaction.statusText}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {transaction.hasActionButton && (
                <div className="bg-white border-t border-solid border-[#e9e9e9] flex flex-col items-start w-full">
                  <div className="flex h-[60px] items-center w-full bg-white">
                    <Button
                      variant="ghost"
                      className={`flex h-[60px] items-center justify-center p-2.5 flex-1 w-full font-body-16-r font-[number:var(--body-16-r-font-weight)] ${transaction.actionButtonColor} text-[length:var(--body-16-r-font-size)] text-center tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] hover:bg-transparent`}
                    >
                      {transaction.actionButtonText}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="flex flex-col px-6 py-0 w-full items-center justify-end mt-auto">
        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};