import { FC } from "react";
import { TopInCatergory } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  data2: TopInCatergory[];
}

const RecentlyViewed: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <p>Recently viewed</p>
      {props.data2.map((val) => (
        <div
          className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4 cursor-pointer hover:shadow-lg transition hover:bg-gray-100"
          onClick={() => navigate(`/product/${val["Product ID"]}`)}
        >
          <div className="rounded-full  w-10 h-10 flex justify-center items-center">
            <img src={val["Product Image URL"]} alt="" />
          </div>
          <div>
            <p>{val["Product Title"]}</p>
            <p className="text-gray-400 text-sm">{val["Product Type"]}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentlyViewed;
