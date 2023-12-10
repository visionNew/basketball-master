import { useLocation } from 'react-router-dom';
import Table from './Table/Table';
import * as dataManipulation from '../utils/sortUtils';

function MostPointsScoredAllGameTable() {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = dataManipulation.sortByPoints(data);

    const tableProps = {
        title: 'Most Points Scored',
        subtitle: 'All Game',
        headers: ['Placement', 'Player Name', 'Team', 'Time Played(s)', 'Points Scored'],
        includeIndex: true,
        sortable: true,
        data: sortedData,
    };

    return <Table {...tableProps} />;
}

export default MostPointsScoredAllGameTable;
