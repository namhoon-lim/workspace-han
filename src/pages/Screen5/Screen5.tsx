import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const countries = [
  {
    flag: "https://c.animaapp.com/MgOgZxnr/img/country.svg",
    name: "대한민국",
    code: "KR +82",
  },
  {
    flag: "https://c.animaapp.com/MgOgZxnr/img/country-1.svg",
    name: "중국",
    code: "CN +86",
  },
];

export const Screen5 = () => {
  return (
    <div
      className="w-full min-w-[375px] min-h-[800px] relative flex flex-col"
      data-model-id="36848:80333"
    >
      <div className="flex-1 flex items-end bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col items-start gap-1.5 pt-0 pb-6 px-6 w-full bg-white rounded-[30px_30px_0px_0px] overflow-hidden">
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col items-end w-full">
                <div className="w-full h-[22px]" />

                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[18px] h-[18px] p-0 hover:bg-transparent"
                >
                  <XIcon className="w-[18px] h-[18px] text-gray-400" />
                </Button>
              </div>

              <div className="flex flex-col items-center w-full">
                <div className="flex items-start gap-2 w-full">
                  <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                    <div className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                      국가번호 선택
                    </div>
                  </div>
                </div>

                <div className="w-full max-h-[26px] h-[26px] opacity-30" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-[18px] w-full">
              {countries.map((country, index) => (
                <button
                  key={index}
                  className="w-full h-8 flex items-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 flex-1">
                    <div className="flex w-[30px] items-center justify-center">
                      <div
                        className="w-[30px] h-[30px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${country.flag})` }}
                      />
                    </div>

                    <div className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] whitespace-nowrap [font-style:var(--body-16-r-font-style)]">
                      {country.name}
                    </div>

                    <div className="flex items-center justify-center font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                      {country.code}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 w-full bg-white">
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start absolute top-0 left-0">
        <div className="flex flex-col items-start w-full">
          <div className="gap-2 flex flex-col items-start w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/MgOgZxnr/img/mini-7@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
