import { MoreVerticalIcon, PlusIcon, TargetIcon, Trash2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const accountData = {
  badge: "Auto",
  bankName: "새마을 금고",
  accountNumber: "9002029482947",
  accountHolder: "홍길동",
  bankIcon:
    "https://c.animaapp.com/dojq12ez/img/bank32-round-bank-045-round.svg",
};

export const AccountManagement = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen items-center bg-white"
    >
      <div className="flex flex-col items-start w-full max-w-md flex-1">
        <div className="flex flex-col items-start gap-4 px-6 py-0 w-full flex-1">
          <Card className="w-full border-[#dfe3ec] rounded-2xl overflow-hidden">
            <CardContent className="flex flex-col p-0">
              <div className="flex flex-col pt-5 pb-0 px-0">
                <div className="flex items-center justify-between px-5 py-0 pb-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#e9f1ff] text-[#003fbb] hover:bg-[#e9f1ff] font-navigation-12-SB font-[number:var(--navigation-12-SB-font-weight)] text-[length:var(--navigation-12-SB-font-size)] tracking-[var(--navigation-12-SB-letter-spacing)] leading-[var(--navigation-12-SB-line-height)] [font-style:var(--navigation-12-SB-font-style)] px-2.5 py-1 rounded-[50px]">
                      {accountData.badge}
                    </Badge>
                  </div>

                  <Button variant="ghost" size="icon" className="h-auto p-0">
                    <Trash2Icon className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-1.5 px-5 py-0 pb-4">
                  <img
                    className="w-8 h-8"
                    alt="Bank icon"
                    src={accountData.bankIcon}
                  />

                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {accountData.bankName}
                    </div>

                    <div className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0b0c0e] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                      {accountData.accountNumber}
                    </div>

                    <div className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#5e616b] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                      {accountData.accountHolder}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e9e9e9]">
                <Button
                  variant="ghost"
                  className="h-[60px] w-full rounded-none font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#0d56e4] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]"
                >
                  자동출금 등록 이어하기
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full h-[100px] border-[#dfe3ec] rounded-xl">
            <CardContent className="flex items-center justify-center h-full p-0">
              <Button
                variant="ghost"
                className="h-full w-full flex flex-col items-center justify-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#0d56e4] flex items-center justify-center">
                  <PlusIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                  계좌등록
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="flex flex-col items-center w-full max-w-md">
      </footer>
    </Layout>
  );
};
