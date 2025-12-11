import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForeignIdInput = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34892:262353"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start bg-white w-full pt-[22px] pb-0 px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#0b0c0e]">
              계좌 실명 확인에 실패했습니다. <br />
              계좌등록을 위해{" "}
            </span>
            <span className="text-[#0d56e4]">
              신분증 정보를 다시 입력해 주세요.
            </span>
          </h1>
        </section>

        <section className="flex flex-col flex-1 items-start gap-9 pt-[42px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <Label
              htmlFor="foreign-registration-number"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              외국인등록번호
            </Label>

            <div className="flex flex-col w-full">
              <Input
                id="foreign-registration-number"
                placeholder="외국인등록번호를 입력해 주세요"
                className="h-[42px] border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <Label
              htmlFor="issue-date"
              className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
            >
              외국인등록번호 발급일
            </Label>

            <div className="flex flex-col w-full">
              <Input
                id="issue-date"
                placeholder="YYYY/MM/DD"
                className="h-[42px] border-0 border-b border-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center px-6 py-0 w-full">
        <Button
          disabled
          className="min-h-[54px] w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] h-auto"
        >
          다음
        </Button>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
