import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const OverseasremitWrapper = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="2674:66147"
    >
      <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-4 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch w-full h-[22px]" />

              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:bg-transparent"
              >
                <XIcon className="w-[18px] h-[18px] text-gray-400" />
              </Button>
            </div>

            <div className="flex-col flex-[0_0_auto] flex items-center relative self-stretch w-full">
              <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex relative">
                  <div className="relative flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#e81f1f] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    FRAUD WARNING
                  </div>
                </div>
              </div>

              <div className="relative self-stretch w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#1c253f] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                사이버 피싱(보이스 피싱 및 메신저 피싱 등)으로 인한 피해가 급증하고
                있습니다.
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#1c253f] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                본인의 금융거래정보(비밀번호, 인증서)를 타인에게 알려주거나 유출되지
                않도록 주의해 주시기 바랍니다.
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#1c253f] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                만약, 피해가 발생한 경우에는 한패스 고객상담센터{" "}
                <span className="font-title-14-SB font-[number:var(--title-14-SB-font-weight)] text-[length:var(--title-14-SB-font-size)] tracking-[var(--title-14-SB-letter-spacing)] leading-[var(--title-14-SB-line-height)] [font-style:var(--title-14-SB-font-style)]">
                  (1522-0767)
                </span>{" "}
                및 경찰청{" "}
                <span className="font-title-14-SB font-[number:var(--title-14-SB-font-weight)] text-[length:var(--title-14-SB-font-size)] tracking-[var(--title-14-SB-letter-spacing)] leading-[var(--title-14-SB-line-height)] [font-style:var(--title-14-SB-font-style)]">
                  (112)
                </span>
                , 한국인터넷진흥원{" "}
                <span className="font-title-14-SB font-[number:var(--title-14-SB-font-weight)] text-[length:var(--title-14-SB-font-size)] tracking-[var(--title-14-SB-letter-spacing)] leading-[var(--title-14-SB-line-height)] [font-style:var(--title-14-SB-font-style)]">
                  (118)
                </span>
                에 신속하게 상담 받으시기 바랍니다.
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#1c253f] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                은행연합회 보이스피싱지킴이 확인{" "}
                <a
                  href="https://phishing-keeper.fss.or.kr"
                  className="text-[#003fbb] underline"
                >
                  https://phishing-keeper.fss.or.kr
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-6 pb-0 px-0 w-full">
            <Button className="w-full h-14 bg-[#003fbb] hover:bg-[#002d8a] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              확인
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex flex-col w-full items-center gap-2.5 px-[105px] py-2 relative flex-[0_0_auto] bg-white">
          </div>
        </div>
      </div>

      <header className="flex flex-col w-full items-start absolute top-0 left-0">
        <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col gap-2 self-stretch w-full flex-[0_0_auto] flex items-start relative">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center relative self-stretch w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/Fk3yL3l2/img/mini-7@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
