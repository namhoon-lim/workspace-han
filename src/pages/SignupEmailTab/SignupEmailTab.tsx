import { ChevronLeftIcon, XIcon } from "lucide-react";
import React from "react";
import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SignupEmailTab = () => {
  return (
    <div className="flex flex-col bg-white" data-model-id="40000001:45839">
      <BackSubHeader backTo="/nationalityu95006" />

      {/* Title Section */}
      <section className="flex flex-col w-full bg-white pt-[22px] px-6">
        <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
          휴대폰번호 또는 이메일을
          <br />
          입력해 주세요.
        </h1>
      </section>

      {/* Tabs Section */}
      <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 w-full">
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec]">
            <TabsTrigger
              value="phone"
              className="flex-1 h-[42px] rounded-none border-b-2 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent bg-transparent font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#85888e] data-[state=active]:text-[#003fbb] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]"
            >
              휴대폰 번호
            </TabsTrigger>
            <TabsTrigger
              value="email"
              className="flex-1 h-[42px] rounded-none border-b-2 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent bg-transparent font-body-16-m font-[number:var(--body-16-m-font-weight)] text-[#85888e] data-[state=active]:text-[#003fbb] text-[length:var(--body-16-m-font-size)] tracking-[var(--body-16-m-letter-spacing)] leading-[var(--body-16-m-line-height)] [font-style:var(--body-16-m-font-style)]"
            >
              이메일
            </TabsTrigger>
          </TabsList>

          <TabsContent value="phone" className="mt-6">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                        휴대폰 번호
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex flex-1 w-full items-center gap-2">
                      {/* Country Code */}
                      <div className="flex items-center gap-1 px-2 py-1 border border-[#dfe3ec] rounded">
                        <span className="font-body-14-m text-[#0b0c0e]">+82</span>
                        <ChevronLeftIcon className="w-4 h-4 rotate-[-90deg] text-[#85888e]" />
                      </div>

                      {/* Phone Input */}
                      <div className="flex-1 flex items-center">
                        <Input
                          placeholder="휴대폰 번호를 입력하세요"
                          className="border-0 border-b-0 rounded-none p-0 h-auto shadow-none font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-6">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                        이메일
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex flex-1 w-full items-center">
                      <div className="flex gap-[7px] pl-1 pr-0 py-0 flex-1 items-center">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              placeholder="이메일을 입력하세요"
                              className="border-0 border-b-0 rounded-none p-0 h-auto shadow-none font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] placeholder:text-[#acb2c1] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex justify-end gap-2.5 pl-0 pr-2 py-0 items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-auto w-auto p-0 hover:bg-transparent"
                        >
                          <XIcon className="w-[18px] h-[18px] text-[#85888e]" />
                        </Button>
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Submit Button Section */}
      <section className="flex flex-col items-start w-full mt-auto">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] items-start flex-1 grow flex">
            <Button
              disabled
              className="flex min-h-[54px] items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#b7ccf7] hover:bg-[#a5bef5] rounded-none h-auto disabled:opacity-100"
            >
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                인증번호 요청
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
