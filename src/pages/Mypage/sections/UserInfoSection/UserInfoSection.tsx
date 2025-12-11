import { ChevronUpIcon } from "lucide-react";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const noticeItems = [
  "회원이 보유한 여러 계정에서 같은 친구를 추천해도 1회만 혜택(쿠폰/캐시백)이 지급됩니다. (중복 지급 불가)",
  "본 친구 초대 이벤트는 외국인을 대상으로 진행되며, 초대받은 친구 (신규 가입자)의 국적이 한국인인 경우, 캐시백 대신 해외송금 할인 쿠폰을 받습니다.",
  "초대받은 친구가 한패스에 계좌를 등록해야 쿠폰이 지급됩니다. (계좌 등록 완료 후 즉시 지급)",
  "탈퇴 후 재가입한 경우에는 쿠폰 지급이 불가합니다.",
  "친구의 초대 코드는 띄어쓰기 없이 입력해주세요. (대/소문자 구분 없음)",
  "해당 쿠폰은 해외송금 수수료에만 적용되는 쿠폰입니다.",
  "한패스를 탈퇴할 경우에는 보유하고 있는 쿠폰과 월렛잔액이 소멸됩니다.",
  "상기 정책은 당사 사정에 따라 별도의 안내 없이 변경 및 중단될 수 있습니다.",
];

export const UserInfoSection = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-start gap-2 px-6 py-0 w-full"
    >
      <CollapsibleTrigger className="flex items-center gap-0.5 w-full">
        <img
          className="w-5 h-5"
          alt="Ico info"
          src="https://c.animaapp.com/pWVLYNoL/img/ico20-info2.svg"
        />

        <div className="flex items-center justify-center gap-2.5 px-0 py-[1.5px] flex-1">
          <div className="flex-1 mt-[-1.00px] font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#717682] text-[length:var(--caption-title-13-b-font-size)] tracking-[var(--caption-title-13-b-letter-spacing)] leading-[var(--caption-title-13-b-line-height)] [font-style:var(--caption-title-13-b-font-style)]">
            친구초대 유의사항
          </div>
        </div>

        <ChevronUpIcon
          className={`w-4 h-4 transition-transform ${isOpen ? "" : "rotate-180"}`}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="flex flex-col items-start gap-0 w-full">
        {noticeItems.map((item, index) => (
          <div key={index} className="flex items-start w-full">
            <div className="flex items-start gap-[5px] pl-2.5 pr-0 py-0 flex-1">
              <div className="w-2 h-3.5 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d3d6e2] rounded-sm" />
              </div>

              <div className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                {item}
              </div>
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
