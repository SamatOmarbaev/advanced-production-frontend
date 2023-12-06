import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
};

export default App;
