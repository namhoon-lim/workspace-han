import React from "react";
import { Keypad } from "@/components/common/Keypad";

export const FrameWrapperSubsection = () => {
  return (
    <section className="flex flex-col items-start w-full">
      {/* Keypad Section */}
      <Keypad submitButtonColor="#0d56e4" />
    </section>
  );
};
