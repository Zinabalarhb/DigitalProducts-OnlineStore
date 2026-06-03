import "../styles/HowItWorks.css";

const STEPS = [
  { num: "١", icon: "🔍", title: "اختر منتجك",  desc: "تصفح آلاف المنتجات واختر ما يناسبك" },
  { num: "٢", icon: "💳", title: "ادفع بأمان",   desc: "طرق دفع متعددة وآمنة ومريحة"        },
  { num: "٣", icon: "📧", title: "استلم كودك",   desc: "يصلك الكود فورياً على بريدك"         },
  { num: "٤", icon: "🎮", title: "استمتع!",      desc: "فعّل الكود واستمتع بتجربتك"          },
];

export default function HowItWorks() {
  return (
    <section className="section ">
            <div className="layout-container">

      <div className="section__head">
        <div>
          <h2 className="section__title">كيف يعمل المتجر؟</h2>
          <p className="section__sub">٤ خطوات بسيطة للحصول على منتجك</p>
        </div>
      </div>
      <div className="steps__grid">
        {STEPS.map((s, i) => (
          <div key={s.num} className="step">
            <div className="step__num">{s.num}</div>
            <div className="step__icon" aria-hidden="true">{s.icon}</div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__desc">{s.desc}</p>
            {i < STEPS.length - 1 && (
              <div className="step__connector" aria-hidden="true">
                <i className="ti ti-arrow-left" />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
