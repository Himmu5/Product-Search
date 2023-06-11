import { FC, useEffect, useState } from "react";
import FilterProduct from "../UI-Components/FilterProduct";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import ProductDetail from "../UI-Components/Product";

type P = {
  products: Product[];
  filter: { category: string; rating: number; price: number };
};

const SearchResult: FC<P> = ({ products, filter }) => {
  
  let data = products;
    
    if (filter?.category) {
      data = data?.filter((product) => {
        return product.category === filter?.category;
      });
      
    }
    if (filter?.price) {
      data = data.filter((product) => {
        return product.price < filter?.price;
      });
    }
    console.log(filter , " FIlter")
    if (filter?.rating) {
      data = data.filter((product) => {
        return Math.round(product.rating) === filter?.rating;
      });
    }

  return (
    <div className="bg-white mt-4 h-full">
      <div className="p-10 w-full">
        <h1 className="text-2xl ">Search Results</h1>
        <div className="max-w-8xl mx-auto flex w-full gap-10 justify-between ">
          <div className="w-1/5">
            <FilterProduct />
          </div>

          <div className=" w-full max-w-5xl mx-auto ">
            <div className="grid grid-cols-4 gap-4 w-full">
              {data.length === 0 && <div className="w-full text-2xl flex text-center">No Product</div>}
              {data?.map((product) => {
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
