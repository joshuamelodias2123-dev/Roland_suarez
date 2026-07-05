export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">Get In Touch</div>
        <h2>Book a session</h2>
        <div className="sub">Call to schedule, or stop by the clinic in Regina.</div>

        <div className="contact-grid">
          <ul className="checklist">
            <li>Targeted deep-tissue work for real pain relief</li>
            <li>Direct billing to all major insurers — the paperwork is handled for you</li>
            <li>Sessions built around what's actually hurting you</li>
            <li>Straightforward, skilled work — no wellness-spa hype</li>
          </ul>

          <div className="contact-card">
            <div className="row">
              <div className="label">Phone</div>
              <div className="value"><a href="tel:16399999341">(639) 999-9341</a></div>
            </div>
            <div className="row">
              <div className="label">Address</div>
              <div className="value">2310 College Ave, Regina, SK</div>
            </div>
            <div className="row">
              <div className="label">Billing</div>
              <div className="value">Direct billing to insurance available</div>
            </div>
            <a href="tel:16399999341" className="btn primary" style={{ marginTop: 20, width: "100%" }}>
              Call to book an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
