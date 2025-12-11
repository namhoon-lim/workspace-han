import React from "react";

export const DivWrapperSubsection = () => {
  return (
    <header className="flex flex-col w-full items-start bg-white">
      <div className="flex-col items-start flex w-full">
        <div className="flex-col items-start gap-2 w-full flex">
          <div className="flex h-[54px] items-center justify-around px-5 py-0 w-full bg-white">
            <div className="flex w-[calc(100%_-_109px)] items-center absolute top-[calc(50.00%_-_16px)] left-1.5">
              <img
                className="w-8 h-8"
                alt="Wechat hd"
                src="https://c.animaapp.com/MgOgZxnr/img/wechat-hd-6.svg"
              />
            </div>

            <img
              className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
              alt="Mini"
              src="https://c.animaapp.com/MgOgZxnr/img/mini-7@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
