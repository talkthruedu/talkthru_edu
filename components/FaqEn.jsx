'use client';

import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'fsec-apply',
    icon: '📝',
    title: 'Participation & Application',
    desc: 'Eligibility, the consultation/application process, and cancellation policy',
    items: [
      {
        q: 'Can only my child participate? Do parents need to come along?',
        a: (
          <>
            This program is designed as a <strong>parent-accompanied English camp</strong>, and
            how you participate may vary depending on your family and your child&apos;s age.
            Details will be provided during consultation.
          </>
        ),
      },
      {
        q: 'How does consultation or application work?',
        a: (
          <>
            Please fill out the inquiry form at the bottom of the page, or contact us via{' '}
            <strong>KakaoTalk, email, or phone</strong>. The process runs: consultation →
            registration guidance & enrollment application → deposit payment.
          </>
        ),
      },
      {
        q: 'What are the cancellation and refund policies?',
        a: (
          <>
            The deposit (KRW 1,000,000) is refundable within 3 days of payment; after that, a
            cancellation fee applies depending on timing —{' '}
            <strong>
              10% before May 30 · 30% before June 30 · 50% before July 10 · non-refundable after
              July 11
            </strong>
            . We&apos;ll go over your specific situation in detail during consultation.
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-class',
    icon: '📚',
    title: 'Classes & Levels',
    desc: 'English level, the level test and class placement, daily class structure',
    items: [
      {
        q: "Can my child join even if their English isn't strong?",
        a: (
          <>
            Yes, students of all levels take part. A level test places your child in a{' '}
            <strong>class that fits them</strong>, so there&apos;s no need to worry.
          </>
        ),
      },
      {
        q: 'How does the level test and class placement work?',
        a: (
          <>
            An <strong>online level test</strong> is completed in Korea before departure, and
            classes are pre-assigned by age and level. There&apos;s no separate on-site test after
            arrival — your child can <strong>start class from day one</strong>.
          </>
        ),
      },
      {
        q: 'What does a typical school day look like?',
        a: (
          <>
            From <strong>9:00 AM to 4:15 PM</strong>, native-speaking teachers lead
            speaking/listening/reading/writing lessons along with projects, presentations, and
            group activities. See the timetable section for details.
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-stay',
    icon: '🏙️',
    title: 'Accommodation & Local Life',
    desc: 'Accommodation type, airport pickup, and Korean-language support on site',
    items: [
      {
        q: 'What type of accommodation is it, and can we choose our room?',
        a: (
          <>
            You&apos;ll stay at the <strong>Mantra on Kent Residence Hotel</strong> in central
            Sydney CBD, with room types such as Executive Studio and One-bedroom Residence
            available. See the accommodation section for details.
          </>
        ),
      },
      {
        q: 'How does airport pickup and drop-off work?',
        a: (
          <>
            A local coordinator will <strong>pick you up at Sydney Airport</strong> and guide you
            to your accommodation, and will also help with airport drop-off on your return.
          </>
        ),
      },
      {
        q: 'Is Korean-language support available on the ground?',
        a: (
          <>
            Yes — through our local coordinator you&apos;ll have{' '}
            <strong>Korean-language communication and settling-in support</strong> (orientation,
            grocery guidance, and more).
          </>
        ),
      },
    ],
  },
  {
    id: 'fsec-cost',
    icon: '💼',
    title: 'Costs & Preparation',
    desc: 'Personal expenses, flight/visa/insurance prep, and schedule-change notices',
    items: [
      {
        q: 'How much should we budget for meals and personal expenses?',
        a: (
          <>
            Personal living expenses run about <strong>KRW 500,000–700,000 per week</strong>, with
            optional tours priced separately. This can vary by family, so we&apos;ll go over it
            together during consultation.
          </>
        ),
      },
      {
        q: 'Who arranges flights, the ETA visa, and travel insurance?',
        a: (
          <>
            Round-trip flights, the Australian electronic visa (ETA), travel insurance, and other
            personal expenses are each <strong>participant&apos;s own responsibility</strong> to
            arrange. We&apos;ll guide you through this smoothly during the pre-departure
            orientation.
          </>
        ),
      },
      {
        q: 'Can the activity and excursion schedule change?',
        a: (
          <>
            Depending on local weather and operating conditions, some activities and excursions
            may <strong>change</strong>. We&apos;ll notify you in advance if that happens.
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

export default function FaqEn() {
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
          All <span className="count">{TOTAL}</span>
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
