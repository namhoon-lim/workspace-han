import { ChevronRightIcon } from "lucide-react";
import React from "react";

const settingsItems = [
  { label: "알림", hasBorder: true },
  { label: "로그인 비밀번호 변경", hasBorder: true },
  { label: "6자리 비밀번호(PIN) 변경", hasBorder: true },
  { label: "휴대전화번호 변경", hasBorder: true },
  { label: "약관", hasBorder: true },
  { label: "버전정보", hasBorder: true },
  { label: "회원탈퇴", hasBorder: false },
];

export const DivSubsection = () => {
  return (
    <section className="flex flex-col items-start gap-1.5 pt-8 pb-0 px-6 self-stretch w-full flex-[0_0_auto]">
      <header className="flex items-center gap-1 self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-1 flex-1 grow">
          <h2 className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
            설정
          </h2>
        </div>
      </header>

      <nav className="flex flex-col items-start self-stretch w-full flex-[0_0_auto]">
        {settingsItems.map((item, index) => (
          <button
            key={index}
            className={`flex max-h-16 h-16 items-center gap-1.5 px-0 py-4 self-stretch w-full ${
              item.hasBorder
                ? "border-b [border-bottom-style:solid] border-[#dfe3ec]"
                : ""
            } hover:bg-gray-50 transition-colors cursor-pointer`}
          >
            <span className="flex-1 text-left font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
              {item.label}
            </span>
            <ChevronRightIcon className="w-4 h-4 text-[#0b0c0e]" />
          </button>
        ))}
      </nav>
    </section>
  );
};
