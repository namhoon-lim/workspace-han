import { ContainerSubsection } from "./sections/ContainerSubsection/ContainerSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";

export const Transform = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 transform-bg relative transform-min-width"
      data-model-id="3:38742"
    >
      <FrameSubsection />
      <ContainerSubsection />
    </div>
  );
};
