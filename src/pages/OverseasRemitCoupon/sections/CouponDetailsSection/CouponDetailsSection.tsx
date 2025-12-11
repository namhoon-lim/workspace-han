import { CircleIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const coupons = [
  {
    id: 1,
    badge: { text: "NEW", color: "bg-[#0d56e4] text-white" },
    title: "신규가입 웰컴쿠폰",
    description: "5,000원 할인",
    period: "2024.01.01 ~ 2024.12.31",
    condition: "가입 후 첫 송금 시",
  },
  {
    id: 2,
    badge: { text: "VIP", color: "bg-[#ffc107] text-black" },
    title: "VIP 전용 할인 쿠폰",
    description: "10,000원 할인",
    period: "2024.01.01 ~ 2024.12.31",
    condition: "VIP 등급 회원 전용",
  },
  {
    id: 3,
    badge: { text: "EVENT", color: "bg-[#e81f1f] text-white" },
    title: "특별 이벤트 쿠폰",
    description: "20,000원 할인",
    period: "2024.06.01 ~ 2024.06.30",
    condition: "100만원 이상 송금 시",
  },
  {
    id: 4,
    badge: { text: "NEW", color: "bg-[#0d56e4] text-white" },
    title: "친구 초대 리워드",
    description: "15,000원 할인",
    period: "2024.01.01 ~ 2024.12.31",
    condition: "친구 1명 초대 시",
  },
  {
    id: 5,
    badge: { text: "EVENT", color: "bg-[#e81f1f] text-white" },
    title: "주말 특별 할인",
    description: "50,000원 할인",
    period: "2024.06.15 ~ 2024.06.16",
    condition: "주말 송금 시 자동 적용",
  },
];

export const CouponDetailsSection = () => {
  return (
    <div className="flex flex-col items-start gap-4 px-5 py-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="font-title-18-SB font-[number:var(--title-18-SB-font-weight)] text-[#1c253f] text-[length:var(--title-18-SB-font-size)] tracking-[var(--title-18-SB-letter-spacing)] leading-[var(--title-18-SB-line-height)] [font-style:var(--title-18-SB-font-style)]">
          보유 쿠폰
        </div>
        <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#003fbb] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
          총 할인액: 100,000원
        </div>
      </div>

      <ScrollArea className="w-full h-[400px]">
        <div className="flex flex-col items-start gap-3 w-full">
          {coupons.map((coupon) => (
            <Card
              key={coupon.id}
              className="w-full bg-white rounded-xl border border-solid border-[#dfe3ec] overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start gap-3 p-4">
                  <div className="flex items-center justify-between w-full">
                    <Badge
                      className={`${coupon.badge.color} h-5 px-1.5 rounded font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]`}
                    >
                      {coupon.badge.text}
                    </Badge>
                    <CircleIcon className="w-5 h-5 text-[#dfe3ec]" />
                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#1c253f] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {coupon.title}
                    </div>
                    <div className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#003fbb] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
                      {coupon.description}
                    </div>
                  </div>

                  <Separator className="w-full" />

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                      유효기간: {coupon.period}
                    </div>
                    <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
                      사용조건: {coupon.condition}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <div className="flex flex-col items-start gap-2 pt-4 w-full border-t border-[#dfe3ec]">
        <div className="font-body-14-m font-[number:var(--body-14-m-font-weight)] text-[#85888e] text-[length:var(--body-14-m-font-size)] tracking-[var(--body-14-m-letter-spacing)] leading-[var(--body-14-m-line-height)] [font-style:var(--body-14-m-font-style)]">
          유의사항
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            • 쿠폰은 유효기간 내에만 사용 가능합니다.
          </div>
          <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            • 1회 송금 시 1개의 쿠폰만 적용 가능합니다.
          </div>
          <div className="font-caption-title-13-r font-[number:var(--caption-title-13-r-font-weight)] text-[#a2a8bf] text-[length:var(--caption-title-13-r-font-size)] tracking-[var(--caption-title-13-r-letter-spacing)] leading-[var(--caption-title-13-r-line-height)] [font-style:var(--caption-title-13-r-font-style)]">
            • 쿠폰은 송금 수수료에서 차감됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
