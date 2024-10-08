import { dataFromBackend as contract } from "./api";
import Contract from "./Contract";

export default function App() {
  return <Contract contract={contract} />;
}
