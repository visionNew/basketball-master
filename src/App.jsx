import { useState } from "react";
import { splitData, formatDataMatrix, findInvalidRows } from "./utils/utils";
import "./App.css";
import DataTable from "./components/DataTable";
import MostPointsScoredByTeamTable from "./components/MostPointsScoredByTeamTable";
import MostPointsScoredTable from './components/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/MostPointsScoredByTimePlayedTable';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';

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
        <h1>Basketball Statistic</h1>
        <input type="file" onChange={handleFileUpload} />
        {!!errors.length && <ErrorDisplay errors={errors} />}
        {!!data.length && (
          <>
            <DataTable data={data} />
            <MostPointsScoredTable data={data} />
            <MostPointsScoredByTimePlayedTable data={data} />
            <MostPointsScoredByTeamTable data={data} />
          </>
        )}
      </div>
  );
}

export default App;
