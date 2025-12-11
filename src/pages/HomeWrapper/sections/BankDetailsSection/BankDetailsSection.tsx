import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    id: "account",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-10.svg",
    label: "계좌관리",
    isActive: false,
  },
  {
    id: "history",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-11.svg",
    label: "내역관리",
    isActive: false,
  },
  {
    id: "transfer",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-12.svg",
    label: "해외송금",
    isActive: true,
  },
  {
    id: "event",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-13.svg",
    label: "이벤트",
    isActive: false,
  },
  {
    id: "my",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-19.svg",
    label: "마이",
    isActive: false,
  },
];

export const BankDetailsSection = () => {
  return (
    <nav className="flex flex-col items-start w-full bg-white">
      <div className="flex flex-col items-center w-full bg-white">
        <div className="flex items-start justify-center w-full">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="flex flex-col items-center justify-center gap-1 px-1 py-2 flex-1 h-auto hover:bg-transparent"
            >
              <img className="w-7 h-7" alt={item.label} src={item.icon} />
              <span
                className={`font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)] ${
                  item.isActive ? "text-[#1c253f]" : "text-[#a2a8bf]"
                }`}
              >
                {item.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

    </nav>
  );
};
