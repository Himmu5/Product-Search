import { AiTwotoneStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import { FC, useEffect, useState } from "react";

type P = {
  products: Product[];
  filter:{ category: string; rating: number; price: number },
  setFilter: (f: { category: string; rating: number; price: number }) => void;
};

const FilterProduct: FC<P> = ({ products , filter ,setFilter }) => {
  const [category, setCategory] = useState<string[]>([]);

  // let uniqueData = [] as Product[];
  useEffect(() => {
    const unique = [
      ...(new Set(products.map((item) => item.category)) as any),
    ] as string[];
    setCategory(unique);
  }, [products]);

  return (
    <div className="  ">
      <div className="  text-sm ">
        <div className="flex mt-3 items-center justify-between">
          <p>Category</p>
          <BiChevronDown />
        </div>
        <div className="flex flex-col mt-5 space-y-1 ">
          {category?.map((c, index) => {
            return (
              index < 3 && (
                <div className="flex items-center gap-2">
                  <input type="checkbox" onChange={()=>setFilter({...filter , category : c})} />
                  <p>{c}</p>
                </div>
              )
            );
          })}
        </div>
      </div>

      <div className="   text-sm ">
        <div className="flex mt-3 items-center justify-between">
          <p>PRICE RANGE</p>
          <BiChevronDown />
        </div>
        <div className="flex flex-col mt-5 space-y-1 ">
          {[...Array(2)].map((n , i) => {
            return (
              <div key={i}  className="flex items-center gap-2">
                <input type="checkbox" onChange={()=>setFilter({...filter , price : (i+1) * 500 })} />
                <p>UNDER {(i+1) * 500}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-1/6  text-sm ">
        <div className="flex mt-3 items-center justify-between">
          <p>RATINGS</p>
          <BiChevronDown />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          {[...Array(5)].map((i, key) => {
            return (
              <div  className="flex gap-2 items-center">
                <input onChange={()=>setFilter({...filter , rating : key + 1})} type="checkbox" />
                <p className="flex items-center gap-2">
                  {[...Array(key + 1)].map(() => {
                    return <AiTwotoneStar />;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withProducts(FilterProduct);
