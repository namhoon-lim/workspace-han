import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const issuanceMethods = [
  {
    id: "email",
    label: "이메일",
    selected: true,
  },
  {
    id: "pdf",
    label: "PDF",
    selected: false,
  },
];

export const ContentsSubsection = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [emailValue, setEmailValue] = useState("example@email.com");

  return (
    <section className="flex flex-col items-start gap-[42px] pt-[42px] pb-[30px] px-6 w-full">
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <div className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    발급방법
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2.5 w-full">
          <div className="flex items-center flex-1 rounded-[10px] overflow-hidden border border-solid border-[#dfe3ec]">
            {issuanceMethods.map((method, index) => (
              <React.Fragment key={method.id}>
                {index > 0 && <div className="w-px h-full bg-[#dfe3ec]" />}
                <Button
                  variant="ghost"
                  className={`flex-1 h-auto rounded-none px-3.5 py-2.5 gap-[11px] ${
                    selectedMethod === method.id ? "bg-[#e9f1ff]" : "bg-white"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <CheckIcon
                    className={`w-[26px] h-[26px] ${
                      selectedMethod === method.id
                        ? "text-[#0d56e4]"
                        : "text-[#dfe3ec]"
                    }`}
                  />
                  <div className="inline-flex flex-col items-center justify-center gap-2.5">
                    <div
                      className={`w-fit mt-[-1.00px] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap font-title-15-b font-[number:var(--title-15-b-font-weight)] [font-style:var(--title-15-b-font-style)] ${
                        selectedMethod === method.id
                          ? "text-[#0d56e4]"
                          : "text-[#5e616b]"
                      }`}
                    >
                      {method.label}
                    </div>
                  </div>
                </Button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-1.5 w-full">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="w-full h-[17px]">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center gap-0.5">
                <div className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                  이메일 주소
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col h-[42px] items-start w-full">
                <div className="flex flex-1 w-full items-center">
                  <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="flex items-center gap-2 flex-1">
                        <Input
                          type="email"
                          defaultValue={emailValue}
                          onChange={(e) => setEmailValue(e.target.value)}
                          className="flex-1 border-0 shadow-none p-0 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center"
                    onClick={() => setEmailValue("")}
                  >
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Clear"
                      src="https://c.animaapp.com/Oax14zk6/img/----.svg"
                    />
                  </button>
                </div>

                <div className="w-full h-0.5 bg-[#4c67f1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
