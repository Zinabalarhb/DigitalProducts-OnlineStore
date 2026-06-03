import { useState } from "react";
import { Link } from "react-router-dom";

import {
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
  "استلام فوري للطلبات",
  "دفع آمن ١٠٠٪",
  "دعم فني ٢٤/٧",
];

export default function Login() {

  const [showPass, setShowPass] = useState(false);

  return (
    <section className="auth">

      {/* BACKGROUND */}
      <div className="auth__bg" aria-hidden="true" />
      <div className="auth__glow auth__glow--1" aria-hidden="true" />
      <div className="auth__glow auth__glow--2" aria-hidden="true" />

   

      {/* CONTAINER */}
      <div className="auth__container">

        {/* LEFT CONTENT */}
        <div className="auth__content">

          <span className="auth__badge">
            <ShieldCheck size={15} />
            تسجيل دخول آمن ومشفر
          </span>

          <h1 className="auth__title">
            أهلاً بعودتك
          
          </h1>

          <p className="auth__text">
            سجّل الدخول للوصول إلى جميع منتجاتك الرقمية،
            طلباتك، واشتراكاتك الخاصة بسهولة وأمان.
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
            تسجيل الدخول
          </h2>

          <p className="auth__subheading">
            قم بتسجيل الدخول للمتابعة
          </p>

          {/* FORM */}
          <form
            className="auth__form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* EMAIL */}
            <div className="auth__field">

              <label htmlFor="login-email">
                البريد الإلكتروني
              </label>

              <div className="auth__input-wrapper">

                <Mail size={17} />

                <input
                  id="login-email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="auth__field">

              <label htmlFor="login-pass">
                كلمة المرور
              </label>

              <div className="auth__input-wrapper">

                <Lock size={17} />

                <input
                  id="login-pass"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
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

            {/* OPTIONS */}
            <div className="auth__options">

              <label className="auth__remember">

                <input type="checkbox" />

                تذكرني

              </label>

              <Link
                to="/forgot-password"
                className="auth__forgot-link"
              >
                نسيت كلمة المرور؟
              </Link>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth__btn auth__btn--primary"
            >
              تسجيل الدخول
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
              المتابعة عبر Google
            </button>

          </form>

          {/* BOTTOM */}
          <p className="auth__bottom-text">
            ليس لديك حساب؟
            <Link to="/register">
              إنشاء حساب جديد
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}