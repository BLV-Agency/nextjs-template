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
      {/* Grid layer — exact Figma positioning */}
      <div style={{ position: "absolute", inset: 0 }}>

        {/* Vector 1 — inset: 8.79% -28.31% -35.94% -21.31%, rotate -1.72deg */}
        <div
          style={{
            position: "absolute",
            top: "8.79%",
            right: "-28.31%",
            bottom: "-35.94%",
            left: "-21.31%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mixBlendMode: "multiply",
          }}
        >
          <img
            src="/coming-soon/grid-1.svg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              transform: "rotate(-1.72deg)",
              opacity: 0.54,
              objectFit: "fill",
              display: "block",
            }}
          />
        </div>

        {/* Vector 2 — inset: 6.94% -29.35% -37.79% -22.34%, rotate -1.72deg */}
        <div
          style={{
            position: "absolute",
            top: "6.94%",
            right: "-29.35%",
            bottom: "-37.79%",
            left: "-22.34%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mixBlendMode: "multiply",
          }}
        >
          <img
            src="/coming-soon/grid-2.svg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              transform: "rotate(-1.72deg)",
              opacity: 0.54,
              objectFit: "fill",
              display: "block",
            }}
          />
        </div>
      </div>

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
