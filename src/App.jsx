import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { splitData, formatDataMatrix, findInvalidRows } from "./utils/dataUtils";
import FileInput from "./components/FileInput/FileInput";
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import Logo from "../public/basketball-ball.svg"
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      const dataArr = splitData(reader.result);
      const dataMatrix = formatDataMatrix(dataArr);
      const newErrors = findInvalidRows(dataMatrix);

      if (newErrors.length > 0) {
        setData([]);
        setErrors(newErrors);
      } else {
        setErrors([]);
        setData(dataMatrix);
      }
    };
  }
    
  return (
      <div className="App">
        <header className="app__header">
          <div className="header__logo"><img src={Logo} alt="logo" /></div>
          <FileInput onChange={handleFileUpload} />
          <h1>Basketball Statistic</h1>
        </header>
        {!!errors.length && <ErrorDisplay errors={errors} />}

        <nav>
          <NavLink to="/">Home page</NavLink>
          <NavLink to={"/overall-stats"} state={{ data: data }}>
              Overall Stats
          </NavLink>
          <NavLink to={"/most-points"} state={{ data: data }}>
              Most Points
          </NavLink>
          <NavLink to={"/most-points-all-game"} state={{ data: data }}>
              Most Points All Games
          </NavLink>
          <NavLink to={"/most-points-per-time"} state={{ data: data }}>
              Most points per time played
          </NavLink>
          <NavLink to={"/team-table"} state={{ data: data }}>
              Team Page
          </NavLink>
          <NavLink to={"/best-player-table"} state={{ data: data }}>
              Best Player
          </NavLink>
        </nav>

        {!!data.length && <Outlet />}
      </div>
  );
}

export default App;
