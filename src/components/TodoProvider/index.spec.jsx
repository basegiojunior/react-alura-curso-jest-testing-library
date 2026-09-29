import { act, render, waitFor } from "@testing-library/react";
import { TodoProvider } from ".";
import { getTodos } from "../../services/TodoService";

jest.mock("../../services/TodoService");

describe("TodoProvider", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("deveria renderizar o provider buscnado os todos ao montar", async () => {
    render(<TodoProvider />);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(getTodos).toHaveBeenCalledTimes(1);
    });
  });
});
