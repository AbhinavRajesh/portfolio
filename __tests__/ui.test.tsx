import Bubble from "@components/ui/Bubble";
import Button from "@components/ui/Button";
import Card from "@components/ui/Card";
import { render, screen } from "@testing-library/react";

describe("UI Components", () => {
  it("renders bubble with the given content", () => {
    render(<Bubble text="Render this pls" />);
    const content = screen.getByText("Render this pls");
    expect(content).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<Button text="Render this pls" to="/" />);
    const content = screen.getByText("Render this pls");
    expect(content).toBeInTheDocument();
  });

  it("renders card", () => {
    render(
      <Card
        title="Render this pls"
        description="Custom Description"
        value="1"
      />
    );
    const title = screen.getByText("Render this pls");
    const description = screen.getByText("Custom Description");
    const value = screen.getByText("1");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
