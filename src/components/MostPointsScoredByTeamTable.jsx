import { useLocation } from "react-router-dom";
import Table from './Table/Table';
import * as dataManipulation from '../utils/sortUtils';

function MostPointsScoredByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = dataManipulation.sortByTeamPoints(data);

    const tableProps = {
        title: 'Teams Points Scored Ranking',
        subtitle: 'Single Game',
        headers: ['Placement', 'Team', 'Points Scored'],
        includeIndex: true,
        sortable: true,
        data: sortedData,
    };

    return <Table {...tableProps} />;
}

export default MostPointsScoredByTeamTable;
