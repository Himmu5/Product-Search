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
  filter: { category: string[]; rating: number[]; price: number };
};

const Home: FC<P> = ({ products, setProducts, filter }) => {
  const [showTrends, setShowTrends] = useState(false);
  const [query, setQuery] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setTimeout(() => {
      getProductsByQuery(e.target.value).then((res) => {
        setProducts(res.products);
      });
    }, 500);
  }
  let data = products || [];

  function filterProducts(
    products: Product[],
    filter: { category: string[]; rating: number[]; price: number }
  ): Product[] {
    let d = filter.category.map((c) => {
      return data.filter((P) => {
        return P.category === c;
      });
    });
    let temp = [] as Product[];
    d.map((a) => {
      temp.push(...a);
    });
    return temp;
  }

  if (filter?.category?.length > 0) {
    data = filterProducts(products, filter);
  }

  if (filter?.price) {
    data = data.filter((product) => {
      return product.price < filter?.price;
    });
  }

  if (filter?.rating) {
    let d = filter?.rating.map((r) => {
      return data.filter((P) => {
        return Math.round(P.rating) === r;
      });
    });
    let temp = [] as Product[];
    d.map((a) => {
      temp.push(...a);
    });
    data = [...temp]
  }

  if(data.length == 0) {
    data =products;
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-cover bg-no-repeat overflow-auto bg-Home-BG min-h-screen ">
      <div className=" w-full max-w-4xl ">
        <Input
          extraClasses=" w-full focus:outline-none mx-2 my-3 "
          placeholder="Search"
          onChange={handleChange}
          onSelect={() => setShowTrends(!showTrends)}
        />
      </div>

      {showTrends === true && products.length == 0 && <Trends />}
      {products.length > 0 && <SearchResult data={data} />}
    </div>
  );
};

export default withProducts(Home);
