import { useLocation } from "react-router-dom";
import * as dataManipulation from '../utils/sortUtils';

function BestPlayerByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];
    
    const sortedData = dataManipulation.sortByBestPlayersPoints(data);
    
  return (
    <>
      <h2>Best Player in Each Team</h2>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Placement</th>
              <th>Team</th>
              <th>Player Name</th>
              <th>Points Scored</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BestPlayerByTeamTable;