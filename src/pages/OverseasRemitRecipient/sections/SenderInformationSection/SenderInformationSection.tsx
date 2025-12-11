import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formFields = [
  {
    id: "transfer-purpose",
    label: "송금 목적",
    placeholder: "선택해주세요",
  },
  {
    id: "fund-source",
    label: "자금 원천",
    placeholder: "선택해주세요",
  },
];

export const SenderInformationSection = () => {
  return (
    <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
      <div className="flex flex-col items-start gap-9 flex-1">
        {formFields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col items-start gap-1.5 w-full"
          >
            <Label
              htmlFor={field.id}
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              {field.label}
            </Label>
            <Select>
              <SelectTrigger
                id={field.id}
                className="w-full h-[42px] border-0 border-b border-[#dfe3ec] rounded-none px-1 bg-transparent hover:bg-transparent focus:ring-0 focus:ring-offset-0 [&>span]:text-[#acb2c1] [&>span]:font-body-20-r [&>span]:font-[number:var(--body-20-r-font-weight)] [&>span]:text-[length:var(--body-20-r-font-size)] [&>span]:tracking-[var(--body-20-r-letter-spacing)] [&>span]:leading-[var(--body-20-r-line-height)] [&>span]:[font-style:var(--body-20-r-font-style)]"
              >
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
                <SelectItem value="option3">옵션 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </section>
  );
};
