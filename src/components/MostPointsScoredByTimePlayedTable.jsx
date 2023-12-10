import { useLocation } from "react-router-dom";
import * as dataManipulation from '../utils/sortUtils';

function MostPointsScoredByTimePlayedTable() {
    const location = useLocation();
    const data = location.state["data"];

    const dataModified = dataManipulation.calculateRatio(data);
    const sortedData = dataManipulation.sortByTime(dataModified);

    return (
        <>
            <h2>Most Points Scored by Time Played</h2>
            <p>Single Game</p>

            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Placement</th>
                            <th>Player Name</th>
                            <th>Team</th>
                            <th>Time Played(s)</th>
                            <th>Points Scored</th>
                            <th>Points Per Second Scored</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}.</td>
                                    <td>{row[0]}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td>{row[4]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MostPointsScoredByTimePlayedTable;

