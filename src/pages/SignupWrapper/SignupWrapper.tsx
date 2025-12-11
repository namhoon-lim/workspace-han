import {
  Check,
  ChevronDownIcon,
  ChevronRightIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Custom checkbox component matching Figma design
interface AgreementCheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
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
      onClick={() => onChange?.(!checked)}
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
    icon: "right",
  },
  {
    id: "term2",
    label: "[필수] 서비스 이용약관 동의",
    required: true,
    icon: "right",
  },
  {
    id: "term3",
    label: "[필수] 개인정보 수집 및 이용동의",
    required: true,
    icon: "down",
  },
  {
    id: "term4",
    label: "[필수] 카드 서비스 약관",
    required: true,
    icon: "right",
  },
  {
    id: "term5",
    label: "[필수] 오픈뱅킹 금융정보조회 약관",
    required: true,
    icon: "right",
  },
  {
    id: "term6",
    label: "[선택] 위치기반 서비스 이용약관",
    required: false,
    icon: "right",
  },
];

export const SignupWrapper = () => {
  const [checkedTerms, setCheckedTerms] = useState<Record<string, boolean>>({});
  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheck = (checked: boolean) => {
    setAllChecked(checked);
    const newCheckedTerms: Record<string, boolean> = {};
    termsData.forEach((term) => {
      newCheckedTerms[term.id] = checked;
    });
    setCheckedTerms(newCheckedTerms);
  };

  const handleTermCheck = (termId: string, checked: boolean) => {
    const newCheckedTerms = { ...checkedTerms, [termId]: checked };
    setCheckedTerms(newCheckedTerms);

    const allTermsChecked = termsData.every((term) => newCheckedTerms[term.id]);
    setAllChecked(allTermsChecked);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45704"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col flex-1 px-6 pt-6 pb-6 bg-white">
        <div className="mb-8">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            Welcome,
            <br />
            이용약관에 동의해주세요.
          </h1>
        </div>

        <Card className="border border-[#dfe3ec] rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#dfe3ec]">
              <AgreementCheckbox
                checked={allChecked}
                onChange={handleAllCheck}
                size="lg"
              />
              <label
                htmlFor="all-terms"
                className="flex-1 text-[#1c253f] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] cursor-pointer"
              >
                모두 동의합니다.
              </label>
            </div>

            <div className="flex flex-col gap-[22px] px-2.5 py-[30px]">
              {termsData.map((term) => (
                <div key={term.id} className="flex items-center gap-1.5">
                  <AgreementCheckbox
                    checked={checkedTerms[term.id] || false}
                    onChange={(checked) => handleTermCheck(term.id, checked)}
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
                  >
                    {term.icon === "down" ? (
                      <ChevronDownIcon className="h-4 w-4 text-[#85888e]" />
                    ) : (
                      <ChevronRightIcon className="h-4 w-4 text-[#85888e]" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col px-6 pb-6 bg-white">
        <Button
          className="min-h-[54px] bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)] text-white h-auto"
          asChild
        >
          <Link to="/signupscreenu95005">
            다음
          </Link>
        </Button>

        <div className="flex justify-center pt-4"></div>
      </footer>
    </div>
  );
};
