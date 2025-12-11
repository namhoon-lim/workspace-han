import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ReferralCodeInput = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(true);

  return (
    <div
      className="flex flex-col min-h-screen bg-white relative"
      data-model-id="36893:39789"
    >
      <header className="w-full flex flex-col bg-white">
      </header>

      <nav className="flex flex-col bg-white">
        <div className="flex h-[54px] items-center justify-around px-5 py-0 bg-white">
          <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
            <img
              className="w-8 h-8"
              alt="Wechat hd"
              src="https://c.animaapp.com/SXpbAKOQ/img/wechat-hd-3.svg"
            />
          </div>
          <img
            className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
            alt="Mini"
            src="https://c.animaapp.com/SXpbAKOQ/img/mini-9@2x.png"
          />
        </div>
      </nav>

      <div className="flex flex-col bg-white">
        <section className="flex flex-col gap-2 pt-[22px] pb-0 px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            추천인 초대 코드 또는
            <br />
            파트너 코드를 입력해 주세요.
          </h1>
        </section>
      </div>

      <div className="flex flex-col gap-9 pt-[34px] pb-0 px-6 flex-1">
        <div className="flex flex-col gap-1.5 bg-white border border-solid border-[#f10000]">
          <div className="flex flex-col gap-2.5">
            <div className="h-[17px]">
              <div className="inline-flex items-center gap-1">
                <div className="inline-flex items-center gap-0.5">
                  <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                    추천인 초대코드/파트너 코드 (선택)
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col h-[42px] gap-2.5 bg-[#f7f7f8]">
              <div className="flex flex-col flex-1">
                <div className="flex items-center flex-1">
                  <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                    <Input
                      defaultValue="Wechat"
                      className="flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="w-full h-0.5">
                  <div className="w-full h-px bg-[#dfe3ec]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex flex-col max-w-[312px] items-start justify-center bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
          <div className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px] w-full">
            <h2 className="font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#003fbb] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
              인증을 위해 여권을 미리 준비해주세요.
            </h2>

            <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              복사본이나 모니터로 촬영한 신분증은&nbsp;&nbsp;
              <br />
              사용할 수 없어요!
            </p>

            <div className="relative w-60 h-[154px]">
              <div className="absolute h-28 top-[11px] left-[57px] flex px-[7.1px] py-[6.6px] justify-end items-start min-w-[103px] rotate-[4.45deg]">
                <img
                  className="w-[89px] h-[99px] rotate-[-4.45deg]"
                  alt="Union"
                  src="https://c.animaapp.com/SXpbAKOQ/img/union.svg"
                />
              </div>

              <div className="absolute w-[35.00%] h-[65.69%] top-[18.63%] left-[33.12%] rounded-[21px] border-[none] backdrop-blur-[3.38px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.38px)_brightness(100%)] bg-[linear-gradient(331deg,rgba(122,160,255,0.4)_0%,rgba(207,221,255,0.4)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[21px] before:[background:linear-gradient(121deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

              <img
                className="absolute w-[21.47%] h-[33.69%] top-[29.41%] left-[40.00%]"
                alt="Icon"
                src="https://c.animaapp.com/SXpbAKOQ/img/icon.svg"
              />

              <div className="absolute w-[20.83%] h-[32.68%] top-[57.74%] left-[56.88%] rounded-[25px/25.16px] bg-[linear-gradient(134deg,rgba(71,122,253,1)_3%,rgba(58,55,237,1)_48%,rgba(124,79,249,1)_100%)]">
                <img
                  className="absolute w-[40.67%] h-[25.42%] top-[36.11%] left-[24.82%]"
                  alt="Vector"
                  src="https://c.animaapp.com/SXpbAKOQ/img/vector.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="flex min-h-12 items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#0d56e4] rounded-[14px] h-auto hover:bg-[#0d56e4]/90"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
