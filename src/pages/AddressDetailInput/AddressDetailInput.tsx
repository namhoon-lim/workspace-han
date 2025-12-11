import { BackSubHeader } from "@/components/BackSubHeader";
import { MoreVerticalIcon, SearchIcon, TargetIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

export const AddressDetailInput = () => {
  const [isStandaloneHouse, setIsStandaloneHouse] = useState(false);
  const [isAddressConfirmed, setIsAddressConfirmed] = useState(true);

  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
      backTo="/"
    >
      <div className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            한국에서 실제 거주하고 있는
            <br />
            주소를 정확하게 입력해 주세요.
          </h1>
        </section>

        <section className="flex flex-col items-start gap-9 pt-[42px] pb-6 px-6 flex-1 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                  <div className="flex flex-col h-[42px] items-start w-full">
                    <div className="flex items-center flex-1 w-full">
                      <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                        <div className="flex items-center flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <Input
                              type="text"
                              placeholder="주소를 검색해주세요"
                              className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center justify-end gap-2.5 pl-0 pr-2 py-0">
                        <SearchIcon className="w-6 h-6 text-[#acb2c1]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[18px] w-full">
            <div className="flex flex-col items-start gap-1.5 w-full">
              <div className="flex flex-col gap-2.5 w-full">
                <div className="w-full h-[17px]">
                  <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-0.5">
                      <Label className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                        상세주소
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
                                type="text"
                                placeholder="상세 주소를 입력해주세요"
                                className="border-0 border-b-2 border-[#dfe3ec] rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#acb2c1] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
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

            <div className="flex flex-col items-start gap-[30px] w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <div className="flex items-start gap-1.5 w-full">
                  <Checkbox
                    id="standalone-house"
                    checked={isStandaloneHouse}
                    onCheckedChange={(checked) =>
                      setIsStandaloneHouse(checked as boolean)
                    }
                    className="w-6 h-6 mt-0.5"
                  />

                  <Label
                    htmlFor="standalone-house"
                    className="flex items-center justify-center gap-2.5 px-0 py-0.5 flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] cursor-pointer"
                  >
                    단독주택이면 체크해주세요.
                  </Label>
                </div>

                <div className="flex flex-col items-start gap-1.5 pl-[30px] pr-0 py-0 w-full">
                  <div className="flex items-center gap-1.5 w-full">
                    <span className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#717682] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] text-[length:var(--body-14-b-font-size)] [font-style:var(--body-14-b-font-style)]">
                      상세주소 입력 예시
                    </span>
                  </div>

                  <div className="flex items-start w-full">
                    <div className="flex items-start gap-[5px] flex-1">
                      <div className="relative w-2 h-3.5">
                        <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                      </div>

                      <span className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                        10층, 103호, 1004동 102호, C동 302호
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-1.5 w-full">
                <Checkbox
                  id="address-confirmation"
                  checked={isAddressConfirmed}
                  onCheckedChange={(checked) =>
                    setIsAddressConfirmed(checked as boolean)
                  }
                  className="w-6 h-6 mt-0.5"
                />

                <Label
                  htmlFor="address-confirmation"
                  className="flex items-center justify-center gap-2.5 px-0 py-0.5 flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] cursor-pointer"
                >
                  (필수)상기 주소는 본인이 실 거주하고 있는 주소임을 확인합니다.
                </Label>
              </div>

              <div className="flex items-start justify-center gap-2.5 w-full">
                <Button
                  variant="outline"
                  className="min-h-[46px] flex-1 bg-white rounded-[30px] border border-solid border-[#b7ccf7] h-auto"
                  asChild
                >
                  <Link to="/addresssearchapiu95046">
                    <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                      다시 검색하기
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="min-h-[54px] items-center justify-center gap-2 rounded-xl shadow-[0px_-20px_20px_#ffffff] flex w-full">
          <Button
            className="min-h-[54px] flex-1 bg-[#b7ccf7] rounded-xl h-auto"
            disabled
            asChild
          >
            <Link to="/addressphotouploadu95044">
              <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                확인
              </span>
            </Link>
          </Button>
        </div>

        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
