import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";

export const AddressPhotoConfirm = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
    >
      <div className="flex flex-col flex-1 w-full bg-white">
        <div className="flex flex-col items-start pt-[22px] pb-0 px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            주소 사진을 확인해 주세요.
          </h1>
        </div>

        <div className="flex flex-col items-center gap-8 pt-[42px] pb-6 px-6 flex-1">
          <div className="flex flex-col gap-4 w-full items-center">
            <img
              className="w-full aspect-[1.56] rounded-lg"
              alt="Address verification"
              src="https://c.animaapp.com/NpKP4m4n/img/image-4832@2x.png"
            />

            <Button
              variant="outline"
              className="w-full h-auto min-h-[46px] rounded-[30px] border-[#b7ccf7] bg-white hover:bg-gray-50"
            >
              <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[#0d56e4] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
                다시 등록하기
              </span>
            </Button>
          </div>

          <div className="flex items-start gap-1.5 w-full">
            <Checkbox
              id="address-confirmation"
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked as boolean)}
              className="w-6 h-6 mt-0.5"
            />
            <label
              htmlFor="address-confirmation"
              className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#5e616b] text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] cursor-pointer"
            >
              (필수)상기 주소는 본인이 실 거주하고 있는 주소임을 확인합니다.
            </label>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center justify-end px-6 py-0 w-full">
        <Button className="w-full h-auto min-h-[54px] rounded-xl bg-[#0d56e4] hover:bg-[#0d56e4]/90">
          <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
            확인
          </span>
        </Button>

        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
