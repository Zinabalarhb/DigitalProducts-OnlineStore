import "../styles/Reviews.css";

const REVIEWS = [
  { id: 1, stars: 5, text: "خدمة ممتازة! استلمت الكود بثواني وكان يشتغل مباشرة. سأشتري مرة أخرى بالتأكيد.", name: "أحمد الشمري",  date: "منذ ٣ أيام",   initials: "أح", color: "#0F6E56" },
  { id: 2, stars: 5, text: "أفضل متجر رقمي جربته. الأسعار منافسة والدعم الفني سريع الاستجابة جداً.",          name: "سعد العتيبي",  date: "منذ أسبوع",    initials: "سع", color: "#185FA5" },
  { id: 3, stars: 5, text: "اشتريت اشتراك نتفليكس والعملية كانت سهلة ومباشرة. تجربة تسوق ممتعة وسريعة.",     name: "نورة الغامدي", date: "منذ أسبوعين",  initials: "نو", color: "#72243E" },
];

export default function Reviews() {
  return (
    <section className="section ">
      <div className="section__head">
        <div>
          <h2 className="section__title">آراء عملائنا</h2>
          <p className="section__sub">٩٩٪ راضون عن تجربتهم</p>
        </div>
      </div>
      <div className="reviews__grid layout-container">
        {REVIEWS.map(r => (
          <article key={r.id} className="review">
            <div className="review__stars" aria-label={`${r.stars} نجوم`}>
              {"★".repeat(r.stars)}
            </div>
            <p className="review__text">{r.text}</p>
            <div className="review__person">
              <div
                className="review__avatar"
                style={{ background: r.color }}
                aria-hidden="true"
              >
                {r.initials}
              </div>
              <div>
                <p className="review__name">{r.name}</p>
                <p className="review__date">{r.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
