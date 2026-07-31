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

// Web3Forms free email delivery service — https://web3forms.com
// Paste the Access Key you receive by email here so submissions land directly
// in your inbox, without opening any mail app.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

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
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMailto = () => {
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
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
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
          subject: `[Consultation Request] Inquiry about ${form.studentName || 'a student'}`,
          from_name: 'TALK THRU EDU Website',
          Student_Name: form.studentName,
          Student_Age: form.studentAge,
          Grade: form.grade,
          Parent_Name: form.parentName,
          Parent_Phone: form.parentPhone,
          Parent_Email: form.parentEmail || '-',
          Best_Time_To_Call: form.callTime || '-',
          KakaoTalk_ID: form.kakaoId || '-',
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
        <h3>Your inquiry has been received!</h3>
        <p>We&apos;ll review it and get back to you soon. For urgent questions, feel free to reach us on KakaoTalk too.</p>
      </div>
    );
  }

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

      <button type="submit" className="btn btn-gold if-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
      </button>
      {status === 'error' && (
        <p className="if-sent-note if-error">
          Something went wrong. Please try again, or reach us directly on KakaoTalk.
        </p>
      )}
    </form>
  );
}
