import "../styles/Brands.css";

const BRANDS = [
  { emoji: "🎮", name: "PlayStation" },
  { emoji: "🕹️", name: "Xbox"        },
  { emoji: "🖥️", name: "Steam"       },
  { emoji: "📺", name: "Netflix"     },
  { emoji: "🎵", name: "Spotify"     },
  { emoji: "🔫", name: "PUBG"        },
  { emoji: "⚽", name: "FIFA"        },
  { emoji: "📱", name: "Google Play" },
];

export default function Brands() {
  return (
    <div className="  brands">
      <p className="brands__label">المنصات المتاحة</p>
      <div className="brands__row" role="list">
        {BRANDS.map(b => (
          <button key={b.name} className="brands__chip" role="listitem">
            <span aria-hidden="true">{b.emoji}</span>
            {b.name}
          </button>
        ))}
      </div>
    </div>
  );
}
