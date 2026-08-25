import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIVE AI",
  description: "AI 드라이브 코스 추천 서비스",
};

const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        {/* NCP 콘솔에서 발급받은 Client ID를 .env.local의 NEXT_PUBLIC_NAVER_MAP_CLIENT_ID에 넣어주세요 */}
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
