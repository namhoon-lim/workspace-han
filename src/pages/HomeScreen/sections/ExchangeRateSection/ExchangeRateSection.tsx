import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const transactionDetails = [
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-16.svg",
    label: "보내는 방법",
    value: "Wechat",
    valueColor: "#0d56e4",
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-17.svg",
    label: "송금 환율",
    value: "10.11 KRW = 1 CNY",
    valueColor: "#5e616b",
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-18.svg",
    label: "송금 수수료 (쿠폰  적용가)",
    value: "0 KRW",
    valueColor: "#5e616b",
    hasCoupon: true,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/frame-1618874110-19.svg",
    label: "예상 소요 시간",
    value: "depending on local circumstances",
    valueColor: "#5e616b",
  },
];

export const ExchangeRateSection = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start w-full">
        <header className="flex-col items-start flex w-full">
          <div className="flex-col justify-center gap-2 w-full flex items-start">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full">
              <div className="flex items-center gap-2.5 flex-1 grow">
                <h1 className="[display:-webkit-box] items-center justify-center flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--title-18-SB-font-style)]">
                  해외송금 보내기
                </h1>

                <Button
                  variant="outline"
                  className="h-auto inline-flex items-center justify-end gap-1 px-2 py-1.5 mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-white rounded overflow-hidden border border-solid border-[#0d56e4]"
                >
                  <span className="flex items-center justify-center w-fit mt-[-0.50px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                    즐겨찾기
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-[22px] px-6 w-full">
          <Card className="min-h-[72px] w-full bg-[#f7faff] rounded-2xl border border-solid border-[#b7ccf7] shadow-[0px_4px_8px_#63649e14]">
            <CardContent className="flex items-center gap-2 p-4">
              <img
                className="w-10 h-10"
                alt="Img main banner"
                src="https://c.animaapp.com/FyEwllI9/img/img-main-banner-passport-1.svg"
              />

              <div className="flex items-center gap-1 flex-1 grow">
                <div className="flex flex-col items-start gap-1.5 flex-1 grow">
                  <p className="self-stretch mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                    여권을 등록하셔야 해외 송금할 수 있어요.
                  </p>

                  <Button
                    variant="link"
                    className="h-auto p-0 self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0d56e4] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] underline [font-style:var(--body-14-r-font-style)]"
                  >
                    여권 등록하기
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[22px] w-full">
        <div className="gap-2.5 px-6 py-0 flex flex-col items-start w-full">
          <Card className="w-full bg-[#f7f7f8] rounded-xl overflow-hidden border border-solid border-[#e9e9e9]">
            <CardContent className="flex flex-col items-start justify-center gap-3 px-4 py-5">
              <div className="flex items-center gap-1 w-full">
                <div className="flex flex-wrap items-center gap-[4px_4px] flex-1 grow">
                  <p className="flex-1 mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#717682] text-[13px] tracking-[-0.26px] leading-[16.9px]">
                    선택 가능한 계좌가 없습니다.
                  </p>
                </div>

                <Button
                  variant="link"
                  className="h-auto p-0 w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] text-center tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] underline whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]"
                >
                  계좌 등록하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-4 px-6 py-0 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="gap-2 flex flex-col items-start w-full">
              <div className="flex-col items-start gap-1 flex w-full">
                <label className="self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#717682] text-xs tracking-[-0.24px] leading-[15.6px]">
                  보내는 금액(수수료 별도)
                </label>

                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="items-center gap-2 flex w-full">
                    <div className="w-10 h-10 aspect-[1] bg-[url(https://c.animaapp.com/FyEwllI9/img/country-2.svg)] bg-[100%_100%]" />

                    <div className="flex items-center justify-center w-fit font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                      KRW
                    </div>

                    <div className="[display:-webkit-box] items-center justify-center flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#afb4ca] text-[length:var(--title-20-b-font-size)] text-right tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--title-20-b-font-style)]">
                      0
                    </div>
                  </div>

                  <p className="self-stretch font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    오류메세지가 들어갑니다.
                  </p>
                </div>
              </div>

              <div className="inline-flex flex-col h-[58px] items-center justify-center px-[5px] py-0">
                <Separator
                  orientation="vertical"
                  className="flex-1 w-[1.5px] bg-[url(https://c.animaapp.com/FyEwllI9/img/vector-1381-3.svg)]"
                />

                <Button
                  size="icon"
                  className="w-[30px] h-[30px] gap-2.5 bg-[#45a6ff] rounded-[1000px] aspect-[1] hover:bg-[#45a6ff]/90"
                >
                  <img
                    className="w-4 h-4 aspect-[1]"
                    alt="Frame"
                    src="https://c.animaapp.com/FyEwllI9/img/frame-1618874110-15.svg"
                  />
                </Button>

                <Separator
                  orientation="vertical"
                  className="flex-1 w-[1.5px] bg-[url(https://c.animaapp.com/FyEwllI9/img/vector-1381-3.svg)]"
                />
              </div>

              <div className="flex-col items-start justify-center gap-1 flex w-full">
                <label className="self-stretch mt-[-1.00px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#717682] text-xs tracking-[-0.24px] leading-[15.6px]">
                  보내는 금액(수수료 별도)
                </label>

                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="items-center gap-2 flex w-full">
                    <div className="w-10 h-10 bg-[url(https://c.animaapp.com/FyEwllI9/img/country-3.svg)] bg-[100%_100%]" />

                    <div className="flex items-center justify-center w-fit font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#1c253f] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                      CNY
                    </div>

                    <div className="[display:-webkit-box] items-center justify-center flex-1 font-title-20-b font-[number:var(--title-20-b-font-weight)] text-[#afb4ca] text-[length:var(--title-20-b-font-size)] text-right tracking-[var(--title-20-b-letter-spacing)] leading-[var(--title-20-b-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--title-20-b-font-style)]">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="w-full h-px" />

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

                    <p className="flex-1 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#5e616b] text-[13px] tracking-[-0.26px] leading-[16.9px]">
                      {detail.label}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-center gap-1 flex-1 grow">
                    <p
                      className={`self-stretch ${index === 0 ? "font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]" : "[font-family:'Pretendard-Regular',Helvetica] font-normal tracking-[-0.26px] leading-[16.9px]"} text-[13px] text-right`}
                      style={{ color: detail.valueColor }}
                    >
                      {detail.value}
                    </p>

                    {detail.hasCoupon && (
                      <Button
                        variant="link"
                        className="h-auto p-0 inline-flex items-center gap-1"
                      >
                        <img
                          className="w-5 h-5 aspect-[1]"
                          alt="Frame"
                          src="https://c.animaapp.com/FyEwllI9/img/frame-1618874109-3.svg"
                        />

                        <span className="flex items-center justify-center w-fit font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] underline whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
                          쿠폰 적용
                        </span>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="h-auto min-h-[54px] w-full items-center justify-center gap-2 rounded-xl px-[26px] py-1.5 bg-[#0d56e4] hover:bg-[#0d56e4]/90">
            <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] text-center [font-style:var(--title-16-b-font-style)]">
              송금하기
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
