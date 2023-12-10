import { useLocation } from "react-router-dom";
import * as dataManipulation from '../utils/sortUtils';

function MostPointsScoredByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = dataManipulation.sortByTeamPoints(data);


    return (
        <>
        <h2>Teams Points Scored Ranking</h2>
        <p>Single Game</p>

        <div className="card">
            <table>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Team</th>
                        <th>Points Scored</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}.</td>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default MostPointsScoredByTeamTable;
