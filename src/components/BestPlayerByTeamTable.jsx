import { useLocation } from "react-router-dom";
import Table from "./Table/Table";
import * as dataManipulation from '../utils/sortUtils';

function BestPlayerByTeamTable() {
    const location = useLocation();
    const data = location.state["data"];

    const sortedData = dataManipulation.sortByBestPlayersPoints(data);

    const tableProps = {
      title: 'Best Player in Each Team',
      headers: ['Placement', 'Team', 'Player Name', 'Points Scored'],
      includeIndex: true,
      sortable: true,
      data: sortedData,
    };

    return <Table {...tableProps} />;
}

export default BestPlayerByTeamTable;