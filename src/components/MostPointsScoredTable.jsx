import Table from './Table/Table';

function MostPointsScoredTable() {
    
    const table = {
        title: 'Most Points Scored',
        subtitle: 'Single Game',
        headers: ['Placement', 'Player Name', 'Team', 'Time Played(s)', 'Points Scored'],
        includeIndex: true,
        sortable: true,
    };


    return <Table table={table} />;
}

export default MostPointsScoredTable;