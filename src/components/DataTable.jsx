import Table from "./Table/Table";

function DataTable() {
const table = {
    title: 'General Statistic',
    headers: ['Player Name', 'Team', 'Time Played(s)', 'Points Scored'],
    includeIndex: false,
    sortable: false,
};


    return <Table table={table} />;
}

export default DataTable;