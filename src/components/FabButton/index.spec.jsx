import { render } from "@testing-library/react";
import { FabButton } from ".";

describe("FabButton", () => {
  test("deveria renderizar o componente", () => {
    const { getByRole } = render(<FabButton onClick={() => {}}>Texto simples</FabButton>);

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("fab");
    expect(button).toHaveTextContent("Texto simples");
  });
});
