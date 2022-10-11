import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavbarMenu from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
