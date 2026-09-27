import { render } from "@testing-library/react";
import ToDoGroup from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("ToDoGroup", () => {
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
});
