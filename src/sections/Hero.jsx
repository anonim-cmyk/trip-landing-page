import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="pt-40 max-lg:pt-32 max-md:pt-24">
      <div
        className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 
                      flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Kiri: Teks */}
        <div className="max-w-[512px] max-lg:max-w-[388px]">
          <div className="mb-2 text-white-50 uppercase text-[12px] font-bold leading-[18px] tracking-[0.3em]">
            Landing Page
          </div>

          <h1
            className="mb-6 text-[84px] text-white-50 font-bold leading-[84px] tracking-[-0.03em] 
                         max-lg:mb-7 max-lg:text-[64px] max-lg:leading-[64px] 
                         max-md:mb-4 max-md:text-5xl max-md:leading-12"
          >
            Amazingly Simple
          </h1>

          <p className="max-w-[440px] mb-14 max-md:mb-10 text-[22px] leading-[32px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            maxime deleniti incidunt dolor eum.
          </p>

          <Button
            text="See My Documention"
            className="w-60 h-12 md:w-80 md:h-16"
          />
        </div>

        {/* Kanan: Gambar */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/image-satu.png"
            alt="hero"
            className="max-w-[600px] w-full h-auto rounded-md md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
