import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/header/header";
import SelectMovie from "./components/SelectMovie";
function App() {
  return (
    <div className="App">
      <Header />
      <SelectMovie />
    </div>
  );
}

export default App;
