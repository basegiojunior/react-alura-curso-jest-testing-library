import { render } from "@testing-library/react";
import { ToDoCount } from ".";
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService");

describe("ToDoCount", () => {
  test("deveria renderizar o contador corretamente", async () => {
    getTodos.mockResolvedValue([]);

    const { findByText } = render(<ToDoCount />);
    const count = await findByText("0");

    expect(count).toBeInTheDocument();
  });

  test("deveria renderizar o contador com itens corretamente", async () => {
    getTodos.mockResolvedValue([
      {
        id: 1,
        description: "Aprender Jest",
        createdAt: "2025-08-26T12:00:00.000Z",
        completed: false,
      },
      {
        id: 2,
        description: "Aprender Jest 2",
        createdAt: "2025-08-26T12:00:00.000Z",
        completed: true,
      },
    ]);

    const { findByText } = render(<ToDoCount />);
    const count = await findByText("2");

    expect(count).toBeInTheDocument();
  });
});
