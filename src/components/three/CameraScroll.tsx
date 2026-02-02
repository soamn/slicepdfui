import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CameraScroll({ rig }: any) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (!rig.current) return;

    const rotTween = gsap.to(rig.current.rotation, {
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        pin: true,
        pinSpacing: false,
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: () => invalidate(), // ✅ TS-safe
      },
    });

    const posTween = gsap.to(rig.current.position, {
      y: -1,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: () => invalidate(), // ✅ TS-safe
      },
    });

    return () => {
      rotTween.kill();
      posTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [rig, invalidate]);

  return null;
}

export default CameraScroll;
