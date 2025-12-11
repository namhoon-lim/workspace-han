import { BackSubHeader } from "@/components/BackSubHeader";
import { MoreVerticalIcon, XIcon, Mail, FileText, Check } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const ServiceCertificate = () => {
  const [selectedOption, setSelectedOption] = useState<"email" | "pdf">("email");

  return (
    <div
      className="flex flex-col items-start bg-white"
      data-model-id="40000008:1186774"
    >
      {/* Header */}
      <BackSubHeader backTo="/" />

      {/* Transaction Info Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              거래 정보
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                거래 일시
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                2025.11.02 14:30:00
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                거래 번호
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                TXN-2024-987654
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                송금액
              </span>
              <span className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#0d56e4] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                ₩1,355,000
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Method Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
              수령 방법 선택
            </span>
          </div>
          <div className="flex flex-col items-start gap-3 w-full">
            {/* Email Option */}
            <button
              onClick={() => setSelectedOption("email")}
              className={`flex items-center gap-4 p-4 w-full rounded-lg border-2 transition-colors ${
                selectedOption === "email"
                  ? "border-[#0d56e4] bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                selectedOption === "email" ? "bg-[#0d56e4]" : "bg-gray-100"
              }`}>
                <Mail className={`h-5 w-5 ${selectedOption === "email" ? "text-white" : "text-gray-500"}`} />
              </div>
              <div className="flex-1 text-left">
                <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                  이메일 발송
                </span>
                <p className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  등록된 이메일로 증명서 발송
                </p>
              </div>
              {selectedOption === "email" && (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d56e4]">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </button>

            {/* PDF Download Option */}
            <button
              onClick={() => setSelectedOption("pdf")}
              className={`flex items-center gap-4 p-4 w-full rounded-lg border-2 transition-colors ${
                selectedOption === "pdf"
                  ? "border-[#0d56e4] bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                selectedOption === "pdf" ? "bg-[#0d56e4]" : "bg-gray-100"
              }`}>
                <FileText className={`h-5 w-5 ${selectedOption === "pdf" ? "text-white" : "text-gray-500"}`} />
              </div>
              <div className="flex-1 text-left">
                <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
                  PDF 다운로드
                </span>
                <p className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#717682] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  PDF 파일로 즉시 다운로드
                </p>
              </div>
              {selectedOption === "pdf" && (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d56e4]">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <div className="flex flex-col items-start gap-3 w-full p-4 bg-gray-50 rounded-lg">
          <span className="font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]">
            안내 사항
          </span>
          <ul className="flex flex-col gap-1 text-sm text-gray-600">
            <li>• 거래 증명서는 공식 문서로 사용 가능합니다.</li>
            <li>• 이메일 발송 시 최대 24시간 내 수신 가능합니다.</li>
            <li>• 증명서 발급은 월 5회까지 무료입니다.</li>
          </ul>
        </div>
      </section>

      {/* Issue Button */}
      <section className="flex flex-col items-start gap-2.5 pt-6 pb-0 px-6 w-full">
        <Button className="w-full h-12 bg-[#0d56e4] hover:bg-[#0b4acc] text-white font-title-16-SB">
          {selectedOption === "email" ? "이메일로 발급받기" : "PDF 다운로드"}
        </Button>
      </section>

      {/* Footer */}
      <footer className="items-center justify-end pt-6 pb-0 px-6 flex flex-col w-full mt-auto">
      </footer>
    </div>
  );
};
