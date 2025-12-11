import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const transactionCardItems = [
  {
    label: "받는 사람",
    value: "12437576787",
    subValue: "TEST TEAHWI",
  },
];

const amountItems = [
  {
    label: "보내는 금액",
    value: "10,000 KRW",
  },
  {
    label: "받는 금액",
    value: "10,000 KRW",
  },
  {
    label: "입금액",
    value: "10,000 KRW",
    isHighlighted: true,
  },
];

const feeItems = [
  {
    label: "송금 환율",
    value: "10.11 KRW = 1 NPR",
  },
  {
    label: "송금 수수료",
    value: "0 KRW",
    strikethrough: "-5,000",
  },
  {
    label: "예상 소요 시간",
    value: "depending on local circumstances",
  },
];

const detailItems = [
  {
    label: "송금받는 방법",
    value: "계좌이체",
    subValue: "Khan bank",
  },
  {
    label: "계좌번호",
    value: "183039282726",
  },
  {
    label: "송금 목적",
    value: "증여  송금",
  },
  {
    label: "자금 출처",
    value: "이자, 배당 소득",
  },
];

const disclaimers = [
  "한패스는 잘못된 송금정보로 인하여 송금된 거래는 책임지지 않습니다.",
  "받는 사람의 정보가 정확하지 않으면 송금이 거절될 수 있습니다. 특히 받는 사람의 이름과 성을 다시 한번 확인해주세요.",
];

export const TransactionDetailsSection = () => {
  return (
    <section className="flex flex-col items-start gap-14 pt-8 pb-0 px-6 w-full">
      <div className="flex flex-col items-start gap-[22px] w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <Card className="w-full bg-[#003fbb] border-0 rounded-xl overflow-hidden">
            <CardContent className="flex flex-col items-start gap-4 p-5">
              <div className="flex flex-col items-end gap-1 w-full">
                <div className="flex items-end gap-3 w-full">
                  <div className="flex-1 font-body-14-r text-white/70">받는 사람</div>
                  <div className="flex-1 font-body-14-b text-white text-right">12437576787</div>
                </div>
                <div className="w-full font-body-14-r text-white text-right">
                  TEST TEAHWI
                </div>
              </div>

              <Separator className="bg-white/20" />

              <div className="flex flex-col items-start gap-1.5 w-full">
                {amountItems.map((item, index) => (
                  <div key={index} className="flex items-end gap-3 w-full">
                    <div className="flex-1 font-body-14-r text-white/70">{item.label}</div>
                    <div className={`flex-1 text-right ${item.isHighlighted ? "font-title-16-b text-white" : "font-body-14-b text-white"}`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#f4f7fd] border-0 rounded-xl">
            <CardContent className="flex flex-col items-start gap-2.5 p-5">
              {feeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 w-full">
                  <div className="font-body-14-r text-[#85888e]">{item.label}</div>
                  {index === 1 ? (
                    <div className="flex items-center justify-end gap-1 flex-1">
                      <div className="flex items-center gap-0.5 flex-1">
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#b7ccf7] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] mt-[-1.00px] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)] line-through">
                            {item.strikethrough}
                          </div>
                          <div className="mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                            0
                          </div>
                        </div>
                        <div className="w-8 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                          KRW
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-2.5 w-full">
          {detailItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2.5 w-full"
            >
              <div className="flex flex-col items-start gap-0.5 w-full">
                <div className="flex items-start gap-2 w-full">
                  <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    {item.label}
                  </div>
                  <div className="flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                    {item.value}
                  </div>
                </div>
                {item.subValue && (
                  <div className="flex items-center gap-1 w-full">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {item.subValue}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full">
        <div className="flex flex-col gap-2 items-start w-full">
          {disclaimers.map((text, index) => (
            <div key={index} className="flex gap-[5px] items-start w-full">
              <div className="relative w-2 h-3.5">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>
              <div className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
