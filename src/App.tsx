import { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import usePersistedState from "./usePersistedState";
import { Header } from "./components/Header";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
}
