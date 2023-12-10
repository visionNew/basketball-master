import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import MostPointsScoredByTeamTable from './components/MostPointsScoredByTeamTable.jsx';
import DataTable from './components/DataTable.jsx';
import MostPointsScoredTable from './components/MostPointsScoredTable.jsx';
import MostPointsScoredByTimePlayedTable from './components/MostPointsScoredByTimePlayedTable.jsx';
import BestPlayerByTeamTable from './components/BestPlayerByTeamTable.jsx';
import MostPointsScoredAllGameTable from './components/MostPointsScoredAllGameTable.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                <Route 
                    path="/overall-stats" 
                    element={<DataTable />} 
                />
                <Route
                    path="/most-points"
                    element={<MostPointsScoredTable />}
                />
                <Route
                    path="/most-points-all-game"
                    element={<MostPointsScoredAllGameTable />}
                />
                <Route
                    path="/most-points-per-time"
                    element={<MostPointsScoredByTimePlayedTable />}
                />
                <Route
                    path="/team-table"
                    element={<MostPointsScoredByTeamTable />}
                />
                <Route
                    path="/best-player-table"
                    element={<BestPlayerByTeamTable />}
                />
                </Route>
            </Routes>
    </BrowserRouter>
);