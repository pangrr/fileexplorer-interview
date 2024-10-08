import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders contract title", () => {
    render(<App />);
    const title = screen.getByText(/Sample NDA/i);
    expect(title).toBeInTheDocument();
  });
});
