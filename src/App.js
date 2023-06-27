import "./App.css";
import { useEffect } from "react";
import Main from "./components/Main";
function App() {
  useEffect(() => {
    document.title = "Jason Portfolio";
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
