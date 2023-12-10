import { useLocation } from "react-router-dom";
import Table from "./Table/Table";
import * as dataManipulation from '../utils/sortUtils';

function MostPointsScoredByTimePlayedTable() {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = dataManipulation.calculateRatio(data);

    const tableProps = {
        title: 'Most Points Scored by Time Played',
        subtitle: 'Single Game',
        headers: ['Placement', 'Player Name', 'Team', 'Time Played(s)', 'Points Scored', 'Points Per Second Scored'],
        includeIndex: true,
        sortable: true,
        data: sortedData,
    };

    return <Table {...tableProps} />;
}

export default MostPointsScoredByTimePlayedTable;

