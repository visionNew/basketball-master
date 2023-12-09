import { splitData, formatDataMatrix, sanitizeArray } from './utils/utils'
import "./App.css";

function App() {
  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function () {
      const dataArr = splitData(reader.result);
      const dataMatrix = formatDataMatrix(dataArr);
      const sanitizedArray = sanitizeArray(dataMatrix);
      console.log(sanitizedArray);
    };
  }

  return (
    <>
      <div className="App">
        <h1>Basketball Statistic</h1>
        <input type="file" onChange={handleFileUpload} />
      </div>
    </>
  );
}

export default App;
