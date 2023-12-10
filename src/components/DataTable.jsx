import { useLocation } from "react-router-dom";
import Table from "./Table/Table";

function DataTable() {
    const location = useLocation();
    const data = location.state["data"];

    const table = {
        title: 'General Statistic',
        headers: ['Player Name', 'Team', 'Time Played(s)', 'Points Scored'],
        includeIndex: false,
        sortable: false,
        data: data,
    };

    return <Table {...table} />;
}

export default DataTable;