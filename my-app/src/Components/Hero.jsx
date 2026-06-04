import "../styles/Hero.css";
import { Link } from "react-router-dom";

const STATS = [
  { value: "+١٠٠k", label: "عميل سعيد"     },
  { value: "+٥٠٠",  label: "منتج رقمي"     },
  { value: "٢٤/٧",  label: "دعم فني"        },
  { value: "٩٩٪",   label: "رضا العملاء"   },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="الصفحة الرئيسية">
      <div className="hero__inner">
        {/* Eyebrow */}
        <div className="hero__eyebrow" aria-hidden="true">
          <i className="ti ti-bolt" />
          استلام فوري · دفع آمن · ضمان معتمد
        </div>

        {/* Headline */}
        <h1 className="hero__h1">
          كل منتجاتك الرقمية
          <br />
          في <em className="hero__em">مكان واحد</em>
        </h1>

        {/* Description */}
        <p className="hero__desc">
          ألعاب، اشتراكات، وبطاقات رقمية بأفضل الأسعار في المنطقة.
          ادفع بثقة واستلم كودك خلال ثوانٍ.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <Link
            to="/products"
            className="btn btn--primary btn--lg"
          >
            <i className="ti ti-shopping-bag" aria-hidden="true" />
            تصفح المنتجات
          </Link>
          <Link
            to="/Offers"
            className="btn btn--ghost btn--lg"
          >
            <i className="ti ti-tag" aria-hidden="true" />
            العروض الحالية
          </Link>
        </div>

        {/* Stats */}
        <div className="hero__stats" role="list">
          {STATS.map(s => (
            <div key={s.label} className="hero__stat" role="listitem">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
