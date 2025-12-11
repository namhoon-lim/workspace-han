import { BackSubHeader } from "@/components/BackSubHeader";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  {
    number: "1",
    text: "PC에서 사인게이트 웹사이트에 접속해 주세요. (https://www.signgate.com/smartpki/appFunc02.sg)",
  },
  {
    number: "2",
    text: "PC에서 [아이폰으로 인증서 내보내기] 버튼을 클릭해 주세요.",
  },
  {
    number: "3",
    text: "인증서 선택 창에서 내보낼 인증서를 선택한 후 인증서 비밀번호를 입력해 주세요.",
  },
  {
    number: "4",
    text: "아래 인증번호 12자리를 PC화면에 입력해 주세요.",
  },
  {
    number: "5",
    text: "아래 [인증서 가져오기] 버튼을 눌러 절차를 완료해 주세요.",
  },
  {
    number: "6",
    text: "인증서 비밀번호를 입력하면 인증서 가져오기가 완료됩니다.",
  },
];

export const CertificateImportGuide = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="35382:74534"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col flex-1 w-full">
        <section className="flex flex-col px-6 pt-[22px] pb-0 bg-white">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            아래 절차에 따라 인증서를
            <br />
            가져와주세요.
          </h1>
        </section>

        <section className="flex flex-col gap-[42px] px-6 pt-[42px] pb-6">
          <div className="flex flex-col w-full">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col items-start flex-1 bg-white">
                  <div className="flex flex-col min-h-[68px] items-start px-0 py-[3px] w-full">
                    <div className="flex items-start justify-around w-full">
                      <div className="flex items-start justify-around gap-3 flex-1">
                        <div className="flex items-start gap-3.5 flex-1">
                          <div className="inline-flex flex-col items-center gap-1.5">
                            <div className="relative w-8 h-8 bg-[url(https://c.animaapp.com/UrLjfz9Z/img/group-7@2x.png)] bg-[100%_100%]">
                              <div className="absolute w-[75.00%] h-[65.62%] top-[18.75%] left-[12.50%] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#5e616b] text-[length:var(--title-16-SB-font-size)] text-center tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.number}
                              </div>
                            </div>

                            {index < steps.length - 1 && (
                              <div className="flex-1 w-0.5 min-h-4 bg-[#e5e8eb] rounded-[41px]" />
                            )}
                          </div>

                          <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 flex-1">
                            <div className="flex flex-col items-start gap-1 w-full">
                              <p className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#1c253f] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                      비밀번호
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex-1 w-full flex items-center">
                      <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              type="password"
                              placeholder="인증서 비밀번호를 입력해 주세요"
                              className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
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
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button
              className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#b7ccf7] rounded-xl hover:bg-[#b7ccf7]/90"
              disabled
            >
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                인증서 가져오기
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
