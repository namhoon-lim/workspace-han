import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

const personalInfoFields = [
  {
    id: "korean-name",
    label: "한국어 이름",
    value: "홍길동",
    placeholder: "",
    hasValue: true,
  },
  {
    id: "english-name",
    label: "영문 이름",
    value: "",
    placeholder: "영어로 입력하세요",
    hasValue: false,
  },
  {
    id: "english-last-name",
    label: "영문 성",
    value: "",
    placeholder: "영어로 입력하세요",
    hasValue: false,
  },
  {
    id: "birth-date",
    label: "생년월일",
    value: "",
    placeholder: "YYYY/MM/DD",
    hasValue: false,
  },
];

const idInfoFields = [
  {
    id: "id-type",
    label: "신분증 종류",
    value: "여권",
    placeholder: "",
    hasValue: true,
    disabled: true,
  },
  {
    id: "passport-number",
    label: "여권번호",
    value: "",
    placeholder: "- 없이 입력해주세요.",
    hasValue: false,
  },
  {
    id: "passport-issue-date",
    label: "여권발급일",
    value: "",
    placeholder: "YYYY/MM/DD",
    hasValue: false,
  },
  {
    id: "passport-expiry-date",
    label: "여권 만료일자",
    value: "",
    placeholder: "YYYY/MM/DD",
    hasValue: false,
  },
];

const genderOptions = [
  {
    value: "male",
    label: "남자",
    icon: "https://c.animaapp.com/Kel660N3/img/ico26-check-01-2.svg",
  },
  {
    value: "female",
    label: "여자",
    icon: "https://c.animaapp.com/Kel660N3/img/ico26-check-01-3.svg",
  },
];

export const CustomerVerification = () => {
  const [selectedGender, setSelectedGender] = React.useState("female");

  return (
    <div
      className="flex flex-col items-end relative bg-white min-h-screen"
      data-model-id="2674:64063"
    >
      <BackSubHeader backTo="/" />

      <main className="flex flex-col w-full flex-1">
        <section className="flex flex-col items-start bg-white w-full">
          <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
            <div className="flex flex-col items-start w-full">
              <h2 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                고객님의 정보가 맞는지
                <br />
                확인해주세요.
              </h2>
            </div>

            <div className="flex items-start gap-2 w-full">
              <div className="flex flex-col items-center justify-center flex-1">
                <p className="text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] mt-[-1.00px] font-body-16-r font-[number:var(--body-16-r-font-weight)] [font-style:var(--body-16-r-font-style)]">
                  고객님의 정보와 다르게 표시된 항목은 올바르게
                  <br />
                  수정해주셔야 회원가입이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-[42px] pt-[42px] pb-6 px-6 w-full">
          <div className="flex flex-col items-start gap-3.5 w-full">
            <header className="flex flex-col items-center w-full">
              <div className="flex items-start gap-2 w-full">
                <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
                  <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    개인정보
                  </h2>
                </div>
              </div>
            </header>

            <div className="flex flex-col items-start gap-9 w-full">
              {personalInfoFields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-1.5 w-full"
                >
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="h-[17px] w-full">
                      <div className="inline-flex items-center gap-1">
                        <div className="inline-flex items-center gap-0.5">
                          <Label
                            htmlFor={field.id}
                            className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                          >
                            {field.label}
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                id={field.id}
                                defaultValue={field.value}
                                placeholder={field.placeholder}
                                className={`border-0 border-b-0 rounded-none h-auto p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] ${
                                  field.hasValue
                                    ? "text-[#0b0c0e]"
                                    : "text-[#acb2c1] placeholder:text-[#acb2c1]"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-0.5">
                          <div className="w-full h-px bg-[#dfe3ec]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="h-[17px] w-full">
                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-0.5">
                        <Label className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]">
                          성별
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 w-full">
                  <ToggleGroup
                    type="single"
                    value={selectedGender}
                    onValueChange={(value) => value && setSelectedGender(value)}
                    className="flex items-center flex-1 rounded-[10px] overflow-hidden border-[6px] border-solid border-[#dfe3ec] h-auto"
                  >
                    {genderOptions.map((option, index) => (
                      <React.Fragment key={option.value}>
                        {index > 0 && (
                          <div className="self-stretch w-px bg-[#dfe3ec]" />
                        )}
                        <ToggleGroupItem
                          value={option.value}
                          className="flex items-center justify-center flex-1 h-auto rounded-none data-[state=on]:bg-[#e9f1ff] data-[state=off]:bg-white hover:bg-transparent data-[state=on]:text-[#0d56e4] data-[state=off]:text-[#5e616b]"
                        >
                          <div className="flex w-[91px] items-center justify-center gap-[11px] px-3.5 py-2.5">
                            <img
                              className="w-[26px] h-[26px]"
                              alt="Check"
                              src={option.icon}
                            />
                            <div className="inline-flex flex-col items-center justify-center gap-2.5">
                              <div className="w-fit mt-[-1.00px] font-title-15-b font-[number:var(--title-15-b-font-weight)] text-[length:var(--title-15-b-font-size)] tracking-[var(--title-15-b-letter-spacing)] leading-[var(--title-15-b-line-height)] whitespace-nowrap [font-style:var(--title-15-b-font-style)]">
                                {option.label}
                              </div>
                            </div>
                          </div>
                        </ToggleGroupItem>
                      </React.Fragment>
                    ))}
                  </ToggleGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3.5 w-full">
            <header className="flex flex-col items-center w-full">
              <div className="flex items-start gap-2 w-full">
                <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
                  <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                    신분증 정보
                  </h2>
                </div>
              </div>
            </header>

            <div className="flex flex-col items-start gap-9 w-full">
              {idInfoFields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-1.5 w-full"
                >
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="h-[17px] w-full">
                      <div className="inline-flex items-center gap-1">
                        <div className="inline-flex items-center gap-0.5">
                          <Label
                            htmlFor={field.id}
                            className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                          >
                            {field.label}
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div
                      className={`flex flex-col min-h-[42px] items-start gap-2.5 w-full ${
                        field.disabled ? "bg-[#f7f7f8]" : ""
                      }`}
                    >
                      <div className="flex flex-col h-[42px] items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-[7px] pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                id={field.id}
                                defaultValue={field.value}
                                placeholder={field.placeholder}
                                disabled={field.disabled}
                                className={`border-0 border-b-0 rounded-none h-auto p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 mt-[-1.00px] font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] ${
                                  field.hasValue
                                    ? "text-[#5e616b]"
                                    : "text-[#acb2c1] placeholder:text-[#acb2c1]"
                                } ${field.disabled ? "bg-[#f7f7f8]" : ""}`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-0.5">
                          <div className="w-full h-px bg-[#dfe3ec]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl flex w-full">
          <div className="min-h-[54px] flex-1 grow flex items-start">
            <Button className="flex items-center justify-center gap-2 px-[26px] py-1.5 flex-1 self-stretch grow bg-[#b7ccf7] rounded-xl hover:bg-[#a3bef5] h-auto">
              <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] text-center tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                다음
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
