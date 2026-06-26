import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #6C5CE7 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00D2FF 0%, transparent 50%)",
          opacity: 0.9,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 64 }}>🐕</span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#FAFAFA",
              letterSpacing: "-0.02em",
            }}
          >
            CostDog
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FAFAFA",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 800,
          }}
        >
          See Every Token.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #6C5CE7, #00D2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Control Every Dollar.
          </span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#A1A1AA",
          }}
        >
          Real-time AI cost intelligence for developers
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
