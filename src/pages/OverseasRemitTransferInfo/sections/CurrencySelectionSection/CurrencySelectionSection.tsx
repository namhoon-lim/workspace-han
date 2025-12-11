import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const accountInfo = {
  bankIcon:
    "https://c.animaapp.com/vuYaFJZH/img/bank32-round-bank-295-round.svg",
  bankName: "우리은행",
  accountNumber: "1002661878155",
  balance: "22,242,713원",
  availableAmount: "22,243,713원",
};

const currencyData = {
  sending: {
    flag: "https://c.animaapp.com/vuYaFJZH/img/country-4.svg",
    code: "KRW",
    amount: "1,000,000",
  },
  receiving: {
    flag: "https://c.animaapp.com/vuYaFJZH/img/country-5.svg",
    code: "CNY",
    amount: "4,962",
  },
};

const transactionDetails = [
  {
    icon: "https://c.animaapp.com/vuYaFJZH/img/frame-1618874110-1.svg",
    label: "보내는 방법",
    value: "Wechat",
    valueColor: "text-[#0d56e4]",
  },
  {
    icon: "https://c.animaapp.com/vuYaFJZH/img/frame-1618874110-2.svg",
    label: "송금 환율",
    value: "10.11 KRW = 1 CNY",
    valueColor: "text-[#5e616b]",
  },
];

export const CurrencySelectionSection = () => {
  return (
    <section className="flex flex-col items-center gap-[22px] w-full">
      <div className="flex flex-col items-start gap-2.5 px-6 w-full">
        <Card className="w-full bg-[#f7f7f8] border-[#e9e9e9] rounded-xl overflow-hidden">
          <CardContent className="flex flex-col items-start justify-center gap-2.5 p-4">
            <div className="flex items-center gap-1 w-full">
              <img
                className="w-6 h-6"
                alt="Round bank"
                src={accountInfo.bankIcon}
              />

              <div className="flex flex-wrap items-center gap-1 flex-1">
                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {accountInfo.bankName}
                </div>
              </div>

              <div className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                {accountInfo.accountNumber}
              </div>

              <ChevronDownIcon className="w-4 h-4 text-[#1c253f]" />
            </div>

            <img
              className="w-full h-px object-cover"
              alt="Vector"
              src="https://c.animaapp.com/vuYaFJZH/img/vector-1236-3.svg"
            />

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-start gap-1 w-full">
                <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#5c6580] text-xs tracking-[-0.24px] leading-[15.6px]">
                  계좌 잔액
                </div>

                <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#1c253f] text-xs text-right tracking-[-0.24px] leading-[15.6px]">
                  {accountInfo.balance}
                </div>
              </div>

              <div className="flex items-start gap-1 w-full">
                <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#5c6580] text-xs tracking-[-0.24px] leading-[15.6px]">
                  출금가능 금액
                </div>

                <div className="flex-1 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#1c253f] text-xs text-right tracking-[-0.24px] leading-[15.6px]">
                  {accountInfo.availableAmount}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-4 px-6 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#717682] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                보내는 금액(수수료 별도)
              </div>

              <div className="flex flex-col items-start gap-0.5 w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-10 h-10 bg-[url(https://c.animaapp.com/vuYaFJZH/img/country-4.svg)] bg-[100%_100%]" />

                  <div className="font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                    {currencyData.sending.code}
                  </div>

                  <div className="flex-1 [font-family:'Pretendard-Bold',Helvetica] font-bold text-xl text-right tracking-[-0.40px] leading-[26.0px] overflow-hidden text-ellipsis line-clamp-1">
                    <span className="text-[#0d56e4] tracking-[-0.08px]">
                      {currencyData.sending.amount}
                    </span>
                    <span className="text-[#0b0c0e] tracking-[-0.08px]">|</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col h-[58px] items-center justify-center px-[5px]">
              <img
                className="flex-1 w-[1.5px]"
                alt="Vector"
                src="https://c.animaapp.com/vuYaFJZH/img/vector-1381.svg"
              />

              <div className="flex w-[30px] h-[30px] items-center justify-center gap-2.5 bg-[#45a6ff] rounded-[1000px]">
                <img
                  className="w-4 h-4"
                  alt="Frame"
                  src="https://c.animaapp.com/vuYaFJZH/img/frame-1618874110.svg"
                />
              </div>

              <img
                className="flex-1 w-[1.5px]"
                alt="Vector"
                src="https://c.animaapp.com/vuYaFJZH/img/vector-1381.svg"
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-1 w-full">
              <div className="font-navigation-12-m font-[number:var(--navigation-12-m-font-weight)] text-[#717682] text-[length:var(--navigation-12-m-font-size)] tracking-[var(--navigation-12-m-letter-spacing)] leading-[var(--navigation-12-m-line-height)] [font-style:var(--navigation-12-m-font-style)]">
                보내는 금액(수수료 별도)
              </div>

              <div className="flex flex-col items-start gap-0.5 w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-10 h-10 bg-[url(https://c.animaapp.com/vuYaFJZH/img/country-5.svg)] bg-[100%_100%]" />

                  <div className="font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                    {currencyData.receiving.code}
                  </div>

                  <div className="flex-1 [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#0d56e4] text-xl text-right tracking-[-0.40px] leading-[26.0px] overflow-hidden text-ellipsis line-clamp-1">
                    {currencyData.receiving.amount}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="w-full h-px object-cover"
            alt="Vector"
            src="https://c.animaapp.com/vuYaFJZH/img/vector-1236-4.svg"
          />

          <div className="flex flex-col items-start gap-3 w-full rounded-2xl">
            {transactionDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-2 w-full">
                <div className="flex w-5 h-5 items-center justify-center gap-[8.33px] bg-[#f4f7fd] rounded-[83.33px]">
                  <img
                    className="w-[13.33px] h-[13.33px]"
                    alt="Frame"
                    src={detail.icon}
                  />
                </div>

                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {detail.label}
                </div>

                <div
                  className={`flex-1 font-caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"} font-[number:var(--caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"}-font-weight)] ${detail.valueColor} text-[length:var(--caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"}-font-size)] text-right tracking-[var(--caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"}-letter-spacing)] leading-[var(--caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"}-line-height)] [font-style:var(--caption-title-13-${detail.valueColor === "text-[#0d56e4]" ? "b" : "r"}-font-style)]`}
                >
                  {detail.value}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-2 w-full">
              <div className="flex items-center gap-2 flex-1">
                <div className="flex w-5 h-5 items-center justify-center gap-[8.33px] bg-[#f4f7fd] rounded-[83.33px]">
                  <img
                    className="w-[13.33px] h-[13.33px]"
                    alt="Frame"
                    src="https://c.animaapp.com/vuYaFJZH/img/frame-1618874110-3.svg"
                  />
                </div>

                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  송금 수수료 (쿠폰&nbsp;&nbsp;적용가)
                </div>
              </div>

              <div className="flex flex-col items-end justify-center gap-1 flex-1">
                <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  0 KRW
                </div>

                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-center gap-1">
                    <img
                      className="w-5 h-5"
                      alt="Frame"
                      src="https://c.animaapp.com/vuYaFJZH/img/frame-1618874109.svg"
                    />

                    <button className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] underline whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                      쿠폰 적용
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 w-full">
              <div className="flex w-5 h-5 items-center justify-center gap-[8.33px] bg-[#f4f7fd] rounded-[83.33px]">
                <img
                  className="w-[13.33px] h-[13.33px]"
                  alt="Frame"
                  src="https://c.animaapp.com/vuYaFJZH/img/frame-1618874110-4.svg"
                />
              </div>

              <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                예상 소요 시간
              </div>

              <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                depending on local circumstances
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
          <div className="flex min-h-[54px] items-start flex-1">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 h-auto bg-[#0d56e4] rounded-xl hover:bg-[#0d56e4]/90">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                송금하기
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
