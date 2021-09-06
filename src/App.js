import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/header/header";
import SelectMovie from "./components/Home";
import Sessions from "./components/Sessions";
import Success from "./components/SuccessPage";
import Seats from "./components/Seats";
import { useState } from "react";

function App() {
  const [orderInfo, setOrderInfo] = useState({});
  return (
    <>
      {" "}
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/" component={SelectMovie} exact />
              <Route path="/sessions/:id" exact>
                <Sessions />
              </Route>
              <Route path="/sessions/seats/:id" exact>
                <Seats orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
              </Route>
              <Route path="/success/:id" exact>
                <Success orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
