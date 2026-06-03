import "../styles/TrustBar.css";

const ITEMS = [
  { icon: "ti-shield-check", label: "دفع آمن ومضمون"  },
  { icon: "ti-bolt",         label: "استلام فوري"      },
  { icon: "ti-headset",      label: "دعم ٢٤/٧"         },
  { icon: "ti-award",        label: "منتجات مختبرة"    },
  { icon: "ti-refresh",      label: "استرداد مضمون"    },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {ITEMS.map(item => (
        <div key={item.label} className="trust-bar__item">
          <i className={`ti ${item.icon}`} aria-hidden="true" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
