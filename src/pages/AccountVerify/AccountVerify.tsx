import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

export const AccountVerify = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen items-start relative bg-white"
    >
      <div className="flex flex-col items-center gap-9 px-6 py-0 relative flex-1 self-stretch w-full">
        <section className="flex flex-col items-start gap-9 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              1원 입금 확인
            </h1>

            <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#3d4046] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              입력하신 계좌로 1원을 보냈습니다.
              <br />
              보낸사람 HA 뒤 숫자 3자리를 15분 안에 입력해 주세요.
            </p>
          </div>

          <Card className="w-full border-0 shadow-none">
            <CardContent className="flex flex-col items-start gap-5 p-0">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  인증번호
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2 pl-1 pr-0 py-0 relative flex-1 grow">
                      <Input
                        className="flex-1 border-0 p-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="숫자 3자리 입력"
                      />
                    </div>

                    <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#4c67f1] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] whitespace-nowrap [font-style:var(--title-16-SB-font-style)]">
                        15:00
                      </div>
                    </div>
                  </div>

                  <div className="relative self-stretch w-full h-0.5 bg-[#4c67f1]" />
                </div>
              </div>

              <Button
                variant="ghost"
                className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
              >
                <span className="relative w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] text-center tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap underline [font-style:var(--body-14-m-font-style)]">
                  1원이 안 왔어요
                </span>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="flex flex-col items-center gap-2.5 px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <Button className="all-[unset] box-border flex h-[54px] items-center justify-center gap-2 px-2 py-1 relative self-stretch w-full bg-[#0d56e4] rounded-xl">
          <span className="relative flex-1 mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            확인
          </span>
        </Button>
      </footer>

      <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
      </div>
    </Layout>
  );
};
