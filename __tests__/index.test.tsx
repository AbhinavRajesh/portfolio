import { render, screen } from "@testing-library/react";
import AboutSection from "@components/parts/About/AboutSection";

describe("Home", () => {
  it("renders about section with the given content", () => {
    render(
      <AboutSection
        delay={0}
        content={[<p key="0">This should be rendered</p>]}
      />
    );
    const content = screen.getByText("This should be rendered");
    expect(content).toBeInTheDocument();
  });
});
