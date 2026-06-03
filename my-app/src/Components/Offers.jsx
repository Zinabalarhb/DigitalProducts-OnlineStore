import "../styles/Offers.css";

const OFFERS = [
  {
    id: 1,
    eyebrow: "PLAYSTATION STORE",
    title: "خصم على جميع بطاقات الشحن",
    desc: "حتى نهاية الأسبوع فقط",
    cta: "احصل عليه",
    badge: "-٣٠٪",
    bgClass: "offers__card--dark",
    bgText: "PS",
  },
  {
    id: 2,
    eyebrow: "STEAM",
    title: "Summer Sale خصومات تصل ٩٠٪",
    desc: "آلاف الألعاب بأسعار لا تصدق",
    cta: "تصفح الألعاب",
    badge: null,
    bgClass: "offers__card--navy",
    bgText: "ST",
  },
  {
    id: 3,
    eyebrow: "XBOX GAME PASS",
    title: "Ultimate أول شهر بنص السعر",
    desc: "لعملاء جدد فقط",
    cta: "اشترك الآن",
    badge: null,
    bgClass: "offers__card--rust",
    bgText: "XB",
  },
];

export default function Offers() {
  return (
    <section className="  section  " id="offers">
            <div className="layout-container">

      <div className="section__head">
        <div>
          <h2 className="section__title">عروض حصرية</h2>
          <p className="section__sub">لفترة محدودة — لا تفوّتها</p>
        </div>
        <a href="/offers" className="section__more">
          كل العروض <i className="ti ti-arrow-left" aria-hidden="true" />
        </a>
      </div>

      <div className="offers__grid">
        {OFFERS.map(o => (
          <article key={o.id} className={`offers__card ${o.bgClass}`}>
            {o.badge && <span className="offers__badge">{o.badge}</span>}
            <div className="offers__content">
              <p className="offers__eyebrow">{o.eyebrow}</p>
              <h3 className="offers__title">{o.title}</h3>
              <p className="offers__desc">{o.desc}</p>
              <button className="offers__cta">
                {o.cta} <i className="ti ti-arrow-left" aria-hidden="true" />
              </button>
            </div>
            <span className="offers__bg-text" aria-hidden="true">{o.bgText}</span>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
