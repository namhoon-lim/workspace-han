import { BackSubHeader } from "@/components/BackSubHeader";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transferHistoryData = [
  {
    id: 1,
    countryFlag: "https://c.animaapp.com/vuYaFJZH/img/country.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankDetails: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 2,
    countryFlag: "https://c.animaapp.com/vuYaFJZH/img/country-1.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankDetails: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 3,
    countryFlag: "https://c.animaapp.com/vuYaFJZH/img/country-2.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankDetails: "계좌 이체 EXIMA Bank 123456",
  },
];

export const OverseasRemitHistory = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="34822:541724"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col items-start w-full flex-1">
        <section className="flex flex-col items-start gap-[22px] w-full">
          <div className="flex flex-col bg-white items-start w-full">
            <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
              <div className="flex flex-col items-start w-full">
                <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  즐겨찾는 내역을 관리해보세요
                </h1>
              </div>
            </div>
          </div>

          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
              <TabsTrigger
                value="favorites"
                className="flex-1 min-h-10 px-3 py-1 data-[state=active]:border-b-4 data-[state=active]:border-[#003fbb] data-[state=inactive]:border-b data-[state=inactive]:border-[#dfe3ec] rounded-none data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=active]:shadow-none"
              >
                <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] text-[#a2a8bf]">
                  즐겨찾기
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="recent"
                className="flex-1 min-h-10 px-3 py-1 data-[state=active]:border-b-4 data-[state=active]:border-[#003fbb] data-[state=inactive]:border-b data-[state=inactive]:border-[#dfe3ec] rounded-none data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=active]:shadow-none"
              >
                <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#003fbb] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  최근 송금내역
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </section>

        <section className="flex flex-col items-end gap-2.5 pt-[22px] pb-4 px-6 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            {transferHistoryData.map((item) => (
              <Card
                key={item.id}
                className="w-full bg-white rounded-2xl overflow-hidden border border-solid border-[#dfe3ec]"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-start gap-1.5 pt-5 pb-4 px-5 w-full">
                    <div className="flex items-center gap-1.5 w-full">
                      <div
                        className="w-[30px] h-[30px] bg-[100%_100%]"
                        style={{ backgroundImage: `url(${item.countryFlag})` }}
                      />
                      <div className="flex items-center gap-2.5 flex-1">
                        <div className="flex flex-col items-start gap-1.5 flex-1">
                          <div className="flex flex-col items-start w-full">
                            <div className="flex flex-wrap items-center gap-[4px_4px] w-full">
                              <div className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] whitespace-nowrap [font-style:var(--body-14-SB-font-style)]">
                                {item.name}
                              </div>
                              <div className="w-5 h-5">
                                <div className="relative w-[64.31%] h-[64.08%] top-[17.96%] left-[17.84%]">
                                  <img
                                    className="absolute w-[59.60%] h-0 top-[94.15%] left-[34.57%]"
                                    alt="Vector"
                                    src="https://c.animaapp.com/vuYaFJZH/img/vector-4.svg"
                                  />
                                  <img
                                    className="absolute w-[83.26%] h-[92.60%] top-0 left-0"
                                    alt="Subtract"
                                    src="https://c.animaapp.com/vuYaFJZH/img/subtract-2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-0.5 w-full">
                      <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0b0c0e] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {item.phone}
                      </div>
                      <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        {item.bankDetails}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center w-full">
                    <img
                      className="w-[327px] h-px object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/vuYaFJZH/img/vector-1236-2.svg"
                    />
                    <div className="flex flex-col items-start w-full bg-white border-t border-solid border-[#e9e9e9]">
                      <div className="h-[60px] w-full flex items-center">
                        <div className="h-[60px] flex items-center flex-1 bg-white">
                          <Button
                            variant="ghost"
                            className="h-[60px] flex-1 justify-center p-2.5 rounded-none hover:bg-transparent"
                          >
                            <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                              즐겨찾기 등록하기
                            </span>
                          </Button>
                        </div>
                        <img
                          className="w-px h-10"
                          alt="Vector"
                          src="https://c.animaapp.com/vuYaFJZH/img/vector-1132-2.svg"
                        />
                        <div className="h-[60px] flex items-center flex-1 bg-white">
                          <Button
                            variant="ghost"
                            className="h-[60px] flex-1 justify-center p-2.5 rounded-none hover:bg-transparent"
                          >
                            <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0d56e4] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                              송금하기
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
