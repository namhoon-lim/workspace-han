import { XIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const paymentMethods = [
  {
    type: "auto",
    badges: [
      { text: "자동이체", color: "bg-[#0d56e4] text-white" },
      { text: "본인명의", color: "bg-transparent text-[#5e616b] border border-[#c8cdd8]" },
    ],
    bankIcon: "https://c.animaapp.com/Fk3yL3l2/img/image-18@2x.png",
    bankName: "새마을 금고",
    accountNumber: "999-2345-***-****",
    balance: "29,038,028원",
    hasCheck: true,
  },
  {
    type: "manual",
    badges: [
      { text: "수동이체", color: "bg-transparent text-[#5e616b] border border-[#c8cdd8]" },
      { text: "본인명의", color: "bg-transparent text-[#5e616b] border border-[#c8cdd8]" },
    ],
    bankIcon: "https://c.animaapp.com/Fk3yL3l2/img/image-19@2x.png",
    bankName: "하나은행",
    accountNumber: "999-2345-***-****",
    balance: "6,000,000원",
    hasCheck: false,
  },
  {
    type: "wallet",
    badges: [],
    bankIcon: "https://c.animaapp.com/Fk3yL3l2/img/group-427321559@2x.png",
    bankName: "Hanpass Pay Wallet",
    accountNumber: "",
    balance: "1,210원",
    hasCheck: false,
  },
];

export const Overseasremit = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="2674:65617"
    >
      <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-4 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-400" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <div className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    출금 수단 선택
                  </div>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <ScrollArea className="w-full max-h-[360px]">
            <div className="flex flex-col items-start gap-3 w-full">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2.5 p-4">
                      <div className="flex flex-col items-start gap-3 flex-1">
                        {method.badges.length > 0 && (
                          <div className="inline-flex items-center gap-1">
                            {method.badges.map((badge, badgeIndex) => (
                              <Badge
                                key={badgeIndex}
                                className={`${badge.color} h-5 px-1.5 rounded font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]`}
                              >
                                {badge.text}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-2 w-full">
                          <img
                            className="w-8 h-8 object-cover"
                            alt="Bank icon"
                            src={method.bankIcon}
                          />

                          <div className="flex flex-col items-start gap-0.5 flex-1">
                            <div className="flex items-center gap-1.5 w-full">
                              <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                                {method.bankName}
                              </span>

                              {method.accountNumber && (
                                <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                                  {method.accountNumber}
                                </span>
                              )}
                            </div>

                            <div className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#1c253f] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                              {method.balance}
                            </div>
                          </div>
                        </div>
                      </div>

                      {method.hasCheck && (
                        <img
                          className="w-8 h-8"
                          alt="Check"
                          src="https://c.animaapp.com/Fk3yL3l2/img/property-1-check.svg"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex flex-col items-center px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-full items-center gap-2.5 px-[105px] py-2 relative flex-[0_0_auto] bg-white">
          </div>
        </div>
      </div>

      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Fk3yL3l2/img/mini-7@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
