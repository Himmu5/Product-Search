import { FC } from "react";
import FilterProduct from "../UI-Components/FilterProduct";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import ProductDetail from "../UI-Components/Product";

type P = {
  data: Product[];
};

const SearchResult: FC<P> = ({ data }) => {
  
  // if (filter?.rating) {
  //   data = data.filter((product) => {
  //     return Math.round(product.rating) === filter?.rating;
  //   });
  // }

  return (
    <div className="bg-white mt-4 h-full">
      <div className="p-10 w-full">
        <h1 className="text-2xl ">Search Results</h1>
        <div className="max-w-8xl mx-auto flex w-full gap-10 justify-between ">
          <div className="w-1/5">
            <FilterProduct />
          </div>

          <div className=" w-full max-w-5xl mx-auto ">
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {data?.length === 0 && (
                <div className="w-full text-2xl flex text-center">
                  No Product
                </div>
              )}
              {data.map((product) => {
                return <ProductDetail product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withProducts(SearchResult);
