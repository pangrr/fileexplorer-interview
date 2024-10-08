import "./Sentence.css";

export default function Sentence({ text, onClick, selected }) {
  return (
    <span
      className={`${selected ? "selected" : ""} sentence`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}
