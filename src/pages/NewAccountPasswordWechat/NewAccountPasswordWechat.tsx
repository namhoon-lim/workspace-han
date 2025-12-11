import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Keypad } from "@/components/common/Keypad";

export const NewAccountPasswordWechat = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000003:240086"
    >
      <BackSubHeader backTo="/newaccountreferralu95017" />

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호를 설정해 주세요.
            </h1>
          </div>
        </div>
      </section>

      {/* Password Input Section */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 w-full">
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col items-start gap-2.5 relative w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full relative">
                <div className="h-[42px] flex flex-col items-start relative w-full">
                  <div className="flex-1 w-full flex items-center relative">
                    <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center relative">
                      <div className="items-center flex-1 flex relative">
                        <div className="items-center gap-2 flex-1 flex relative">
                          <Input
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Keypad Section */}
      <Keypad submitButtonColor="#b7ccf7" />
    </div>
  );
};
