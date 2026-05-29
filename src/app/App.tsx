import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 px-2 py-2 flex flex-col">
        <div className="mx-auto max-w-3xl w-full bg-white rounded-xl shadow-lg flex-1 flex flex-col">
          <div className="flex-1 flex flex-col">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
