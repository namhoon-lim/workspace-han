import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const rewardItems = [
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

export const GiftCardSection = () => {
  return (
    <section className="flex flex-col items-start gap-[22px] px-6 py-0 w-full">
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="inline-flex items-start">
          <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#e9f1ff] rounded-[50px] rotate-180 hover:bg-[#e9f1ff]">
            <span className="mt-[-1.00px] -rotate-180 font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#003fbb] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
              초대한 사람
            </span>
          </Badge>
        </div>

        <div className="flex-col items-start bg-white flex w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h2 className="mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                친구를 초대하면
                <br />
                받을 수 있는 혜택이에요!
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Card className="flex flex-col items-center gap-2.5 pt-0 pb-5 px-5 w-full bg-white rounded-2xl border border-solid border-[#e9e9e9] shadow-card-list-6-20-25">
        <CardContent className="flex flex-col items-center w-full p-0">
          <div className="relative w-[214px] h-[150px]">
            <img
              className="-bottom-1.5 h-[136px] aspect-[1.54] absolute left-0 w-[214px]"
              alt="Gift illustration"
              src="https://c.animaapp.com/pWVLYNoL/img/---------1-2-2@2x.png"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-center gap-2.5 px-[30px] py-[22px] w-full bg-[#f4f7fd] rounded-md border border-solid border-[#4c67f1]">
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <div className="inline-flex items-start justify-center gap-1.5">
                    <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#dbe5f8] rounded-[50px] rotate-180 hover:bg-[#dbe5f8]">
                      <span className="mt-[-1.00px] -rotate-180 font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#0d56e4] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
                        COUPON
                      </span>
                    </Badge>
                  </div>

                  <p className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-black text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] text-center [font-style:var(--title-16-b-font-style)]">
                    송금 수수료 할인 쿠폰
                  </p>
                </div>

                <div className="inline-flex items-end justify-center gap-0.5">
                  <span className="mt-[-1.00px] text-[#0d56e4] text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap font-title-20-b font-[number:var(--title-20-b-font-weight)] text-center [font-style:var(--title-20-b-font-style)]">
                    5,000
                  </span>

                  <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[2.5px]">
                    <span className="mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                      KRW
                    </span>
                  </div>
                </div>
              </div>

              <img
                className="right-px absolute top-[calc(50.00%_-_8px)] w-2 h-[17px]"
                alt="Ticket perforation"
                src="https://c.animaapp.com/pWVLYNoL/img/bg-4@2x.png"
              />

              <img
                className="left-0 absolute top-[calc(50.00%_-_8px)] w-2 h-[17px]"
                alt="Ticket perforation"
                src="https://c.animaapp.com/pWVLYNoL/img/bg-5@2x.png"
              />
            </div>

            <div className="flex flex-col items-center w-full mt-[-9px]">
              <div className="relative w-7 h-7 z-[1] bg-white rounded-[14px] border border-solid border-[#dfe3ec]">
                <img
                  className="absolute left-[calc(50.00%_-_8px)] bottom-1.5 w-4 h-4"
                  alt="Add icon"
                  src="https://c.animaapp.com/pWVLYNoL/img/ico16-add-2.svg"
                />
              </div>

              <div className="flex flex-col items-start gap-2 w-full mt-[-9px] z-0">
                <div className="flex flex-col items-start gap-3.5 pt-[22px] pb-4 px-4 w-full bg-[#f4f7fd] rounded-md">
                  <div className="flex flex-col items-center gap-2.5 w-full">
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1 bg-[#dbe5f8] rounded-[50px] rotate-180 hover:bg-[#dbe5f8]">
                        <span className="mt-[-1.00px] -rotate-180 font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[#0d56e4] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] whitespace-nowrap [font-style:var(--navigation-12-SB-font-style)]">
                          WALLET
                        </span>
                      </Badge>

                      <p className="text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-center [font-style:var(--title-16-b-font-style)]">
                        월렛으로 캐시백
                      </p>
                    </div>

                    <p className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-[#0d1458] text-sm tracking-[-0.28px] leading-[18.2px] text-center">
                      <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                        친구가{" "}
                      </span>
                      <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] tracking-[var(--body-14-b-letter-spacing)] [font-style:var(--body-14-b-font-style)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)]">
                        계좌등록과 첫 해외송금
                      </span>
                      <span className="tracking-[var(--body-14-r-letter-spacing)] font-body-14-r [font-style:var(--body-14-r-font-style)] font-[number:var(--body-14-r-font-weight)] leading-[var(--body-14-r-line-height)] text-[length:var(--body-14-r-font-size)]">
                        에 성공하면 최대 10,000원 캐시백을 드립니다.
                      </span>
                    </p>
                  </div>

                  <div className="flex min-h-[120px] items-center gap-1.5 w-full">
                    {rewardItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-1.5 px-3 py-5 flex-1 bg-white rounded-md border border-solid border-[#dfe3ec]"
                      >
                        <p className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] text-center [font-style:var(--caption-title-13-r-font-style)]">
                          {item.label}
                        </p>

                        <div className="flex flex-wrap items-end justify-center gap-[2px_2px] w-full">
                          <span className="mt-[-1.00px] text-[#0d56e4] text-[length:var(--title-20-b-font-size)] tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] whitespace-nowrap font-title-20-b font-[number:var(--title-20-b-font-weight)] text-center [font-style:var(--title-20-b-font-style)]">
                            {item.amount}
                          </span>

                          <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[2.5px]">
                            <span className="mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                              {item.currency}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
