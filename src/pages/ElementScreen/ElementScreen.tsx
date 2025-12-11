import React, { useState } from "react";
import { PopupHeader } from "@/components/PopupHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  { id: 1, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
  { id: 2, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
  { id: 3, src: "https://c.animaapp.com/FyEwllI9/img/image-871@2x.png" },
];

export const ElementScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      data-model-id="40000001:46437"
    >
      <div className="flex flex-col w-full h-screen items-center justify-end bg-overlay-dark">
        <Card className="flex flex-col w-full max-w-432 bg-white rounded-t-20 overflow-hidden border-0">
          <CardContent className="p-0 w-full">
            <div
              className="relative w-full overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="relative w-full flex-shrink-0">
                    <img
                      className="w-full aspect-[1.48]"
                      alt={`Slide ${index + 1}`}
                      src={slide.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 py-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-5 bg-indicator-active"
                      : "w-2 bg-indicator-inactive"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-start gap-3 px-6 py-0 w-full">
              <Button
                variant="ghost"
                className="flex-1 font-body-15-r font-[number:var(--body-15-r-font-weight)] text-grayscale-05 text-[length:var(--body-15-r-font-size)] tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] [font-style:var(--body-15-r-font-style)] h-auto p-0 justify-start hover:bg-transparent"
              >
                오늘 하루 보지 않기
              </Button>

              <Button
                variant="ghost"
                className="w-fit font-body-15-r font-[number:var(--body-15-r-font-weight)] text-grayscale-05 text-[length:var(--body-15-r-font-size)] text-center tracking-[var(--body-15-r-letter-spacing)] leading-[var(--body-15-r-line-height)] whitespace-nowrap [font-style:var(--body-15-r-font-style)] h-auto p-0 hover:bg-transparent"
              >
                닫기
              </Button>
            </div>
          </CardContent>
        </Card>

        <PopupHeader />
      </div>
    </div>
  );
};
