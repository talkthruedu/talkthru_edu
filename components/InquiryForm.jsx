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

// Web3Forms 무료 이메일 전송 서비스 — https://web3forms.com 에서 이메일로 발급받은
// Access Key를 여기에 넣으면, 폼 제출 시 별도 메일 앱 없이 바로 이 이메일로 접수됩니다.
const WEB3FORMS_ACCESS_KEY = '12b73f92-a63c-43c2-961b-f390fd6b6a7a';

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
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMailto = () => {
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
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // 키가 아직 설정되지 않은 경우, 예전 방식(메일 앱 열기)으로 대체합니다.
      window.location.href = buildMailto();
      setStatus('success');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[상담 신청] ${form.studentName || '학생'} 학부모 문의`,
          from_name: 'TALK THRU EDU 홈페이지',
          학생_이름: form.studentName,
          학생_나이: form.studentAge,
          학년: form.grade,
          학부모_성함: form.parentName,
          학부모_전화번호: form.parentPhone,
          학부모_이메일: form.parentEmail || '-',
          통화_가능_시간대: form.callTime || '-',
          카카오톡_ID: form.kakaoId || '-',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="inquiry-form if-success">
        <div className="if-success-icon">✓</div>
        <h3>상담 신청이 접수되었습니다!</h3>
        <p>빠른 시일 내에 확인 후 연락드리겠습니다. 급하신 경우 카카오톡으로도 문의해주세요.</p>
      </div>
    );
  }

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

      <button type="submit" className="btn btn-gold if-submit" disabled={status === 'sending'}>
        {status === 'sending' ? '보내는 중...' : '상담 신청 보내기'}
      </button>
      {status === 'error' && (
        <p className="if-sent-note if-error">
          전송에 실패했어요. 잠시 후 다시 시도하시거나, 카카오톡으로 바로 문의해주세요.
        </p>
      )}
    </form>
  );
}
