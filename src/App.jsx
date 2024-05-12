import Random from "./components/Random";
import Tags from "./components/Tags";


export default function App() {
  return (
  <div className="w-full h-auto flex flex-col background items-center relative"> 
       <h1 className="bg-white rounded-lg w-11/12 text-center px-10 py-2 text-3xl mt-[40px] font-bold ">RANDOM GIFS</h1>
       <div className="flex flex-col w-full items-center gap-t-10 mt-[30px]">
 
        <Random/>
        <Tags/>
       </div>

  </div>
);
}
