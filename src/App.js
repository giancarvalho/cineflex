import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/header/header";
import SelectMovie from "./components/SelectMovie";
import Sessions from "./components/Sessions";
import Seats from "./components/seats";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <SelectMovie /> */}
        {/* <Sessions /> */}
        <Seats />
      </main>
    </div>
  );
}

export default App;
