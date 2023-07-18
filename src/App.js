import "./App.css";
import BotomHeader from "./components/header/BotomHeader";
import MedailHeader from "./components/header/MedailHeader";
import TopHeader from "./components/header/TopHeader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopHeader />
          <MedailHeader />
          <BotomHeader />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
