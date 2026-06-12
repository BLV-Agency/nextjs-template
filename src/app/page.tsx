import ComingSoonText from "./ComingSoonText";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f5f4",
      }}
    >
      {/* Grid layer — exact Figma */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "8.79%", right: "-28.31%", bottom: "-35.94%", left: "-21.31%",
            display: "flex", alignItems: "center", justifyContent: "center",
            mixBlendMode: "multiply",
          }}
        >
          <img src="/coming-soon/grid-1.svg" alt="" style={{ width: "100%", height: "100%", transform: "rotate(-1.72deg)", opacity: 0.54, objectFit: "fill", display: "block" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "6.94%", right: "-29.35%", bottom: "-37.79%", left: "-22.34%",
            display: "flex", alignItems: "center", justifyContent: "center",
            mixBlendMode: "multiply",
          }}
        >
          <img src="/coming-soon/grid-2.svg" alt="" style={{ width: "100%", height: "100%", transform: "rotate(-1.72deg)", opacity: 0.54, objectFit: "fill", display: "block" }} />
        </div>
      </div>

      {/* Noise bottom */}
      <img src="/coming-soon/noise.png" alt="" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "350px", objectFit: "cover", opacity: 0.04, pointerEvents: "none" }} />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          userSelect: "none",
        }}
      >
        <img src="/coming-soon/logo.svg" alt="BLV Agency" width={140} height={92} style={{ display: "block" }} />

        <div style={{ width: "32px", height: "1px", background: "rgba(0,0,0,0.25)" }} />

        <ComingSoonText />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "20px", height: "1px", background: "rgba(0,0,0,0.15)" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>
            BLV Agency — {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
