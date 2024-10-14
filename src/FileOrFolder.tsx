import { useState } from "react";
import "./FileOrFolder.css";

export default function FileOrFolder({ data, level }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="container" style={{ paddingLeft: `${level * 8}px` }}>
      <div
        className={`name ${data.children ? "folder" : "file"}`}
        onClick={() => setExpand(!expand)}
      >
        {data.name}
      </div>
      {data.children && expand && (
        <div className="children">
          {data.children.map((node) => (
            <FileOrFolder data={node} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
