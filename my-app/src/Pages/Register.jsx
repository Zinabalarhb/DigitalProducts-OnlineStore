/* =========================================================
   REGISTER PAGE — ULTRA MODERN
========================================================= */

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  User,
  Mail,
  Lock,
  ArrowLeft,
  ShieldCheck,
  Eye,
  EyeOff,
  ChevronRight,
  Globe,
} from "lucide-react";

import "../styles/Auth.css";

const FEATURES = [
  "منتجات رقمية أصلية ومضمونة",
  "تسليم لحظي بعد الدفع",
  "عروض وخصومات حصرية",
];

export default function Register() {

  const [showPass, setShowPass] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <section className="auth">

      {/* BACKGROUND */}
      <div className="auth__bg" aria-hidden="true" />
      <div className="auth__glow auth__glow--1" aria-hidden="true" />
      <div className="auth__glow auth__glow--2" aria-hidden="true" />

    

      {/* CONTAINER */}
      <div className="auth__container">

        {/* LEFT */}
        <div className="auth__content">

          <span className="auth__badge">
            <ShieldCheck size={15} />
            أنشئ حسابك خلال ثوانٍ
          </span>

          <h1 className="auth__title">
            ابدأ رحلتك  معنا 
           </h1>

          <p className="auth__text">
            احصل على أفضل المنتجات الرقمية،
            والعروض الحصرية، وتجربة شراء احترافية.
          </p>

          <div className="auth__features">

            {FEATURES.map((f) => (
              <div key={f} className="auth__feature">

                <span
                  className="auth__feature-dot"
                  aria-hidden="true"
                />

                {f}

              </div>
            ))}

          </div>

        </div>

        {/* CARD */}
        <div className="auth__card">

       

          {/* HEADING */}
          <h2 className="auth__heading">
            إنشاء حساب
          </h2>

          <p className="auth__subheading">
            أنشئ حسابك وابدأ التسوق الآن
          </p>

          {/* FORM */}
          <form
            className="auth__form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* NAME */}
            <div className="auth__field">

              <label htmlFor="reg-name">
                الاسم الكامل
              </label>

              <div className="auth__input-wrapper">

                <User size={17} />

                <input
                  id="reg-name"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  autoComplete="name"
                  required
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="auth__field">

              <label htmlFor="reg-email">
                البريد الإلكتروني
              </label>

              <div className="auth__input-wrapper">

                <Mail size={17} />

                <input
                  id="reg-email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="auth__field">

              <label htmlFor="reg-pass">
                كلمة المرور
              </label>

              <div className="auth__input-wrapper">

                <Lock size={17} />

                <input
                  id="reg-pass"
                  type={showPass ? "text" : "password"}
                  placeholder="٨ أحرف على الأقل"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="auth__eye"
                  onClick={() => setShowPass(v => !v)}
                  aria-label={
                    showPass
                      ? "إخفاء كلمة المرور"
                      : "إظهار كلمة المرور"
                  }
                >
                  {showPass
                    ? <EyeOff size={16} />
                    : <Eye size={16} />
                  }
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="auth__field">

              <label htmlFor="reg-confirm">
                تأكيد كلمة المرور
              </label>

              <div className="auth__input-wrapper">

                <Lock size={17} />

                <input
                  id="reg-confirm"
                  type={showConfirm ? "text" : "password"}
                  placeholder="أعد كتابة كلمة المرور"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="auth__eye"
                  onClick={() => setShowConfirm(v => !v)}
                  aria-label={
                    showConfirm
                      ? "إخفاء كلمة المرور"
                      : "إظهار كلمة المرور"
                  }
                >
                  {showConfirm
                    ? <EyeOff size={16} />
                    : <Eye size={16} />
                  }
                </button>

              </div>

            </div>

            {/* TERMS */}
            <label className="auth__remember">

              <input type="checkbox" required />

              أوافق على الشروط والأحكام

            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth__btn auth__btn--primary"
            >
              إنشاء الحساب
              <ArrowLeft size={18} />
            </button>

            {/* DIVIDER */}
            <div className="auth__divider">
              <span>أو</span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="auth__btn auth__btn--ghost"
            >
              <Globe size={18} />
              التسجيل عبر Google
            </button>

          </form>

          {/* BOTTOM */}
          <p className="auth__bottom-text">
            لديك حساب بالفعل؟
            <Link to="/login">
              تسجيل الدخول
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}