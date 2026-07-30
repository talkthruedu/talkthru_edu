# 톡스루에듀 — 2026 시드니 영어캠프 (Next.js)

확정된 디자인 시안을 그대로 옮긴 Next.js 프로젝트입니다. 아래 순서대로 하면 **무료로** 인터넷에 배포됩니다. 프로그램 설치 없이 전부 브라우저에서 진행돼요.

## 배포 방법 (약 10분)

### 1단계 — GitHub에 코드 올리기

1. [github.com](https://github.com) 에서 가입 또는 로그인하세요.
2. 오른쪽 위 **+ → New repository** 클릭.
3. Repository name에 `talkthru-edu` 입력, **Private** 선택, **Create repository** 클릭.
4. 생성된 페이지에서 **"uploading an existing file"** 링크 클릭.
5. 이 압축파일을 푼 뒤, 안에 있는 **모든 파일과 폴더**(app 폴더, components 폴더, package.json, next.config.mjs, README.md)를 업로드 창에 통째로 드래그하세요.
6. 아래 **Commit changes** 버튼 클릭.

### 2단계 — Vercel로 배포

1. [vercel.com](https://vercel.com) 에서 **Continue with GitHub** 로 가입/로그인하세요.
2. **Add New… → Project** 클릭.
3. 목록에서 `talkthru-edu` 저장소 옆 **Import** 클릭. (안 보이면 "Adjust GitHub App Permissions"에서 저장소 접근 허용)
4. Framework가 **Next.js**로 자동 인식됩니다. 아무것도 바꾸지 말고 **Deploy** 클릭.
5. 1~2분 후 배포 완료! `https://talkthru-edu-xxxx.vercel.app` 형태의 무료 주소가 생깁니다.

### 이후 수정하고 싶을 때

- Claude에게 수정을 요청해 새 파일을 받은 뒤, GitHub 저장소에서 해당 파일을 열고 (연필 아이콘 → 내용 교체 → Commit) 저장하면 Vercel이 **자동으로 재배포**합니다.
- 나중에 도메인(예: talkthru.kr)을 사면 Vercel 프로젝트 Settings → Domains에서 연결할 수 있어요.

## 참고

- 사진은 현재 기존 러버블 사이트(talkthrustudio.lovable.app)의 이미지 주소를 그대로 사용합니다. 러버블 사이트가 삭제되면 이미지가 안 보이게 되니, 그 전에 원본 사진을 받아 `public/` 폴더에 넣는 방식으로 교체하는 것을 권장합니다. (Claude에게 사진 파일을 주면 교체해드립니다.)
- 로컬에서 실행하려면: `npm install` 후 `npm run dev` → http://localhost:3000

## 폴더 구조

```
app/
  layout.jsx    ← 공통 레이아웃, SEO 메타 정보
  page.jsx      ← 메인 페이지 (모든 섹션)
  globals.css   ← 전체 디자인 (색상, 카드, 버튼 등)
components/
  Faq.jsx       ← FAQ 카테고리 탭 + 아코디언 (인터랙티브)
package.json
next.config.mjs
```
