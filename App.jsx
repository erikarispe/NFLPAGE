import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NflTeamsFunction from "./components/nflTeamsComponent";
import NavBar from "./components/navComponent";
import ScheduleFunction from "./components/scheduleComponent";
import NFLBackground from "./components/homePageBackgroundComponent";

// Separate homepage content
const HomePageContent = () => {
  return (
    <div className="homepage-content">
      <h1>Welcome to the NFL Page!</h1>
      <p>Explore the teams, schedule, and more!</p>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation(); // Get the current path

  return (
    <>
      <NFLBackground /> {/* This will render the background on all pages */}
      <NavBar />
      {/* Conditionally render only on the homepage ("/") */}
      {location.pathname === "/" && <HomePageContent />}
      <Routes>
        {/* Teams Route */}
        <Route path="/teams" element={<NflTeamsFunction />} />
        {/* Schedule Route */}
        <Route path="/schedule" element={<ScheduleFunction />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
