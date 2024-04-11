import "./index.css"
import RandomGif from "./components/RandomGif"
import TagGif from "./components/TagGif"


function App() {
  return (
    <div className="flex flex-col background w-screen h-screen">
      <h1 className="bg-white mx-auto w-11/12 font-bold text-4xl mt-[40px] rounded-md px-[4px] py-[8px] text-center shadow-md">RANDOM GIFS</h1>

      <div>
        <RandomGif/>
        <TagGif/>
      </div>
    </div>
  );
}

export default App;
