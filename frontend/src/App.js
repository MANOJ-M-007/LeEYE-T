import { ThemeProvider } from "@mui/material/styles";
import AllRoutes from './Routes/AllRoutes';
import theme from './Utility/CoustomTheme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AllRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
