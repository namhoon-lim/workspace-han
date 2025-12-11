import React from "react";

export const TransactionDetailsSection = () => {
  return (
    <section className="flex flex-col items-start bg-white w-full">
      <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
        <div className="flex flex-col items-start w-full">
          <h2 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금 결과
          </h2>
        </div>

        <div className="flex gap-2 items-start w-full">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              가상 계좌에 입금할 때에는 반드시 한패스에 등록된 출금계좌와 동일한
              계좌에서 이체해야 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
