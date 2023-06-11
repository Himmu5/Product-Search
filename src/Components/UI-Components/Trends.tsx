import { FC, memo } from "react";
import { getRandomData, PopularSuggestions } from "../UI-Data/Home";
import { useEffect, useState } from "react";

type P = {};
type dummyProduct = { id: string; avatar: string; title: string };

type DummyData = {
  randomProducts: dummyProduct[];
  TrandingSearch: { title: string }[];
};

const Trends: FC<P> = () => {
  const [dummyData, setdummyData] = useState<DummyData>();
  useEffect(() => {
    const data = getRandomData();
    const suggetion = PopularSuggestions();
    setdummyData({ randomProducts: data, TrandingSearch: suggetion });
  }, []);

  return (
    <div className="trend-suggetion bg-white max-w-5xl  w-full mt-10 shadow-2xl p-10">
      <h1 className="text-xl mb-5">Latest Trends</h1>
      <div className="grid grid-cols-5 gap-1 ">
        {dummyData?.randomProducts.map((Product) => {
          return (
            <div className="space-y-1" key={Product.id}>
              <img
                src={Product.avatar}
                alt="product Image"
                className="h-48 w-40 rounded-lg"
              />
              <p className="text-xs text-500">{Product.title}</p>
            </div>
          );
        })}
      </div>

      <div className="text-xl mt-5">
        <h1>Popular suggetions</h1>

        <div className="space-y-2 text-xs mt-4 text-gray-500 ">
          {dummyData?.TrandingSearch.map((Popular) => {
            return <div className="">{Popular.title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Trends);
