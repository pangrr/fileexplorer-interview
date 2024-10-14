import FileExplorer from "./FileExplorer";

const data = [
  {
    name: "cats",
    children: [
      {
        name: "mimi",
      },
      {
        name: "kitty",
      },
    ],
  },
  {
    name: "dogs",
    children: [
      { name: "mine", children: [{ name: "snoopy" }] },
      { name: "woofy" },
    ],
  },
  {
    name: "readme",
  },
];

export default function App() {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
}
