import { useState } from "react";
import Input from "./Components/UI-Components/Input";
import Trends from "./Components/UI-Components/Trends";

function App() {
  const [showTrends, setShowTrends] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center bg-cover bg-no-repeat h-screen bg-Home-BG ">
      <div className="-mt-24 w-full max-w-4xl">
        <Input
          extraClasses=" w-full focus:outline-none "
          placeholder="Search"
          onSelect={()=>setShowTrends(!showTrends)}
        />
      </div>

      {showTrends == true ? <Trends /> : <div></div>}
    </div>
  );
}

export default App;
