import React from "react";

export const UserInformationSection = () => {
  return (
    <section className="flex flex-col items-start bg-white w-full">
      <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
        <div className="flex flex-col items-start w-full">
          <h1 className="w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            송금신청내용 확인
          </h1>
        </div>

        <div className="flex gap-2 items-start w-full">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="w-full mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
              해외 송금 신청 내역을 확인해주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
