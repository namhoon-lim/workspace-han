import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const WithdrawComplete = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center relative bg-white"
      data-model-id="2674:67678"
    >
      <BackSubHeader backTo="/accountmain2u95059" />

      <main className="flex flex-col items-start gap-2.5 pt-0 pb-3.5 px-6 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 relative flex-1 self-stretch w-full grow">
          <div className="relative w-60 h-[154px]">
            <img
              className="absolute w-[124px] h-20 top-[34px] left-[47px]"
              alt="Group"
              src="https://c.animaapp.com/X2DaSZUE/img/group-1261168122@2x.png"
            />

            <img
              className="absolute w-[20.83%] h-[32.47%] top-[53.25%] left-[56.67%]"
              alt="Status"
              src="https://c.animaapp.com/X2DaSZUE/img/ico50-status.svg"
            />
          </div>

          <div className="gap-[30px] self-stretch w-full flex flex-col items-center relative">
            <div className="gap-3 self-stretch w-full flex flex-col items-center relative">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                출금계좌 등록이 완료되었어요.
              </h1>

              <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                회원님의 계좌에서 바로 송금하길 원하신다면 자동출금 동의 절차를
                진행해주세요.
              </p>
            </div>
          </div>
        </div>

        <Card className="flex min-h-[72px] items-center gap-2 p-4 relative self-stretch w-full bg-[#f7faff] rounded-2xl border border-solid border-[#b7ccf7] shadow-[0px_4px_8px_#63649e14]">
          <CardContent className="flex items-center gap-2 p-0 w-full">
            <img
              className="relative w-10 h-10"
              alt="Img main banner"
              src="https://c.animaapp.com/X2DaSZUE/img/img-main-banner-passport.svg"
            />

            <div className="flex items-center gap-1 relative flex-1 grow">
              <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                <p className="self-stretch font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] relative mt-[-1.00px] [font-style:var(--title-15-SB-font-style)]">
                  해외송금 전에 여권을 등록하면 더 빠르고 안전한 서비스 경험을
                  하실 수 있어요.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full bg-white">
        <div className="gap-6 self-stretch w-full z-0 flex flex-col items-center relative">
          <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-[54px] items-start relative flex-1 grow">
              <Button className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto">
                <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  자동출금 동의하기
                </span>
              </Button>
            </div>
          </div>

          <button className="inline-flex items-center gap-0.5 relative">
            <span className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] underline whitespace-nowrap relative mt-[-1.00px] [font-style:var(--body-15-r-font-style)]">
              나중에 할게요
            </span>

            <img
              className="relative w-[18px] h-[18px]"
              alt="Btn arrow"
              src="https://c.animaapp.com/X2DaSZUE/img/ico20-btn-arrow-right-blue.svg"
            />
          </button>
        </div>

        <div className="relative self-stretch w-full h-4 z-[-1]" />
      </footer>
    </div>
  );
};
