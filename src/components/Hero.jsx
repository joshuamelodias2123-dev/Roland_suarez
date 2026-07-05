import RippleMark from "./RippleMark";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="mark">
        <RippleMark size={96} variant="light" />
      </div>
      <h1>Roland C. Suarez</h1>
      <p className="tag">Remedial Therapeutic Massage — Regina, SK</p>
      <div className="cta-row">
        <a href="tel:16399999341" className="btn primary">Book an appointment</a>
        <a href="#services" className="btn secondary">View services</a>
      </div>
      <div className="meta">Pressure &amp; Release · Direct Billing Available</div>
    </header>
  );
}
