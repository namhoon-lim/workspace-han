import { ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const menuOptions = [
  {
    icon: "https://c.animaapp.com/SXpbAKOQ/img/ico32-camera.svg",
    text: "직접 촬영하기",
  },
  {
    icon: "https://c.animaapp.com/SXpbAKOQ/img/ico32-album.svg",
    text: "갤러리 가져오기",
  },
];

export const IdRegistrationMethod = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-end gap-2.5 relative bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.75)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="40000003:653090"
    >
      {/* Header */}
      <header className="flex flex-col w-full items-start absolute top-0 left-0 z-10">
        <nav className="flex flex-col items-start w-full">
          <div className="gap-2 flex flex-col items-start w-full">
            <div className="h-[54px] justify-around px-5 py-0 flex items-center w-full">
              <img
                className="absolute h-[calc(100%_-_22px)] top-[11px] right-1.5 w-[87px]"
                alt="Mini"
                src="https://c.animaapp.com/SXpbAKOQ/img/mini-9@2x.png"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Sheet */}
      <section className="flex-col items-center justify-end w-full flex relative">
        <div className="flex flex-col items-center gap-1.5 pt-0 pb-3.5 px-6 w-full bg-white rounded-[30px_30px_0px_0px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-end w-full">
              <div className="w-full h-[22px]" />
              <Button variant="ghost" size="icon" className="h-auto w-auto p-0" asChild>
                <Link to="/verificationstepsu95024">
                  <XIcon className="w-[18px] h-[18px] text-gray-400" />
                </Link>
              </Button>
            </div>

            <div className="flex-col flex items-center w-full">
              <div className="items-start gap-2 w-full flex">
                <div className="items-center gap-1 px-0 py-1.5 flex-1 grow flex">
                  <h1 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    신분증 등록 방법을 선택해주세요
                  </h1>
                </div>
              </div>
              <div className="w-full max-h-[26px] h-[26px] opacity-30" />
            </div>
          </div>

          <div className="flex-col items-start gap-[18px] w-full flex">
            {menuOptions.map((option, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex h-auto w-full items-center justify-start gap-2.5 p-0 hover:bg-gray-50"
                asChild
              >
                <Link to="/idfrontcaptureu95030">
                  <div className="flex h-8 items-center w-full">
                    <div className="flex items-center gap-1.5 flex-1 grow">
                      <div className="flex w-[30px] items-center justify-center">
                        <img
                          className="w-[30px] h-8"
                          alt={option.text}
                          src={option.icon}
                        />
                      </div>
                      <div className="flex-1 font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#1c253f] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
                        {option.text}
                      </div>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-[21px] items-center gap-2.5 px-[105px] py-2 w-full bg-white">
        </div>
      </section>
    </div>
  );
};
