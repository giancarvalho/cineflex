import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/header/header";
import SelectMovie from "./components/Home";
import Sessions from "./components/Sessions";
import Success from "./components/SuccessPage";
import Seats from "./components/Seats";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <main>
            <Route path="/" exact>
              <SelectMovie />
            </Route>
            <Route path="/sessions/:id" exact>
              <Sessions />
            </Route>
            <Route path="/sessions/:id/seats/:id" exact>
              <Seats />
            </Route>
            <Route path="/sessions/:id/seats/:id/success/:id" exact>
              <Success />
            </Route>
          </main>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
