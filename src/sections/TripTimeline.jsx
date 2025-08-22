"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const timeLineGallery = [
  {
    id: 1,
    title: "Trip ke Gunung Bromo",
    desc: "Menikmati sunrise di puncak gunung dengan suasana yang menenangkan.",
    imgPath: "/images/image-1.jpg",
  },
  {
    id: 2,
    title: "Liburan ke Bali",
    desc: "Bersantai di pantai Kuta dan mengunjungi Pura Tanah Lot.",
    imgPath: "/images/image-2.jpg",
  },
  {
    id: 3,
    title: "Eksplorasi Yogyakarta",
    desc: "Mengunjungi Candi Borobudur, Malioboro, dan kuliner khas Jogja.",
    imgPath: "/images/image-3.jpg",
  },
];

const TripTimeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi line timeline
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Animasi tiap card saat muncul
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animasi marker (bulatan)
      gsap.utils.toArray(".marker").forEach((marker) => {
        gsap.from(marker, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: marker,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trip-timeline"
      className="w-full md:mt-40 mt-20 px-5 md:px-10 xl:px-0"
      ref={containerRef}
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My TimeLine" sub="See My Trip" />

        <div className="mt-20 relative">
          {/* Garis timeline */}
          <div
            ref={lineRef}
            className="absolute left-1 md:left-1/2 top-0 h-full w-[3px] -translate-x-1/2 gradient-line"
          />

          <div className="space-y-20 relative z-10">
            {timeLineGallery.map((gallery, index) => (
              <div
                key={gallery.id}
                className={`timeline-item flex flex-col md:flex-row gap-10 items-start md:items-center relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Marker bulat di garis */}
                <div className="absolute left-1 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="marker w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black shadow-lg"></div>
                </div>

                {/* Gambar */}
                <div className="w-full md:w-1/2">
                  <GlowCard card={gallery} index={index}>
                    <img
                      src={gallery.imgPath}
                      alt={gallery.title}
                      className="rounded-xl w-full h-[320px] object-cover"
                    />
                  </GlowCard>
                </div>

                {/* Konten */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold">{gallery.title}</h3>
                  <p className="text-blue-50 mt-3">{gallery.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripTimeline;
