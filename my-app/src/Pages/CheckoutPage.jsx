import { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import "../styles/Checkout.css";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "card",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("يرجى تعبئة جميع البيانات");
      return;
    }

    if (cart.length === 0) {
      alert("السلة فارغة");
      return;
    }

    const order = {
      customer: form,
      items: cart,
      total,
      status: "pending",
      createdAt: new Date(),
    };

    console.log("ORDER CREATED:", order);

    alert("تم إنشاء الطلب بنجاح 🎉");

    clearCart();
  };

  return (
    <section className="checkout-page">
      <div className="container checkout-grid">

        {/* FORM */}
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>إتمام الطلب</h2>

          <input
            name="name"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="رقم الجوال"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="العنوان بالتفصيل"
            value={form.address}
            onChange={handleChange}
          />

          <h3>طريقة الدفع</h3>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={form.payment === "card"}
              onChange={handleChange}
            />
            بطاقة بنكية
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={form.payment === "cod"}
              onChange={handleChange}
            />
            الدفع عند الاستلام
          </label>

          <button type="submit">
            تأكيد الطلب
          </button>
        </form>

        {/* SUMMARY */}
        <aside className="checkout-summary">
          <h3>ملخص الطلب</h3>

          {cart.length === 0 ? (
            <div className="empty-cart">
              السلة فارغة
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="summary-item"
                >
                  <span>
                    {item.name}
                    {" × "}
                    {item.qty}
                  </span>

                  <span>
                    {Number(item.price) * item.qty}
                    {" "}ر.س
                  </span>
                </div>
              ))}

              <div className="total">
                <span>الإجمالي</span>

                <strong>
                  {total} ر.س
                </strong>
              </div>
            </>
          )}
        </aside>

      </div>
    </section>
  );
}