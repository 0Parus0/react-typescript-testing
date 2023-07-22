import "./App.css";
import MuiMode from "./components/mui/MuiMode";
import Users from "./components/users/users";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
