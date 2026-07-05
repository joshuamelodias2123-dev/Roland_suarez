import RippleMark from "./RippleMark";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="inner">
        <a href="#top" className="brand">
          <RippleMark size={30} variant="dark" />
          Roland C. Suarez
        </a>
        <ul className="links">
          <li><a href="#concept">Approach</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="tel:16399999341" className="btn primary cta">Book an appointment</a>
      </div>
    </nav>
  );
}
