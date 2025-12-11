import {ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const addressOptions = [
  {
    id: "direct-input",
    icon: "https://c.animaapp.com/Kel660N3/img/img28-search-group-1.svg",
    title: "직접 입력 하기",
    alt: "Search group",
  },
  {
    id: "photo-upload",
    icon: "https://c.animaapp.com/Kel660N3/img/img28-direct-address.svg",
    title: "주소 사진 업로드",
    alt: "Direct address",
  },
];

export const AddressInputMethod = () => {
  return (
    <Layout className="flex flex-col min-h-screen bg-white" backTo="/">
      <div className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start gap-2 pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            주소 입력 방법을 선택해 주세요.
          </h1>
        </div>

        <div className="flex flex-col flex-1 items-start gap-3.5 pt-[42px] pb-6 px-6 w-full">
          {addressOptions.map((option) => (
            <Card key={option.id} className="w-full border-[#dfe3ec] rounded-xl overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center justify-between p-4 h-[62px]">
                <div className="flex items-center gap-2 flex-1">
                  <img
                    className="w-7 h-7"
                    alt={option.alt}
                    src={option.icon}
                  />
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {option.title}
                    </span>
                  </div>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
