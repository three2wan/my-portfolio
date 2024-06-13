import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
