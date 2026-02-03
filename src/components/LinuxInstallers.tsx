import { useRef, useState } from "react";
import gsap from "gsap";

const installers = ["Arch", "AppImage", "DEB", "RPM"] as const;

type Installer = (typeof installers)[number];

export default function LinuxInstallers() {
  const [active, setActive] = useState<Installer>("Arch");
  const contentRef = useRef<HTMLDivElement>(null);

  const switchInstaller = (next: Installer) => {
    if (next === active || !contentRef.current) return;

    gsap.to(contentRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        setActive(next);

        gsap.fromTo(
          contentRef.current,
          { x: 20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          },
        );
      },
    });
  };

  return (
    <div className="mt-4">
      {/* SUB NAV */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {installers.map((name) => (
          <div
            key={name}
            onClick={() => switchInstaller(name)}
            className={`
                rounded-lg text-xs
                transition-colors duration-300
                text-white  cursor-pointer py-1
                  ${
                    active === name
                      ? "text-transparent  bg-clip-text bg-linear-to-r from-indigo-400 via-pink-400 to-red-400 "
                      : " hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-indigo-400 hover:via-pink-400 hover:to-red-400"
                  }
                `}
          >
            {name}
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div ref={contentRef}>
        <InstallerContent type={active} />
      </div>
    </div>
  );
}
function InstallerContent({ type }: { type: string }) {
  switch (type) {
    case "AppImage":
      return (
        <>
          <p className="text-sm text-white/70">
            Works on almost all Linux distributions
          </p>

          <a
            href="https://github.com/soamn/slicePDF/releases/latest/download/slicePDF.AppImage"
            className="block mt-4"
          >
            <button className="w-full py-3 rounded-xl  border-0 cursor-pointer transition">
              Download AppImage
            </button>
          </a>

          <pre className="mt-3 text-[12px] text-white/70 bg-white/10 rounded-md px-3 py-2 overflow-scroll">
            chmod +x ./slicePDF.AppImage
          </pre>
        </>
      );

    case "DEB":
      return (
        <>
          <p className="text-sm text-white/70">
            Ubuntu · Debian · Mint · Pop!_OS
          </p>

          <a
            href="https://github.com/soamn/slicePDF/releases/latest/download/slicePDF.deb"
            className="block mt-4"
          >
            <button className="w-full py-3 rounded-xl  border-0 cursor-pointer transition">
              Download .deb
            </button>
          </a>

          <pre className="mt-3 text-xs text-white/70 bg-white/10 rounded-md px-3 py-2 overflow-scroll">
            sudo dpkg -i slicePDF.deb
          </pre>
        </>
      );

    case "RPM":
      return (
        <>
          <p className="text-sm text-white/70">Fedora · RHEL · openSUSE</p>

          <a
            href="https://github.com/soamn/slicePDF/releases/latest/download/slicePDF.rpm"
            className="block mt-4"
          >
            <button className="w-full py-3 rounded-xl  border-0 cursor-pointer transition">
              Download .rpm
            </button>
          </a>

          <pre className="mt-3 text-xs overflow-scroll text-white/70 bg-white/10 rounded-md px-3 py-2">
            sudo rpm -i slicePDF.rpm
          </pre>
        </>
      );

    case "Arch":
      return (
        <>
          <p className="text-sm text-white/70">Arch Linux · Manjaro</p>

          <pre className="mt-2 text-xs text-white/70 bg-white/10 rounded-md px-3 py-2 overflow-scroll">
            yay -S slicepdf
          </pre>
        </>
      );

    default:
      return null;
  }
}
