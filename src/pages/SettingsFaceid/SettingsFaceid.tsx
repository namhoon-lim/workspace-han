import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const SettingsFaceid = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="36848:79985"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 px-6">
        <div className="pt-6 pb-8">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Face ID &amp; 지문 인증관리
          </h1>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-[#dfe3ec]">
          <span className="font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
            FACE ID &amp; 지문 인증
          </span>
          <Switch />
        </div>
      </main>

    </div>
  );
};
