import { useState } from "react";
import { useDebounce, useFetch } from "./hooks";
import "./Autocomplete.css";

export default function Autocomplete() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("");
  const minLength = 3;

  const debouncedInput = useDebounce(
    input.length >= minLength ? input : "",
    300
  );

  const { data: suggestion } = useFetch(debouncedInput);

  return (
    <div className="container">
      <input
        value={input || selected}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <div>
        {suggestion.map((s, i) => (
          <div
            className="suggestion"
            key={i}
            onClick={() => handleClickSuggestion(s)}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );

  function handleInputChange(s) {
    setInput(s);
  }

  function handleClickSuggestion(s) {
    setInput("");
    setSelected(s);
  }
}
