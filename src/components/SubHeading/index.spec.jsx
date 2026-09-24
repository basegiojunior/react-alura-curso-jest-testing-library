import { render } from "@testing-library/react";
import { SubHeading } from ".";

describe("SubHeading", () => {
  // getBy o item precisa obrigatoriamente estar na tela
  describe("getBy", () => {
    test.skip("deveria renderizar o componente corretamente", () => {
      const { getByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(getByText("Para estudar")).toBeInTheDocument();
    });

    test.skip("NÃO deveria renderizar o componente quando não tem children", () => {
      const { getByText } = render(<SubHeading></SubHeading>);
      expect(getByText("Para estudar")).toBeInTheDocument();
    });
  });

  // queryBy o item pode ou não estar na tela
  describe("queryBy", () => {
    test("deveria renderizar o componente corretamente", () => {
      const { queryByText } = render(<SubHeading>Para estudar</SubHeading>);
      expect(queryByText("Para estudar")).toBeInTheDocument();
    });

    test("NÃO deveria renderizar o componente quando não tem children", () => {
      const { queryByText } = render(<SubHeading></SubHeading>);
      expect(queryByText("Para estudar")).toBeNull();
    });
  });
});
