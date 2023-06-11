import { FC } from "react";
import Input from "../UI-Components/Input";
import { BiChevronDown } from "react-icons/bi";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import FilterProduct from "../UI-Components/FilterProduct";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import ProductDetail from "../UI-Components/Product";


type P = {
  products: Product[];
};

const SearchResult: FC<P> = ({ products }) => {
  return (
    <div className="bg-white mt-4 h-full">


      <div className="p-10 w-full">
        <h1 className="text-2xl ">Search Results</h1>
        <div className="max-w-8xl mx-auto flex w-full gap-10 justify-between ">
          <div className="w-1/5">
            <FilterProduct />
          </div>

          <div className=" w-full max-w-5xl mx-auto ">
            <div className="grid grid-cols-4 gap-4 ">
              {products?.map((product) => {
                return (
                  <ProductDetail product={product}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withProducts(SearchResult);
