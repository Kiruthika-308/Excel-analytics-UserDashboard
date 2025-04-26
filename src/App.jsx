import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import ActivityPage from "./pages/ActivityPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="activity" element={<ActivityPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settingspage" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
