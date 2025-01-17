import Home from "./Home";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
