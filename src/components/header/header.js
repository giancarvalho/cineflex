import { useHistory, useLocation } from "react-router-dom";
import { ArrowBackCircleOutline } from "react-ionicons";
export default function Header() {
  let history = useHistory();
  let location = useLocation();

  function isHome() {
    return location.pathname === "/";
  }

  return (
    <header>
      <h1>CINEFLEX</h1>
      {!isHome() && (
        <button onClick={() => history.goBack()}>
          <ArrowBackCircleOutline color={"#00000"} height="32px" width="32px" />
        </button>
      )}
    </header>
  );
}
