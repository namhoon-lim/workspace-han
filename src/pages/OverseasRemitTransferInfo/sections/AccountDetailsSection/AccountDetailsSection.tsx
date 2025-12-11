import React from "react";

const bulletPoints = [
  "법인 계좌로는 해외 송금이 불가합니다.",
  "예상 소요 시간은 현지 사정에 따라 지연될 수 있습니다.",
  "입금 시에 별도의 입금수수료가 추가될 수 있으며, 수취 시에는 받는 방법에 따라 받는 수취수수료가 추가될 수 있습니다.",
  "수수료 쿠폰을 사용하시는 경우 입금액에 쿠폰할인이 적용됩니다.",
  "선택하신 출금 계좌의 이체 한도 초과 및 잔액이 부족하여 출금이 불가능한 경우, 송금 신청이 정상적으로 처리되지 않습니다.",
  "선불충전금은 원화로 환급되어 해외송금이 진행됩니다.",
  "궁금한 점이 있으시면 고객센터로 문의 부탁드립니다 .",
];

export const AccountDetailsSection = () => {
  return (
    <section className="flex flex-col items-start gap-2 p-6 w-full">
      {bulletPoints.map((text, index) => (
        <div key={index} className="flex items-start gap-[5px] w-full">
          <div className="relative w-2 h-3.5 flex-shrink-0">
            <div className="absolute top-[calc(50%_-_1px)] left-[calc(50%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
          </div>
          <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            {text}
          </p>
        </div>
      ))}
    </section>
  );
};
