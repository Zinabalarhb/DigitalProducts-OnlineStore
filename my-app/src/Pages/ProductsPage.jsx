import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../styles/Products.css";
import SearchBar from "../components/SearchBar";

const CATS = [
  { key: "all", label: "الكل" },
  { key: "games", label: "ألعاب" },
  { key: "sub", label: "اشتراكات" },
  { key: "cards", label: "بطاقات شحن" },
];

const PRODUCTS = [
  {
    id: 1,
    cat: "cards",
    emoji: "🎮",
    bg: "#123E6B",
    name: "PlayStation Store بطاقة ١٠٠ ر.س",
    price: "100",
    oldPrice: "١٤٠",
    badge: "فوري",
    hot: true,
    discount: "٣٠٪-",
  },
  {
    id: 2,
    cat: "sub",
    emoji: "🕹️",
    bg: "#14532D",
    name: "Xbox Game Pass Ultimate شهر",
    price: "80",
    oldPrice: null,
    badge: "الأكثر طلباً",
    hot: false,
    discount: null,
  },
  {
    id: 3,
    cat: "cards",
    emoji: "🖥️",
    bg: "#1B2838",
    name: "Steam Wallet بطاقة ٥٠ ر.س",
    price: "50",
    oldPrice: null,
    badge: "فوري",
    hot: false,
    discount: null,
  },
  {
    id: 4,
    cat: "sub",
    emoji: "📺",
    bg: "#8F1720",
    name: "Netflix اشتراك شهري",
    price: "45",
    oldPrice: null,
    badge: "شهري",
    hot: false,
    discount: null,
  },
  {
    id: 5,
    cat: "sub",
    emoji: "🎵",
    bg: "#166534",
    name: "Spotify Premium شهر",
    price: "30",
    oldPrice: null,
    badge: "شهري",
    hot: false,
    discount: null,
  },
  {
    id: 6,
    cat: "games",
    emoji: "🔫",
    bg: "#9A6700",
    name: "PUBG UC 1800 رصيد",
    price: "25",
    oldPrice: null,
    badge: "فوري",
    hot: false,
    discount: null,
  },
];

export default function ProductsPage({
  search = "",
}) {
//   حالة الفلترة حسب الفئة
  const [activeCat, setActiveCat] = useState("all");
 
  // لتحويل نص زر "أضف للسلة" إلى "تمت الإضافة ✓" مؤقتاً بعد الضغط
  const [addedId, setAddedId] = useState(null);

  
  const { addToCart } = useCart();
  const navigate = useNavigate();
//   فلترة المنتجات حسب الفئة والنص
 const filtered = PRODUCTS.filter((p) => {
  const categoryMatch =
    activeCat === "all" ||
    p.cat === activeCat;

  const searchMatch =
    p.name
      .toLowerCase()
      .includes(search.toLowerCase());

  return categoryMatch && searchMatch;
});
  // 🛒 إضافة للسلة + تغيير نص الزر
  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    addToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  // 📄 فتح تفاصيل المنتج
  const handleOpenDetails = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    
    <section className="section products-section" id="products">

      <div className="layout-container">

        {/* BG Glow */}
        <div className="products-section__glow" />

        {/* Header */}
        <div className="section-head">
          <div>
            <span className="products-section__mini">
              🔥 المنتجات الأكثر طلباً
            </span>

            <h2 className="section-title">الأكثر مبيعاً</h2>

            <p className="section-sub">
              منتجات رقمية مضمونة بتسليم فوري وأسعار منافسة
            </p>
          </div>

          <a href="/products" className="section-more">
            عرض الكل
            <i className="ti ti-arrow-left" aria-hidden="true" />
          </a>
        </div>

       {/* Trust */}
<div className="products__trust">
  <span>⚡ تسليم فوري</span>
  <span>🛡️ ضمان موثوق</span>
  <span>🔥 الأكثر مبيعاً اليوم</span>
</div>


{/* Categories */}
<div className="products__cats">
  {CATS.map((c) => (
    <button
      key={c.key}
      onClick={() => setActiveCat(c.key)}
      className={`products__cat ${
        activeCat === c.key
          ? "products__cat--active"
          : ""
      }`}
    >
      {c.label}
    </button>
  ))}
</div>
        {/* Grid */}
      {filtered.length === 0 ? (
          <div className="products-empty">
            <span className="products-empty__icon">
              🔍
            </span>

            <h3>لا توجد نتائج</h3>

            <p>
              لم يتم العثور على منتجات مطابقة
              لعملية البحث
            </p>
          </div>
        ) : (
          <div className="products__grid">

          {filtered.map((p) => (
            <article
              key={p.id}
              className={`product-card ${
                p.hot ? "product-card--featured" : ""
              }`}
              onClick={() => handleOpenDetails(p)}
            >

              {/* Thumb */}
              <div
                className="product-card__thumb"
                style={{ background: p.bg }}
              >
                <span>{p.emoji}</span>

                {p.discount && (
                  <div className="product-card__disc">
                    {p.discount}
                  </div>
                )}

                {p.hot && (
                  <div className="product-card__hot">
                    الأكثر مبيعاً
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="product-card__body">

                <h3 className="product-card__name">
                  {p.name}
                </h3>

                {/* 👇 نص التفاصيل داخل الكرت */}
                <p className="product-card__desc">
                  اضغط لعرض تفاصيل المنتج الكاملة
                </p>

                <div className="product-card__meta">
                  <span className="ui-chip ui-chip--accent">
                    {p.badge}
                  </span>

                  <span className="product-card__sales">
                    +٢٣٥ عملية شراء
                  </span>
                </div>

                <div className="product-card__foot">
                  <div className="product-card__pricing">

                    {p.oldPrice && (
                      <span className="product-card__old">
                        {p.oldPrice} ر.س
                      </span>
                    )}

                    <span className="product-card__price">
                      {p.price}
                      <small> ر.س</small>
                    </span>

                  </div>
                </div>

              </div>

              {/* CTA BUTTON */}
              <button
                className="product-card__add"
                onClick={(e) => handleAddToCart(e, p)}
              >
                {addedId === p.id
                  ? "تمت الإضافة ✓"
                  : "أضف للسلة 🛒"}
              </button>

            </article>
          ))}

        </div>

      )}
      </div>
    </section>
  );
}