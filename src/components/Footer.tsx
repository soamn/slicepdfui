import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white/70 relative py-2 text-center ">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="text-[12px]">
          3D assets Credits:{" "}
          <p className="inline">
            <a
              href="https://skfb.ly/6R8LL"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-white "
            >
              "Cardboard Box"
            </a>{" "}
            &
            <a
              href="https://skfb.ly/6BPKs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white "
            >
              " OLD Paper & Cardboard Boxes "
            </a>{" "}
          </p>
        </p>
        <p className="text-[12px]">
          © {new Date().getFullYear()} SlicedAppleStudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
