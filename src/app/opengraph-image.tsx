import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alpha Sports — Personal Training Studio St. Gallen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          backgroundImage:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
          padding: "60px",
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #fb923c, #f97316)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Alpha Sports
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f97316",
              borderRadius: "2px",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#f97316",
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
            }}
          >
            Personal Training Studio
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "8px",
            }}
          >
            Individuelles Training & Ernährungsberatung in St. Gallen
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span style={{ color: "#fbbf24", fontSize: "24px" }}>★★★★★</span>
            <span>5.0 auf Google — 68+ Bewertungen</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          alpha-sports.ch
        </div>
      </div>
    ),
    { ...size }
  );
}
