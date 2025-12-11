import React from "react";

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-start px-6 py-0 bg-white w-full">
      <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-0 w-full">
        <header className="flex flex-col items-start w-full">
          <h1 className="w-full mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            내 친구를
            <br />
            초대해주세요!
          </h1>
        </header>

        <div className="flex items-start gap-2 w-full">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] w-full mt-[-1.00px] [font-style:var(--body-16-r-font-style)]">
              친구가 한패스를 가입하면, 내 친구와 함께 나도 혜택을 받을 수
              있어요!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
