import { useLocation } from "react-router-dom";

function BestPlayerByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];
    
    const bestPlayersMap = data.reduce((prev, player) => {
    const [playerName, team, , pointsScored] = player
    if (!prev[team] || +pointsScored > prev[team].pointsScored) {
      prev[team] = { playerName, pointsScored: +pointsScored };
    }
    return prev;
  }, {});

  const sortedData = Object.entries(bestPlayersMap)
    .map(([team, playerData]) => [team, ...Object.values(playerData)]).sort((a, b) => {
      return b[2] - a[2]
    });
    
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