import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

export const NewAccountPasswordFilled = () => {
  return (
    <div className="flex flex-col w-full bg-white" data-model-id="40000001:41131">
      <BackSubHeader backTo="/newaccountpasswordu95016" />

      {/* Title Section */}
      <section className="flex flex-col w-full items-start gap-3 pt-[22px] pb-0 px-6 bg-white">
        <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          비밀번호를 설정해 주세요.
        </h1>
      </section>

      {/* Password Input Section */}
      <section className="flex flex-col items-start gap-6 pt-9 pb-0 px-6 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                    비밀번호
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Password Dots */}
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
              <div className="flex flex-col h-[42px] items-start w-full">
                <div className="flex flex-1 w-full items-center">
                  <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                    <div className="flex items-center flex-1">
                      <div className="flex items-center gap-2 flex-1">
                        <div className="flex items-center gap-1.5">
                          {/* 10 Password dots */}
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-2.5 h-2.5 bg-[#0b0c0e] rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-auto w-auto p-0 hover:bg-transparent"
                    >
                      <XIcon className="w-[18px] h-[18px] text-[#85888e]" />
                    </Button>
                  </div>
                </div>

                <div className="w-full h-0.5">
                  <div className="w-full h-[2px] bg-[#4c67f1]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="flex flex-col items-start gap-3 w-full">
          {/* Requirement 1 - Valid */}
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex w-[18px] h-[18px] items-center justify-center rounded-full bg-[#0d56e4]">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
            <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              8자 이상
            </span>
          </div>

          {/* Requirement 2 - Valid */}
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex w-[18px] h-[18px] items-center justify-center rounded-full bg-[#0d56e4]">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
            <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              영문 대/소문자, 숫자 포함
            </span>
          </div>

          {/* Requirement 3 - Invalid */}
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex w-[18px] h-[18px] items-center justify-center rounded-full bg-[#f10000]">
              <XIcon className="w-3 h-3 text-white" />
            </div>
            <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              연속 3자 이상 사용 불가
            </span>
          </div>

          {/* Requirement 4 - Neutral */}
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex w-[18px] h-[18px] items-center justify-center rounded-full border border-[#717682]">
              <CheckIcon className="w-3 h-3 text-[#717682]" />
            </div>
            <span className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              로그인 아이디 포함 불가
            </span>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col items-start w-full mt-auto">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] items-start flex-1 grow flex">
            <Button
              className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#dfe3ec] hover:bg-[#c7ccd6] rounded-none h-auto"
              asChild
            >
              <Link to="/newaccountreferralu95017">
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#85888e] text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
