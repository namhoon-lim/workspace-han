import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formFields = [
  {
    id: "firstName",
    label: "수취인 이름 (이름)",
    placeholder: "영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다.",
    type: "text",
  },
  {
    id: "lastName",
    label: "수취인 이름 (성)",
    placeholder: "영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다.",
    type: "text",
  },
];

export const PaymentMethodSection = () => {
  return (
    <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
      <div className="flex flex-col items-start gap-9 flex-1">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col items-start gap-1.5 w-full"
          >
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label
                      htmlFor={field.id}
                      className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                    >
                      {field.label}
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              className="[display:-webkit-box] flex-1 text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] items-center justify-center mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] border-0 border-b border-[#dfe3ec] rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto pb-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label
                    htmlFor="phoneNumber"
                    className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                  >
                    휴대전화번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <button className="inline-flex items-center gap-0.5 cursor-pointer">
                        <div className="flex w-fit text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap items-center justify-center mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] [font-style:var(--body-15-r-font-style)]">
                          +82
                        </div>

                        <ChevronDownIcon className="w-4 h-4" />
                      </button>

                      <div className="flex items-center flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            id="phoneNumber"
                            type="tel"
                            placeholder="전화번호는 8 ~ 11 자리만 가능합니다."
                            className="[display:-webkit-box] flex-1 text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] items-center justify-center mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] border-0 border-b border-[#dfe3ec] rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto pb-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
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
