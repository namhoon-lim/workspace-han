import { CircleIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const passwordRequirements = [
  { id: 1, text: "10자리 이상 입력" },
  { id: 2, text: "문자, 숫자 포함" },
  { id: 3, text: "연속되거나, 4자리 이상 동일한 문자 입력 불가" },
  { id: 4, text: "로그인 ID 입력 불가" },
];

export const PasswordReset = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000003:240087"
    >
      <BackSubHeader backTo="/photoconfirmationu95019" />

      {/* Title Section */}
      <section className="flex flex-col items-start bg-white relative w-full">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="relative w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              비밀번호를 재설정해 주세요.
            </h1>
          </div>
        </div>
      </section>

      {/* Password Input Section */}
      <main className="flex flex-col items-start gap-9 pt-[42px] pb-0 px-6 relative flex-1 w-full">
        {/* New Password Field */}
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <Label className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            새 비밀번호
          </Label>
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full relative">
              <div className="h-[42px] flex flex-col items-start relative w-full">
                <div className="flex-1 w-full flex items-center relative">
                  <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center relative">
                    <div className="items-center flex-1 flex relative">
                      <div className="items-center gap-2 flex-1 flex relative">
                        <Input
                          type="password"
                          placeholder="비밀번호를 입력해 주세요."
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

        {/* Confirm Password Field */}
        <div className="flex flex-col items-start gap-1.5 relative w-full">
          <Label className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#acb2c1] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
            새 비밀번호 확인
          </Label>
          <div className="flex flex-col items-start gap-2.5 relative w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full relative">
              <div className="h-[42px] flex flex-col items-start relative w-full">
                <div className="flex-1 w-full flex items-center relative">
                  <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center relative">
                    <div className="items-center flex-1 flex relative">
                      <div className="items-center gap-2 flex-1 flex relative">
                        <Input
                          type="password"
                          placeholder="비밀번호를 입력해 주세요."
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

        {/* Password Requirements */}
        <div className="flex flex-col items-start gap-2 relative w-full">
          {passwordRequirements.map((requirement) => (
            <div
              key={requirement.id}
              className="flex items-center gap-1.5 relative w-full"
            >
              <CircleIcon className="w-1.5 h-1.5 text-[#acb2c1] fill-[#acb2c1]" />
              <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#acb2c1] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                {requirement.text}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Button */}
      <section className="flex flex-col justify-end gap-2.5 pb-[34px] w-full items-center relative">
        <div className="flex flex-col items-start relative w-full">
          <div className="min-h-[54px] items-center justify-center gap-2 px-6 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex relative w-full">
            <div className="min-h-[54px] flex-1 grow flex items-start relative">
              <Button
                className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 grow bg-[#b7ccf7] hover:bg-[#a5bce8] rounded-xl h-auto"
                asChild
              >
                <Link to="/selfiecaptureu95021">
                  <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                    다음
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
