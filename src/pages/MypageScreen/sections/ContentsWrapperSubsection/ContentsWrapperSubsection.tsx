import { ChevronDownIcon, InfoIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formFields = [
  {
    id: "userId",
    label: "아이디",
    value: "01028532326",
    disabled: true,
    hasInfo: false,
  },
  {
    id: "englishFirstName",
    label: "영문 이름",
    value: "HAEJIN",
    disabled: false,
    hasInfo: true,
  },
  {
    id: "englishMiddleName",
    label: "영문 중간 이름 (선택)",
    placeholder: "영문 중간 이름",
    value: "",
    disabled: false,
    hasInfo: false,
  },
];

const addressCheckboxes = [
  {
    id: "singleHouse",
    label: "단독주택이면 체크해주세요.",
    checked: false,
    hasDetails: true,
    details: {
      title: "상세주소 입력 예시",
      example: "10층, 103호, 1004동 102호, C동 302호",
    },
  },
  {
    id: "confirmAddress",
    label: "상기 주소는 본인이 실 거주하고 있는 주소임을 확인합니다.",
    checked: false,
    hasDetails: false,
  },
];

export const ContentsWrapperSubsection = () => {
  return (
    <section className="flex flex-col items-start gap-[42px] pt-[34px] pb-0 px-6 w-full">
      <div className="flex flex-col items-start gap-[22px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                기본정보
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-9 w-full">
          {formFields.map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-1.5 w-full"
            >
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label
                        htmlFor={field.id}
                        className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                      >
                        {field.label}
                      </Label>
                      {field.hasInfo && (
                        <InfoIcon className="w-4 h-4 text-[#85888e]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div
                    className={`flex flex-col min-h-[42px] items-start gap-2.5 w-full ${field.disabled ? "bg-[#f7f7f8]" : ""}`}
                  >
                    <div className="flex flex-col h-[42px] items-start w-full">
                      <div className="flex items-center flex-1 w-full">
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center gap-2.5 flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                id={field.id}
                                defaultValue={field.value}
                                placeholder={field.placeholder}
                                disabled={field.disabled}
                                className={`flex-1 border-0 bg-transparent p-0 h-auto text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 ${
                                  field.disabled
                                    ? "text-[#5e616b]"
                                    : field.value
                                      ? "text-[#0b0c0e]"
                                      : "text-[#acb2c1]"
                                }`}
                              />
                            </div>
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
            </div>
          ))}

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label
                        htmlFor="englishLastName"
                        className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                      >
                        영문 성
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
                        <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                          <div className="flex items-center flex-1">
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                id="englishLastName"
                                placeholder="영문 성"
                                className="flex-1 border-0 bg-transparent p-0 h-auto text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                              />
                            </div>
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

              <div className="flex flex-col gap-2.5 w-full">
                <div className="flex flex-col items-start pt-2 pb-0 px-0 w-full">
                  <p className="mt-[-1.00px] [font-family:'Pretendard-Bold',Helvetica] font-normal text-transparent text-[13px] tracking-[-0.26px] leading-[16.9px]">
                    <span className="font-[number:var(--caption-title-13-b-font-weight)] text-[#1c253f] tracking-[var(--caption-title-13-b-letter-spacing)] font-caption-title-13-b [font-style:var(--caption-title-13-b-font-style)] leading-[var(--caption-title-13-b-line-height)] text-[length:var(--caption-title-13-b-font-size)]">
                      여권 영문 이름
                    </span>
                    <span className="font-caption-title-13-r text-[#717682] tracking-[var(--caption-title-13-r-letter-spacing)] [font-style:var(--caption-title-13-r-font-style)] font-[number:var(--caption-title-13-r-font-weight)] leading-[var(--caption-title-13-r-line-height)] text-[length:var(--caption-title-13-r-font-size)]">
                      과 동일하게 입력해주세요.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col w-[312px] items-start pt-2 pb-0 px-0">
                <p className="mt-[-1.00px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-transparent text-[13px] tracking-[-0.26px] leading-[16.9px]">
                  <span className="text-[#717682] tracking-[var(--caption-title-13-r-letter-spacing)] font-caption-title-13-r [font-style:var(--caption-title-13-r-font-style)] font-[number:var(--caption-title-13-r-font-weight)] leading-[var(--caption-title-13-r-line-height)] text-[length:var(--caption-title-13-r-font-size)]">
                    영문 이름 변경 횟수 :
                  </span>
                  <span className="font-caption-title-13-b font-[number:var(--caption-title-13-b-font-weight)] text-[#f10000] tracking-[var(--caption-title-13-b-letter-spacing)] [font-style:var(--caption-title-13-b-font-style)] leading-[var(--caption-title-13-b-line-height)] text-[length:var(--caption-title-13-b-font-size)]">
                    {" "}
                    5/5회
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label
                      htmlFor="occupation"
                      className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                    >
                      직업
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
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id="occupation"
                              defaultValue="기타 회사원"
                              readOnly
                              className="flex-1 border-0 bg-transparent p-0 h-auto text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-[25px] h-[41px] flex items-center justify-center">
                        <ChevronDownIcon className="w-[15px] h-[9px] text-[#0b0c0e]" />
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label
                      htmlFor="phoneNumber"
                      className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                    >
                      휴대전화번호
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full bg-[#f7f7f8]">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="inline-flex items-center gap-0.5">
                          <span className="w-fit text-[#5c6580] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap mt-[-1.00px] font-body-15-r font-[number:var(--body-15-r-font-weight)] [font-style:var(--body-15-r-font-style)]">
                            +82
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id="phoneNumber"
                              defaultValue="01028532326"
                              disabled
                              className="flex-1 border-0 bg-transparent p-0 h-auto text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
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
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full h-[17px]">
                <div className="inline-flex items-center gap-1">
                  <div className="inline-flex items-center gap-0.5">
                    <Label
                      htmlFor="email"
                      className="w-fit mt-[-1.00px] font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] whitespace-nowrap [font-style:var(--body-14-m-font-style)]"
                    >
                      이메일 주소 (선택)
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full bg-[#f7f7f8]">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id="email"
                              defaultValue="hjyi1213@naver.com"
                              disabled
                              className="flex-1 border-0 bg-transparent p-0 h-auto text-[#5e616b] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
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
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[22px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-start gap-2 w-full">
            <div className="flex items-center justify-center gap-2.5 px-0 py-1.5 flex-1">
              <h2 className="flex-1 mt-[-1.00px] font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#003fbb] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
                주소 정보
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id="addressSearch"
                              placeholder="주소를 검색해주세요"
                              className="flex-1 border-0 bg-transparent p-0 h-auto text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0">
                        <SearchIcon className="w-6 h-6 text-[#85888e]" />
                      </div>
                    </div>

                    <div className="w-full h-0.5">
                      <div className="w-full h-px bg-[#dfe3ec]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              id="detailedAddress"
                              placeholder="상세 주소"
                              className="flex-1 border-0 bg-transparent p-0 h-auto text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] font-body-20-r font-[number:var(--body-20-r-font-weight)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
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
          </div>

          <div className="flex flex-col items-start gap-[18px] w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              {addressCheckboxes.map((checkbox) => (
                <div
                  key={checkbox.id}
                  className="flex flex-col items-start gap-2.5 w-full"
                >
                  <div className="flex items-start gap-1.5 w-full">
                    <Checkbox
                      id={checkbox.id}
                      defaultChecked={checkbox.checked}
                      className="w-6 h-6 mt-px"
                    />

                    <Label
                      htmlFor={checkbox.id}
                      className="flex items-center justify-center gap-2.5 px-0 py-0.5 flex-1 cursor-pointer"
                    >
                      <span className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] mt-[-1.00px] [font-style:var(--body-15-r-font-style)]">
                        {checkbox.label}
                      </span>
                    </Label>
                  </div>

                  {checkbox.hasDetails && (
                    <div className="flex flex-col items-start gap-1.5 pl-[30px] pr-0 py-0 w-full">
                      <div className="flex items-center gap-1.5 w-full">
                        <p className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#717682] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] mt-[-1.00px] [font-style:var(--body-14-b-font-style)]">
                          {checkbox.details?.title}
                        </p>
                      </div>

                      <div className="flex items-start w-full">
                        <div className="flex items-start gap-[5px] flex-1">
                          <div className="w-2 h-3.5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                          </div>

                          <p className="flex-1 mt-[-1.00px] font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                            {checkbox.details?.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
