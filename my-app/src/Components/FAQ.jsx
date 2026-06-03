import { useState } from "react";
import "../styles/FAQ.css";

const FAQS = [
  { id: 1, q: "كيف أستلم الكود بعد الشراء؟",              a: "بعد إتمام الدفع، يُرسل الكود تلقائياً إلى بريدك الإلكتروني خلال ثوانٍ. كما يمكنك الوصول إليه من حسابك في قسم 'طلباتي'." },
  { id: 2, q: "ما هي طرق الدفع المتاحة؟",                 a: "مدى، فيزا، ماستركارد، Apple Pay، STC Pay، وغيرها من بوابات الدفع الآمنة." },
  { id: 3, q: "هل يمكنني استرداد المبلغ إذا لم يعمل الكود؟", a: "نعم، نضمن استرداد كامل المبلغ أو استبدال الكود في حال ثبت عدم صلاحيته." },
  { id: 4, q: "هل المنتجات تعمل في السعودية؟",             a: "جميع المنتجات متوافقة مع المنطقة العربية. يُذكر في وصف كل منتج المناطق المدعومة." },
  { id: 5, q: "كيف أتواصل مع الدعم الفني؟",               a: "فريق الدعم متاح ٢٤/٧ عبر الواتساب، البريد الإلكتروني، أو الدردشة المباشرة داخل الموقع." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(prev => prev === id ? null : id);

  return (
    <section className="  section   " id="support">
       <div className=" ">
      <div className="section__head" >
        <div>
          <h2 className="section__title">الأسئلة الشائعة</h2>
          <p className="section__sub">كل ما تحتاج معرفته</p>
        </div>
      </div>
      <div className="faq__list layout-container " role="list">
             

        {FAQS.map(f => {
          const isOpen = open === f.id;
          return (
            <div key={f.id} className="faq__item" role="listitem">
              <button
                className={`faq__q ${isOpen ? "faq__q--open" : ""}`}
                onClick={() => toggle(f.id)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <i className="ti ti-chevron-down" aria-hidden="true" />
              </button>
              {isOpen && (
                <div className="faq__a" role="region">
                  {f.a}
                </div>
                
              )}
            </div>
          );
        })}
        
      </div>
      </div>
      
    </section>
    
  );
}
