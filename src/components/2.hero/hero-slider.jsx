import React, { useState, useEffect } from "react";

export default function HeroSlider({ slides, autoMs = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, autoMs);
    return () => clearInterval(interval);
  }, [slides, autoMs]);

  if (!slides || slides.length === 0) return null;

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  const slide = slides[current];

  return (
    <div style={{
      height: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      transition: "background-color .5s",
      backgroundColor: slide.bg || "#333"
    }}>
      <div style={{ textAlign: "center", padding: 20, maxWidth: 900 }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>{slide.title}</h1>
        <p style={{ marginTop: 8 }}>{slide.desc}</p>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
          <button onClick={prev} style={{ padding: "8px 12px", borderRadius: 6 }}>Prev</button>
          <button onClick={next} style={{ padding: "8px 12px", borderRadius: 6 }}>Next</button>
        </div>

        <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 6 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`go to ${i}`}
              style={{
                width: 10, height: 10, borderRadius: 5,
                background: i === current ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none", padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
