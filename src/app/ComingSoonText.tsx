"use client";

import { useEffect, useState } from "react";

const LANGUAGES = [
  { label: "Site en construction",      sub: "Notre équipe travaille sur ce projet. Revenez bientôt." },
  { label: "Under construction",         sub: "Our team is working on this project. Come back soon." },
  { label: "En construcción",            sub: "Nuestro equipo está trabajando en este proyecto. Vuelve pronto." },
  { label: "Em construção",              sub: "Nossa equipe está trabalhando neste projeto. Volte em breve." },
  { label: "Im Aufbau",                  sub: "Unser Team arbeitet an diesem Projekt. Kommen Sie bald wieder." },
  { label: "In costruzione",             sub: "Il nostro team sta lavorando a questo progetto. Torna presto." },
  { label: "قيد الإنشاء",               sub: "فريقنا يعمل على هذا المشروع. عد قريباً." },
  { label: "建設中",                     sub: "チームがこのプロジェクトに取り組んでいます。もうすぐお届けします。" },
];

export default function ComingSoonText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % LANGUAGES.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = LANGUAGES[index];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        textAlign: "center",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
        minHeight: "80px",
      }}
    >
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "rgba(0,0,0,0.65)",
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        {current.label}
      </p>
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(0,0,0,0.5)",
          margin: 0,
          letterSpacing: "0.01em",
          maxWidth: "300px",
          lineHeight: "1.7",
        }}
      >
        {current.sub}
      </p>
    </div>
  );
}
