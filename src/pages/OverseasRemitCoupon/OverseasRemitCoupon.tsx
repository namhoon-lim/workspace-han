import React from "react";
import { CouponDetailsSection } from "./sections/CouponDetailsSection/CouponDetailsSection";
import { CouponListSection } from "./sections/CouponListSection/CouponListSection";

export const OverseasRemitCoupon = () => {
  return (
    <div
      className="flex flex-col items-center relative bg-white overflow-hidden"
      data-model-id="2674:64803"
    >
      <CouponListSection />
      <CouponDetailsSection />
    </div>
  );
};
