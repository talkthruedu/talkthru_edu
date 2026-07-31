import Faq from '../components/Faq';

// 시간표 원본 사진을 아직 못 받아서, 이 한 장만 임시로 기존 사이트 주소를 사용합니다.
const IMG = {
  timetable:
    'https://talkthrustudio.lovable.app/__l5e/assets-v1/e2298632-793d-416f-b1fa-24ec2c1f0fd2/camp-timetable.jpg',
  bluemountains: '/images/tour-bluemountains.jpg',
  portstephens: '/images/tour-portstephens.jpg',
  huntervalley: '/images/tour-huntervalley.jpg',
  bondi: '/images/tour-bondi.jpg',
  mantraMap: '/images/mantra-map.jpg',
};

const ACTIVITIES = [
  { img: '/images/act-operahouse.jpg', title: '오페라하우스 & 보타닉 가든' },
  { img: '/images/act-mca.jpg', title: '현대미술관 MCA' },
  { img: '/images/act-aquarium.jpg', title: '와일드라이프 파크 & 아쿠아리움' },
  { img: '/images/act-pylon.jpg', title: '시드니 타워 & 파이론 룩아웃' },
  { img: '/images/act-manly.jpg', title: '맨리 비치 피크닉' },
  { img: '/images/act-ausmuseum.jpg', title: '호주 박물관' },
  { img: '/images/act-lunapark.jpg', title: '루나파크' },
  { img: '/images/act-artgallery.jpg', title: 'NSW 아트 갤러리' },
  { img: '/images/act-pingpong.jpg', title: '실내 스포츠 활동' },
  { img: '/images/act-drama.jpg', title: '즉흥 연기·드라마 체험' },
];

const KAKAO_URL = 'https://open.kakao.com/o/scX96edi';
const EMAIL = 'youniek0712@gmail.com';

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="inner">
          <a className="brand" href="#top">
            <span className="logo">TALK THRU</span>
            <span className="sub">EDU</span>
          </a>
          <nav className="nav">
            <a href="#overview">캠프 소개</a>
            <a href="#curriculum">커리큘럼</a>
            <a href="#activities">액티비티</a>
            <a href="#stay">숙소</a>
            <a href="#fees">참가비</a>
            <a href="#faq">FAQ</a>
            <a href="#news">소식</a>
            <a className="nav-cta" href="#inquiry">상담 신청</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <span className="eyebrow">2026 SYDNEY ENGLISH CAMP · 7. 25 – 8. 15</span>
        <h1>
          시드니에서 보내는 3주,
          <br />
          아이의 세계가 넓어지는 시간
        </h1>
        <p>
          원어민 집중 수업과 현지 문화 체험, 24시간 케어까지.
          <br />
          처음 떠나는 해외 영어캠프를 톡스루에듀가 함께 준비합니다.
        </p>
        <div className="buttons">
          <a className="btn btn-gold" href="#inquiry">상담 신청하기</a>
          <a className="btn btn-ghost" href="#overview">캠프 살펴보기</a>
        </div>
      </section>
      <div className="stats-wrap">
        <div className="stats">
          <div className="stat"><div className="k">기간</div><div className="v">2026. 7. 25 – 8. 15<br />(3주)</div></div>
          <div className="stat"><div className="k">대상</div><div className="v">만 8세 – 16세<br />부모 동반형</div></div>
          <div className="stat"><div className="k">학교</div><div className="v">English Unlimited<br />Sydney</div></div>
          <div className="stat"><div className="k">숙소</div><div className="v">Mantra on Kent<br />Sydney CBD</div></div>
        </div>
      </div>

      {/* 캠프 소개 */}
      <section className="block first" id="overview">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ABOUT THE CAMP</span>
            <h2>
              영어를 배우는 시간이,
              <br />더 넓은 세계를 만나는 출발점이 되도록
            </h2>
            <p>
              언어의 경계는 때로 한 사람이 바라보는 세계의 경계가 되기도 합니다. 톡스루에듀는
              교육기관 선정부터 숙소, 현지 생활 지원, 가족 경험까지 세심하게 설계했습니다.
            </p>
          </div>
          <div className="grid cols-3">
            <div className="card"><div className="ic">🎓</div><h3>100% 원어민 집중 수업</h3><p>매일 원어민 선생님과 함께 영어를 자연스럽게 체득합니다.</p></div>
            <div className="card"><div className="ic">🇦🇺</div><h3>현지 문화 체험 활동</h3><p>교실 밖에서 만나는 호주 문화, 살아있는 언어 수업이 됩니다.</p></div>
            <div className="card"><div className="ic">🕐</div><h3>24시간 현지 코디네이터</h3><p>낯선 도시에서도 마음 놓을 수 있는 한국어 지원과 케어.</p></div>
            <div className="card"><div className="ic">🚶</div><h3>주말 시티/근교 투어</h3><p>주말마다 시드니 곳곳을 함께 걸으며 도시와 친해집니다.</p></div>
            <div className="card"><div className="ic">🏙️</div><h3>시드니 시티 핵심 숙소</h3><p>학교와 주요 명소가 가까운 시티 중심에서 안전하게 거주합니다.</p></div>
            <div className="card"><div className="ic">🎁</div><h3>톡스루에듀 웰컴키트</h3><p>첫날부터 설렐 수 있는 환영 선물을 준비했습니다.</p></div>
          </div>
        </div>
      </section>

      {/* 왜 시드니 */}
      <section className="block alt" id="why">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">WHY SYDNEY</span>
            <h2>왜 시드니일까요?</h2>
            <p>우수한 교육 환경과 안전한 도시, 자연과 문화가 균형을 이루는 글로벌 교육 도시입니다.</p>
          </div>
          <div className="grid cols-3">
            <div className="card"><div className="ic">🌏</div><h3>글로벌 교육 도시</h3><p>우수한 교육 환경과 다문화적 생활 인프라를 갖추고 있습니다.</p></div>
            <div className="card"><div className="ic">🖼️</div><h3>일상 속 문화 경험</h3><p>박물관, 미술관, 동물원 등 배움이 이어지는 도시입니다.</p></div>
            <div className="card"><div className="ic">🏖️</div><h3>자연과 도시의 균형</h3><p>해변, 공원, 항구와 도시가 조화를 이룹니다.</p></div>
            <div className="card"><div className="ic">⚽</div><h3>다양한 키즈 액티비티</h3><p>실내외 활동, 스포츠, 체험 프로그램이 풍부합니다.</p></div>
            <div className="card"><div className="ic">☕</div><h3>풍부한 미식과 라이프스타일</h3><p>음식, 카페 문화, 쇼핑까지 가족 모두가 즐겁습니다.</p></div>
            <div className="card"><div className="ic">🛡️</div><h3>안전하고 쾌적한 도시</h3><p>우수한 치안과 온화한 기후로 안심할 수 있습니다.</p></div>
          </div>
        </div>
      </section>

      {/* 교육 파트너 */}
      <section className="block" id="partner">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">EDUCATION PARTNER</span>
            <h2>검증된 교육 파트너와 함께합니다</h2>
          </div>
          <div className="grid cols-2">
            <div className="card">
              <div className="ic">🏫</div>
              <h3>English Unlimited</h3>
              <p>
                Australian Pacific College 산하의 영어 교육기관으로, 1993년 설립 이후 축적된 교육
                경험과 호주 주요 도시의 캠퍼스 네트워크를 보유하고 있습니다. 다양한 국적의 학생이
                함께하는 국제적 학습 환경을 제공합니다.
              </p>
            </div>
            <div className="card">
              <div className="ic">🤝</div>
              <h3>Talk Thru Edu</h3>
              <p>
                100% 현지 학교 시스템과 직접 경험을 기반으로 프로그램을 기획·관리합니다. 공식
                파트너십을 통해 반 배정, 일정 조율, 현지 상황 대응까지 섬세하게 케어합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 커리큘럼 */}
      <section className="block alt" id="curriculum">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">CURRICULUM</span>
            <h2>주차별 커리큘럼</h2>
            <p>
              말하기·듣기·읽기·쓰기를 균형 있게, 게임·역할극·프로젝트형 활동으로 자연스럽게. 출국 전
              온라인 레벨 테스트로 수준별 반이 배정됩니다.
            </p>
          </div>
          <div className="weeks">
            <div className="week"><span className="wtag">WEEK 1</span><h3>나를 소개하는 영어</h3><ul><li>자기소개</li><li>명사와 형용사</li><li>현재시제 단순형·진행형</li><li>좋아하는 것과 싫어하는 것</li><li>요일·감정·날씨 표현</li></ul></div>
            <div className="week"><span className="wtag">WEEK 2</span><h3>일상과 취미를 표현하는 영어</h3><ul><li>취미와 활동</li><li>방향 표현과 전치사</li><li>미래 표현 will / going to</li><li>빈도부사</li><li>나의 취미 소개하기</li></ul></div>
            <div className="week"><span className="wtag">WEEK 3</span><h3>관찰하고 묘사하는 영어</h3><ul><li>동물 관련 어휘</li><li>비교급과 최상급</li><li>호주 동물 리딩</li><li>스피킹 액티비티</li><li>묘사형 글쓰기와 조건문</li></ul></div>
            <div className="week"><span className="wtag">WEEK 4</span><h3>생각을 확장하고 발표하는 영어</h3><ul><li>온라인 커뮤니케이션</li><li>창의적 스토리텔링</li><li>환경 인식 활동</li><li>발표 연습</li><li>토론 학습과 조동사</li></ul></div>
          </div>
          <div className="sched">
            <div className="s"><div className="t">주당 수업량</div><div className="d">약 31.5시간의 언어 수업 및 액티비티·익스커션</div></div>
            <div className="s"><div className="t">오전</div><div className="d">영어 수업 중심 (09:00 시작)</div></div>
            <div className="s"><div className="t">오후</div><div className="d">영어 수업, 현지 체험 활동 또는 근교 익스커션 (~16:15)</div></div>
            <div className="s"><div className="t">월·수 / 금</div><div className="d">방과 후 액티비티 / 근교 나들이·익스커션</div></div>
          </div>

          <div className="tt-wrap" id="timetable">
            <div className="tt-title">
              <h3>샘플 일정표 (2026년 7월 – 8월)</h3>
              <p>오전 09:00 – 오후 04:15 · 주당 약 31.5시간</p>
            </div>
            <div className="tt-card">
              <img src={IMG.timetable} alt="시드니 영어캠프 샘플 일정표" />
            </div>
            <div className="tt-note">* 세부 일정은 기상, 현지 운영 상황, 교육기관 사정에 따라 변경될 수 있습니다.</div>
          </div>
        </div>
      </section>

      {/* 액티비티 */}
      <section className="block" id="activities">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ACTIVITIES</span>
            <h2>교실 밖에서 이어지는 배움</h2>
            <p>방과 후에는 시드니 곳곳에서, 주말에는 온 가족이 함께 근교로 떠납니다.</p>
          </div>

          <div className="subsection-head">
            <span className="stag">WEEKDAY</span>
            <h3>방과 후 액티비티</h3>
          </div>
          <div className="act-grid">
            {ACTIVITIES.map((a) => (
              <div className="act-card" key={a.img}>
                <img src={a.img} alt={a.title} loading="lazy" />
                <div className="act-tx">{a.title}</div>
              </div>
            ))}
          </div>

          <div className="subsection-head" style={{ marginTop: 48 }}>
            <span className="stag gold">WEEKEND · 가족 동반</span>
            <h3>주말 시티 · 근교 투어</h3>
          </div>
          <div className="tour-grid">
            <div className="tour">
              <img src={IMG.bluemountains} alt="블루마운틴" />
              <div className="tx"><h3>블루마운틴</h3><p>웅장한 협곡과 유칼립투스 숲에서 자연의 스케일을 체험합니다. (부모+자녀 동반)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.portstephens} alt="포트스테판 돌고래 투어" />
              <div className="tx"><h3>포트스테판 돌고래 투어</h3><p>야생 돌고래를 만나며 바다 생태계의 매력을 배웁니다. (부모+자녀 동반)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.huntervalley} alt="헌터밸리" />
              <div className="tx"><h3>헌터밸리</h3><p>포도밭과 목장이 어우러진 호주의 시골 풍경을 경험합니다. (부모+자녀 동반)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.bondi} alt="본다이 비치 & 해안 트레킹" />
              <div className="tx"><h3>본다이 비치 & 해안 트레킹</h3><p>세계적인 해변길을 걸으며 자연을 만끽합니다. (부모+자녀 동반)</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 숙소 */}
      <section className="block alt" id="stay">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ACCOMMODATION</span>
            <h2>시드니 CBD 한복판, 안전한 레지던스</h2>
          </div>
          <div className="accom">
            <div className="accom-img">
              <img src={IMG.mantraMap} alt="Mantra on Kent 위치 지도" />
            </div>
            <div>
              <h3>Mantra on Kent Residence Hotel</h3>
              <div className="loc">📍 Kent Street, Sydney CBD · Accor 계열</div>
              <ul>
                <li>24시간 리셉션, Wi-Fi · 주방 · 세탁 시설</li>
                <li>Executive Studio(약 47㎡) / One-bedroom Residence</li>
                <li>체크인 시 톡스루에듀 웰컴 키트 제공</li>
                <li>요청 시 2베드룸 업그레이드 가능 (추가 비용)</li>
              </ul>
              <div className="walk">
                <div><b>Woolworths</b> 도보 약 5분</div>
                <div><b>Town Hall 역</b> 도보 약 5분</div>
                <div><b>QVB</b> 도보 약 6분</div>
                <div><b>Clarence St 캠퍼스</b> 도보 약 7분</div>
                <div><b>Coles</b> 도보 약 10분</div>
                <div><b>Hickson Rd 캠퍼스</b> 대중교통 약 12분</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 참가비 */}
      <section className="block" id="fees">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">FEES</span>
            <h2>참가비 안내</h2>
            <p>성인 1인 + 자녀 1인 기준 · 3주 영어캠프</p>
          </div>
          <div className="price-grid">
            <div className="price hot">
              <span className="badge">EARLY BIRD</span>
              <div className="t">2026년 5월 30일까지 완납 시</div>
              <div className="v">1,235만원</div>
              <div className="u">기본가 대비 15만원 할인</div>
              <div className="note">잔금 납부 마감 · 2026년 6월 30일</div>
            </div>
            <div className="price">
              <div className="t">기본가</div>
              <div className="v">1,250만원</div>
              <div className="u">성인 1인 + 자녀 1인</div>
              <div className="note">계약금 100만원 (결제 후 3일 이내 환불 가능)</div>
            </div>
          </div>
          <div className="incl">
            <div className="box in">
              <h4>포함 사항</h4>
              <ul>
                <li>학교 입학비 · 수업료 · 교재비 (3주)</li>
                <li>시드니 CBD 레지던스 숙소</li>
                <li>공항 픽업 & 샌딩</li>
                <li>현지 오리엔테이션 · 초기 정착 지원</li>
                <li>주중 방과 후 액티비티</li>
                <li>주말 시드니 근교 투어</li>
                <li>톡스루에듀 웰컴키트</li>
              </ul>
            </div>
            <div className="box ex">
              <h4>불포함 사항</h4>
              <ul>
                <li>왕복 항공권</li>
                <li>호주 전자비자(ETA) 발급비</li>
                <li>여행자 보험</li>
                <li>식비 및 기타 개인 경비 (약 50~70만원)</li>
                <li>선택 관광 · 별도 요청 프로그램 비용</li>
              </ul>
            </div>
          </div>
          <div className="opts">
            <b>가족 맞춤 옵션</b> — 성인 1인 추가 +170만원 · 자녀 1인 추가 +380만원 · 성인 영어 프로그램 +100만원
            <br />
            <b>동반 할인</b> — 2가족 각 15만원 · 3가족 각 30만원 할인 (얼리버드 중복 적용 가능)
            <br />
            <b>취소 수수료</b> — 5/30 이전 10% · 6/30 이전 30% · 7/10 이전 50% · 7/11 이후 환불 불가
          </div>
        </div>
      </section>

      {/* 신청 절차 */}
      <section className="block alt" id="apply">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">HOW TO APPLY</span>
            <h2>신청 절차</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="n">1</div><h3>상담 & 신청</h3><p>상담 문의 작성 → 온·오프라인 상담 → 입학 신청서 작성 → 계약금 납부</p></div>
            <div className="step"><div className="n">2</div><h3>등록 완료 & 사전 준비</h3><p>온라인 레벨 테스트, 사전 오리엔테이션을 통한 항공권·비자·보험 준비 안내</p></div>
            <div className="step"><div className="n">3</div><h3>출국 & 현지 도착</h3><p>시드니 공항 픽업, 숙소·생활권 오리엔테이션, 초기 정착 지원</p></div>
            <div className="step"><div className="n">4</div><h3>캠프 진행 & 귀국</h3><p>3주 캠프와 주말 투어, 현지 코디네이터 케어, 귀국 공항 샌딩</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">FAQ</span>
            <h2>자주 묻는 질문</h2>
            <p>학부모님들이 가장 많이 물어보시는 질문을 주제별로 정리했습니다.</p>
          </div>
          <Faq />
        </div>
      </section>

      {/* 소식 */}
      <section className="block alt" id="news">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">NEWS</span>
            <h2>소식</h2>
          </div>
          <div className="news">
            새로운 이야기를 준비 중입니다.
            <br />
            캠프와 시드니 생활에 대한 소식은 곧 업데이트됩니다.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="inquiry">
        <h2>
          우리 아이의 첫 해외 영어캠프,
          <br />
          함께 준비해볼까요?
        </h2>
        <p>
          모든 문의는 직접 검토하고 답변드립니다.
          <br />
          카카오톡으로 물어보시면 가장 빠르게 안내받으실 수 있어요.
        </p>
        <div className="buttons" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-kakao" href={KAKAO_URL} target="_blank" rel="noopener noreferrer">
            💬 카카오톡으로 문의하기
          </a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>이메일로 문의하기</a>
        </div>
      </section>

      <footer className="footer">
        <div className="brandline">TALK THRU EDU</div>
        <div style={{ marginBottom: 14 }}>아이가 더 넓은 세계를 만나는 출발점</div>
        <div>
          {EMAIL} · Instagram{' '}
          <a href="https://instagram.com/talkthru_edu" target="_blank" rel="noopener noreferrer">
            @talkthru_edu
          </a>
        </div>
        <div className="studio-link">
          통역 서비스가 필요하신가요? → <a href="https://talkthrustudio.lovable.app/">TALK THRU STUDIO 바로가기</a>
        </div>
        <div style={{ marginTop: 14, opacity: 0.55 }}>© 2026 Talk Thru. 모든 권리 보유.</div>
      </footer>
    </>
  );
}
