import { render } from "@testing-library/react";

import { Container } from "./index";

describe("Container", () => {
  test("deveria renderizar o componente", () => {
    const { getByText, container } = render(<Container>Um texto de exemplo</Container>);

    expect(getByText("Um texto de exemplo")).toBeInTheDocument();
    expect(container.querySelector(".container")).toBeInTheDocument();
  });
});
