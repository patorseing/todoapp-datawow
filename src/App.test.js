import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

window.alert = jest.fn();

describe("render app", () => {
  it("init render", async () => {
    render(<App />);
    const Progress = screen.getByText(/progress/i);
    expect(Progress).toBeInTheDocument();
    const Tasks = screen.getByText(/Tasks/i);
    expect(Tasks).toBeInTheDocument();
    const firstBut = within(screen.getAllByRole("button")[0]);
    expect(firstBut.getByText("All")).toBeInTheDocument();
    expect(firstBut.getByTitle(/chevron-down/i)).toBeInTheDocument();
    const addTaskField = screen.getByPlaceholderText("Add your todo...");
    expect(addTaskField).toBeInTheDocument();
  });
});
