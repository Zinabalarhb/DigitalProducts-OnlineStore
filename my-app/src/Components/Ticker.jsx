import "../styles/Ticker.css";

const ITEMS = [
  "خصم ٣٠٪ على بطاقات PlayStation هذا الأسبوع",
  "Xbox Game Pass بسعر مخفض لعملاء جدد",
  "عروض Steam — خصومات تصل لـ ٩٠٪",
  "استلام فوري لجميع المنتجات الرقمية",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
