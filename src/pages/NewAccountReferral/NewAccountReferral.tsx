import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const NewAccountReferral = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45911"
    >
      <BackSubHeader backTo="/newaccountpasswordu95016" />

      {/* Title Section */}
      <section className="px-6 pt-[22px] bg-white">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          추천인 초대 코드 또는
          <br />
          파트너 코드를 입력해 주세요.
        </h1>
      </section>

      {/* Referral Code Input Section */}
      <main className="flex flex-col flex-1 px-6 pt-[42px] gap-9">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="referral-code"
            className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]"
          >
            추천인 초대코드/파트너 코드 (선택)
          </Label>

          <div className="relative">
            <Input
              id="referral-code"
              type="text"
              defaultValue="Wechat"
              className="h-[42px] bg-[#f7f7f8] border-0 border-b-2 border-b-[#dfe3ec] rounded-none px-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <footer className="flex flex-col items-center px-6">
        <Button
          className="w-full min-h-[54px] h-auto bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
          asChild
        >
          <Link to="/newaccountpasswordwechatu95018">
            다음
          </Link>
        </Button>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
