import { useState } from "react";
import { splitData, formatDataMatrix, findInvalidRows } from "./utils/utils";
import "./App.css";
import DataTable from "./components/DataTable";
import MostPointsScoredTable from './components/MostPointsScoredTable';
import MostPointsScoredByTimePlayedTable from './components/MostPointsScoredByTimePlayedTable';
import MostPointsScoredByTeamTable from "./components/MostPointsScoredByTeamTable";
import BestPlayerByTeamTable from "./components/BestPlayerByTeamTable";
import FileInput from "./components/FileInput/FileInput";
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import MostPointsScoredAllGameTable from './components/MostPointsScoredAllGameTable';


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
        <FileInput onChange={handleFileUpload} />
        {!!errors.length && <ErrorDisplay errors={errors} />}
        {!!data.length && (
          <>
            <DataTable data={data} />
            <MostPointsScoredTable data={data} />
            <MostPointsScoredAllGameTable data={data} />
            <MostPointsScoredByTimePlayedTable data={data} />
            <MostPointsScoredByTeamTable data={data} />
            <BestPlayerByTeamTable data={data} />
          </>
        )}
      </div>
  );
}

export default App;
