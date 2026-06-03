import { useState } from "react";
import "../styles/Newsletter.css";
import { Mail  } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  };

  return (
    <div className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <h3 className="newsletter__title">اشترك في النشرة البريدية</h3>
          <p className="newsletter__desc">أول من يعلم بالعروض الحصرية</p>
        </div>
        {sent ? (
          <p className="newsletter__success">
            <i className="ti ti-circle-check" /> تم الاشتراك! شكراً لك.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              className="newsletter__input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="بريدك الإلكتروني..."
              required
              aria-label="البريد الإلكتروني"
            />
           <button
          type="submit"
          className="newsletter__btn"
          aria-label="اشترك"
        >
          <Mail  aria-hidden="true" />
          <span className="search-bar__btn-text">اشترك</span>
        </button>
          </form>
        )}
      </div>
    </div>
  );
}
