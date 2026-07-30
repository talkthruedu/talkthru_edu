import './globals.css';

export const metadata = {
  title: '톡스루에듀 — 2026 시드니 영어캠프',
  description:
    '시드니에서 보내는 3주, 아이의 세계가 넓어지는 시간. 원어민 집중 수업과 현지 문화 체험, 24시간 케어까지 — 처음 떠나는 해외 영어캠프를 톡스루에듀가 함께 준비합니다.',
  openGraph: {
    title: '톡스루에듀 — 2026 시드니 영어캠프',
    description:
      '원어민 집중 수업, 현지 문화 체험, 24시간 케어. 2026년 7월 25일–8월 15일, 만 8–16세 부모 동반형 영어캠프.',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
