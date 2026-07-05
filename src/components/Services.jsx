const services = [
  {
    title: "Remedial Massage Therapy",
    desc: "Full-session therapeutic work built around your specific pain points, injuries, or chronic tension — not a one-size-fits-all routine.",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Targeted, firm pressure to release tight muscle and connective tissue where you need it most.",
  },
  {
    title: "Direct Billing",
    desc: "Direct billing available to all major insurers — Roland handles the paperwork so you don't have to pay upfront and wait for reimbursement.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="eyebrow">What Roland Offers</div>
        <h2>Services</h2>
        <div className="sub">Tell me where it hurts. We'll build the session around it.</div>
        <div className="grid3">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: "#8a8a83" }}>
          Session lengths and pricing available by phone — contact Roland directly to book.
        </p>
      </div>
    </section>
  );
}
