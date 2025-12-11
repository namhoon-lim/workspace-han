import {
  Check,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";
import React, { useState } from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";

// Custom checkbox component matching Figma design
interface AgreementCheckboxProps {
  checked: boolean;
  onChange?: () => void;
  size?: "lg" | "md" | "sm";
}

const AgreementCheckbox = ({ checked, onChange, size = "md" }: AgreementCheckboxProps) => {
  const sizeClasses = {
    lg: "w-6 h-6",
    md: "w-5 h-5",
    sm: "w-4 h-4",
  };

  const iconSizeClasses = {
    lg: "w-5 h-5",
    md: "w-4 h-4",
    sm: "w-3.5 h-3.5",
  };

  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex items-center justify-center ${sizeClasses[size]} rounded-full transition-colors ${
        checked
          ? "bg-[#0D56E4]"
          : "bg-transparent"
      }`}
    >
      <Check
        className={`${iconSizeClasses[size]} ${
          checked
            ? "text-white"
            : "text-[#C4C4C4]"
        }`}
        strokeWidth={checked ? 3 : 2}
      />
    </button>
  );
};

const termsData = [
  {
    id: "term1",
    label: "[필수] 전자금융거래 이용약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term2",
    label: "[필수] 서비스 이용약관 동의",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term3",
    label: "[필수] 개인정보 수집 및 이용동의",
    required: true,
    checked: true,
    expandable: true,
    subItems: [
      {
        id: "term3-1",
        label: "[필수] 개인(신용)정보 수집･이용 동의",
        checked: true,
      },
      {
        id: "term3-2",
        label: "[필수] 고유식별정보 수집･이용 동의",
        checked: true,
      },
      {
        id: "term3-3",
        label: "[필수] 개인(신용)정보 제공 동의",
        checked: true,
      },
    ],
  },
  {
    id: "term4",
    label: "[필수] 카드 서비스 약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term5",
    label: "[필수] 오픈뱅킹 금융정보조회 약관",
    required: true,
    checked: false,
    expandable: false,
  },
  {
    id: "term6",
    label: "[선택] 위치기반 서비스 이용약관",
    required: false,
    checked: false,
    expandable: false,
  },
];

export const Signup = () => {
  const [expandedTerms, setExpandedTerms] = useState<string[]>(["term3"]);

  const toggleExpand = (termId: string) => {
    setExpandedTerms((prev) =>
      prev.includes(termId)
        ? prev.filter((id) => id !== termId)
        : [...prev, termId],
    );
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45654"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 px-6">
        <section className="pt-6 pb-8">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Welcome,
            <br />
            이용약관에 동의해주세요.
          </h1>
        </section>

        <section className="flex-1 pb-6">
          <div className="bg-white rounded-lg border border-[#dfe3ec]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#dfe3ec]">
              <AgreementCheckbox
                checked={false}
                size="lg"
              />
              <label
                htmlFor="agree-all"
                className="flex-1 text-[#1c253f] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] cursor-pointer"
              >
                모두 동의합니다.
              </label>
            </div>

            <div className="flex flex-col gap-[22px] px-2.5 py-[30px]">
              {termsData.map((term) => (
                <div key={term.id} className="flex flex-col gap-[18px]">
                  <div className="flex items-start">
                    <div className="flex items-start gap-1.5 flex-1">
                      <AgreementCheckbox
                        checked={term.checked}
                        size="md"
                      />
                      <label
                        htmlFor={term.id}
                        className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] cursor-pointer"
                      >
                        {term.label}
                      </label>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0"
                        onClick={() => term.expandable && toggleExpand(term.id)}
                      >
                        {term.expandable ? (
                          expandedTerms.includes(term.id) ? (
                            <ChevronDownIcon className="h-4 w-4 text-[#85888e]" />
                          ) : (
                            <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                          )
                        ) : (
                          <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {term.expandable &&
                    expandedTerms.includes(term.id) &&
                    term.subItems && (
                      <div className="flex flex-col gap-[18px] pl-[26px]">
                        {term.subItems.map((subItem) => (
                          <div key={subItem.id} className="flex items-start">
                            <div className="flex items-start gap-1.5 flex-1">
                              <AgreementCheckbox
                                checked={subItem.checked}
                                size="sm"
                              />
                              <label
                                htmlFor={subItem.id}
                                className="flex-1 font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)] cursor-pointer"
                              >
                                {subItem.label}
                              </label>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-auto w-auto p-0"
                              >
                                <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col px-6 pb-8">
        <Button className="h-auto min-h-[54px] rounded-xl bg-[#b7ccf7] hover:bg-[#a3bef5] text-white font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
          다음
        </Button>
        <div className="h-4" />
        <div className="flex justify-center py-2"></div>
      </footer>
    </div>
  );
};
