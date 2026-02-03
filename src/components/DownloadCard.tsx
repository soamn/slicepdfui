import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import DownloadInfo from "./DownloadInfo";

const platforms = ["Linux", "macOS", "Windows"] as const;
type Platform = (typeof platforms)[number];

export default function DownloadCard() {
  const [active, setActive] = useState<Platform>("Linux");

  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  // ---- helpers ----
  const movePillToIndex = (index: number) => {
    if (!tabsRef.current || !pillRef.current) return;

    const buttons =
      tabsRef.current.querySelectorAll<HTMLButtonElement>("button[data-tab]");

    const target = buttons[index];
    if (!target) return;

    gsap.to(pillRef.current, {
      x: target.offsetLeft,
      width: target.offsetWidth,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  // ---- switch tab ----
  const switchPlatform = (platform: Platform, index: number) => {
    if (platform === active || !contentRef.current) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        setActive(platform);

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
        );
      },
    });

    movePillToIndex(index);
  };

  // ---- initial pill positioning ----
  useLayoutEffect(() => {
    if (!tabsRef.current || !pillRef.current) return;

    const buttons =
      tabsRef.current.querySelectorAll<HTMLButtonElement>("button[data-tab]");

    if (!buttons.length) return;

    gsap.set(pillRef.current, {
      x: buttons[0].offsetLeft,
      width: buttons[0].offsetWidth,
    });
  }, []);

  return (
    <div
      className="
        relative rounded-2xl p-6
        bg-white/10 backdrop-blur-lg
        border border-white/20
        shadow-xl shadow-black/10
        w-120 min-h-84 
        
      "
    >
      {/* NAV */}
      <div className="mb-6 flex justify-center ">
        <div
          ref={tabsRef}
          className="relative inline-flex gap-2 p-1 rounded-xl "
        >
          {/* ACTIVE PILL */}
          <div
            ref={pillRef}
            className="
              absolute top-1 bottom-1
              rounded-3xl
              bg-linear-to-r from-indigo-400 to-red-300
              backdrop-blur-md
              pointer-events-none
              z-100
            "
          />

          {platforms.map((platform, index) => {
            const isActive = platform === active;

            return (
              <button
                key={platform}
                data-tab
                onClick={() => switchPlatform(platform, index)}
                className={`
                    border-0 z-101 bg-transparent
        relative px-4 py-2 rounded-lg text-sm font-medium
        transition-colors
        ${isActive ? "text-white " : " hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-indigo-400 hover:via-pink-400 hover:to-red-400"}
      `}
              >
                {platform}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <div ref={contentRef}>
        <DownloadInfo platform={active} />
      </div>
    </div>
  );
}
