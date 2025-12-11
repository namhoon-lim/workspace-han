import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FrameSubsection = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start pt-0 pb-6 px-0 w-full bg-variable-collection-basic-white rounded-bottom-16 overflow-hidden shadow-card-sm">
        <header className="flex flex-col items-start w-full bg-variable-collection-basic-white">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="w-full h-54 relative">
                <img
                  className="absolute h-calc-full-minus-22 pos-top-11 left-1.5 w-8"
                  alt="Wechat hd"
                  src="https://c.animaapp.com/ppTMEOHB/img/wechat-hd-2.svg"
                />

                <img
                  className="absolute h-calc-full-minus-22 pos-top-11 right-1.5 w-mini-logo"
                  alt="Mini"
                  src="https://c.animaapp.com/ppTMEOHB/img/mini-2@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="bg-variable-collection-basic-white w-full h-54 relative">
                <Button
                  variant="outline"
                  className="h-auto absolute pos-center-y-15 pos-right-23 px-2 py-1.5 bg-variable-collection-basic-white border-variable-collection-primary-primary-0d56e4 rounded overflow-hidden"
                >
                  <span className="text-caption-13-b-style text-variable-collection-primary-primary-0d56e4 text-center whitespace-nowrap">
                    즐겨찾기
                  </span>
                </Button>

                <h1 className="absolute pos-center-y-10 left-6 h-21 text-body-16-r-style text-variable-collection-grayscale-01-0b0c0e whitespace-nowrap flex items-center justify-center">
                  송금액 입력
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-end justify-center gap-2.5 px-6 py-0 w-full">
                <div className="flex h-50 items-center gap-5px px-3 py-0 w-full bg-variable-collection-BG-03-f4f7fd rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      className="w-6 h-6 aspect-[1]"
                      alt="Wallet"
                      src="https://c.animaapp.com/ppTMEOHB/img/bank120-wallet-1.svg"
                    />

                    <div className="line-clamp-2 items-center justify-center flex-1 mt-neg-1 text-body-14-r-style text-variable-collection-grayscale-02-1c253f">
                      Hanpass Pay wallet
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <div className="flex items-center justify-center w-fit text-title-16-b-style text-variable-collection-grayscale-02-1c253f text-right whitespace-nowrap">
                      XANL87349609
                    </div>

                    <ChevronDownIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3px w-full">
                  <div className="inline-flex items-center justify-end gap-1.5">
                    <span className="w-fit mt-neg-1 text-caption-13-r-style text-variable-collection-grayscale-06-85888e text-right whitespace-nowrap flex items-center justify-center">
                      계좌 잔액 :
                    </span>

                    <span className="w-fit mt-neg-1 text-caption-13-b-style text-variable-collection-grayscale-06-85888e text-right whitespace-nowrap flex items-center justify-center">
                      27,000원
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-1.5 w-full">
                    <span className="w-fit mt-neg-1 text-caption-13-r-style text-variable-collection-grayscale-06-85888e text-right whitespace-nowrap flex items-center justify-center">
                      출금 가능 금액 :
                    </span>

                    <span className="w-fit mt-neg-1 text-caption-13-b-style text-variable-collection-grayscale-06-85888e text-right whitespace-nowrap flex items-center justify-center">
                      27,000원
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-13px px-6 py-0 w-full">
                <div className="flex flex-col items-start gap-13px w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <p className="self-stretch mt-neg-1 text-caption-13-r-style text-variable-collection-grayscale-06-85888e flex items-center justify-center">
                        보내는 금액(수수료 별도)
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-8-91 w-full">
                        <div className="inline-flex items-center gap-3">
                          <div className="flag-icon-bg w-10 h-10 relative">
                            <img
                              className="absolute svg-layer-accent-1"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector.png"
                            />

                            <img
                              className="absolute svg-layer-main-shape"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-6.svg"
                            />

                            <img
                              className="absolute svg-layer-accent-2"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/image.png"
                            />

                            <img
                              className="absolute svg-layer-subtract"
                              alt="Subtract"
                              src="https://c.animaapp.com/ppTMEOHB/img/subtract-2.svg"
                            />

                            <img
                              className="absolute svg-layer-center-square"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-7.svg"
                            />

                            <img
                              className="absolute svg-layer-center-rect"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-8.svg"
                            />

                            <img
                              className="absolute svg-layer-inner-shape"
                              alt="Vector"
                              src="https://c.animaapp.com/ppTMEOHB/img/vector-9.svg"
                            />

                            <img
                              className="absolute svg-layer-subtract"
                              alt="Subtract"
                              src="https://c.animaapp.com/ppTMEOHB/img/subtract-3.svg"
                            />
                          </div>

                          <span className="flex items-center justify-center w-fit text-title-18-b-style text-variable-collection-grayscale-01-0b0c0e whitespace-nowrap">
                            KRW
                          </span>
                        </div>

                        <span className="w-fit text-title-24-b-style text-variable-collection-primary-primary-0d56e4 text-right whitespace-nowrap flex items-center justify-center">
                          1,010,970
                        </span>
                      </div>
                    </div>

                    <p className="flex items-center justify-center self-stretch text-navigation-12-r-style text-variable-collection-error-color-red text-right">
                      잔액이 부족합니다. 출금 수단을 변경하시거나 금액을 다시
                      입력해주세요.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-5 w-full">
                    <img
                      className="w-10"
                      alt="Frame"
                      src="https://c.animaapp.com/ppTMEOHB/img/frame-1597886781-1.svg"
                    />

                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Button
                        variant="default"
                        className="h-auto flex items-center justify-between px-5 py-7px w-full bg-variable-collection-blue-01-0d1458 rounded-pill overflow-hidden hover:bg-variable-collection-blue-01-0d1458"
                      >
                        <span className="flex-1 text-body-14-r-style text-variable-collection-basic-white flex items-center justify-center">
                          받는 방법을 선택해주세요.
                        </span>

                        <ChevronDownIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col items-start gap-2.5 w-full">
                      <p className="self-stretch mt-neg-1 text-caption-13-r-style text-variable-collection-grayscale-06-85888e flex items-center justify-center">
                        받는금액
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-8-91 w-full">
                        <div className="inline-flex items-center gap-3">
                          <img
                            className="w-10 h-10"
                            alt="Flag ellipse"
                            src="https://c.animaapp.com/ppTMEOHB/img/flag-ellipse-1.svg"
                          />

                          <span className="flex items-center justify-center w-fit text-title-18-b-style text-variable-collection-grayscale-01-0b0c0e whitespace-nowrap">
                            NPR
                          </span>

                          <ChevronDownIcon className="w-6 h-6" />
                        </div>

                        <span className="w-fit text-title-24-b-style text-variable-collection-primary-primary-0d56e4 text-right whitespace-nowrap flex items-center justify-center">
                          100,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
                <Card className="w-full bg-variable-collection-BG-03-f4f7fd rounded-xl border-0">
                  <CardContent className="flex flex-col items-start gap-2.5 p-5">
                    <div className="flex items-start gap-4 w-full">
                      <span className="w-fit mt-neg-1 text-body-14-r-style text-variable-collection-grayscale-03-5e616b whitespace-nowrap">
                        송금 환율
                      </span>

                      <span className="flex-1 mt-neg-1 text-body-14-b-style text-variable-collection-grayscale-02-1c253f text-right">
                        10.11 KRW = 1 NPR
                      </span>
                    </div>

                    <div className="flex-col gap-2.5 flex items-center w-full">
                      <div className="flex w-full h-18 items-start gap-4">
                        <span className="flex-1 mt-neg-1 text-body-14-r-style text-variable-collection-grayscale-03-5e616b">
                          송금 수수료
                        </span>

                        <div className="inline-flex items-center gap-0.5">
                          <div className="inline-flex items-center gap-2.5">
                            <span className="w-fit mt-neg-1 text-body-14-b-style text-variable-collection-grayscale-02-1c253f text-right whitespace-nowrap">
                              5,000
                            </span>
                          </div>

                          <span className="w-8 mt-neg-1 text-body-14-b-style text-variable-collection-grayscale-02-1c253f text-right">
                            KRW
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col h-68 items-start gap-2.5 w-full">
                        <div className="inline-flex h-18 items-start gap-4">
                          <span className="w-coupon-label mt-neg-1 text-body-14-r-style text-variable-collection-grayscale-03-5e616b">
                            쿠폰
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          className="h-10 gap-2 px-3 py-0 bg-variable-collection-basic-white rounded-lg border-variable-collection-BG-09-dfe3ec flex items-center w-full justify-between"
                        >
                          <div className="flex items-center gap-1 flex-1">
                            <span className="flex items-center justify-center flex-1 mt-neg-1 text-body-14-b-style text-variable-collection-grayscale-03-5e616b">
                              <span className="text-variable-collection-grayscale-03-5e616b text-body-14-b-style">
                                쿠폰{" "}
                              </span>

                              <span className="text-variable-collection-primary-primary-0d56e4 text-body-14-b-style">
                                2장
                              </span>

                              <span className="text-variable-collection-grayscale-03-5e616b text-body-14-b-style">
                                {" "}
                                보유
                              </span>
                            </span>
                          </div>

                          <ChevronRightIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 w-full">
                      <span className="w-fit mt-neg-1 text-body-14-r-style text-variable-collection-grayscale-03-5e616b whitespace-nowrap">
                        예상 소요 시간
                      </span>

                      <span className="flex-1 mt-neg-1 text-body-14-b-style text-variable-collection-grayscale-02-1c253f text-right">
                        depending on local circumstances
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="px-6 py-0 flex items-start gap-5px w-full">
                <div className="w-2 h-3.5 relative">
                  <div className="absolute pos-center-y-1 pos-center-x-2 w-1 h-1 bg-variable-collection-grayscale-10-d3d6e2 rounded-sm" />
                </div>

                <p
                  className="text-variable-collection-grayscale-05-717682 flex-1 mt-neg-1 text-caption-13-r-style"
                >
                  지금 보시는 환율과 송금한도는 &quot;캐시픽업&quot; 기준으로
                  계산되었어요.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
            <Button className="h-auto flex items-center justify-center gap-2.5 px-5 py-15 w-full bg-variable-collection-primary-primary-0d56e4 rounded-full-100px overflow-hidden hover:bg-variable-collection-primary-primary-0d56e4">
              <span className="flex items-center justify-center w-fit mt-neg-1 text-title-20-b-style text-variable-collection-basic-white whitespace-nowrap">
                다음
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2.5 px-8-5 py-0 w-full">
        <div className="w-full h-23 bg-white-50 rounded-b-2xl shadow-card" />
      </div>

      <div className="flex flex-col items-start gap-2.5 px-6 py-0 w-full">
        <div className="w-full h-4 bg-white-50 rounded-b-2xl shadow-card" />
      </div>
    </section>
  );
};
