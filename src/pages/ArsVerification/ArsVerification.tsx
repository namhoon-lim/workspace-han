import { ChevronDownIcon, CircleIcon, MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export const ArsVerification = () => {
  const statusBarIcons = [
    {
      type: "signal",
      src: "https://c.animaapp.com/dojq12ez/img/icon---mobile-signal-5.svg",
      className: "w-[18px] h-3",
    },
    {
      type: "wifi",
      src: "https://c.animaapp.com/dojq12ez/img/wifi-5.svg",
      className: "w-[17px] h-[11.83px]",
    },
    {
      type: "battery",
      src: "https://c.animaapp.com/dojq12ez/img/battery-5.svg",
      className: "w-[27.4px] h-[13px]",
    },
  ];

  const instructions = [
    {
      text: "본인확인을 위해 ARS 인증 받을 번호 선택 후 ",
      highlight: "'ARS 인증 요청' 버튼을 선택해 주세요.",
    },
    {
      text: "전화가 연결되면 안내 멘트에 따라 ",
      highlight: "동의는 숫자 1번, 거절은 #버튼을 눌러주세요.",
    },
  ];

  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
    >

      <div className="flex flex-col flex-1 w-full">
        <section className="flex flex-col px-6 pt-[22px] pb-0 bg-white">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            ARS 인증을 진행해 주세요.
          </h1>

          <div className="flex flex-col gap-2 mt-2">
            {instructions.map((instruction, index) => (
              <div
                key={`instruction-${index}`}
                className="flex items-start gap-2"
              >
                <div className="flex items-center h-5">
                  <img
                    className="w-[18px] h-5"
                    alt="Icon click"
                    src="https://c.animaapp.com/dojq12ez/img/iconclick-1.svg"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                    <span className="text-[#717682]">{instruction.text}</span>
                    <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] tracking-[var(--title-16-b-letter-spacing)] [font-style:var(--title-16-b-font-style)] leading-[var(--title-16-b-line-height)] text-[length:var(--title-16-b-font-size)]">
                      {instruction.highlight}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col flex-1 px-6 pt-[42px] pb-14">
          <div className="flex flex-col gap-1.5">
            <label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
              ARS인증 전화번호 선택
            </label>

            <div className="flex flex-col min-h-[42px]">
              <div className="flex items-center h-[42px]">
                <div className="flex items-center flex-1 pl-1">
                  <div className="flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)]">
                    010-1234-5678
                  </div>
                </div>

                <div className="flex items-center justify-center w-[25px] h-[41px]">
                  <ChevronDownIcon className="w-[15px] h-[9px]" />
                </div>
              </div>

              <div className="w-full h-0.5">
                <div className="w-full h-px bg-[#dfe3ec]" />
              </div>
            </div>

            <div className="flex justify-end mt-2.5">
              <button className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]">
                다시 시도하기
              </button>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col px-6 bg-white">
        <div className="flex flex-col gap-1.5 pb-3.5">
          <div className="flex items-center gap-0.5">
            <img
              className="w-5 h-5"
              alt="Img ars notice"
              src="https://c.animaapp.com/dojq12ez/img/img-ars-notice.svg"
            />
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              안내사항
            </span>
          </div>

          <div className="flex items-start gap-[5px]">
            <div className="w-2 h-3.5 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#d3d6e2] rounded-sm" />
            </div>

            <p className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
              ARS 인증 중에 한패스 앱을 종료하거나 다른 앱을 실행할 경우 인증이
              실패할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Button className="min-h-[54px] bg-[#0d56e4] rounded-xl shadow-[0px_-20px_20px_#ffffff] hover:bg-[#0d56e4]/90 h-auto">
            <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              ARS 인증&nbsp;&nbsp;완료
            </span>
          </Button>
        </div>

        <div className="h-4" />

        <div className="flex justify-center py-2"></div>
      </footer>
    </Layout>
  );
};
