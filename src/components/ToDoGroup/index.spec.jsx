import { render } from "@testing-library/react";
import ToDoGroup from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("ToDoGroup", () => {
  test("deveria renderizar a mensagem de carregando quando o isLoading for true", () => {
    const { getByText, queryAllByRole } = render(
      <ToDoGroup isLoading={true} todos={[]} heading="Teste" />,
    );

    expect(getByText("Carregando...")).toBeInTheDocument();
  });

  test("deveria renderizar a mensagem de lista vazia quando não tiver itens", () => {
    const { getByText, queryAllByRole } = render(
      <ToDoGroup isLoading={false} todos={[]} heading="Teste" />,
    );

    expect(getByText("Nenhum item encontrado")).toBeInTheDocument();
  });

  test.each([
    { isLoading: true, items: [] },
    { isLoading: false, items: [] },
    {
      isLoading: false,
      items: [
        {
          id: 1,
          description: "Aprender Jest",
          completed: false,
          createdAt: "2025-08-26T12:00:00.000Z",
        },
      ],
    },
  ])("deveria renderizar o título da lista o tempo todo", ({ isLoading, items }) => {
    const { getByText } = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup isLoading={isLoading} todos={items} heading="Visivel o tempo todo" />
      </TodoContext.Provider>,
    );

    expect(getByText("Visivel o tempo todo")).toBeInTheDocument();
  });

  test("deveria renderizar o componente", () => {
    const { getByText, queryAllByRole } = render(<ToDoGroup todos={[]} heading="Teste" />);

    expect(getByText("Teste")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("deveria renderizar itens do grupo corretamente", () => {
    const items = [
      {
        id: 1,
        description: "Aprender Jest",
        createdAt: "2025-08-26T12:00:00.000Z",
        completed: false,
      },
      {
        id: 2,
        description: "Aprender React",
        createdAt: "2025-09-27T12:00:00.000Z",
        completed: true,
      },
    ];
    const { getByText, queryAllByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup todos={items} heading="Teste" />
      </TodoContext.Provider>,
    );

    expect(queryAllByRole("listitem")).toHaveLength(2);

    const todoItem1 = getByText("Aprender Jest");
    expect(todoItem1).toBeInTheDocument();

    const todoItem2 = getByText("Aprender React");
    expect(todoItem2).toBeInTheDocument();
  });

  describe("falso-positivo", () => {
    test("deveria renderizar o estado correto quando a lista estiver vazia", () => {
      const { getByText, queryAllByRole } = render(
        <ToDoGroup isLoading={false} todos={[]} heading="Teste" />,
      );

      expect(getByText("Teste")).toBeInTheDocument();
      expect(queryAllByRole("listitem")).toHaveLength(0);

      // Correto
      // expect(getByText("Nenhum item encontrado")).toBeInTheDocument();
    });

    test("deveria renderizar o estado correto quando a lista estiver vazia", () => {
      const { getByText, queryAllByRole } = render(
        <ToDoGroup isLoading={false} todos={[]} heading="Teste" />,
      );

      expect(getByText("Teste")).toBeInTheDocument();

      // Falso-positivo
      expect(queryAllByRole("listitem")).toHaveLength(0);

      // Correto
      // expect(getByText("Nenhum item encontrado")).toBeInTheDocument();
    });
  });
});
