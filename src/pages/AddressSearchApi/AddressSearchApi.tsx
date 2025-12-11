import Layout from "@/components/Layout";

export const AddressSearchApi = () => {
  return (
    <Layout
      className="flex flex-col min-h-screen bg-white"
      data-model-id="34978:32183"
    >
      <section className="flex flex-col w-full bg-white">
        <div className="flex flex-col gap-2 pt-[22px] pb-0 px-6 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-title-24-b font-[number:var(--title-24-b-font-weight)] text-[#0b0c0e] text-[length:var(--title-24-b-font-size)] tracking-[var(--title-24-b-letter-spacing)] leading-[var(--title-24-b-line-height)] [font-style:var(--title-24-b-font-style)]">
              주소검색
            </h1>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-6 pt-[42px] pb-6 px-0 flex-1 w-full bg-[#ffdddd]">
        <div className="font-title-24-m font-[number:var(--title-24-m-font-weight)] text-white text-[length:var(--title-24-m-font-size)] text-center tracking-[var(--title-24-m-letter-spacing)] leading-[var(--title-24-m-line-height)] whitespace-nowrap [font-style:var(--title-24-m-font-style)]">
          API
        </div>
      </div>
    </Layout>
  );
};
