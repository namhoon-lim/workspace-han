import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const withdrawalReasons = [
  { id: 1, label: "아이디 변경", selected: true },
  { id: 2, label: "다른 송금서비스 이용", selected: false },
  { id: 3, label: "서비스 불만족", selected: false },
  { id: 4, label: "환율 및 혜택 불만족", selected: false },
  { id: 5, label: "고객 응대 불만족", selected: false },
  { id: 6, label: "불안정한 시스템", selected: false },
  { id: 7, label: "한패스 이용 불가 (한도 초과)", selected: false },
  { id: 8, label: "한패스 이용 불가 (해외 이민 등)", selected: false },
  { id: 9, label: "기타", selected: false },
];

export const Settings = () => {
  const [selectedReason, setSelectedReason] = useState(1);

  return (
    <div
      className="flex flex-col items-start relative bg-white min-h-screen"
      data-model-id="35166:94619"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col items-start gap-6 px-6 pt-6 pb-0 relative self-stretch w-full flex-1">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            회원 탈퇴
          </h1>
          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            탈퇴 이유를 선택해주세요. 앞으로 개선하여 더 좋은 서비스를
            제공하겠습니다.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full">
          {withdrawalReasons.map((reason) => (
            <button
              key={reason.id}
              onClick={() => setSelectedReason(reason.id)}
              className={`flex min-h-[54px] items-center px-4 py-4 relative self-stretch w-full bg-white rounded-lg overflow-hidden border-2 ${
                selectedReason === reason.id
                  ? "border-[#4c67f1] shadow-[0px_4px_14px_-4px_#0c0c0d26]"
                  : "border-[#dfe3ec]"
              }`}
            >
              <div className="flex items-center justify-center relative flex-1">
                <span
                  className={`font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] ${
                    selectedReason === reason.id
                      ? "text-[#0d56e4]"
                      : "text-[#5e616b]"
                  }`}
                >
                  {reason.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="flex flex-col items-center px-6 pb-6 pt-4 relative self-stretch w-full">
        <Button className="h-auto min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            탈퇴하기
          </span>
        </Button>
      </footer>
    </div>
  );
};
