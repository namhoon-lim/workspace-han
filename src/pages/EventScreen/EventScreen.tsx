import { BackSubHeader } from "@/components/BackSubHeader";
import { CircleIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const eventData = [
  {
    id: 1,
    image: "https://c.animaapp.com/dhMJne4N/img/01-1@2x.png",
    title: "나도 친구도 모두 1만원씩 받는 친구초대 혜택",
    period: "기간 | 2024.09.11 ~ 2024.12.31",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/dhMJne4N/img/02-1@2x.png",
    title: "한패스 신규 고객 특별 혜택 최대 75,000원 혜택",
    period: "기간 | 2024.09.11 ~ 2024.12.31",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/dhMJne4N/img/03-1@2x.png",
    title: "한패스 회원끼리는 송금 수수료가 완전 무료!",
    period: "기간 | 2024.09.11 ~ 2024.12.31",
  },
];

export const EventScreen = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-start bg-white"
      data-model-id="2674:68333"
    >
      <BackSubHeader backTo="/" />

      <div className="flex flex-col w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            이벤트
          </h1>
        </div>

        <Tabs defaultValue="past" className="w-full pt-[22px]">
          <TabsList className="w-full h-auto p-0 bg-transparent border-b border-[#dfe3ec] rounded-none">
            <TabsTrigger
              value="ongoing"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-[#a2a8bf] data-[state=active]:text-[#003fbb] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)]"
            >
              진행 중인 이벤트
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="flex-1 min-h-10 px-3 py-1 rounded-none border-b-4 border-transparent data-[state=active]:border-[#003fbb] data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)] text-[#a2a8bf] data-[state=active]:text-[#003fbb] data-[state=active]:font-title-16-b data-[state=active]:font-[number:var(--title-16-b-font-weight)]"
            >
              지난 이벤트
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="mt-0">
            <div className="flex flex-col items-start gap-4 pt-[22px] pb-0 px-6 w-full">
              {eventData.map((event) => (
                <Card key={event.id} className="w-full border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start w-full bg-white">
                      <div className="flex flex-col items-start w-full rounded-2xl overflow-hidden">
                        <img
                          className="w-full aspect-[3.48] object-cover"
                          alt="Event"
                          src={event.image}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-0.5 px-0 py-2 w-full">
                        <h3 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                          {event.title}
                        </h3>

                        <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                          {event.period}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <div className="flex flex-col items-start gap-4 pt-[22px] pb-0 px-6 w-full opacity-40">
              {eventData.map((event) => (
                <Card key={event.id} className="w-full border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start w-full bg-white">
                      <div className="flex flex-col items-start w-full rounded-2xl overflow-hidden">
                        <img
                          className="w-full aspect-[3.48] object-cover"
                          alt="Event"
                          src={event.image}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-0.5 px-0 py-2 w-full">
                        <h3 className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                          {event.title}
                        </h3>

                        <p className="font-body-14-r font-[number:var(--body-14-r-font-weight)] text-[#85888e] text-[length:var(--body-14-r-font-size)] tracking-[var(--body-14-r-letter-spacing)] leading-[var(--body-14-r-line-height)] [font-style:var(--body-14-r-font-style)]">
                          {event.period}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full mt-auto">
        <div className="w-full h-4" />
      </footer>
    </div>
  );
};
