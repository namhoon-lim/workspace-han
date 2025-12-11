import React from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const termsData = {
  article14: {
    title: "제 14조 (회사와 인터넷사업자와의 관계)",
    paragraphs: [
      '"회사"는 "인터넷 사업자"가 제공하는 서비스 상품 또는 용역 등에 대하여 보증책임을 지지 않습니다.',
      '"회사"와 "인터넷사업자"는 독자적으로 사이트를 운영하며, "인터넷사업자"와 "이용자"간에 행해진 거래에 대하여 고의 또는 중과실이 있는 경우를 제외하고는 어떠한 책임도 지지 않습니다.',
    ],
  },
  article15: {
    title: "제 15조 (면책)",
    paragraphs: [
      ' "회사"의 고의 또는 과실 없이 "서비스"를 제공할 수 없는 경우에는 "서비스"  제공에 관한 책임이 면제됩니다.',
      '"회사"는 "이용자" 또는 제3자 측의 사정으로 인한 "서비스" 이용의 장애에  대하여 책임을 지지 않습니다.',
      '"회사"는 고의 또는 중과실이 없는 한 "이용자"가 "서비스"를이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 "서비스" 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.',
      '"회사"는 "이용자"가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 고의 또는 중과실이 없는 한 일체의 책임을 지지 않습니다.',
      "계약만료 또는 요금 미납의 결과로 사용자 계정이 정지되거나 보관파일이 삭제된 후 이에 따르는 손해에 대하여 책임을 지지 않습니다.",
    ],
  },
};

export const SignupScreen = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45725"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col px-6 pt-[22px] pb-0">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            서비스 이용약관
          </h1>
        </div>

        <ScrollArea className="flex-1 w-full">
          <div className="flex flex-col gap-5 px-6 pt-[22px] pb-6">
            <section className="flex flex-col gap-2.5">
              <h2 className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                  {termsData.article14.title}
              </h2>

              <div className="flex flex-col gap-2">
                {termsData.article14.paragraphs.map((paragraph, index) => (
                  <p
                    key={`article14-${index}`}
                    className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-3.5">
              <h2 className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#5e616b] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
                  {termsData.article15.title}
              </h2>

              <div className="flex flex-col gap-2">
                {termsData.article15.paragraphs.map((paragraph, index) => (
                  <p
                    key={`article15-${index}`}
                    className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>
      </main>

      <footer className="flex flex-col w-full bg-white">
        <div className="flex flex-col px-6 py-0">
          <Button
            className="min-h-[54px] w-full bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl h-auto"
            asChild
          >
            <Link to="/nationalityu95006">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Link>
          </Button>
        </div>

        <div className="h-4 w-full" />
      </footer>
    </div>
  );
};
