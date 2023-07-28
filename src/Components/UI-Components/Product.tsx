import { FC } from "react";
import { AiTwotoneHeart, AiTwotoneStar } from "react-icons/ai";
import { Product } from "../../models/products";
import withProducts from "../HOCs/withProducts";

type P = {
  product: Product;
  selectedProducts: { [id: string]: boolean };
  setSelectedProducts: (p: { [id: string]: boolean }) => void;
};

const ProductDetail: FC<P> = ({
  product,
  setSelectedProducts,
  selectedProducts,
}) => {
  let wishlisted = " ";
  if (selectedProducts[product.id] === true) {
    wishlisted = " text-red-500 "
  }
  else {
    wishlisted = " text-white "
  }
  console.log("Selected Products : ", selectedProducts[product.id]);
  return (
    <div className=" w-56 flex flex-col  ">
      <div className="h-56 my-2 relative w-full flex flex-col group ">
        <img
          src={product.thumbnail}
          className="w-full h-full object-cover relative"
          alt="thumbnail"
        />
        <div
          className=""
          onClick={() =>
            setSelectedProducts({
              ...selectedProducts,
              [product.id]: product.id ? !selectedProducts[product.id] : true,
            })
          }
        >
          <AiTwotoneHeart
            size={20}
            className={
              " ml-48 cursor-pointer outline-black absolute top-0 bottom-0 left-0 right-0 mt-2 mr-2 z-10 text-right hover:text-red-600  outline-1 " + wishlisted
            }
          />
        </div>
        <div className="bg-blue-400 opacity-80 py-4 text-white absolute w-full  bottom-0 text-center hidden group-hover:block h-[60px] ">
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

export default withProducts(ProductDetail);
