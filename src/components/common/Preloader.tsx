import { useEffect, useState } from "react";
import { gsap } from "gsap";

function Preloader() {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 15) + 5;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        const timeline = gsap.timeline({
          onComplete: () => {
            setVisible(false);
          }
        });

        timeline
          .to(".preloader-counter", {
            opacity: 0,
            duration: 0.2
          })
          .to(".preloader-line", {
            scaleX: 1,
            duration: 0.4,
            ease: "power3.inOut"
          })
          .to(".preloader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
          });
      }
      setCounter(count);
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <div className="preloader-brand">
          ATELIER
        </div>

        <div className="preloader-meta">
          <span>
            INTERIOR DESIGN STUDIO
          </span>

          <span className="preloader-counter">
            {String(counter).padStart(2, "0")}
          </span>
        </div>

        <div className="preloader-track">
          <span
            className="preloader-line"
            style={{ transform: `scaleX(${counter / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
