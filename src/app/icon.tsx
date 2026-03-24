import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          borderRadius: "6px",
          fontSize: "20px",
          fontWeight: 800,
          color: "#f97316",
          letterSpacing: "-1px",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
