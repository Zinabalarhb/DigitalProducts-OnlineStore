import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import "../styles/ProductDetails.css";

export default function ProductDetailsPage() {
  const { state } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  if (!state) {
    return (
      <div style={{ padding: 100, color: "white" }}>
        المنتج غير موجود
        <button onClick={() => navigate("/")}>
          العودة
        </button>
      </div>
    );
  }

  const handleAdd = async () => {
    setLoading(true);

    // simulate real API delay
    await new Promise((res) => setTimeout(res, 500));

    addToCart({
      ...state,
      quantity: 1,
    });

    setLoading(false);
  };

  return (
    <section className="product-details">
      <div className="details-card animate-in">

        <div
          className="details-image"
          style={{
            background: state.bg || "linear-gradient(135deg,#111,#333)"
          }}
        >
          <span>{state.emoji || "🛒"}</span>
        </div>

        <div className="details-info">

          <h1>{state.name}</h1>

          <p>
            منتج رقمي تسليم فوري — وصول مباشر بعد الدفع مع ضمان كامل واستبدال فوري عند أي مشكلة
          </p>

          <div className="price">
            {state.price} ر.س
          </div>

          <button
            className="btn-add"
            onClick={handleAdd}
            disabled={loading}
          >
            {loading ? "جاري الإضافة..." : "إضافة للسلة"}
          </button>

        </div>

      </div>
    </section>
  );
}