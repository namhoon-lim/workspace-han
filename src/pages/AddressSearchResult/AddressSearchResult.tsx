import { CircleIcon, MoreVerticalIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";

const checkboxItems = [
  {
    id: "detached-house",
    label: "단독주택이면 체크해주세요.",
    hasDetails: true,
    detailTitle: "상세주소 입력 예시",
    detailText: "10층, 103호, 1004동 102호, C동 302호",
  },
  {
    id: "confirm-address",
    label: "(필수)상기 주소는 본인이 실 거주하고 있는 주소임을 확인합니다.",
    hasDetails: false,
  },
];

export const AddressSearchResult = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
    >

      <div className="flex flex-col flex-1 bg-white">
        <section className="flex flex-col items-start pt-[22px] pb-0 px-6">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            한국에서 실제 거주하고 있는
            <br />
            주소를 정확하게 입력해 주세요.
          </h1>
        </section>

        <section className="flex flex-col flex-1 items-start gap-6 pt-[42px] pb-6 px-6">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col min-h-[42px] items-start gap-2.5 w-full">
                <div className="flex flex-col h-[42px] items-start w-full">
                  <div className="flex items-center flex-1 w-full">
                    <div className="flex items-center gap-[7px] pl-1 pr-0 py-0 flex-1">
                      <div className="flex items-center gap-2.5 flex-1">
                        <div className="flex items-center gap-2 flex-1">
                          <p className="[display:-webkit-box] items-center justify-center flex-1 font-body-20-r font-[number:var(--body-20-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-20-r-font-size)] tracking-[var(--body-20-r-letter-spacing)] leading-[var(--body-20-r-line-height)] overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-20-r-font-style)]">
                            92 Achasan-ro, Seongdong-92 Achasan-ro, Seongdong-92
                            Achasan-ro, Seongdong-
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-auto w-auto p-2"
                    >
                      <SearchIcon className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="w-full h-0.5">
                    <div className="w-full h-px bg-[#dfe3ec]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[18px] w-full">
            <div className="flex flex-col items-start gap-[30px] w-full">
              {checkboxItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start gap-2.5 w-full"
                >
                  <div className="flex items-start gap-1.5 w-full">
                    <Checkbox id={item.id} className="w-6 h-6 mt-0.5" />
                    <label
                      htmlFor={item.id}
                      className="flex items-center justify-center gap-2.5 px-0 py-0.5 flex-1 cursor-pointer"
                    >
                      <span className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
                        {item.label}
                      </span>
                    </label>
                  </div>

                  {item.hasDetails && (
                    <div className="flex flex-col items-start gap-1.5 pl-[30px] pr-0 py-0 w-full">
                      <div className="flex items-center gap-1.5 w-full">
                        <span className="flex-1 font-body-14-b font-[number:var(--body-14-b-font-weight)] text-[#717682] text-[length:var(--body-14-b-font-size)] tracking-[var(--body-14-b-letter-spacing)] leading-[var(--body-14-b-line-height)] [font-style:var(--body-14-b-font-style)]">
                          {item.detailTitle}
                        </span>
                      </div>

                      <div className="flex items-start w-full">
                        <div className="flex items-start gap-[5px] flex-1">
                          <div className="relative w-2 h-3.5">
                            <div className="absolute top-[calc(50.00%_-_1px)] left-[calc(50.00%_-_2px)] w-1 h-1 bg-[#d3d6e2] rounded-sm" />
                          </div>
                          <span className="flex-1 font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#717682] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
                            {item.detailText}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-start justify-center gap-2.5 w-full">
                <Button
                  variant="outline"
                  className="h-auto min-h-[46px] flex-1 bg-white rounded-[30px] border-[#b7ccf7] px-[26px] py-1"
                >
                  <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                    다시 검색하기
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 bg-white">
        <Button className="h-auto min-h-[54px] w-full bg-[#0d56e4] rounded-xl px-[26px] py-1.5">
          <span className="flex-1 font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] text-center [font-style:var(--title-16-b-font-style)]">
            확인
          </span>
        </Button>

        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
