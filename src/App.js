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
  const [userInfo, setUserInfo] = useState({ ids: [], name: "", cpf: "" });
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
                <Seats userInfo={userInfo} setUserInfo={setUserInfo} />
              </Route>
              <Route path="/success/:id" exact>
                <Success userInfo={userInfo} setUserInfo={setUserInfo} />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
