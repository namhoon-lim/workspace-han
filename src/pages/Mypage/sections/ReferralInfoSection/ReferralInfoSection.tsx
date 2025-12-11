import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabsData = [
  { value: "link", label: "초대링크" },
  { value: "code", label: "나의 초대 코드" },
  { value: "qr", label: "QR 초대" },
];

export const ReferralInfoSection = () => {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <section className="flex flex-col items-start gap-[42px] w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <header className="flex-col items-start pt-[22px] pb-0 px-6 bg-white flex w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h2 className="mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                원하시는 방법을
                <br />
                선택해주세요.
              </h2>
            </div>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="items-start gap-2.5 flex w-full">
            <div className="flex items-center flex-1 border-b [border-bottom-style:solid] border-[#dfe3ec]">
              <TabsList className="inline-flex items-center gap-4 px-6 py-0 bg-transparent h-auto">
                {tabsData.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`inline-flex min-h-11 items-center justify-center pt-2 pb-2.5 px-2.5 border-b-2 ${
                      activeTab === tab.value
                        ? "border-[#003fbb] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#003fbb] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]"
                        : "border-transparent font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]"
                    } rounded-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent
            value="link"
            className="flex flex-col items-start gap-2 w-full mt-0"
          >
            <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
              <Card className="w-full bg-[#f7f7f8] rounded-xl overflow-hidden border-0 shadow-none">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <h3 className="flex items-center justify-center w-full mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                      초대 링크 보내기
                    </h3>

                    <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      친구에게 초대링크를 보내드립니다.
                    </p>
                  </div>

                  <p className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                    링크를 통해 가입하지 않는 경우, 회원가입 시 초대한 친구의
                    초대코드를 직접 입력해 주셔야 혜택을 받을 수 있어요.
                  </p>

                  <button className="flex items-center gap-0.5 w-full cursor-pointer bg-transparent border-0 p-0">
                    <span className="mt-[-1.00px] font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0d56e4] text-[length:var(--body-14-r-font-size)] text-center tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] whitespace-nowrap [font-style:var(--body-14-r-font-style)]">
                      초대 링크 보내기
                    </span>

                    <ChevronRightIcon className="w-3.5 h-3.5 text-[#0d56e4]" />
                  </button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent
            value="code"
            className="flex flex-col items-start gap-2 w-full mt-0"
          >
            <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
              <Card className="w-full bg-[#f7f7f8] rounded-xl overflow-hidden border-0 shadow-none">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <h3 className="flex items-center justify-center w-full mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                      나의 초대 코드
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent
            value="qr"
            className="flex flex-col items-start gap-2 w-full mt-0"
          >
            <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
              <Card className="w-full bg-[#f7f7f8] rounded-xl overflow-hidden border-0 shadow-none">
                <CardContent className="flex flex-col items-center gap-2.5 p-5">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <h3 className="flex items-center justify-center w-full mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] [font-style:var(--title-15-b-font-style)]">
                      QR 초대
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
