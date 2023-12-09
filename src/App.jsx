import { useState } from "react";
import { splitData, formatDataMatrix } from "./utils/utils";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    const errors = [];

    reader.readAsText(file);
    reader.onload = function () {
      const dataArr = splitData(reader.result);
      const dataMatrix = formatDataMatrix(dataArr);

      dataMatrix.forEach((row, index) => {
        if (row.length !== 4) {
          errors.push(index + 1);
        }
      });

      if (errors.length) {
        errors.forEach((errors) => console.error(`Data on row ${errors} is invalid`));
      }

      setData(dataMatrix);
    };
  }
    
  return (
      <div className="App">
        <h1>Basketball Statistic</h1>
        <input type="file" onChange={handleFileUpload} />
        {data}
      </div>
  );
}

export default App;
