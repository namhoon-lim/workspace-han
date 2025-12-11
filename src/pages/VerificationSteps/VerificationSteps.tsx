import Layout from "@/components/Layout";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const verificationSteps = [
  {
    icon: "https://c.animaapp.com/SXpbAKOQ/img/ico28-step-1.svg",
    label: "여권 앞면",
    cameraIcon: "https://c.animaapp.com/SXpbAKOQ/img/ico32-camera-2.svg",
  },
  {
    icon: "https://c.animaapp.com/SXpbAKOQ/img/ico28-step-1.svg",
    label: "셀카",
    cameraIcon: "https://c.animaapp.com/SXpbAKOQ/img/ico32-camera-2.svg",
  },
];

export const VerificationSteps = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
      data-model-id="2674:63947"
      backTo="/"
    >
      <div className="flex flex-col flex-1 w-full bg-white">
        <section className="flex flex-col gap-2 pt-[22px] px-6 w-full">
          <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
            신분증 및 셀카를
            <br />
            촬영해주세요.
          </h1>

          <p className="font-body-16-r font-[number:var(--body-16-r-font-weight)] text-[#717682] text-[length:var(--body-16-r-font-size)] tracking-[var(--body-16-r-letter-spacing)] leading-[var(--body-16-r-line-height)] [font-style:var(--body-16-r-font-style)]">
            본인 신분증을 준비해주세요.
          </p>
        </section>

        <section className="flex flex-col gap-3.5 pt-[42px] px-6 flex-1 w-full relative">
          <div className="flex flex-col gap-[22px] w-full relative">
            <div className="absolute h-[calc(100%_-_130px)] top-[29px] left-[29px] w-px">
              <img
                className="w-full h-full object-cover"
                alt="Line"
                src="https://c.animaapp.com/SXpbAKOQ/img/line-209.svg"
              />
            </div>

            {verificationSteps.map((step, index) => (
              <Card
                key={`step-${index}`}
                className="border-[#dfe3ec] rounded-lg overflow-hidden"
              >
                <CardContent className="flex items-center justify-between gap-5 px-4 py-3.5 min-h-[54px]">
                  <img
                    className="w-[26px] h-[26px]"
                    alt="Step"
                    src={step.icon}
                  />

                  <div className="flex-1">
                    <p className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-[#5e616b] text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                      {step.label}
                    </p>
                  </div>

                  <img
                    className="w-[26px] h-[26px]"
                    alt="Camera"
                    src={step.cameraIcon}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <footer className="flex flex-col items-center px-6 w-full bg-white">
        <Button
          variant="link"
          className="h-auto flex items-center justify-center gap-0.5 pb-7 text-[#003fbb]"
          asChild
        >
          <Link to="/capturetipsu95026">
            <span className="font-title-15-SB font-[number:var(--title-15-SB-font-weight)] text-[length:var(--title-15-SB-font-size)] tracking-[var(--title-15-SB-letter-spacing)] leading-[var(--title-15-SB-line-height)] [font-style:var(--title-15-SB-font-style)]">
              촬영 TIP을 확인하세요
            </span>
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </Button>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex items-center justify-center rounded-xl shadow-[0px_-20px_20px_#ffffff] w-full min-h-[54px]">
            <Button
              className="h-auto min-h-[54px] flex-1 bg-[#0d56e4] hover:bg-[#0d56e4]/90 rounded-xl px-[26px] py-1.5"
              asChild
            >
              <Link to="/idregistrationmethodu95025">
                <span className="font-title-16-b font-[number:var(--title-16-b-font-weight)] text-white text-[length:var(--title-16-b-font-size)] tracking-[var(--title-16-b-letter-spacing)] leading-[var(--title-16-b-line-height)] [font-style:var(--title-16-b-font-style)]">
                  다음
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full h-4" />
      </footer>
    </Layout>
  );
};
