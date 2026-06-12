import GridBackground from "./GridBackground";

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
      {/* Figma grid — soft-light overlay */}
      <img
        src="/coming-soon/grid-1.svg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "soft-light",
          opacity: 0.54,
          pointerEvents: "none",
        }}
      />
      <img
        src="/coming-soon/grid-2.svg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          mixBlendMode: "soft-light",
          opacity: 0.54,
          pointerEvents: "none",
        }}
      />

      {/* Noise bottom */}
      <img
        src="/coming-soon/noise.png"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "350px",
          objectFit: "cover",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      {/* Interactive hover grid on top */}
      <GridBackground />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <img
          src="/coming-soon/logo.svg"
          alt="BLV Agency"
          width={140}
          height={92}
          style={{ display: "block" }}
        />

        <div style={{ width: "32px", height: "1px", background: "rgba(0,0,0,0.15)" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.12em", color: "rgba(0,0,0,0.4)", margin: 0, textTransform: "uppercase" }}>
            Site en construction
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 400, color: "rgba(0,0,0,0.35)", margin: 0, letterSpacing: "0.01em", maxWidth: "280px", lineHeight: "1.7" }}>
            Notre équipe travaille sur ce projet.<br />Revenez bientôt.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "20px", height: "1px", background: "rgba(0,0,0,0.1)" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "rgba(0,0,0,0.25)" }}>
            BLV Agency — {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
