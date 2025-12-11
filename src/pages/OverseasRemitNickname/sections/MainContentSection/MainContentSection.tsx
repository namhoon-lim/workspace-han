import { XIcon } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-start gap-9 pt-[42px] pb-[30px] px-6 w-full">
      <div className="flex flex-col items-start gap-1.5 w-full">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="w-full h-[17px]">
            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center gap-0.5">
                <Label className="mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                  닉네임
                </Label>
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
                          defaultValue="홍길동"
                          className="flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#4c67f1] rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto pb-0"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center">
                    <XIcon className="w-[18px] h-[18px] text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2.5 w-full">
          <div className="flex flex-col items-start pt-2 pb-0 px-0 w-full">
            <p className="w-full mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              6/15
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
