import Input from "./Components/UI-Components/Input";

function App() {
  return (
    <div className=" flex justify-center  bg-cover bg-no-repeat h-screen bg-Home-BG ">
      <div className="mt-10 w-full max-w-4xl"> 
        <Input extraClasses=" w-full focus:outline-none " placeholder="Search" />
      </div>

      <div className="trend-suggetion ">

      </div>
    </div>
  );
}

export default App;
