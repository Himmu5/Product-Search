import { useEffect, useState } from "react";
import Home from "./Components/Page/Home";
import SearchResult from "./Components/Page/SearchResult";
import { getProductsByQuery } from "./Apis/products";
import { productContext } from "./Context/Products";
import { Product } from "./models/products";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter ,setFilter] = useState<{category : string , rating :number , price :number}>();

  return (
    <div>
      <productContext.Provider
        value={{ products, setProducts, loading, setLoading , filter , setFilter}}
      >
        <Home />
      </productContext.Provider>
    </div>
  );
}

export default App;
