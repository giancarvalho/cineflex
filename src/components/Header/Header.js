import { useHistory, useLocation } from "react-router-dom";
import { ArrowBackCircleOutline } from "react-ionicons";
export default function Header() {
  let history = useHistory();
  let location = useLocation();

  //returns true if user isn`t on homepage
  function canShowGoBackButton() {
    return location.pathname !== "/";
  }

  return (
    <header>
      <h1>CINEFLEX</h1>
      {canShowGoBackButton() && (
        <button onClick={() => history.goBack()}>
          <ArrowBackCircleOutline color={"#00000"} height="32px" width="32px" />
        </button>
      )}
    </header>
  );
}
