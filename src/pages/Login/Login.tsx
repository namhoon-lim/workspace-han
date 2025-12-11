import { Button } from "@/components/common/Button";
import { Input } from "@/components/ui/input";

export const Login = () => {
  return (
    <div
      className="flex flex-col w-full bg-white"
      data-model-id="40000001:45998"
    >
        <div className="flex flex-col items-start bg-white w-full flex-1">
          <section className="flex flex-col gap-2 pt-22 pb-0 px-6 w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="mt-[-1.00px] font-title-24-b font-[number:var(--title-24-b-font-weight)] text-grayscale-01 text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                안녕하세요!
                <br />
                로그인 정보를 입력해주세요.
              </h1>
            </div>
          </section>

          <section className="flex flex-col items-start gap-3.5 pt-42 pb-14 px-6 w-full">
            <div className="flex flex-col items-start gap-30 w-full">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-42 items-start gap-2.5 w-full">
                      <div className="flex flex-col h-42 items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-7 pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="items-center flex-1 flex">
                              <div className="items-center gap-2 flex-1 flex">
                                <Input
                                  type="text"
                                  placeholder="휴대전화 또는 이메일"
                                  className="border-0 border-b-2 border-error-red rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-placeholder text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col w-full items-start pt-2 pb-0 px-0">
                    <p className="mt-[-1.00px] font-pretendard-regular text-error-red text-13-regular">
                      로그인 정보를 입력해주세요
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col min-h-42 items-start gap-2.5 w-full">
                      <div className="flex flex-col h-42 items-start w-full">
                        <div className="flex items-center flex-1 w-full">
                          <div className="gap-7 pl-1 pr-0 py-0 flex-1 flex items-center">
                            <div className="items-center flex-1 flex">
                              <div className="items-center gap-2 flex-1 flex">
                                <Input
                                  type="password"
                                  placeholder="비밀번호"
                                  className="border-0 border-b-2 border-error-red rounded-none px-1 h-auto py-0 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-placeholder text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] [font-style:var(--body-20-r-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex flex-col w-full items-start pt-2 pb-0 px-0">
                    <p className="mt-[-1.00px] font-pretendard-regular text-error-red text-13-regular">
                      8자 이상, 영어, ;숫자;, 특수 문자(;!@#$%^_*;)가 각각
                      포함돼야 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <Button variant="default" width="full" size="xl">
                  로그인
                </Button>

                <div className="flex flex-wrap w-full items-center justify-center gap-20">
                  <Button
                    variant="link"
                    className="h-auto p-0 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-grayscale-03 text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]"
                  >
                    비밀번호 찾기
                  </Button>

                  <div className="w-px h-3.5 bg-grayscale-03" />

                  <Button
                    variant="link"
                    className="h-auto p-0 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-grayscale-03 text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]"
                  >
                    고객센터 문의
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-end px-6 py-0 w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <Button
                  variant="outline"
                  width="full"
                  size="xl"
                >
                  회원가입
                </Button>

                <div className="w-full min-h-74 flex items-center pl-4 pr-0 py-0">
                  <div className="flex flex-col items-start gap-0.5 px-0 py-2.5 flex-1">
                    <div className="flex items-center w-full">
                      <p className="flex-1 font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-blue-01 text-[length:var(--navigation-12-r-font-size)] tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] mt-[-1.00px] [font-style:var(--navigation-12-r-font-style)]">
                        신규고객 첫송금은 더블혜택!
                      </p>
                    </div>

                    <div className="flex items-center w-full">
                      <p className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-promo-blue text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] mt-[-1.00px] [font-style:var(--body-14-b-font-style)]">
                        수수료무료 + 환율 우대
                      </p>
                    </div>
                  </div>

                  <div className="relative w-86 h-74">
                    <img
                      className="absolute w-66 h-55 top-[9px] left-2.5"
                      alt="Group"
                      src="https://c.animaapp.com/FyEwllI9/img/group@2x.png"
                    />
                  </div>
                </div>
              </div>

              <p className="flex items-center justify-center font-navigation-12-r font-[number:var(--navigation-12-r-font-weight)] text-grayscale-07 text-[length:var(--navigation-12-r-font-size)] text-center tracking-[var(--navigation-12-r-letter-spacing)] leading-[var(--navigation-12-r-line-height)] [font-style:var(--navigation-12-r-font-style)]">
                ver 5.0.15
              </p>
            </div>

            <div className="w-full h-4" />
          </section>
        </div>
    </div>
  );
};