import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 حفظ السلة في localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 إضافة للسلة
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ❌ حذف منتج كامل
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // ➖ تقليل الكمية
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, qty: Math.max(1, p.qty - 1) }
          : p
      )
    );
  };

  // 🧹 تفريغ السلة
  const clearCart = () => {
    setCart([]);
  };

  // 💰 حساب الإجمالي
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  // 🔢 عدد المنتجات
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
        clearCart,
        total,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);