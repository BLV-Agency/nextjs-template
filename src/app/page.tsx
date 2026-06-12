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
      {/* Grid overlay 1 */}
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

      {/* Grid overlay 2 */}
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

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <img
          src="/coming-soon/logo.png"
          alt="BLV Agency"
          width={174}
          height={115}
          style={{ display: "block" }}
        />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "25px",
            fontWeight: 400,
            letterSpacing: "-1px",
            lineHeight: "normal",
            color: "#000000",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Under construction... 🚧
        </p>
      </div>
    </main>
  );
}
