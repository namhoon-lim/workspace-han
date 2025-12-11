import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export const AuthFailure = () => {
  return (
    <Layout
      className="w-full min-w-[375px] min-h-[800px] flex"
    >
      <div className="w-[375px] h-[800px] items-start bg-white flex relative flex-col">

        <div className="flex flex-col items-start gap-2.5 px-6 py-0 relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-center gap-3.5 px-0 py-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-60 h-[154px]">
              <img
                className="absolute w-[44.24%] h-[67.32%] top-[15.80%] left-[26.39%]"
                alt="Error icon"
                src="https://c.animaapp.com/sCCrT5uL/img/group-1261168836@2x.png"
              />
            </div>
            <div className="items-center gap-[30px] self-stretch w-full flex-[0_0_auto] flex relative flex-col">
              <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative flex-col">
                <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] text-center tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                  본인인증에 실패했어요.
                  <br />
                  잠시 후 다시 시도해 주세요.
                </h1>
                <p className="relative self-stretch font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#717682] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                  실패사유 : 정보요청유형 입력값 오류
                  <br />
                  (0007)
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="items-center gap-6 self-stretch w-full flex-[0_0_auto] z-0 flex relative flex-col">
            <div className="flex min-h-[54px] items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-xl shadow-[0px_-20px_20px_#ffffff]">
              <div className="flex min-h-[54px] items-start relative flex-1 grow">
                <Button
                  className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 relative flex-1 self-stretch grow bg-[#0d56e4] rounded-xl h-auto hover:bg-[#0d56e4]/90"
                  asChild
                >
                  <Link to="/accountu95016-u40u4354u4450u4352u4462u4520u4363u4469u4523u41-u4359u4457u4523u4363u4469u4523u4363u4469u4523u4364u4467u4540">
                    <span className="relative flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      확인
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative self-stretch w-full h-4 z-[-1]" />
        </footer>
      </div>
    </Layout>
  );
};
