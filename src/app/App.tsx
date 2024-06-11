import "../App.css";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
