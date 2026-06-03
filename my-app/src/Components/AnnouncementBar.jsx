import "../styles/AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div className="announcement" role="banner">
      <span className="announcement__badge">جديد</span>
      <span className="announcement__text">
        خصم ٣٠٪ على بطاقات PlayStation — العرض ينتهي الجمعة
      </span>
      <a href="#offers" className="announcement__link">
        تسوّق الآن <i className="ti ti-arrow-left" aria-hidden="true" />
      </a>
    </div>
  );
}
