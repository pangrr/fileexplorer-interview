import FileOrFolder from "./FileOrFolder";
import "./FileExplorer.css";

export default function FileExplorer({ data }) {
  return (
    <div className="container">
      {data.map((node) => (
        <FileOrFolder data={node} level={0} />
      ))}
    </div>
  );
}
