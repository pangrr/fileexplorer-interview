import React from "react";
import { dataFromBackend as contract } from "./api";

export default function App() {
  return <h1>Render contract "{contract.name}" here</h1>;
}
