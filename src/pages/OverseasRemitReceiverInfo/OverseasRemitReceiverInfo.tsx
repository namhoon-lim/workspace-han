import { BackSubHeader } from "@/components/BackSubHeader";
import { HelpCircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const OverseasRemitReceiverInfo = () => {
  const formFields = [
    {
      id: "firstName",
      label: "수취인 이름 (이름)",
      placeholder: "영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다.",
      type: "input",
    },
    {
      id: "lastName",
      label: "수취인 이름 (성)",
      placeholder: "영문 대문자만 입력가능, 띄어쓰기 1칸만 가능합니다.",
      type: "input",
    },
    {
      id: "phone",
      label: "휴대전화번호",
      placeholder: "전화번호는 8 ~ 11 자리만 가능합니다.",
      type: "phone",
    },
  ];

  const selectFields = [
    {
      id: "purpose",
      label: "송금 목적",
      placeholder: "선택해주세요",
    },
    {
      id: "source",
      label: "자금 원천",
      placeholder: "선택해주세요",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:66278"
    >

      <BackSubHeader backTo="/" />

      <section className="flex flex-col items-start w-full bg-white">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col items-start w-full">
            <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              송금신청정보 입력
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-start gap-2.5 pt-[22px] pb-0 px-6 w-full">
        <Card className="w-full bg-[#f4f7fd] rounded-xl border-0">
          <CardContent className="flex items-start gap-1.5 px-5 py-[22px]">
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex items-start gap-4 w-full">
                    <img
                      className="flex-1 h-[12.15px]"
                      alt="Image"
                      src="https://c.animaapp.com/vuYaFJZH/img/-------2@4x.png"
                    />
                    <div className="inline-flex flex-col items-end justify-center gap-0.5">
                      <div className="w-fit mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                        987,393 KRW
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 w-full">
                    <img
                      className="flex-1 h-[12.15px]"
                      alt="Image"
                      src="https://c.animaapp.com/vuYaFJZH/img/------3@4x.png"
                    />
                    <div className="inline-flex items-center justify-end gap-0.5">
                      <div className="w-fit mt-[-1.00px] font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#1c253f] text-[length:var(--body-14-b-font-size)] text-right tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] whitespace-nowrap [font-style:var(--body-14-b-font-style)]">
                        1000,000 NPR
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="w-full" />
              </div>

              <div className="flex items-start gap-4 w-full">
                <div className="flex flex-col items-start justify-center flex-1">
                  <img
                    className="w-[34.14px] h-[12.44px]"
                    alt="Image"
                    src="https://c.animaapp.com/vuYaFJZH/img/----1@4x.png"
                  />
                </div>
                <div className="inline-flex flex-col items-end justify-center gap-1">
                  <div className="inline-flex items-center justify-end gap-0.5">
                    <div className="flex items-center justify-center w-fit mt-[-1.00px] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0d56e4] text-[length:var(--title-16-b-font-size)] text-right tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] whitespace-nowrap [font-style:var(--title-16-b-font-style)]">
                      992,393 KRW
                    </div>
                  </div>
                  <img
                    className="w-[128.73px] h-[12.86px]"
                    alt="Element KRW"
                    src="https://c.animaapp.com/vuYaFJZH/img/---------5-000-krw@4x.png"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col items-center pt-[42px] pb-[22px] px-6 w-full">
        <div className="flex items-start gap-2 w-full">
          <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
            <h2 className="mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] flex-1 [font-style:var(--title-18-SB-font-style)]">
              받는 사람 정보
            </h2>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-2.5 pt-0 pb-[42px] px-6 w-full">
        <div className="flex flex-col items-start gap-9 flex-1">
          {formFields.map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-[22px] w-full"
            >
              <div className="flex flex-col w-full items-start gap-1.5">
                <div className="flex flex-col gap-2.5 w-full">
                  <div className="w-full h-[17px]">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          {field.label}
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          {field.type === "phone" && (
                            <div className="inline-flex items-center gap-2.5 pl-0 pr-1 py-0">
                              <div className="w-[30px] h-[30px] bg-[url(https://c.animaapp.com/vuYaFJZH/img/country-3.svg)] bg-[100%_100%]" />
                            </div>
                          )}
                          <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                            {field.type === "phone" && (
                              <div className="inline-flex items-center gap-0.5">
                                <div className="flex text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] items-center justify-center w-fit mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] whitespace-nowrap [font-style:var(--body-15-r-font-style)]">
                                  +82
                                </div>
                              </div>
                            )}
                            <div className="flex items-center flex-1">
                              <div className="flex items-center gap-2 flex-1">
                                <Input
                                  placeholder={field.placeholder}
                                  className="[display:-webkit-box] items-center justify-center flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)] border-0 border-b-2 border-[#dfe3ec] rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="w-full h-3 bg-[#f7f7f8]" />

      <section className="flex items-center gap-2.5 px-6 py-[42px] w-full">
        <div className="flex flex-col items-start gap-9 flex-1">
          {selectFields.map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-[22px] w-full"
            >
              <div className="flex flex-col w-full items-start gap-1.5">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="w-full h-[17px]">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          {field.label}
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <Select>
                            <SelectTrigger className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1 border-0 border-b-2 border-[#dfe3ec] rounded-none focus:ring-0 focus:ring-offset-0">
                              <SelectValue
                                placeholder={field.placeholder}
                                className="[display:-webkit-box] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] items-center justify-center w-fit mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] whitespace-nowrap [font-style:var(--body-20-r-font-style)]"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="option1">옵션 1</SelectItem>
                              <SelectItem value="option2">옵션 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 w-full rounded-xl flex">
          <div className="min-h-[54px] flex-1 flex items-start">
            <Button className="h-auto flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 bg-[#b7ccf7] rounded-xl hover:bg-[#a3bef5] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
              다음
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
