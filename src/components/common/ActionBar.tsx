import React from "react";
import { Button } from "../ui/button";

const defaultNavigationItems = [
  {
    id: "account",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-10.svg",
    activeIcon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-10.svg",
    label: "계좌관리",
  },
  {
    id: "history",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-11.svg",
    activeIcon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-11.svg",
    label: "내역관리",
  },
  {
    id: "transfer",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-12.svg",
    activeIcon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-12.svg",
    label: "해외송금",
  },
  {
    id: "event",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-13.svg",
    activeIcon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-13.svg",
    label: "이벤트",
  },
  {
    id: "my",
    icon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-19.svg",
    activeIcon: "https://c.animaapp.com/FyEwllI9/img/element-main-bnb-icon-19.svg",
    label: "마이",
  },
];

interface ActionBarProps {
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  activeId = "transfer",
  onItemClick,
}) => {
  const handleItemClick = (id: string) => {
    onItemClick?.(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="flex flex-col items-center w-full bg-white">
        <div className="flex items-start justify-center w-full">
          {defaultNavigationItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="flex flex-col items-center justify-center gap-1 px-1 py-2 flex-1 h-auto hover:bg-transparent"
                onClick={() => handleItemClick(item.id)}
              >
                <img
                  className="w-7 h-7"
                  alt={item.label}
                  src={isActive ? item.activeIcon : item.icon}
                />
                <span
                  className={`font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)] ${
                    isActive ? "text-[#1c253f]" : "text-[#a2a8bf]"
                  }`}
                >
                  {item.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ActionBar;
