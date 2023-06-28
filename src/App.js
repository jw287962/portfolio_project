import "./App.css";
import Main from "./components/Main";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Jason's Portfolio";
  }, []);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
