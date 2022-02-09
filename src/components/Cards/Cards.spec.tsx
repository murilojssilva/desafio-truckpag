import { render, screen } from "@testing-library/react";
import { Container, Pagination } from "./styles";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";

test("renders without crashing", async () => {
  const { unmount } = render(
    <ThemeProvider theme={light}>
      <Container />
    </ThemeProvider>
  );
  unmount();
});

test("pagination test", () => {
  render(
    <ThemeProvider theme={light}>
      <Pagination>
        <button disabled>1</button>
        <button>2</button>
        <button>149</button>
      </Pagination>
    </ThemeProvider>
  );
  expect(screen.getByText("1"));
  expect(screen.getByText("2"));
  expect(screen.getByText("149"));
});
