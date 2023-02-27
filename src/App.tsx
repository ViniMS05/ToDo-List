import { ThemeProvider } from "styled-components";
import { TaskList } from "./components/AddNewTask";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <TaskList />

      <GlobalStyle />
    </ThemeProvider>
  );
}
