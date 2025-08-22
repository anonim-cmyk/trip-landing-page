"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const imgRef = useRef(null);
  const gridRef = useRef([]);

  // Animasi grid pakai ScrollTrigger
  useEffect(() => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#gallery-section",
          start: "top 80%", // mulai animasi ketika section 80% muncul
        },
      }
    );
  }, []);

  // Animasi modal
  useEffect(() => {
    if (selected) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        imgRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [selected]);

  const closeModal = () => {
    gsap.to(imgRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelected(null),
    });
  };

  return (
    <section
      id="gallery-section"
      className="w-full md:mt-40 mt-20 px-5 md:px-10 xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <h2 className="text-3xl font-bold text-center">My Gallery</h2>

        {/* Grid Gallery */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={(el) => (gridRef.current[idx] = el)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[200px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selected && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
            onClick={closeModal}
          >
            <div
              className="relative max-w-[90%] max-h-[90%] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                ref={imgRef}
                src={selected.src}
                alt={selected.alt}
                className="max-h-[90vh] max-w-full object-contain rounded-lg"
              />
              <button
                className="absolute top-0 right-0 bg-white/90 text-black rounded-full px-3 py-1 text-lg font-bold shadow-md cursor-pointer hover:bg-white"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
