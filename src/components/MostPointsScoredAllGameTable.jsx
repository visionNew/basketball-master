function MostPointsScoredAllGameTable({ data }) {
    const sortedData = data.sort((a, b) => {
        return b[3] - a[3];
    });

    return (
        <>
            <h2>Most Points Scored</h2>
            <p>All Game</p>

            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Placement</th>
                            <th>Player Name</th>
                            <th>Team</th>
                            <th>Time Played(s)</th>
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
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MostPointsScoredAllGameTable;
