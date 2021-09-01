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
        {/* <Sessions /> */}
        <div className="title">
          {" "}
          <h1>Selecione o(s) assentos(s)</h1>
        </div>
        <div className="choose-seats">
          <div className="seat-list">Seat list</div>
          <div className="buyer-details">
            <div className="name">
              <label>Nome do comprador:</label>
              <input placeholder="Digite seu nome..." />
            </div>
            <div className="cpf">
              <label>CPF do comprador: </label>
              <input placeholder="Digite seu CPF..." />
            </div>
          </div>
          <button className="reserve-seats">Reservar assento(s)</button>
          <div className="chosen-session">
            <div className="poster">
              <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />
            </div>
            <div className="session-details">
              <p>Enola Holmes</p>
              <p>Quinta-feira - 15:00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
