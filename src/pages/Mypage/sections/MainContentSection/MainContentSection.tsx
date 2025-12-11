import { ChevronRightIcon } from "lucide-react";
import React from "react";

const menuItems = [
  {
    label: "알림",
    hasBorder: true,
  },
  {
    label: "약관",
    hasBorder: true,
  },
  {
    label: "버전정보",
    hasBorder: false,
  },
];

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-start gap-1.5 pt-8 pb-0 px-6 w-full">
      <div className="flex items-center gap-1 w-full">
        <div className="items-center gap-1 flex-1 flex">
          <h2 className="w-fit mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#85888e] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] whitespace-nowrap [font-style:var(--caption-title-13-b-font-style)]">
            설정
          </h2>
        </div>
      </div>

      <nav className="flex flex-col items-start w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex max-h-16 h-16 items-center gap-1.5 px-0 py-4 w-full ${
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
