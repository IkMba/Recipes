import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useKey } from "../hooks/useKey";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputRef.current)
      navigate(`/recipes/${query}`);
    setQuery("");
  });

  return (
    <input
      type="text"
      placeholder="Search recipes"
      className="rounded-lg border-2 px-2 py-0 text-lg text-black w-40 h-10 md:min-w-96"
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}

export default Search;
