import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-15.svg",
    label: "계좌관리",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-16.svg",
    label: "내역관리",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-17.svg",
    label: "해외송금",
    isActive: true,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-18.svg",
    label: "이벤트",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-19.svg",
    label: "마이",
    isActive: false,
  },
];

export const CurrencySelectionSection = () => {
  return (
    <nav className="flex flex-col items-start w-full">
      <div className="flex flex-col items-center w-full bg-white">
        <div className="flex items-start justify-center w-full">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
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
