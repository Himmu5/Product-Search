import { useState } from "react";
import Home from "./Components/Page/Home";
import { productContext } from "./Context/Products";
import { Product } from "./models/products";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [ selectedProducts ,setSelectedProducts ] = useState<{[id:string]:Boolean}>({});
  const [filter ,setFilter] = useState<{category : string[] , rating :number[] , price :number[]}>();


  console.log(  "filter ", filter)
  return (
    <div>
      <productContext.Provider
        value={{ products, setProducts, loading, setLoading , filter , setFilter , selectedProducts , setSelectedProducts}}
      >
        <Home />
      </productContext.Provider>
    </div>
  );
}

export default App;
