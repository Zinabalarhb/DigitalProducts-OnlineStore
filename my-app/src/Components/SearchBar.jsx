import { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import { Search } from "lucide-react";

export default function SearchBar({
  value = "",
  onSearch,
}) {
  const [query, setQuery] = useState(value);

 

  useEffect(() => {
    setQuery(value);
  }, [value]);

 

 const handleSubmit = (e) => {
  e.preventDefault();

  if (onSearch) {
    onSearch(query);
  }

  document
    .getElementById("products")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

  return (
    <div className="search-bar">
      <form
        className="search-bar__form"
        onSubmit={handleSubmit}
        role="search"
      >
        <input
          className="search-bar__input"
          type="search"
          value={query}
         onChange={(e) => {
  setQuery(e.target.value);
}}
          placeholder="ابحث عن منتج أو لعبة أو اشتراك..."
          aria-label="بحث"
        />

        <button
          type="submit"
          className="search-bar__btn"
          aria-label="بحث"
        >
          <Search
            aria-hidden="true"
          />

          <span className="search-bar__btn-text">
            بحث
          </span>
        </button>
      </form>
    </div>
  );
}