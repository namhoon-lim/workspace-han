import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const AdditionalNotesSection = () => {
  const [nickname, setNickname] = useState("");
  const maxLength = 100;

  return (
    <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
      <div className="flex flex-col items-start gap-1.5 flex-1">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <Label
            htmlFor="nickname-input"
            className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
          >
            닉네임
          </Label>
        </div>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col h-[42px] items-start w-full relative">
                <div className="flex items-center flex-1 w-full">
                  <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                    <Input
                      id="nickname-input"
                      type="text"
                      placeholder="닉네임을 입력해주세요(선택사항)"
                      value={nickname}
                      onChange={(e) =>
                        setNickname(e.target.value.slice(0, maxLength))
                      }
                      maxLength={maxLength}
                      className="flex-1 border-0 border-b-0 rounded-none bg-transparent px-0 py-0 h-auto text-[#acb2c1] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                    />
                  </div>
                </div>

                <div className="w-full h-0.5">
                  <div className="w-full h-px bg-[#dfe3ec]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2.5 w-full">
          <div className="flex flex-col items-start pt-2 pb-0 px-0 w-full">
            <p className="w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              {nickname.length}/{maxLength}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
