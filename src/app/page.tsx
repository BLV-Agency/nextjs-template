import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#f6f5f4" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "soft-light", opacity: 0.54 }}
      >
        <Image src="/coming-soon/grid-1.svg" alt="" fill className="object-cover" priority />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "soft-light", opacity: 0.54 }}
      >
        <Image src="/coming-soon/grid-2.svg" alt="" fill className="object-cover" priority />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[350px] pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <Image src="/coming-soon/noise.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative flex flex-col items-center gap-6 z-10">
        <Image src="/coming-soon/logo.png" alt="BLV Agency" width={174} height={115} priority />
        <p
          className="text-black font-normal whitespace-nowrap"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "25px", letterSpacing: "-1px" }}
        >
          Under construction... 🚧
        </p>
      </div>
    </main>
  );
}
