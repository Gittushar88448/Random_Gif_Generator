import "./index.css"
import RandomGif from "./components/RandomGif"
import TagGif from "./components/TagGif"


function App() {
  return (
    <div className="flex flex-col background w-screen h-screen items-center relative overflow-x-hidden">
      <h1 className="bg-white mx-auto w-11/12 font-bold text-4xl mt-[40px] rounded-md px-[4px] py-[8px] text-center shadow-md">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <RandomGif/>
        <TagGif/>
      </div>
    </div>
  );
}

export default App;
