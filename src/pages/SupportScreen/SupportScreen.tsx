import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categoryTabs = [
  { id: "about", label: "About 한패스", active: true },
  { id: "card", label: "한패스 카드", active: false },
  { id: "gift", label: "선물하기", active: false },
  { id: "signup", label: "회원가입", active: false },
  { id: "transfer1", label: "연락처송금", active: false },
  { id: "transfer2", label: "연락처송금", active: false },
  { id: "transfer3", label: "연락처송금", active: false },
];

const faqItems = [
  {
    id: "faq-1",
    question: "한패스는 어떤 서비스인가요?",
    answer: null,
  },
  {
    id: "faq-2",
    question: "한패스 사무실은 어디에 있나요?",
    answer:
      "내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.",
  },
  {
    id: "faq-3",
    question: "서비스를 어떻게 사용할 수 있나요 ?",
    answer: null,
  },
  {
    id: "faq-4",
    question: "서비스 운영 시간은 어떻게 되나요  ?",
    answer: null,
  },
];

export const SupportScreen = () => {
  const [expandedId, setExpandedId] = useState<string | null>("faq-2");

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      className="flex flex-col min-h-screen items-start relative bg-white"
      data-model-id="34958:288553"
    >
      <BackSubHeader backTo="/" />

      <section className="flex-col items-start gap-[22px] self-stretch w-full flex relative flex-[0_0_auto]">
        <div className="flex-col bg-white flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start pt-[22px] pb-0 px-6 self-stretch w-full flex-[0_0_auto] flex gap-2 relative">
            <div className="flex-col items-start flex-[0_0_auto] flex relative self-stretch w-full">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                자주 묻는 질문
              </h1>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <ScrollArea className="w-full">
            <div className="gap-2.5 px-6 py-0 flex items-start relative w-full flex-[0_0_auto]">
              <div className="items-center flex gap-2 relative">
                {categoryTabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={tab.active ? "default" : "secondary"}
                    className={`h-auto inline-flex items-center justify-center px-[18px] py-2 relative flex-[0_0_auto] rounded-[999px] shadow-[0px_3px_6px_#6b78f133] ${
                      tab.active
                        ? "bg-[#0d56e4] hover:bg-[#0d56e4]/90"
                        : "bg-[#f4f7fd] hover:bg-[#f4f7fd]/80"
                    }`}
                  >
                    <span
                      className={`font-body-14-b font-[number:var(--body-14-b-font-weight)] relative flex items-center justify-center w-fit mt-[-2.00px] text-[length:var(--body-14-b-font-size)] text-center tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)] ${
                        tab.active
                          ? "text-white"
                          : "text-[#586db4] font-body-14-r font-[number:var(--body-14-r-font-weight)]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="right-0 absolute h-full top-0 w-6 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />

          <div className="left-0 rotate-180 absolute h-full top-0 w-6 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
        </div>
      </section>

      <main className="flex flex-col items-start pt-[22px] pb-0 px-6 relative flex-1 self-stretch w-full grow">
        <div className="w-full">
          {faqItems.map((item) => (
            <div key={item.id} className="border-none">
              <button
                onClick={() => item.answer && toggleFaq(item.id)}
                className="min-h-16 items-center gap-1.5 flex px-0 py-4 relative w-full hover:no-underline text-left"
              >
                <span className="relative flex-1 font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]">
                  {item.question}
                </span>
                {item.answer && (
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.answer && expandedId === item.id && (
                <div className="pb-4">
                  <div className="flex-col items-center justify-center gap-5 p-5 self-stretch w-full bg-[#f7f7f8] rounded-2xl flex relative flex-[0_0_auto]">
                    <p className="self-stretch font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] relative mt-[-1.00px] text-[length:var(--body-14-r-font-size)] [font-style:var(--body-14-r-font-style)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="flex-col justify-end px-6 py-0 relative self-stretch w-full flex-[0_0_auto] flex items-center">
        <div className="relative w-full h-4" />

        <div className="flex flex-col items-center gap-2.5 px-[105px] py-2 relative self-stretch w-full flex-[0_0_auto] bg-white">
        </div>
      </footer>
    </div>
  );
};
