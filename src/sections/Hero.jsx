import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../components/Button";

const Hero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imgRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-40 max-lg:pt-32 max-md:pt-24 overflow-hidden"
    >
      <div
        className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 
                      flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Kiri: Teks */}
        <div ref={textRef} className="max-w-[512px] max-lg:max-w-[388px]">
          <div className="mb-2 text-white-50 uppercase text-[12px] font-bold leading-[18px] tracking-[0.3em]">
            Landing Page
          </div>

          <h1
            className="mb-6 text-[84px] text-white-50 font-bold leading-[84px] tracking-[-0.03em] 
                         max-lg:mb-7 max-lg:text-[64px] max-lg:leading-[64px] 
                         max-md:mb-4 max-md:text-5xl max-md:leading-12"
          >
            Your Trip, Your Story
          </h1>

          <p className="max-w-[440px] mb-14 max-md:mb-10 text-[22px] leading-[32px]">
            Jelajahi destinasi terbaik, kuliner, dan budaya hanya dalam satu
            genggaman.
          </p>

          <Button
            text="See My Documention"
            className="w-60 h-12 md:w-80 md:h-16"
          />
        </div>

        {/* Kanan: Gambar */}
        <div ref={imgRef} className="flex-1 flex justify-center">
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
