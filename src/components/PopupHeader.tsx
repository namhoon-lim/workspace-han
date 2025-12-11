import React from "react";
import { Button } from "./ui/button";

interface PopupHeaderProps {
  onMoreClick?: () => void;
  onCloseClick?: () => void;
  className?: string;
}

export const PopupHeader = ({
  onMoreClick,
  onCloseClick,
  className = "",
}: PopupHeaderProps) => {
  return (
    <header className={`flex flex-col w-full items-start absolute top-0 left-0 z-50 ${className}`}>
      <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex h-[54px] items-center justify-end px-5 py-0 relative self-stretch w-full">
            <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-2 py-1 bg-white/80">
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 p-0"
                onClick={onMoreClick}
              >
                <img src="/img/header/more.png" alt="더보기" className="w-5 h-auto object-contain" />
              </Button>
              <div className="w-px h-4 bg-gray-300" />
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 p-0"
                onClick={onCloseClick}
              >
                <img src="/img/header/close.png" alt="닫기" className="w-5 h-5 object-contain" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
