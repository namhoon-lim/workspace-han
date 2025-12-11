import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const receiveCountryOptions = [{ value: "china", label: "중국/CNR" }];

const receiveMethodOptions = [{ value: "wechat", label: "WeChat" }];

export const ReceiveCountrySection = () => {
  return (
    <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
      <div className="flex flex-col items-start gap-9 flex-1">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label
              htmlFor="receive-country"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              Receive Country
            </Label>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <Select defaultValue="china">
              <SelectTrigger
                id="receive-country"
                className="w-full h-[42px] bg-[#f7f7f8] border-0 border-b-2 border-b-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus:ring-0 focus:ring-offset-0"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {receiveCountryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label
              htmlFor="receive-method"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              송금받는 방법
            </Label>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <Select defaultValue="wechat">
              <SelectTrigger
                id="receive-method"
                className="w-full h-[42px] bg-[#f7f7f8] border-0 border-b-2 border-b-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus:ring-0 focus:ring-offset-0"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {receiveMethodOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};
