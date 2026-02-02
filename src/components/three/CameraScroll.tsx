import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CameraScroll({ rig }: any) {
  useEffect(() => {
    if (!rig.current) return;

    gsap.to(rig.current.rotation, {
      y: Math.PI * 2, // ~108° orbit
      ease: "none",
      scrollTrigger: {
        pin: true,
        pinSpacing: false,
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(rig.current.position, {
      y: -1,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [rig]);

  return null;
}

export default CameraScroll;
