import { ArrowDownIcon, TicketIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const accountData = {
  bank: "우리은행",
  accountNumber: "1002661878155",
  balance: "22,242,713원",
  availableAmount: "22,243,713원",
};

const transactionDetails = [
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-11.svg",
    label: "보내는 방법",
    value: "Wechat",
    valueColor: "text-[#0d56e4]",
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-17.svg",
    label: "송금 환율",
    value: "10.11 KRW = 1 CNY",
    valueColor: "text-[#5e616b]",
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-18.svg",
    label: "송금 수수료 (쿠폰  적용가)",
    value: "0 KRW",
    valueColor: "text-[#5e616b]",
    hasAction: true,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-14.svg",
    label: "예상 소요 시간",
    value: "depending on local circumstances",
    valueColor: "text-[#5e616b]",
  },
];

export const CurrencyExchangeSection = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start w-full">
        <div className="flex-col items-start flex w-full">
          <div className="flex-col justify-center gap-2 w-full flex items-start">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full">
              <div className="flex items-center gap-2.5 flex-1 grow">
                <h1 className="[display:-webkit-box] items-center justify-center flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--title-18-SB-font-style)]">
                  해외송금 보내기
                </h1>

                <Button
                  variant="outline"
                  className="h-auto px-2 py-1.5 bg-white border-[#0d56e4] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] [font-style:var(--caption-title-13-b-font-style)]"
                >
                  즐겨찾기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[22px] w-full">
        <div className="gap-2.5 px-6 py-0 flex flex-col items-start w-full">
          <Card className="w-full bg-[#f7f7f8] rounded-xl border-[#e9e9e9]">
            <CardContent className="flex flex-col items-start justify-center gap-2.5 p-4">
              <div className="flex items-center gap-1 w-full">
                <img
                  className="w-6 h-6 aspect-[1]"
                  alt="Round bank"
                  src="https://c.animaapp.com/FyEwllI9/img/bank32-round-bank-295-round.svg"
                />

                <div className="flex flex-wrap items-center gap-[4px_4px] flex-1 grow">
                  <div className="flex-1 mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#717682] text-[13px] tracking-[-0.26px] leading-[16.9px]">
                    {accountData.bank}
                  </div>
                </div>

                <div className="w-fit font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                  {accountData.accountNumber}
                </div>

                <img
                  className="w-4 h-4"
                  alt="Btn arrow"
                  src="https://c.animaapp.com/FyEwllI9/img/ico16-btn-arrow-down3.svg"
                />
              </div>

              <Separator className="w-full h-px bg-[#e9e9e9]" />

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start gap-1 w-full">
                  <div className="flex-1 mt-[-1.00px] font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#5c6580] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                    계좌 잔액
                  </div>

                  <div className="flex-1 mt-[-1.00px] font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#1c253f] text-[length:var(--navigation-12-m-font-size)] text-right tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                    {accountData.balance}
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full">
                  <div className="flex-1 mt-[-1.00px] font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#5c6580] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                    출금가능 금액
                  </div>

                  <div className="flex-1 mt-[-1.00px] font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#1c253f] text-[length:var(--navigation-12-m-font-size)] text-right tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                    {accountData.availableAmount}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-4 px-6 py-0 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="gap-2 flex flex-col items-start w-full">
              <div className="flex-col items-start gap-1 flex w-full">
                <div className="mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#717682] text-xs tracking-[-0.24px] leading-[15.6px]">
                  보내는 금액(수수료 별도)
                </div>

                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="items-center gap-2 flex w-full">
                    <div className="w-10 h-10 aspect-[1] bg-[url(https://c.animaapp.com/FyEwllI9/img/country-4.svg)] bg-[100%_100%]" />

                    <div className="flex items-center justify-center w-fit font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                      KRW
                    </div>

                    <div className="[display:-webkit-box] flex-1 text-transparent text-[length:var(--title-20-b-font-size)] text-right tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] items-center justify-center font-title-20-b font-[number:var(--title-20-b-font-weight)] [font-style:var(--title-20-b-font-style)]">
                      <span className="text-[#0d56e4] tracking-[var(--title-20-b-letter-spacing)] font-title-20-b [font-style:var(--title-20-b-font-style)] font-[number:var(--title-20-b-font-weight)] leading-[var(--title-20-b-line-height)] text-[length:var(--title-20-b-font-size)]">
                        1,000,000
                      </span>
                      <span className="text-[#0b0c0e] tracking-[var(--title-20-b-letter-spacing)] font-title-20-b [font-style:var(--title-20-b-font-style)] font-[number:var(--title-20-b-font-weight)] leading-[var(--title-20-b-line-height)] text-[length:var(--title-20-b-font-size)]">
                        |
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col h-[58px] items-center justify-center px-[5px] py-0">
                <img
                  className="flex-1 w-[1.5px] grow"
                  alt="Vector"
                  src="https://c.animaapp.com/FyEwllI9/img/vector-1381-3.svg"
                />

                <div className="flex w-[30px] h-[30px] items-center justify-center gap-2.5 bg-[#45a6ff] rounded-[1000px] aspect-[1]">
                  <ArrowDownIcon className="w-4 h-4 text-white" />
                </div>

                <img
                  className="flex-1 w-[1.5px] grow"
                  alt="Vector"
                  src="https://c.animaapp.com/FyEwllI9/img/vector-1381-3.svg"
                />
              </div>

              <div className="flex-col items-start justify-center gap-1 flex w-full">
                <div className="mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#717682] text-xs tracking-[-0.24px] leading-[15.6px]">
                  보내는 금액(수수료 별도)
                </div>

                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="items-center gap-2 flex w-full">
                    <div className="w-10 h-10 bg-[url(https://c.animaapp.com/FyEwllI9/img/country-5.svg)] bg-[100%_100%]" />

                    <div className="flex items-center justify-center w-fit font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                      CNY
                    </div>

                    <div className="[display:-webkit-box] flex-1 text-[#0d56e4] text-[length:var(--title-20-b-font-size)] text-right tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] items-center justify-center font-title-20-b font-[number:var(--title-20-b-font-weight)] [font-style:var(--title-20-b-font-style)]">
                      4,962
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="w-full h-px bg-[#e9e9e9]" />

            <div className="flex flex-col items-start gap-3 w-full rounded-2xl">
              {transactionDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-2 w-full">
                  <div className="flex items-center gap-2 flex-1 grow">
                    <div className="flex w-5 h-5 items-center justify-center gap-[8.33px] bg-[#f4f7fd] rounded-[83.33px]">
                      <img
                        className="w-[13.33px] h-[13.33px]"
                        alt="Frame"
                        src={detail.icon}
                      />
                    </div>

                    <div className="w-fit [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#5e616b] text-[13px] tracking-[-0.26px] leading-[16.9px] whitespace-nowrap">
                      {detail.label}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-center gap-1 flex-1 grow">
                    <div
                      className={`mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[13px] text-right tracking-[-0.26px] leading-[16.9px] ${detail.valueColor}`}
                    >
                      {detail.value}
                    </div>

                    {detail.hasAction && (
                      <div className="inline-flex items-center gap-2">
                        <div className="inline-flex items-center gap-1">
                          <TicketIcon className="w-5 h-5 text-[#1c253f]" />

                          <div className="flex items-center justify-center w-fit font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] underline whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                            쿠폰 적용
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="min-h-[54px] w-full bg-[#0d56e4] rounded-xl h-auto px-[26px] py-1.5 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            송금하기
          </Button>
        </div>
      </div>
    </section>
  );
};
