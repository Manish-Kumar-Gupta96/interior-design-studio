import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

function ImageReveal({
  src,
  alt,
  className = "",
  aspectRatio = "landscape"
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`image-wrap aspect-${aspectRatio} ${className}`}
      style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default ImageReveal;
