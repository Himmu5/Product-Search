import { AiTwotoneStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import withProducts from "../HOCs/withProducts";
import { Product } from "../../models/products";
import { FC, useEffect } from "react";

type P = {
  products : Product[]
}

const FilterProduct:FC<P> = ({products})=>{

  function onlyUnique(value:Product , index:number , array:Product[]) {
    return array.indexOf(value) === index;
  }
  let uniqueData = [] as Product[];
  useEffect(()=>{
    uniqueData = products.filter(onlyUnique);
  },[products])

    return  <div className="  ">
    <div className="  text-sm ">
      <div className="flex mt-3 items-center justify-between">
        <p>Category</p>
        <BiChevronDown />
      </div>
      <div className="flex flex-col mt-5 space-y-1 ">
        {
          uniqueData?.map((product , index)=>{
            return index <3 && <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p>{product.category}</p>
          </div>
          })
        }
        
        
        
      </div>
    </div>

    <div className="   text-sm ">
      <div className="flex mt-3 items-center justify-between">
        <p>PRICE RANGE</p>
        <BiChevronDown />
      </div>
      <div className="flex flex-col mt-5 space-y-1 ">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>UNDER 500</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p>1000 To 3000</p>
        </div>
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
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="flex items-center gap-2">
                {[...Array(5)].map(() => {
                  return <AiTwotoneStar />;
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
}

export default withProducts(FilterProduct);