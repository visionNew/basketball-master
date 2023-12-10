function sortByPoints(data) {
    return data.sort((a, b) => b[3] - a[3]);
}

function calculateRatio(data) {
    return data.map((row) => {
        row.push(row[3] / row[2]);
        return row;
    });
}

function sortByTime(data) {
    return data.sort((a, b) => b[4] - a[4]);
}



function calculateTeamPoints(data) {
    return data.reduce((prev, next) => {
        const [, team, , points] = next;
        if (prev[team]) {
            prev[team] = prev[team] + +points;
        } else {
            prev[team] = +points;
        }
        return prev;
    }, {});
}

function sortByTeamPoints(data) {
    const teamsData = calculateTeamPoints(data);
    return Object.entries(teamsData).sort((a, b) => b[1] - a[1]);
}

function findBestPlayersByTeam(data) {
    return data.reduce((prev, player) => {
        const [playerName, team, , pointsScored] = player;
        if (!prev[team] || +pointsScored > prev[team].pointsScored) {
            prev[team] = { playerName, pointsScored: +pointsScored };
        }
        return prev;
    }, {});
}

function sortByBestPlayersPoints(data) {
    const bestPlayersMap = findBestPlayersByTeam(data);
    return Object.entries(bestPlayersMap)
        .map(([team, playerData]) => [team, ...Object.values(playerData)])
        .sort((a, b) => b[2] - a[2]);
}

export { sortByPoints, calculateRatio, sortByTime, calculateTeamPoints, sortByTeamPoints, findBestPlayersByTeam, sortByBestPlayersPoints };