'use client';

import { useState } from 'react';

const TIME_SLOTS = [
  '9:00 AM – 12:00 PM',
  '12:00 – 3:00 PM',
  '3:00 – 6:00 PM',
  '6:00 – 9:00 PM',
  'Anytime (contact whenever convenient)',
];

const EMAIL = 'youniek0712@gmail.com';

export default function InquiryFormEn() {
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
    const subject = `[Consultation Request] Inquiry about ${form.studentName || 'a student'}`;
    const body = [
      '■ Student Information',
      `- Student's Name: ${form.studentName}`,
      `- Student's Age: ${form.studentAge}`,
      `- Grade: ${form.grade}`,
      '',
      '■ Parent/Guardian Information',
      `- Parent/Guardian Name: ${form.parentName}`,
      `- Parent/Guardian Phone: ${form.parentPhone}`,
      `- Parent/Guardian Email: ${form.parentEmail || '-'}`,
      `- Best Time to Call: ${form.callTime || '-'}`,
      `- KakaoTalk ID: ${form.kakaoId || '-'}`,
    ].join('\n');
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="if-group">
        <div className="if-label">Student Information</div>
        <div className="if-row if-row-3">
          <label>
            <span>Student&apos;s Name</span>
            <input type="text" value={form.studentName} onChange={update('studentName')} required />
          </label>
          <label>
            <span>Student&apos;s Age</span>
            <input type="text" value={form.studentAge} onChange={update('studentAge')} />
          </label>
          <label>
            <span>Grade</span>
            <input type="text" value={form.grade} onChange={update('grade')} />
          </label>
        </div>
      </div>

      <div className="if-group">
        <div className="if-label">Parent / Guardian Information</div>
        <div className="if-row if-row-3">
          <label>
            <span>Parent/Guardian Name</span>
            <input type="text" value={form.parentName} onChange={update('parentName')} required />
          </label>
          <label>
            <span>Parent/Guardian Phone</span>
            <input
              type="tel"
              placeholder="e.g. +82 10-1234-5678"
              value={form.parentPhone}
              onChange={update('parentPhone')}
              required
            />
          </label>
          <label>
            <span>Parent/Guardian Email (optional)</span>
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
            <span>Best Time to Call</span>
            <select value={form.callTime} onChange={update('callTime')}>
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>KakaoTalk ID (optional)</span>
            <input type="text" value={form.kakaoId} onChange={update('kakaoId')} />
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-gold if-submit">
        Submit Inquiry
      </button>
      {sent && (
        <p className="if-sent-note">
          If your email app didn&apos;t open, feel free to reach us directly on KakaoTalk too.
        </p>
      )}
    </form>
  );
}
