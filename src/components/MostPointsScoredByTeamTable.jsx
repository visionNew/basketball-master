/* eslint-disable react/prop-types */
function MostPointsScoredByTeamTable({ data }) {
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
                {data.map((row, index) => {
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
