import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App({ isActive }) {
  return (
    <div>
      <Header  isActive={isActive}  />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
