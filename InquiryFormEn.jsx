'use client';

import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'fsec-apply',
    icon: '📝',
    title: '참가 · 신청',
    desc: '참가 대상과 상담·신청 절차, 취소 규정에 대한 안내',
    items: [
      {
        q: '아이만 참여할 수 있나요? 부모 동반이 필요한가요?',
        a: (
          <>
            본 프로그램은 <strong>부모 동반형 영어캠프</strong>로 기획되어 있으며, 가족 구성과
            자녀 연령에 따라 참여 방식이 달라질 수 있습니다. 자세한 사항은 상담 시 안내드립니다.
          </>
        ),
      },
      {
        q: '상담 또는 신청은 어떻게 진행되나요?',
        a: (
          <>
            페이지 하단의 상담·신청 폼을 작성해 주시거나, <strong>카카오톡 · 이메일 · 전화</strong>로도
            문의하실 수 있습니다. 상담 → 등록 안내 & 입학 신청서 작성 → 계약금 납부 순서로 진행됩니다.
          </>
        ),
      },
      {
        q: '취소 및 환불 기준은 어떻게 되나요?',
        a: (
          <>
            계약금(100만원)은 결제 후 3일 이내 환불 가능하며, 이후 취소 시점에 따라 수수료가
            발생합니다 — <strong>5월 30일 이전 10% · 6월 30일 이전 30% · 7월 10일 이전 50% · 7월
            11일 이후 환불 불가</strong>. 개별 상황에 따라 상담 시 자세히 안내드립니다.
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-class',
    icon: '📚',
    title: '수업 · 레벨',
    desc: '영어 수준, 레벨 테스트와 반 배정, 하루 수업 구성',
    items: [
      {
        q: '영어 실력이 낮아도 참여할 수 있나요?',
        a: (
          <>
            네, 다양한 수준의 학생이 참여합니다. 레벨 테스트를 통해 자녀에게{' '}
            <strong>적합한 반이 배정</strong>되므로 걱정하지 않으셔도 됩니다.
          </>
        ),
      },
      {
        q: '레벨 테스트와 반 배정은 어떻게 진행되나요?',
        a: (
          <>
            출국 전 한국에서 <strong>온라인 레벨 테스트</strong>를 진행하며, 그 결과에 따라
            연령·수준에 맞는 반이 미리 배정됩니다. 현지 도착 후 별도의 현장 테스트 없이{' '}
            <strong>첫날부터 바로 수업에 참여</strong>할 수 있습니다.
          </>
        ),
      },
      {
        q: '수업은 하루에 어떻게 진행되나요?',
        a: (
          <>
            <strong>오전 09:00 – 오후 04:15</strong>까지 원어민 강사의 말하기·듣기·읽기·쓰기 중심
            수업과 프로젝트, 발표, 그룹 활동이 이어집니다. 자세한 시간표는 일정표 섹션을 참고해
            주세요.
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-stay',
    icon: '🏙️',
    title: '숙소 · 현지 생활',
    desc: '숙소 형태, 공항 픽업, 현지 한국어 지원 안내',
    items: [
      {
        q: '숙소는 어떤 형태이며 객실 선택이 가능한가요?',
        a: (
          <>
            시드니 CBD 중심의 <strong>Mantra on Kent Residence Hotel</strong>에 머무르며,
            Executive Studio와 One-bedroom Residence 등 객실 유형을 선택할 수 있습니다. 자세한
            사항은 숙소 섹션을 참고해 주세요.
          </>
        ),
      },
      {
        q: '공항 픽업과 샌딩은 어떻게 진행되나요?',
        a: (
          <>
            현지 코디네이터가 <strong>시드니 공항에서 픽업</strong>하여 숙소까지 안내하며, 귀국
            시에도 공항 샌딩을 지원합니다.
          </>
        ),
      },
      {
        q: '현지에서 한국어 지원이 가능한가요?',
        a: (
          <>
            네, 현지 코디네이터를 통해 <strong>한국어 커뮤니케이션과 초기 정착 지원</strong>
            (오리엔테이션, 장보기 안내 등)을 받으실 수 있습니다.
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-cost',
    icon: '💼',
    title: '비용 · 준비 사항',
    desc: '개인 경비, 항공권·비자·보험 준비, 일정 변경 안내',
    items: [
      {
        q: '식비와 개인 경비는 어느 정도 필요한가요?',
        a: (
          <>
            일부 개인 생활 경비는 <strong>약 50~70만원(주간 기준)</strong>, 선택 관광 비용은
            별도입니다. 가족 생활 방식에 따라 달라질 수 있어 상담 시 함께 안내드립니다.
          </>
        ),
      },
      {
        q: '항공권, ETA 비자, 여행자 보험은 누가 준비하나요?',
        a: (
          <>
            왕복항공권, 호주 전자비자(ETA), 여행자보험, 기타 개인경비는{' '}
            <strong>참가자 개인 준비 사항</strong>입니다. 사전 오리엔테이션을 통해 원활하게
            준비하실 수 있도록 안내해드립니다.
          </>
        ),
      },
      {
        q: '액티비티와 익스커션 일정은 변경될 수 있나요?',
        a: (
          <>
            현지 날씨, 운영 상황 등에 따라 일부 액티비티와 익스커션 일정은{' '}
            <strong>변경될 수 있습니다</strong>. 변경 시 사전에 안내드립니다.
          </>
        ),
      },
    ],
  },
];

const TOTAL = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

function Chevron() {
  return (
    <svg
      className="chev"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Faq() {
  const [activeTab, setActiveTab] = useState('all');
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (key) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  let qNo = 0;

  return (
    <>
      <div className="tabs" role="tablist">
        <button
          className={`tab${activeTab === 'all' ? ' active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          전체 <span className="count">{TOTAL}</span>
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`tab${activeTab === cat.id ? ' active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.title} <span className="count">{cat.items.length}</span>
          </button>
        ))}
      </div>

      <div className="faq-wrap">
        {CATEGORIES.map((cat) => {
          const hidden = activeTab !== 'all' && activeTab !== cat.id;
          return (
            <div key={cat.id} className={`faq-section${hidden ? ' hidden' : ''}`} id={cat.id}>
              <div className="fs-head">
                <div className="icon">{cat.icon}</div>
                <div>
                  <h3>{cat.title}</h3>
                  <div className="desc">{cat.desc}</div>
                </div>
              </div>
              {cat.items.map((item, i) => {
                qNo += 1;
                const key = `${cat.id}-${i}`;
                const open = openSet.has(key);
                return (
                  <div key={key} className={`faq-item${open ? ' open' : ''}`}>
                    <button className="faq-q" onClick={() => toggle(key)}>
                      <span className="qnum">Q{qNo}</span>
                      <span className="qtext">{item.q}</span>
                      <Chevron />
                    </button>
                    <div className="faq-a" style={{ maxHeight: open ? '400px' : '0px' }}>
                      <div className="inner">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
