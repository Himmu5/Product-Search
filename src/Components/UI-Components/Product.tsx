import { FC } from "react";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Product } from "../../models/products";

type P = {
  product: Product;
};

const ProductDetail: FC<P> = ({ product }) => {
  return (
    <div className="flex flex-col  ">
      <div className="h-56 my-2 relative w-full flex flex-col group ">
        <AiTwotoneHeart
          size={20}
          className="absolute right-0 mt-2 mr-2 hover:text-red-600 text-white outline-1 "
        />
        <img
          src={product.thumbnail}
          className="w-full h-full object-cover relative"
          alt="thumbnail"
        />
        <div className="bg-blue-400 opacity-80 py-4 text-white absolute w-full  bottom-0 text-center hidden group-hover:block ">
          View Product
        </div>
      </div>

      <p>{product.title}</p>
      <div className="flex gap-1 text-sm">
        <p className="line-through text-gray-500 ">Rs.{product.price}</p>
        <p>Rs.{product.price}</p>
      </div>
      <div className="flex gap-1">
        {[...Array(Math.round(product.rating))].map(() => {
          return (
            <div>
              <AiTwotoneStar color="yellow" size={20} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
