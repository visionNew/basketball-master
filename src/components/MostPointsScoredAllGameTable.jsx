import Table from './Table/Table';

function MostPointsScoredAllGameTable() {
    const table = {
        title: 'Most Points Scored',
        subtitle: 'All Game',
        headers: ['Placement', 'Player Name', 'Team', 'Time Played(s)', 'Points Scored'],
        includeIndex: true,
        sortable: true,
    };


    return <Table table={table} />;
}

export default MostPointsScoredAllGameTable;
