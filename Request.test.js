import Request from "./Request";
import { render, screen } from "@testing-library/react";

describe("Test suite for Request", () => {
  test("Request json test", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id:'1',title:'Try'}],
    });
    render(<Request />)

    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});
