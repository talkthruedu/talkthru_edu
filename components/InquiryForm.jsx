'use client';

import { useState } from 'react';

const TIME_SLOTS = [
  '오전 9시 – 12시',
  '오후 12시 – 3시',
  '오후 3시 – 6시',
  '저녁 6시 – 9시',
  '시간 무관 (편한 시간에 연락)',
];

const EMAIL = 'youniek0712@gmail.com';

export default function InquiryForm() {
  const [form, setForm] = useState({
    studentName: '',
    studentAge: '',
    grade: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    callTime: '',
    kakaoId: '',
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `[상담 신청] ${form.studentName || '학생'} 학부모 문의`;
    const body = [
      '■ 학생 정보',
      `- 학생 이름: ${form.studentName}`,
      `- 학생 나이: ${form.studentAge}`,
      `- 학년: ${form.grade}`,
      '',
      '■ 학부모 정보',
      `- 학부모 성함: ${form.parentName}`,
      `- 학부모 전화번호: ${form.parentPhone}`,
      `- 학부모 이메일: ${form.parentEmail || '-'}`,
      `- 통화 가능 시간대: ${form.callTime || '-'}`,
      `- 카카오톡 ID: ${form.kakaoId || '-'}`,
    ].join('\n');
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="if-group">
        <div className="if-label">학생 정보</div>
        <div className="if-row if-row-3">
          <label>
            <span>학생 이름</span>
            <input type="text" value={form.studentName} onChange={update('studentName')} required />
          </label>
          <label>
            <span>학생 나이</span>
            <input type="text" value={form.studentAge} onChange={update('studentAge')} />
          </label>
          <label>
            <span>학년</span>
            <input type="text" value={form.grade} onChange={update('grade')} />
          </label>
        </div>
      </div>

      <div className="if-group">
        <div className="if-label">학부모 정보</div>
        <div className="if-row if-row-3">
          <label>
            <span>학부모 성함</span>
            <input type="text" value={form.parentName} onChange={update('parentName')} required />
          </label>
          <label>
            <span>학부모 전화번호</span>
            <input
              type="tel"
              placeholder="예) 010-1234-5678"
              value={form.parentPhone}
              onChange={update('parentPhone')}
              required
            />
          </label>
          <label>
            <span>학부모 이메일 (선택)</span>
            <input
              type="email"
              placeholder="name@example.com"
              value={form.parentEmail}
              onChange={update('parentEmail')}
            />
          </label>
        </div>
        <div className="if-row if-row-2">
          <label>
            <span>통화 가능 시간대</span>
            <select value={form.callTime} onChange={update('callTime')}>
              <option value="">시간대를 선택해주세요</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>카카오톡 ID (선택)</span>
            <input type="text" value={form.kakaoId} onChange={update('kakaoId')} />
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-gold if-submit">
        상담 신청 보내기
      </button>
      {sent && (
        <p className="if-sent-note">
          이메일 앱이 열리지 않았다면, 카카오톡으로도 바로 문의하실 수 있어요.
        </p>
      )}
    </form>
  );
}
