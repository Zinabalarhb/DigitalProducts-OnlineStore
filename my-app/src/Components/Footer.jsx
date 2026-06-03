import "../styles/Footer.css";
import { FaInstagram, FaXTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const COLS = [
  {
    title: "المنتجات",
    links: [
      "بطاقات PlayStation",
      "Xbox Game Pass",
      "Steam",
      "Netflix & Spotify",
    ],
  },
  {
    title: "الشركة",
    links: [
      "من نحن",
      "الشروط والأحكام",
      "سياسة الخصوصية",
      "سياسة الاسترداد",
    ],
  } 
];

const SOCIALS = [
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    url: "https://wa.me/966500000000",
  },
  {
    icon: <FaXTwitter size={20} />,
    label: "Twitter / X",
    url: "https://x.com/youraccount",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    url: "https://instagram.com/youraccount",
  },
  {
    icon: <FaTiktok size={20} />,
    label: "TikTok",
    url: "https://tiktok.com/@youraccount",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Brand */}
        <div>
          <div className="footer__logo">
            كود
            <span
              className="footer__logo-dot"
              aria-hidden="true"
            />
            تك
          </div>

          <p className="footer__desc">
            متجرك الموثوق للمنتجات الرقمية.
            ألعاب، اشتراكات، وبطاقات رقمية
            بأفضل الأسعار في المنطقة العربية.
          </p>
        </div>

        {/* Columns */}
        {COLS.map((col) => (
          <div key={col.title}>
            <p className="footer__col-title">
              {col.title}
            </p>

            <ul className="footer__links">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="footer__link"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © ٢٠٢٥ كود تك. جميع الحقوق محفوظة.
        </p>

        <div className="footer__socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
