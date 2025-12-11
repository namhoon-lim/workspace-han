import {
  InfoIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

const noticeItems = [
  "인증번호는 3분 이내로 입력하세요.",
  "인증번호가 도착하지 않을 경우 인증번호 재전송을 눌러주세요",
  "인증문의 : KCB 고객센터 (02-708-1000)",
];

export const AuthCodeInput = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen items-center relative bg-white"
    >

      <div className="flex-col items-start w-full bg-white flex">
        <div className="flex-col items-start gap-2 pt-22 pb-0 px-6 w-full flex">
          <div className="flex flex-col items-start w-full">
            <h1 className="w-full font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              본인인증을 위한 정보를
              <br />
              입력해 주세요
            </h1>
          </div>
        </div>
      </div>

      <section className="flex items-start gap-2.5 pt-[42px] pb-[30px] px-6 flex-1 w-full grow">
        <div className="flex-col items-start gap-1.5 flex-1 grow flex">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="w-full h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="w-fit font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    인증번호
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex-1 w-full grow flex items-center">
                    <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 grow flex items-center">
                      <div className="flex items-center flex-1 grow">
                        <div className="flex items-center gap-2 flex-1 grow">
                          <Input
                            type="text"
                            placeholder="숫자 6자리 입력"
                            className="flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none focus-visible:ring-0 focus-visible:border-[#003fbb] px-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#f10000] text-[length:var(--caption-title-13-r-font-size)] text-right tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] whitespace-nowrap w-fit [font-style:var(--caption-title-13-r-font-style)]">
                      02:49
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col items-end gap-2.5 w-full flex">
            <div className="flex flex-col items-start w-full">
              <div className="justify-end gap-2.5 w-full flex items-center">
                <div className="flex items-center justify-end flex-1 grow">
                  <Button
                    variant="link"
                    className="h-auto p-0 font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#003fbb] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] underline [font-style:var(--title-15-SB-font-style)]"
                  >
                    다시받기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full bg-white">
        <div className="flex flex-col items-start gap-1.5 pt-0 pb-3.5 px-0 w-full z-[3]">
          <div className="gap-0.5 w-full flex items-center">
            <InfoIcon className="w-5 h-5 text-[#757b88]" />
            <div className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#757b88] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap w-fit [font-style:var(--body-14-b-font-style)]">
              안내사항
            </div>
          </div>

          <div className="flex-col gap-2 flex items-start w-full">
            {noticeItems.map((item, index) => (
              <div
                key={`notice-${index}`}
                className="gap-[5px] flex items-start w-full"
              >
                <div className="w-2 h-3.5">
                  <div className="relative top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                </div>
                <div className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full z-[1]">
          <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff] flex">
            <Button
              disabled
              className="h-auto min-h-[54px] flex-1 bg-[#b7ccf7] hover:bg-[#b7ccf7] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] rounded-xl px-[26px] py-1.5"
            >
              인증하기
            </Button>
          </div>
        </div>

        <div className="w-full h-4 z-0" />
      </footer>
    </Layout>
  );
};
