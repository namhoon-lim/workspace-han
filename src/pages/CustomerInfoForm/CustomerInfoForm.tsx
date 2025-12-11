import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formFields = [
  {
    id: "occupation",
    label: "직업",
    placeholder: "직업을 선택해주세요",
  },
  {
    id: "purpose",
    label: "거래목적",
    placeholder: "거래목적을 선택해주세요",
  },
  {
    id: "source",
    label: "자금의 원천",
    placeholder: "자금출처를 선택해주세요",
  },
];

export const CustomerInfoForm = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="2674:64093"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col pt-[22px] px-6 pb-0 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            고객확인을 위한
            <br />
            정보를 선택해주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-9 pt-[42px] pb-6 px-6 w-full">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5 w-full">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                {field.label}
              </label>

              <div className="flex flex-col w-full">
                <Select>
                  <SelectTrigger className="h-[42px] w-full border-0 border-b border-[#dfe3ec] rounded-none px-1 focus:ring-0 focus:ring-offset-0">
                    <SelectValue
                      placeholder={field.placeholder}
                      className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">옵션 1</SelectItem>
                    <SelectItem value="option2">옵션 2</SelectItem>
                    <SelectItem value="option3">옵션 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="flex flex-col items-center px-6 py-0 w-full">
        <div className="flex items-center justify-center min-h-[54px] w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
          <Button
            disabled
            className="h-auto min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl px-[26px] py-1.5"
          >
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </span>
          </Button>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
