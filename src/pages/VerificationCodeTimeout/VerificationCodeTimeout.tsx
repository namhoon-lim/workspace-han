import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const VerificationCodeTimeout = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center gap-2.5 px-6 py-[206px] relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full"
      data-model-id="40000003:218419"
    >
      <Card className="flex flex-col w-full max-w-[432px] bg-white rounded-[22px] shadow-[0px_10px_14px_#5a5a5a29] border-0">
        <CardContent className="flex flex-col items-center gap-2.5 pt-8 pb-9 px-[22px]">
          <p className="self-stretch mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            인증번호 입력 시간이 초과되었습니다.
            <br />
            인증번호를 다시 전송할까요?
          </p>

          <p className="self-stretch font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#acb2c1] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            Error : A80009
          </p>

          <div className="flex min-h-[54px] items-center justify-center gap-2 pt-0 pb-3.5 px-3.5 self-stretch w-full rounded-xl shadow-[0px_-20px_20px_#ffffff]">
            <div className="flex min-h-12 max-h-12 items-start gap-[7px] flex-1">
              <Button
                variant="secondary"
                className="w-[100px] h-auto px-2 py-1 bg-[#afb4ca] hover:bg-[#9fa4ba] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-15-b font-[number:var(--title-15-b-font-weight)] text-white text-[length:var(--title-15-b-font-size)] text-center tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                  아니오
                </span>
              </Button>

              <Button
                variant="default"
                className="flex-1 h-auto px-[26px] py-1.5 bg-[#0d56e4] hover:bg-[#0c4dcc] min-h-12 rounded-[14px]"
              >
                <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  예
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
