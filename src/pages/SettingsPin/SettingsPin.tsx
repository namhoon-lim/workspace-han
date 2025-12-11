import { InfoIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const verificationSteps = [
  {
    number: "1",
    title: "휴대폰 SMS 인증",
    hasConnector: true,
  },
  {
    number: "2",
    title: "1원 계좌 인증",
    hasConnector: false,
  },
];

export const SettingsPin = () => {
  return (
    <div
      className="overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[375px] min-h-[800px] flex flex-col justify-between"
      data-model-id="36848:79114"
    >
      <header className="flex flex-col w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/kp7cm7rf/img/mini-6@2x.png"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col w-full">
        <Card className="gap-1.5 pt-0 pb-3.5 px-6 rounded-[30px_30px_0px_0px] flex flex-col items-center w-full bg-white border-0">
          <CardContent className="flex-col w-full flex items-start p-0">
            <div className="flex-col items-end flex w-full">
              <div className="w-full h-[22px]" />
              <Button
                variant="ghost"
                size="icon"
                className="w-[18px] h-[18px] p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </Button>
            </div>

            <div className="flex-col items-center flex w-full">
              <div className="flex items-start gap-2 w-full">
                <div className="flex items-center gap-1 px-0 py-1.5 flex-1">
                  <h1 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    6자리 비밀번호(PIN) 변경
                  </h1>
                </div>
              </div>

              <div className="w-full h-[26px] opacity-30" />
            </div>
          </CardContent>

          <CardContent className="flex flex-col items-start gap-6 w-full p-0">
            <Alert className="items-center gap-1 px-3 py-3.5 bg-[#e9f1ff] rounded-xl border-0">
              <InfoIcon className="w-5 h-5 text-[#0d56e4]" />
              <AlertDescription className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#0d56e4] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] flex-1 [font-style:var(--body-15-r-font-style)]">
                인증 후 비밀번호를 다시 설정할 수 있어요.
              </AlertDescription>
            </Alert>

            <div className="flex flex-col items-start w-full">
              {verificationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start flex-1 bg-white">
                    <div className="flex flex-col min-h-[68px] items-start px-0 py-[3px] w-full">
                      <div className="flex items-start justify-around w-full">
                        <div className="flex items-start justify-around gap-3 flex-1">
                          <div className="flex items-start gap-3.5 flex-1">
                            <div className="inline-flex flex-col items-center gap-1.5">
                              <div className="relative w-8 h-8 bg-[url(https://c.animaapp.com/kp7cm7rf/img/group-1@2x.png)] bg-[100%_100%]">
                                <div className="absolute w-[75.00%] h-[65.62%] top-[18.75%] left-[12.50%] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#5e616b] text-[length:var(--title-16-SB-font-size)] text-center tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                  {step.number}
                                </div>
                              </div>

                              {step.hasConnector && (
                                <div className="flex-1 w-0.5 min-h-4 mb-[-13.00px] bg-[#e5e8eb] rounded-[41px]" />
                              )}
                            </div>

                            <div className="flex flex-col items-start gap-3 pt-1.5 pb-3.5 px-0 flex-1">
                              <div className="flex flex-col items-start gap-1 w-full">
                                <div className="w-full font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#1c253f] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                                  {step.title}
                                </div>
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
          </CardContent>
        </Card>

        <footer className="justify-end px-6 py-0 flex flex-col items-center w-full bg-white">
          <div className="flex min-h-[54px] items-center justify-center gap-2 w-full rounded-xl">
            <div className="min-h-[54px] flex-1 flex items-start">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
                <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] flex-1 [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>

          <div className="w-[360px] h-4 ml-[-16.50px] mr-[-16.50px]" />

          <div className="flex flex-col w-[375px] items-center gap-2.5 px-[105px] py-2 ml-[-24.00px] mr-[-24.00px] bg-white">
          </div>
        </footer>
      </div>
    </div>
  );
};
