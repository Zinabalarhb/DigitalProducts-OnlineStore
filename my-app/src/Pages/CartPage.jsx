import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
import "../styles/Cart.css";

export default function CartPage() {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    total,
  } = useCart();

  return (
    <section className="cart-page">
      <div className="container">

        <h1 className="cart-title">
          سلة المشتريات
        </h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>سلتك فارغة 🛒</h2>
            <p>أضف بعض المنتجات أولاً</p>

            <button
              className="checkout-btn"
              onClick={() => navigate("/products")}
            >
              تصفح المنتجات
            </button>
          </div>
        ) : (
          <div className="cart-layout">

            {/* المنتجات */}
            <div className="cart-items">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >

                  <div className="item-info">
                    <h3>{item.name}</h3>

                    <p>
                      {item.price} ر.س
                    </p>
                  </div>

                  {/* التحكم بالكمية */}
                  <div className="qty-control">

                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      <Minus size={16} />
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* الإجمالي */}
                  <div className="item-total">
                    {Number(item.price) * item.qty} ر.س
                  </div>

                  {/* حذف */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              ))}

            </div>

            {/* ملخص الطلب */}
            <aside className="cart-summary">

              <h3>ملخص الطلب</h3>

              <div className="summary-row">
                <span>عدد المنتجات</span>

                <span>
                  {cart.reduce(
                    (sum, item) => sum + item.qty,
                    0
                  )}
                </span>
              </div>

              <div className="summary-row">
                <span>الإجمالي</span>

                <span>
                  {total} ر.س
                </span>
              </div>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                إتمام الطلب
              </button>

              <p className="note">
                🔒 جميع المدفوعات آمنة ومشفرة
              </p>

            </aside>

          </div>
        )}

      </div>
    </section>
  );
}