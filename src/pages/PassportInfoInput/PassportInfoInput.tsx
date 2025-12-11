import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const formFields = [
  {
    label: "여권번호",
    value: "M12345667",
  },
  {
    label: "여권 만료일",
    value: "1994/01/22",
  },
];

export const PassportInfoInput = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35213:88245"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 bg-white">
        <div className="flex flex-col px-6 pt-[22px]">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            <span className="text-[#0b0c0e]">
              계좌 실명 확인에 실패했습니다.
              <br />
              계좌등록을 위해{" "}
            </span>
            <span className="text-[#0d56e4]">
              신분증 정보를 다시 입력해 주세요.
            </span>
          </h1>
        </div>

        <div className="flex flex-col flex-1 gap-9 px-6 pt-[42px] pb-5">
          {formFields.map((field, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                {field.label}
              </label>

              <div className="flex flex-col">
                <div className="flex items-center h-[42px]">
                  <div className="flex-1 pl-1">
                    <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                      {field.value}
                    </div>
                  </div>
                </div>
                <div className="h-0.5">
                  <div className="h-px bg-[#dfe3ec]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex flex-col px-6 bg-white">
        <div className="flex flex-col gap-6">
          <Button className="min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] h-auto shadow-[0px_-20px_20px_#ffffff]">
            다음
          </Button>
        </div>

        <div className="h-4" />

        <div className="flex justify-center py-2"></div>
      </footer>
    </div>
  );
};
