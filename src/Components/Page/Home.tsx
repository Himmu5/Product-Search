import { ChangeEvent, FC, useState } from "react";
import Input from "../UI-Components/Input";
import Trends from "../UI-Components/Trends";
import { getProductsByQuery } from "../../Apis/products";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import SearchResult from "./SearchResult";

type P = {
  products: Product[];
  setProducts: (p: Product[]) => void;
};

const Home: FC<P> = ({ products, setProducts }) => {
  const [showTrends, setShowTrends] = useState(false);
  const [query, setQuery] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setTimeout(() => {
      getProductsByQuery(e.target.value).then((res) => {
        setProducts(res.products);
      });
    }, 2000);
  }



  return (
    <div className=" flex flex-col items-center justify-center bg-cover bg-no-repeat overflow-auto bg-Home-BG min-h-screen ">
      <div className="  w-full max-w-4xl ">
        <Input
          extraClasses=" w-full focus:outline-none mx-2 "
          placeholder="Search"
          onChange={handleChange}
          onSelect={() => setShowTrends(!showTrends)}
        />
      </div>

      {(showTrends === true && products.length ==0) && <Trends /> }
      { products.length > 0 && <SearchResult /> }
    </div>
  );
};

export default withProducts(Home);
