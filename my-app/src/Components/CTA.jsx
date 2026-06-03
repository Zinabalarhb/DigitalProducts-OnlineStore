import "../styles/CTA.css";

export default function CTA() {
  return (
    <div className=" cta-wrap">
      <section className="cta">
        <div className="cta__glow" aria-hidden="true" />
        <h2 className="cta__title">جاهز تبدأ تسوّق؟</h2>
        <p className="cta__desc">انضم لأكثر من ١٠٠,٠٠٠ عميل يثقون في كود تك</p>
        <div className="cta__btns">
          <button className="btn btn--lg" style={{ background:"rgba(255,255,255,0.08)",   color:"var(--ink-1)" }}>
            تصفح المنتجات الآن
          </button>
          <button className="btn btn--lg" style={{ background:"rgba(255,255,255,0.08)", color:"#fff", border:"1px solid rgba(255,255,255,0.15)" }}>
            إنشاء حساب مجاني
          </button>
        </div>
      </section>
    </div>
  );
}
