import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/header/header";
import SelectMovie from "./components/SelectMovie";
import Sessions from "./components/Session";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <SelectMovie /> */}
        <Sessions />
      </main>
    </div>
  );
}

export default App;
