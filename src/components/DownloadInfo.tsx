import LinuxInstallers from "./LinuxInstallers";

function DownloadInfo({ platform }: { platform: string }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-1">{platform}</h4>
      {platform === "Linux" && <LinuxInstallers />}

      {platform === "macOS" && (
        <>
          <p className="mt-3 text-sm text-white/70">
            Pre Release for MacOS *can contain bugs*{" "}
          </p>

          <a href="https://github.com/soamn/slicePDF/releases/download/v0.1.4/slicePDF_0.1.4_aarch64.dmg">
            <button
              className="
          mt-6 w-full py-3 rounded-xl border-0
            transition 
        "
            >
              Pre-Release
            </button>
          </a>
        </>
      )}

      {platform === "Windows" && (
        <>
          <p className="mt-3 text-sm text-white/70">Not Yet Released</p>
        </>
      )}
    </div>
  );
}

export default DownloadInfo;
