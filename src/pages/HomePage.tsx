import React from "react";
import DownloadCard from "../components/DownloadCard";
import MainCanvas from "../components/three/MainCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-screen px-6 md:px-10 relative"
      style={{ height: "1000vh" }}
    >
      <MainCanvas />
      <div className="flex flex-col h-screen py-1">
        <Navbar />
        <section className=" max-w-6xl  mx-auto grid md:grid-cols-2 gap-16 items-center  flex-1 h-full mt-15">
          {/* LEFT */}
          <div className="select-none z-200">
            <h1
              className="
              text-5xl md:text-6xl font-extrabold mb-6
              text-transparent bg-clip-text
              bg-linear-to-r from-indigo-400 via-pink-400 to-red-400
            "
            >
              SlicePDF
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Transform, split, and manage your Files instantly. Fast, secure,
              and built for modern workflows.
            </p>
          </div>

          {/* RIGHT – DOWNLOAD CARD */}
          <DownloadCard />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
