import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contactsData = [
  {
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
    countryFlag: "https://c.animaapp.com/Fk3yL3l2/img/country.svg",
  },
  {
    name: "호빵",
    phone: "+9774846467678",
    bankInfo: "계좌이체 Excel Dev Bank ltd",
    countryFlag: "https://c.animaapp.com/Fk3yL3l2/img/country-1.svg",
  },
  {
    name: "호빵",
    phone: "+9774846467678",
    bankInfo: "계좌이체 Excel Dev Bank ltd",
    countryFlag: "https://c.animaapp.com/Fk3yL3l2/img/country-2.svg",
  },
];

export const ContactListSection = () => {
  return (
    <section className="flex flex-col items-end gap-4 pt-[22px] pb-4 px-6 w-full">
      {contactsData.map((contact, index) => (
        <Card
          key={index}
          className="w-full bg-white rounded-2xl overflow-hidden border border-solid border-[#dfe3ec]"
        >
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-1.5 pt-5 pb-4 px-5">
              <div className="flex items-center gap-1.5 w-full">
                <div
                  className="w-[30px] h-[30px] bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${contact.countryFlag})` }}
                />

                <div className="flex items-center gap-2.5 flex-1">
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex flex-wrap items-center gap-1 w-full">
                        <div className="font-body-14-SB font-[number:var(--body-14-SB-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-SB-font-size)] tracking-[var(--body-14-SB-letter-spacing)] leading-[var(--body-14-SB-line-height)] whitespace-nowrap [font-style:var(--body-14-SB-font-style)]">
                          {contact.name}
                        </div>

                        <div className="w-5 h-5 relative flex-shrink-0">
                          <div className="absolute w-[64.31%] h-[64.08%] top-[17.96%] left-[17.84%]">
                            <img
                              className="absolute w-[59.60%] h-0 top-[94.15%] left-[34.57%]"
                              alt="Vector"
                              src="https://c.animaapp.com/Fk3yL3l2/img/vector-2.svg"
                            />
                            <img
                              className="absolute w-[83.26%] h-[92.60%] top-0 left-0"
                              alt="Subtract"
                              src="https://c.animaapp.com/Fk3yL3l2/img/subtract-2.svg"
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
                  {contact.phone}
                </div>

                <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {contact.bankInfo}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              <Separator className="w-full" />

              <div className="flex items-center w-full h-[60px] bg-white border-t border-solid border-[#e9e9e9]">
                <Button
                  variant="ghost"
                  className="h-[60px] flex-1 rounded-none p-2.5 hover:bg-transparent"
                >
                  <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    삭제
                  </span>
                </Button>

                <Separator orientation="vertical" className="h-10" />

                <Button
                  variant="ghost"
                  className="h-[60px] flex-1 rounded-none p-2.5 hover:bg-transparent"
                >
                  <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    수정
                  </span>
                </Button>

                <Separator orientation="vertical" className="h-10" />

                <Button
                  variant="ghost"
                  className="h-[60px] flex-1 rounded-none p-2.5 hover:bg-transparent"
                >
                  <span className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0d56e4] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    송금하기
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec]">
        <CardContent className="p-0">
          <Button
            variant="ghost"
            className="flex items-center gap-1.5 px-4 py-6 w-full h-auto hover:bg-transparent"
          >
            <div className="flex flex-col items-center justify-center gap-2 flex-1">
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/Fk3yL3l2/img/frame-1597887207-1.svg"
              />

              <div className="inline-flex flex-col items-start gap-1">
                <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  대상자 등록
                </span>
              </div>
            </div>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
