import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

describe('TaskList', () => {
  it('renders tasks', () => {
    const tasks = [{ id: 1, title: "Test Task" }];
    render(<TaskList onEdit={() => {}} onDelete={() => {}} tasks={tasks} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });
});
