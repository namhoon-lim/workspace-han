import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const benefitItems = [
  {
    label: "계좌 등록 시",
    amount: "5,000",
    currency: "KRW",
  },
  {
    label: "첫 해외송금 시",
    amount: "5,000",
    currency: "KRW",
  },
];

export const WalletSection = () => {
  return (
    <section className="flex flex-col items-start gap-[22px] px-6 py-0 w-full">
      <div className="flex flex-col items-start gap-2 w-full">
        <Badge className="bg-[#e9f1ff] text-[#003fbb] hover:bg-[#e9f1ff] font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] [font-style:var(--navigation-12-SB-font-style)] h-auto px-2.5 py-1 rounded-[50px]">
          초대받은 사람
        </Badge>

        <div className="flex flex-col items-start bg-white w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h2 className="mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                초대 받은 친구가
                <br />
                받을 수 있는 혜택이에요!
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Card className="w-full bg-white rounded-2xl border border-solid border-[#e9e9e9] shadow-card-list-6-20-25">
        <CardContent className="flex flex-col items-center gap-2.5 pt-0 pb-5 px-5">
          <div className="relative w-[214px] h-[150px]">
            <img
              className="bottom-0 h-[133px] aspect-[1.85] absolute left-0 w-[214px]"
              alt="Wallet illustration"
              src="https://c.animaapp.com/pWVLYNoL/img/---------1-1-2@2x.png"
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-3.5 pt-[22px] pb-4 px-4 w-full bg-[#f4f7fd] rounded-md">
              <div className="flex flex-col items-center gap-2.5 w-full">
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <Badge className="bg-[#dbe5f8] text-[#0d56e4] hover:bg-[#dbe5f8] font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] [font-style:var(--navigation-12-SB-font-style)] h-auto px-2.5 py-1 rounded-[50px]">
                    WALLET
                  </Badge>

                  <h3 className="text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-center [font-style:var(--title-16-b-font-style)] w-full">
                    월렛으로 캐시백
                  </h3>
                </div>
              </div>

              <div className="flex min-h-[120px] items-center gap-1.5 w-full">
                {benefitItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col h-[120px] items-center justify-center gap-1.5 px-3 py-5 flex-1 bg-white rounded-md border border-solid border-[#dfe3ec]"
                  >
                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)] w-full">
                      {item.label}
                    </div>

                    <div className="flex flex-wrap items-end justify-center gap-[2px_2px] w-full">
                      <div className="w-fit mt-[-1.00px] text-[#0d56e4] text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap font-title-20-b font-[number:var(--title-20-b-font-weight)] text-center [font-style:var(--title-20-b-font-style)]">
                        {item.amount}
                      </div>

                      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[2.5px]">
                        <div className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                          {item.currency}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
