import FaqEn from '../../components/FaqEn';
import InquiryFormEn from '../../components/InquiryFormEn';

export const metadata = {
  title: 'Talk Thru Edu — 2026 Sydney English Camp',
  description:
    'Three weeks in Sydney that open your child’s world. Immersive native-speaker classes, real cultural experiences, and round-the-clock care — Talk Thru Edu prepares your child’s first overseas English camp together with you.',
  openGraph: {
    title: 'Talk Thru Edu — 2026 Sydney English Camp',
    description:
      'Immersive native-speaker classes, local cultural experiences, 24-hour care. July 25 – August 15, 2026, a parent-accompanied English camp for ages 8–16.',
    locale: 'en_US',
    type: 'website',
  },
};

// The original sample timetable photo hasn't been provided yet, so this one image
// still points to the old site temporarily.
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
  { img: '/images/act-operahouse.jpg', title: 'Opera House & Royal Botanic Garden' },
  { img: '/images/act-mca.jpg', title: 'Museum of Contemporary Art (MCA)' },
  { img: '/images/act-aquarium.jpg', title: 'WILD LIFE Zoo & SEA LIFE Aquarium' },
  { img: '/images/act-pylon.jpg', title: 'Sydney Tower & Pylon Lookout' },
  { img: '/images/act-manly.jpg', title: 'Manly Beach Picnic' },
  { img: '/images/act-ausmuseum.jpg', title: 'Australian Museum' },
  { img: '/images/act-lunapark.jpg', title: 'Luna Park' },
  { img: '/images/act-artgallery.jpg', title: 'Art Gallery of NSW' },
  { img: '/images/act-pingpong.jpg', title: 'Indoor Sports Activities' },
  { img: '/images/act-drama.jpg', title: 'Improv & Drama Workshop' },
];

const KAKAO_URL = 'https://open.kakao.com/o/scX96edi';
const EMAIL = 'youniek0712@gmail.com';

export default function PageEn() {
  return (
    <>
      <header className="site-header">
        <div className="inner">
          <a className="brand" href="#top">
            <span className="logo">TALK THRU</span>
            <span className="sub">EDU</span>
          </a>
          <nav className="nav">
            <a href="#overview">Overview</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#activities">Activities</a>
            <a href="#stay">Accommodation</a>
            <a href="#fees">Fees</a>
            <a href="#faq">FAQ</a>
            <a href="#news">News</a>
            <a className="nav-cta" href="#inquiry">Inquire Now</a>
            <a className="lang-switch" href="/">한국어</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <span className="eyebrow">2026 SYDNEY ENGLISH CAMP · Jul 25 – Aug 15</span>
        <h1>
          Three weeks in Sydney,
          <br />
          a summer that opens your child&apos;s world
        </h1>
        <p>
          Immersive native-speaker classes, real cultural experiences, and round-the-clock care.
          <br />
          Talk Thru Edu prepares your child&apos;s first overseas English camp together with you.
        </p>
        <div className="buttons">
          <a className="btn btn-gold" href="#inquiry">Request a Consultation</a>
          <a className="btn btn-ghost" href="#overview">Explore the Camp</a>
        </div>
      </section>
      <div className="stats-wrap">
        <div className="stats">
          <div className="stat"><div className="k">Duration</div><div className="v">Jul 25 – Aug 15, 2026<br />(3 weeks)</div></div>
          <div className="stat"><div className="k">Age Group</div><div className="v">Ages 8 – 16<br />Parent-accompanied</div></div>
          <div className="stat"><div className="k">School</div><div className="v">English Unlimited<br />Sydney</div></div>
          <div className="stat"><div className="k">Stay</div><div className="v">Mantra on Kent<br />Sydney CBD</div></div>
        </div>
      </div>

      {/* ABOUT THE CAMP */}
      <section className="block first" id="overview">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ABOUT THE CAMP</span>
            <h2>
              Learning English becomes the starting point
              <br />for meeting a bigger world
            </h2>
            <p>
              The boundaries of language can sometimes become the boundaries of the world a
              person sees. Talk Thru Edu carefully designed everything from choosing the
              education partner to accommodation, local life support, and the family experience.
            </p>
          </div>
          <div className="grid cols-3">
            <div className="card"><div className="ic">🎓</div><h3>100% Native-Speaker Immersive Classes</h3><p>Every day, your child naturally absorbs English alongside native-speaking teachers.</p></div>
            <div className="card"><div className="ic">🇦🇺</div><h3>Local Cultural Experience Activities</h3><p>Lessons come alive outside the classroom, in real encounters with Australian culture.</p></div>
            <div className="card"><div className="ic">🕐</div><h3>24-Hour Local Coordinator</h3><p>Korean-language support and care you can rely on, even in an unfamiliar city.</p></div>
            <div className="card"><div className="ic">🚶</div><h3>Weekend City & Regional Tours</h3><p>Every weekend, the whole family explores Sydney together, growing closer to the city.</p></div>
            <div className="card"><div className="ic">🏙️</div><h3>Central Sydney CBD Accommodation</h3><p>Stay safely in the city center, close to the school and major landmarks.</p></div>
            <div className="card"><div className="ic">🎁</div><h3>Talk Thru Edu Welcome Kit</h3><p>A welcome gift prepared to make day one exciting.</p></div>
          </div>
        </div>
      </section>

      {/* WHY SYDNEY */}
      <section className="block alt" id="why">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">WHY SYDNEY</span>
            <h2>Why Sydney?</h2>
            <p>A global education city where an excellent learning environment, safety, and a balance of nature and culture come together.</p>
          </div>
          <div className="grid cols-3">
            <div className="card"><div className="ic">🌏</div><h3>A Global Education City</h3><p>An excellent educational environment and multicultural living infrastructure.</p></div>
            <div className="card"><div className="ic">🖼️</div><h3>Culture as Everyday Life</h3><p>A city where learning continues through museums, galleries, and zoos.</p></div>
            <div className="card"><div className="ic">🏖️</div><h3>A Balance of Nature and City</h3><p>Beaches, parks, and harbors in harmony with urban life.</p></div>
            <div className="card"><div className="ic">⚽</div><h3>Diverse Kids&apos; Activities</h3><p>Rich indoor and outdoor activities, sports, and experience programs.</p></div>
            <div className="card"><div className="ic">☕</div><h3>Rich Food & Lifestyle Culture</h3><p>Food, cafe culture, and shopping the whole family will enjoy.</p></div>
            <div className="card"><div className="ic">🛡️</div><h3>Safe and Pleasant City</h3><p>Excellent public safety and a mild climate to put your mind at ease.</p></div>
          </div>
        </div>
      </section>

      {/* EDUCATION PARTNER */}
      <section className="block" id="partner">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">EDUCATION PARTNER</span>
            <h2>A Trusted Education Partner</h2>
          </div>
          <div className="grid cols-2">
            <div className="card">
              <div className="ic">🏫</div>
              <h3>English Unlimited</h3>
              <p>
                An English education institution under Australian Pacific College, established in
                1993, with years of accumulated teaching experience and a campus network across
                major Australian cities. It provides an international learning environment with
                students from diverse nationalities.
              </p>
            </div>
            <div className="card">
              <div className="ic">🤝</div>
              <h3>Talk Thru Edu</h3>
              <p>
                We plan and manage the program based on 100% first-hand experience with the local
                school system. Through an official partnership, we carefully handle class
                placement, schedule coordination, and on-the-ground response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="block alt" id="curriculum">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">CURRICULUM</span>
            <h2>Weekly Curriculum</h2>
            <p>
              Speaking, listening, reading, and writing in balance — learned naturally through
              games, role-play, and project-based activities. Students are placed by level
              through an online test before departure.
            </p>
          </div>
          <div className="weeks">
            <div className="week"><span className="wtag">WEEK 1</span><h3>English to Introduce Myself</h3><ul><li>Self-introduction</li><li>Nouns and adjectives</li><li>Present simple & continuous</li><li>Likes and dislikes</li><li>Days, feelings, and weather</li></ul></div>
            <div className="week"><span className="wtag">WEEK 2</span><h3>English for Everyday Life & Hobbies</h3><ul><li>Hobbies and activities</li><li>Directions and prepositions</li><li>Future forms: will / going to</li><li>Adverbs of frequency</li><li>Introducing my hobby</li></ul></div>
            <div className="week"><span className="wtag">WEEK 3</span><h3>English for Observing & Describing</h3><ul><li>Animal vocabulary</li><li>Comparatives and superlatives</li><li>Reading on Australian animals</li><li>Speaking activities</li><li>Descriptive writing & conditionals</li></ul></div>
            <div className="week"><span className="wtag">WEEK 4</span><h3>English for Expanding Ideas & Presenting</h3><ul><li>Online communication</li><li>Creative storytelling</li><li>Environmental awareness activities</li><li>Presentation practice</li><li>Discussion & modal verbs</li></ul></div>
          </div>
          <div className="sched">
            <div className="s"><div className="t">Weekly Class Hours</div><div className="d">About 31.5 hours of language lessons plus activities and excursions</div></div>
            <div className="s"><div className="t">Morning</div><div className="d">English lessons (starts 9:00 AM)</div></div>
            <div className="s"><div className="t">Afternoon</div><div className="d">English lessons, local experience activities, or nearby excursions (until 4:15 PM)</div></div>
            <div className="s"><div className="t">Mon · Wed / Fri</div><div className="d">After-school activities / nearby outings and excursions</div></div>
          </div>

          <div className="tt-wrap" id="timetable">
            <div className="tt-title">
              <h3>Sample Timetable (July – August 2026)</h3>
              <p>9:00 AM – 4:15 PM · About 31.5 hours per week</p>
            </div>
            <div className="tt-card">
              <img src={IMG.timetable} alt="Sydney English camp sample timetable" />
            </div>
            <div className="tt-note">* The detailed schedule may change depending on weather, local operations, and the education partner&apos;s circumstances.</div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="block" id="activities">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ACTIVITIES</span>
            <h2>Learning Continues Outside the Classroom</h2>
            <p>After school, students explore Sydney — and on weekends, the whole family heads to nearby destinations.</p>
          </div>

          <div className="subsection-head">
            <span className="stag">WEEKDAY</span>
            <h3>After-School Activities</h3>
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
            <span className="stag gold">WEEKEND · With Family</span>
            <h3>Weekend City & Regional Tours</h3>
          </div>
          <div className="tour-grid">
            <div className="tour">
              <img src={IMG.bluemountains} alt="Blue Mountains" style={{ objectPosition: 'center 35%' }} />
              <div className="tx"><h3>Blue Mountains</h3><p>Experience grand canyons and eucalyptus forests, and feel the true scale of nature. (Parent + child)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.portstephens} alt="Port Stephens Dolphin Tour" />
              <div className="tx"><h3>Port Stephens Dolphin Tour</h3><p>Meet wild dolphins and learn about the charm of marine ecosystems. (Parent + child)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.huntervalley} alt="Hunter Valley" />
              <div className="tx"><h3>Hunter Valley</h3><p>Experience Australia&apos;s countryside scenery of vineyards and pastures. (Parent + child)</p></div>
            </div>
            <div className="tour">
              <img src={IMG.bondi} alt="Bondi Beach & Coastal Walk" />
              <div className="tx"><h3>Bondi Beach & Coastal Walk</h3><p>Walk a world-famous coastal trail and take in the scenery. (Parent + child)</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="block alt" id="stay">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">ACCOMMODATION</span>
            <h2>A Safe Residence in the Heart of Sydney CBD</h2>
          </div>
          <div className="accom">
            <div className="accom-img">
              <img src={IMG.mantraMap} alt="Mantra on Kent location map" />
            </div>
            <div>
              <h3>Mantra on Kent Residence Hotel</h3>
              <div className="loc">📍 Kent Street, Sydney CBD · Part of the Accor Group</div>
              <ul>
                <li>24-hour reception, Wi-Fi, kitchen, and laundry facilities</li>
                <li>Executive Studio (approx. 47㎡) / One-bedroom Residence</li>
                <li>Talk Thru Edu welcome kit provided at check-in</li>
                <li>Two-bedroom upgrade available on request (additional cost)</li>
              </ul>
              <div className="walk">
                <div><b>Woolworths</b> ~5 min walk</div>
                <div><b>Town Hall Station</b> ~5 min walk</div>
                <div><b>QVB</b> ~6 min walk</div>
                <div><b>Clarence St Campus</b> ~7 min walk</div>
                <div><b>Coles</b> ~10 min walk</div>
                <div><b>Hickson Rd Campus</b> ~12 min by public transport</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="block" id="fees">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">FEES</span>
            <h2>Program Fees</h2>
            <p>Based on 1 adult + 1 child · 3-week English camp</p>
          </div>
          <div className="price-grid">
            <div className="price hot">
              <span className="badge">EARLY BIRD</span>
              <div className="t">Paid in full by May 30, 2026</div>
              <div className="v">KRW 12,350,000</div>
              <div className="u">₩150,000 off the standard price</div>
              <div className="note">Balance due by June 30, 2026</div>
            </div>
            <div className="price">
              <div className="t">Standard Price</div>
              <div className="v">KRW 12,500,000</div>
              <div className="u">1 adult + 1 child</div>
              <div className="note">Deposit: KRW 1,000,000 (refundable within 3 days of payment)</div>
            </div>
          </div>
          <div className="incl">
            <div className="box in">
              <h4>Included</h4>
              <ul>
                <li>School enrollment, tuition, and course materials (3 weeks)</li>
                <li>Sydney CBD residence accommodation</li>
                <li>Airport pickup & drop-off</li>
                <li>Local orientation & initial settling-in support</li>
                <li>Weekday after-school activities</li>
                <li>Weekend Sydney regional tours</li>
                <li>Talk Thru Edu welcome kit</li>
              </ul>
            </div>
            <div className="box ex">
              <h4>Not Included</h4>
              <ul>
                <li>Round-trip airfare</li>
                <li>Australian ETA (electronic visa) fee</li>
                <li>Travel insurance</li>
                <li>Meals and other personal expenses (approx. KRW 500,000–700,000)</li>
                <li>Optional tours / separately requested programs</li>
              </ul>
            </div>
          </div>
          <div className="opts">
            <b>Family Custom Options</b> — Additional adult +KRW 1,700,000 · Additional child +KRW 3,800,000 · Adult English program +KRW 1,000,000
            <br />
            <b>Group Discount</b> — 2 families: KRW 150,000 off each · 3 families: KRW 300,000 off each (combinable with Early Bird)
            <br />
            <b>Cancellation Fee</b> — Before 5/30: 10% · Before 6/30: 30% · Before 7/10: 50% · After 7/11: non-refundable
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="block alt" id="apply">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">HOW TO APPLY</span>
            <h2>Application Process</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="n">1</div><h3>Consultation & Application</h3><p>Submit an inquiry → online/offline consultation → complete enrollment application → pay deposit</p></div>
            <div className="step"><div className="n">2</div><h3>Registration & Preparation</h3><p>Online level test, plus flight/visa/insurance guidance through a pre-departure orientation</p></div>
            <div className="step"><div className="n">3</div><h3>Departure & Arrival in Sydney</h3><p>Airport pickup, accommodation & neighborhood orientation, initial settling-in support</p></div>
            <div className="step"><div className="n">4</div><h3>Camp & Return</h3><p>3-week camp and weekend tours, local coordinator care, airport drop-off for the return trip</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>The questions parents ask us most often, organized by topic.</p>
          </div>
          <FaqEn />
        </div>
      </section>

      {/* NEWS */}
      <section className="block alt" id="news">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">NEWS</span>
            <h2>News</h2>
          </div>
          <a
            className="news-entry"
            href="https://blog.naver.com/talkthru_/224168976721"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div className="ne-icon">✍️</div>
            <div>
              <div className="ne-tag">CURATOR&apos;S NOTE</div>
              <h3>The Story Behind Talk Thru Edu</h3>
              <p>Read why we created this camp, in the founder&apos;s own words (Naver blog, in Korean).</p>
            </div>
            <span className="ne-link">Read on the blog →</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="inquiry">
        <h2>
          Ready to prepare your child&apos;s first overseas English camp,
          <br />
          together with us?
        </h2>
        <p>
          Fill out the form below and we&apos;ll personally review it and get back to you.
          <br />
          For a fast reply, message us on KakaoTalk right now.
        </p>
        <InquiryFormEn />
        <div style={{ marginTop: 22 }}>
          <a
            className="btn btn-kakao"
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Message us on KakaoTalk
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="brandline">TALK THRU EDU</div>
        <div style={{ marginBottom: 14 }}>The starting point where your child meets a bigger world</div>
        <div>
          {EMAIL} · Instagram{' '}
          <a href="https://instagram.com/talkthru_edu" target="_blank" rel="noopener noreferrer">
            @talkthru_edu
          </a>
        </div>
        <div className="studio-link">
          Need interpretation services? → <a href="https://talkthrustudio.lovable.app/">Visit TALK THRU STUDIO</a>
        </div>
        <div style={{ marginTop: 14, opacity: 0.55 }}>© 2026 Talk Thru. All rights reserved.</div>
      </footer>
    </>
  );
}
