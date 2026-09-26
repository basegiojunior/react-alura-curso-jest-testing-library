import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormToDo from ".";
import { TodoContext } from "../TodoProvider/TodoContext";

describe("FormToDo", () => {
  test("deveria renderizar o componente", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "Um exemplo qualquer" } }}>
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );

    expect(getByRole("form")).toBeInTheDocument();
  });

  test("deveria renderizar a descrição do todo selecionado", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Um exemplo qualquer DE NOVO" } }}
      >
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("Um exemplo qualquer DE NOVO");
  });

  test("Deveria enviar o form com a descrição atualizada", async () => {
    const funcaoSimulandoSubmit = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Um exemplo qualquer DE NOVO" } }}
      >
        <FormToDo onSubmit={funcaoSimulandoSubmit} />
      </TodoContext.Provider>,
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Uma novo curso para estudar");

    const button = getByRole("button", { name: /salvar item/i });
    await userEvent.click(button);

    expect(funcaoSimulandoSubmit).toHaveBeenCalled();
  });
});
