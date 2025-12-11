import { BackSubHeader } from "@/components/BackSubHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transferHistoryData = [
  {
    id: 1,
    countryFlag: "/img/country.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 2,
    countryFlag: "/img/country-1.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
  {
    id: 3,
    countryFlag: "/img/country-2.svg",
    name: "Min Se Jung",
    phone: "+9110920293848",
    bankInfo: "계좌 이체 EXIMA Bank 123456",
  },
];

export const Favorite = () => {
  return (
    <div
      className="favorite-screen w-full flex items-start gap-2.5 relative"
      data-model-id="3:29689"
    >
      <div className="flex-col items-center justify-center flex-1 grow bg-variable-collection-basic-white flex relative">
          <BackSubHeader backTo="/transformu95750" />

          {/* Main Content */}
          <div className="flex-col items-start gap-22 self-stretch w-full flex-none flex relative">
            {/* Title Section */}
            <section className="flex flex-col items-start relative self-stretch w-full flex-none">
              <div className="pt-22 pb-0 px-6 flex flex-col items-start gap-2 relative self-stretch w-full flex-none">
                <div className="flex flex-col items-start flex-none relative self-stretch w-full">
                  <h1 className="relative self-stretch mt-neg-1 text-title-24-b-style text-variable-collection-grayscale-01-0b0c0e">
                    즐겨찾는 내역을
                    <br />
                    관리해보세요
                  </h1>
                </div>
              </div>
            </section>

            {/* Tabs Navigation */}
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="flex items-center relative self-stretch w-full flex-none h-auto bg-transparent p-0 rounded-none">
                <TabsTrigger
                  value="favorites"
                  className="tab-trigger flex items-start justify-center px-3 relative flex-1 grow border-b-2 border-variable-collection-BG-09-dfe3ec data-[state=active]:border-variable-collection-sub-title01-003fbb rounded-none bg-transparent"
                >
                  <span className="tab-text relative tab-text-width text-center">
                    즐겨찾기
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="recent"
                  className="tab-trigger flex items-start justify-center px-3 relative flex-1 grow border-b-2 border-variable-collection-BG-09-dfe3ec data-[state=active]:border-variable-collection-sub-title01-003fbb rounded-none bg-transparent"
                >
                  <span className="tab-text relative tab-text-width text-center">
                    최근 송금내역
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Transfer History Cards */}
          <section className="flex-col items-end gap-2.5 pt-22 pb-4 px-6 self-stretch w-full flex-none flex relative">
            {transferHistoryData.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col items-center relative self-stretch w-full flex-none bg-variable-collection-basic-white rounded-xl border border-solid border-variable-collection-BG-09-dfe3ec"
              >
                <CardContent className="p-0 w-full">
                  <div className="flex-col items-start gap-1.5 p-4 self-stretch w-full flex-none flex relative">
                    <div className="items-center gap-1.5 self-stretch w-full flex-none flex relative">
                      <div
                        className="relative country-flag bg-cover-full"
                        style={{ backgroundImage: `url(${item.countryFlag})` }}
                      />

                      <div className="flex items-center gap-2.5 relative flex-1 grow">
                        <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                          <div className="flex flex-col items-start relative self-stretch w-full flex-none">
                            <div className="items-center gap-1 self-stretch w-full flex-none flex relative">
                              <div className="relative w-fit mt-neg-1 text-body-14-SB-style text-variable-collection-grayscale-01-0b0c0e whitespace-nowrap">
                                {item.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col items-start gap-0.5 self-stretch w-full flex-none flex relative">
                      <div className="relative self-stretch mt-neg-1 text-caption-13-r-style text-variable-collection-grayscale-01-0b0c0e">
                        {item.phone}
                      </div>

                      <div className="relative self-stretch text-caption-13-r-style text-variable-collection-grayscale-05-717682">
                        {item.bankInfo}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col card-action-height items-center justify-center relative self-stretch w-full overflow-hidden border-t border-top-solid border-variable-collection-BG-09-dfe3ec">
                    <div className="flex card-action-row self-stretch w-full items-center relative">
                      <Button
                        variant="ghost"
                        className="h-auto items-center justify-center gap-2.5 px-1.5 py-0 flex-1 self-stretch grow flex relative rounded-none hover:bg-transparent"
                      >
                        <span className="line-clamp-2 justify-center flex-1 text-navigation-12-r-style text-variable-collection-grayscale-03-5e616b text-center items-center relative">
                          즐겨찾기 등록하기
                        </span>
                      </Button>

                      <img
                        className="relative divider-line"
                        alt="Vector"
                        src="https://c.animaapp.com/ppTMEOHB/img/vector-1134-2.svg"
                      />

                      <img
                        className="relative divider-line"
                        alt="Vector"
                        src="https://c.animaapp.com/ppTMEOHB/img/vector-1134-2.svg"
                      />

                      <Button
                        variant="ghost"
                        className="h-auto items-center justify-center gap-2.5 px-1.5 py-0 flex-1 self-stretch grow flex relative rounded-none hover:bg-transparent"
                      >
                        <span className="relative line-clamp-2 items-center justify-center flex-1 text-navigation-12-SB-style text-variable-collection-primary-primary-0d56e4 text-center">
                          송금하기
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Bottom Navigation Bar */}
          <footer className="flex flex-col items-center justify-end px-6 py-0 relative self-stretch w-full flex-none">
            <div className="relative footer-spacer ml-neg-16 mr-neg-16" />

            <div className="flex flex-col items-center gap-2.5 px-105 py-2 relative self-stretch w-full flex-none bg-variable-collection-basic-white">
              <div className="flex-col home-indicator-container items-center gap-2.5 flex-none ml-neg-8 mr-neg-8 flex relative">
                <div className="relative home-indicator bg-variable-collection-basic-black rounded-full-100" />
              </div>
            </div>
          </footer>
        </div>
    </div>
  );
};
