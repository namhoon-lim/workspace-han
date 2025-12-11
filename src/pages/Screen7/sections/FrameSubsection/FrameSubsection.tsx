import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const phoneFields = [
  {
    id: "current",
    label: "현재 휴대전화번호",
    countryCode: "+62",
    phoneNumber: "01028532326",
    hasDropdown: true,
    isActive: false,
  },
  {
    id: "new",
    label: "새 휴대전화번호",
    countryCode: "+82",
    phoneNumber: "01028532326",
    hasDropdown: false,
    isActive: false,
  },
];

export const FrameSubsection = () => {
  return (
    <section className="flex flex-col items-center justify-end flex-1 self-stretch w-full grow">
      <header className="flex flex-col items-start self-stretch w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 self-stretch w-full">
          <div className="flex flex-col items-start self-stretch w-full">
            <h1 className="self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              휴대전화번호 변경
            </h1>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-end gap-9 pt-[42px] pb-[30px] px-6 self-stretch w-full">
        {phoneFields.map((field) => (
          <div
            key={field.id}
            className="flex-col items-start gap-1.5 flex self-stretch w-full"
          >
            <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
              <div className="self-stretch w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                      {field.label}
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 self-stretch w-full">
                  <div className="flex flex-col h-[42px] items-start self-stretch w-full">
                    <div className="flex items-center flex-1 self-stretch w-full grow">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1 self-stretch grow">
                        <div className="inline-flex items-center gap-0.5">
                          <div className="flex items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                            {field.countryCode}
                          </div>

                          {field.hasDropdown && (
                            <ChevronDownIcon className="w-4 h-4" />
                          )}
                        </div>

                        <div className="flex items-center gap-2.5 flex-1 grow">
                          <div className="flex items-center gap-2 flex-1 grow">
                            <div className="flex-1 [display:-webkit-box] items-center justify-center mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                              {field.phoneNumber}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="self-stretch w-full h-0.5">
                      <div className="absolute w-full left-0 bottom-0 h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex-col items-start gap-1.5 flex self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <div className="self-stretch w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    인증 번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 self-stretch w-full">
                <div className="flex flex-col h-[42px] items-start self-stretch w-full">
                  <div className="flex items-center flex-1 self-stretch w-full grow">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1 self-stretch grow">
                      <div className="flex items-center gap-2.5 flex-1 grow">
                        <div className="flex items-center gap-2 flex-1 grow">
                          <div className="w-fit whitespace-nowrap [display:-webkit-box] items-center justify-center mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                            1234
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0">
                      <img
                        className="w-[18px] h-[18px]"
                        alt="Clear"
                        src="https://c.animaapp.com/MgOgZxnr/img/----.svg"
                      />
                    </div>

                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap w-fit [font-style:var(--caption-title-13-r-font-style)]">
                      02:49
                    </div>
                  </div>

                  <div className="self-stretch w-full h-0.5 bg-[#4c67f1]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col items-end gap-2.5 self-stretch w-full flex">
            <div className="flex flex-col items-start self-stretch w-full">
              <div className="flex items-center justify-end gap-2.5 self-stretch w-full">
                <div className="flex items-center justify-end flex-1 grow">
                  <div className="flex flex-col items-end justify-center gap-2.5 flex-1 self-stretch grow rounded-lg">
                    <Button
                      variant="link"
                      className="h-auto p-0 inline-flex items-center justify-center gap-0.5"
                    >
                      <span className="flex items-center justify-center w-fit mt-[-1.00px] font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline whitespace-nowrap [font-style:var(--title-15-SB-font-style)]">
                        다시받기
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
