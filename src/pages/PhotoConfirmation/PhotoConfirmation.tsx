import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PhotoConfirmation = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#00000099] items-center justify-center"
      data-model-id="40000003:240089"
    >
      {/* Photo Confirmation Modal */}
      <Card className="w-[343px] rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* Photo Preview Area */}
          <div className="relative w-full h-[343px] bg-[#d9d9d9]">
            {/* Placeholder for photo preview */}
          </div>

          {/* Confirmation Text */}
          <div className="flex flex-col items-center gap-2 p-6">
            <p className="font-body-15-r font-[number:var(--body-15-r-font-weight)] text-[#0b0c0e] text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)]">
              이 사진으로 확정하시겠습니까?
            </p>
          </div>

          {/* Button Group */}
          <div className="flex gap-2 px-6 pb-6">
            <Button
              variant="outline"
              className="flex-1 h-[54px] rounded-xl border-[#dfe3ec] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
              asChild
            >
              <Link to="/newaccountpasswordwechatu95018">재시도</Link>
            </Button>
            <Button
              className="flex-1 h-[54px] rounded-xl bg-[#003fbb] hover:bg-[#002a7a] font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]"
              asChild
            >
              <Link to="/passwordresetu95020">확인</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
