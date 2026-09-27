import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDoItem } from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("ToDoItem", () => {
  test("deveria renderizar o componente", () => {
    const item = {
      description: "Aprender Jest",
      createdAt: "2025-08-26T12:00:00.000Z",
      completed: false,
    };

    const { getByText, getByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    expect(getByText("Aprender Jest")).toBeInTheDocument();
    expect(getByText("26/08/2025")).toBeInTheDocument();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  test("deveria chamar a função selectTodoForEdit quando o botao de editar for clicado o item corretamente", async () => {
    const funcaoSelectTodoForEdit = jest.fn();
    const item = {
      description: "Aprender Jest",
      createdAt: "2025-08-26T12:00:00.000Z",
      completed: false,
    };

    const { getByRole } = render(
      <TodoContext.Provider value={{ selectTodoForEdit: funcaoSelectTodoForEdit }}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    const button = getByRole("button", { name: /edit/i });
    await userEvent.click(button);

    expect(funcaoSelectTodoForEdit).toHaveBeenCalledWith(item);
  });

  test("deveria chamar a função removeTodo quando o botao de editar for clicado o item corretamente", async () => {
    const funcaoRemoveTodo = jest.fn();
    const item = {
      description: "Excluir Jest",
      createdAt: "2025-08-26T12:00:00.000Z",
      completed: false,
    };

    const { getByRole } = render(
      <TodoContext.Provider value={{ removeTodo: funcaoRemoveTodo }}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    const button = getByRole("button", { name: /delete/i });
    await userEvent.click(button);

    expect(funcaoRemoveTodo).toHaveBeenCalledWith(item);
  });
});
