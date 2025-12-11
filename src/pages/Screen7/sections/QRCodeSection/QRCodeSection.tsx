import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabItems = [
  { value: "invite-link", label: "초대링크" },
  { value: "invite-code", label: "나의 초대 코드" },
  { value: "qr-invite", label: "QR 초대" },
];

export const QRCodeSection = () => {
  const [activeTab, setActiveTab] = useState("qr-invite");

  return (
    <section className="flex flex-col items-start gap-[42px] w-full">
      <div className="flex flex-col items-start gap-3.5 w-full">
        <header className="flex flex-col items-start pt-[22px] pb-0 px-6 bg-white w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <h1 className="mt-[-1.00px] font-title-18-b font-[number:var(--title-18-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-18-b-font-size)] tracking-[var(--title-18-b-letter-spacing)] leading-[var(--title-18-b-line-height)] [font-style:var(--title-18-b-font-style)]">
                원하시는 방법을
                <br />
                선택해주세요.
              </h1>
            </div>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center w-full border-b border-[#dfe3ec]">
            <TabsList className="inline-flex items-center gap-4 px-6 py-0 bg-transparent h-auto">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`inline-flex min-h-11 items-center justify-center pt-2 pb-2.5 px-2.5 border-b-2 ${
                    activeTab === tab.value
                      ? "border-[#003fbb] font-title-16-SB font-[number:var(--title-16-SB-font-weight)] text-[#003fbb] text-[length:var(--title-16-SB-font-size)] tracking-[var(--title-16-SB-letter-spacing)] leading-[var(--title-16-SB-line-height)] [font-style:var(--title-16-SB-font-style)]"
                      : "border-transparent font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]"
                  } bg-transparent hover:bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-auto`}
                >
                  <span className="flex items-center justify-center whitespace-nowrap">
                    {tab.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="invite-link" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 shadow-none">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h2 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] w-full mt-[-1.00px] [font-style:var(--title-15-b-font-style)]">
                        초대링크
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="invite-code" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 shadow-none">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h2 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] w-full mt-[-1.00px] [font-style:var(--title-15-b-font-style)]">
                        나의 초대 코드
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qr-invite" className="mt-0">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-3 px-6 py-0 w-full">
                <Card className="w-full bg-[#f7f7f8] rounded-xl border-0 shadow-none overflow-hidden">
                  <CardContent className="flex flex-col items-center gap-2.5 p-5">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <h2 className="flex items-center justify-center font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] w-full mt-[-1.00px] [font-style:var(--title-15-b-font-style)]">
                        QR로 초대하기
                      </h2>

                      <p className="text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] w-full font-body-14-r font-[number:var(--body-14-r-font-weight)] [font-style:var(--body-14-r-font-style)]">
                        아래 QR코드를 친구에게 보여주세요.
                      </p>
                    </div>

                    <p className="text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] w-full font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] [font-style:var(--caption-title-13-r-font-style)]">
                      만약 QR 연결 후 바로 회원가입을 하지 않을 경우, 회원가입
                      시 초대한 친구의 초대코드를 직접 입력해주셔야 혜택을 받을
                      수 있어요.
                    </p>

                    <div className="w-[148px] h-[148px] bg-[url(https://c.animaapp.com/pWVLYNoL/img/mask-group-1@2x.png)] bg-[100%_100%]" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
