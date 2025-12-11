import React from "react";
import { Separator } from "@/components/ui/separator";

const paymentDetails = [
  {
    label: "출금은행",
    value: "우리은행",
    subValue: "1002843678105",
    hasSubtitle: false,
  },
  {
    label: "입금 은행",
    value: "전북은행 / Bank Code : 037",
    subValue: "Jeonbuk Bank",
    accountNumber: "1002843678105",
    hasCopyIcon: true,
    hasSubtitle: true,
  },
  {
    label: "예금주명",
    value: "민세정",
    subValue: "HANPASS",
    hasSubtitle: false,
  },
];

const noticeItems = [
  "반드시 안내된 기한 내에 입금이 완료돼야 합니다.",
  "입금 만료일이 지난 후에는 자동으로 신청하신 거래 건이 취소됩니다.",
  "상기 내역에 기재된 출금 계좌에서 한패스 가상계좌로 이체해야 입금이 완료됩니다.",
  "입금 은행이'광주은행'인 경우에는, 가상계좌 입금 1일 2회로 제한되며, 입금액은 2개월 동안 2.400만 원 이하로만 이체 가능합니다.",
  "토스 또는 카카오페이와 같은 간편 송금 앱을 통해 한패스 가상계좌로 입금하는 경우에는 입금 확인이 불가합니다.",
];

export const PaymentInformationSection = () => {
  return (
    <section className="flex flex-col items-start justify-end gap-14 pt-[35px] pb-0 px-6 w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <div className="flex-col items-start gap-[22px] w-full flex">
          <div className="flex flex-col items-start gap-2.5 w-full">
            {paymentDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2.5 w-full"
              >
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="flex items-start gap-2 w-full">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {detail.label}
                    </div>

                    <div className="flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                      {detail.value}
                    </div>
                  </div>

                  {detail.hasSubtitle && (
                    <div className="items-center gap-1 w-full flex">
                      <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                        {detail.subValue}
                      </div>
                    </div>
                  )}

                  <div className="items-center gap-1 w-full flex">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#1c253f] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {detail.accountNumber || detail.subValue}
                    </div>

                    {detail.hasCopyIcon && (
                      <img
                        className="w-4 h-4"
                        alt="CopyIcon link"
                        src="https://c.animaapp.com/vuYaFJZH/img/ico16-copy-link.svg"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 px-5 py-[22px] w-full bg-[#f4f7fd] rounded-xl">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-0.5 w-full">
                <div className="flex items-start gap-2 w-full">
                  <div className="flex-1 mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                    입금액
                  </div>

                  <div className="flex-1 mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] text-right tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    1,200,000 KRW
                  </div>
                </div>

                <div className="items-center gap-1 w-full flex">
                  <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] text-right tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                    수수료 포함 5,000 KRW
                  </div>
                </div>
              </div>
            </div>

            <Separator className="w-full" />

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="flex items-start gap-2 w-full">
                    <div className="flex-1 mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      입금 만료일
                    </div>

                    <div className="flex-1 mt-[-1.00px] font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#1c253f] text-[length:var(--body-14-SB-font-size)] text-right tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] [font-style:var(--body-14-SB-font-style)]">
                      2025.11.03 13:29:35 KST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-1.5 w-full">
        <div className="flex items-center gap-0.5 w-full">
          <img
            className="w-5 h-5"
            alt="Img ars notice"
            src="https://c.animaapp.com/vuYaFJZH/img/img-ars-notice.svg"
          />

          <div className="w-fit font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
            입금 유의사항
          </div>
        </div>

        <div className="flex-col gap-2 flex items-start w-full">
          {noticeItems.map((item, index) => (
            <div key={index} className="gap-[5px] flex items-start w-full">
              <div className="w-2 h-3.5 relative">
                <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>

              <div className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
