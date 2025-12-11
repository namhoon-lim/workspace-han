import {
  ChevronDownIcon,
} from "lucide-react";
import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const tabsData = [
  { value: "phone", label: "휴대폰번호" },
  { value: "email", label: "이메일" },
];

export const SignupPhoneEmail = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-white"
      data-model-id="40000001:45775"
    >
      <BackSubHeader backTo="/nationalityu95006" />

      <main className="flex flex-col flex-1">
        <section className="bg-white pt-[22px] px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            휴대폰번호 또는 이메일로 <br />
            회원가입을 진행해 주세요.
          </h1>
        </section>

        <Tabs defaultValue="phone" className="w-full mt-[26px]">
          <TabsList className="w-full h-auto bg-transparent border-b border-[#dfe3ec] rounded-none p-0">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=active]:shadow-none font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#a2a8bf] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)] data-[state=active]:text-[#003fbb] data-[state=active]:text-[length:var(--title-16-b-font-size)] data-[state=active]:tracking-[var(--title-16-b-letter-spacing)] data-[state=active]:leading-[var(--title-16-b-line-height)] data-[state=active]:[font-style:var(--title-16-b-font-style)]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="phone" className="flex-1 px-6 pt-[42px] mt-0">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-1.5">
                <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  국가번호
                </Label>

                <div className="flex flex-col min-h-[42px] bg-[#f7f7f8]">
                  <div className="flex items-center h-[42px]">
                    <div className="inline-flex items-center gap-2.5 pl-0 pr-1 py-0">
                      <div className="w-[30px] h-[30px] bg-[url(https://c.animaapp.com/kFnLzJf2/img/country.svg)] bg-[100%_100%]" />
                    </div>

                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <div className="flex items-center gap-2 flex-1">
                        <div className="font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] line-clamp-1">
                          중국
                        </div>

                        <div className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                          CH +86
                        </div>
                      </div>
                    </div>

                    <div className="w-[25px] h-[41px] flex items-center justify-center">
                      <ChevronDownIcon className="w-[15px] h-[9px]" />
                    </div>
                  </div>

                  <div className="h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  휴대폰번호
                </Label>

                <div className="flex flex-col min-h-[42px]">
                  <div className="flex items-center h-[42px]">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <Input
                        type="tel"
                        placeholder="숫자만 입력하세요"
                        className="flex-1 h-auto border-0 bg-transparent p-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="flex-1 px-6 pt-[42px] mt-0">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-1.5">
                <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                  이메일
                </Label>

                <div className="flex flex-col min-h-[42px]">
                  <div className="flex items-center h-[42px]">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <Input
                        type="email"
                        placeholder="이메일을 입력하세요"
                        className="flex-1 h-auto border-0 bg-transparent p-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="flex flex-col w-full bg-white">
        <div className="flex flex-col px-6 py-0">
          <Button
            disabled
            className="min-h-[54px] h-auto w-full bg-[#b7ccf7] hover:bg-[#b7ccf7] rounded-xl font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
          >
            인증번호 요청
          </Button>
        </div>

        <div className="h-4 w-full" />
      </footer>
    </div>
  );
};
