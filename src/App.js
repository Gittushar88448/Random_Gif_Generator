import "./index.css"
import RandomGif from "./components/RandomGif"
import TagGif from "./components/TagGif"


function App() {
  return (
    <div className="App">
      <h1>RANDOM GIFS</h1>

      <div>
        <RandomGif/>
        <TagGif/>
      </div>
    </div>
  );
}

export default App;
