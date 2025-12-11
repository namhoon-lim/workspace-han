import { InfoIcon, MoreVerticalIcon, PlusIcon, TargetIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

export const AccountWrapper = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
    >
      <section className="flex flex-col items-start w-full">
        <div className="flex h-[54px] items-center justify-between px-5 py-0 w-full bg-white">
          <h1 className="flex-1 font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
            계좌관리
          </h1>

          <Button
            variant="outline"
            className="h-auto gap-1 px-2 py-1.5 bg-white rounded border border-solid border-[#0d56e4] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#0d56e4] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]"
          >
            주계좌 설정
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-start gap-2.5 pt-1.5 pb-[22px] px-6 w-full">
        <div className="flex min-h-[52px] items-center gap-1 pl-4 pr-3 py-3 w-full bg-[#f4f7fd] rounded-xl border border-solid border-[#e9f1ff]">
          <div className="flex flex-wrap items-center gap-1 flex-1">
            <span className="flex-1 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#0b0c0e] tracking-[-0.28px] leading-[18.2px] text-sm">
              계좌내역조회 무료제공 횟수
            </span>
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0d56e4] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)] whitespace-nowrap">
              8회
            </span>
          </div>

          <InfoIcon className="w-5 h-5 text-[#0d56e4]" />
        </div>
      </section>

      <div className="flex flex-col items-start gap-2.5 flex-1 w-full px-6">
        <Card className="w-full h-[100px] bg-white rounded-xl border border-solid border-[#dfe3ec]">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d56e4]">
              <PlusIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#0b0c0e] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
              계좌등록
            </span>
          </CardContent>
        </Card>
      </div>

      <footer className="flex flex-col px-6 py-0 w-full items-center justify-end">
        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
