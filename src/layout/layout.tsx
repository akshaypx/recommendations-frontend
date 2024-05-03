import { Button } from "antd";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const customVal = {
  imgUrl:
    "https://www.ricoh-usa.com/_next/image?url=http%3A%2F%2Fimages.salsify.com%2Fimages%2Fhekdharwockugmlbj3q0%2Fricohimages_Equipment_Printers-and-Copiers_eqp-IP-C8500-10.png&w=1920&q=75",
  title: "IP C8500",
  type: "Color Laser Printer",
};

const layout: FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className="min-h-[50px] flex justify-between items-center p-4 bg-blue-800 text-white">
        <div className="flex justify-start items-center gap-4">
          <p className="font-bold">Recommendations App</p>
          <Button type="primary" onClick={() => navigate("/kb")}>
            Knowledge Based
          </Button>
        </div>
        <div>Logout</div>
      </div>
      <div className="flex w-full">
        <div className="w-[20%] p-2 pr-1 flex flex-col gap-2 h-[530px] overflow-x-scroll no-scrollbar">
          <div className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4">
            <div className="rounded-full bg-blue-200 w-10 h-10 flex justify-center items-center">
              A
            </div>
            <p>Akshay Srivastava</p>
          </div>
          <p>My orders</p>
          {[1, 2, 3, 4].map((val) => (
            <div className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4">
              <div className="rounded-full  w-10 h-10 flex justify-center items-center">
                <img src={customVal.imgUrl} alt="" />
              </div>
              <div>
                <p>{customVal.title}</p>
                <p className="text-gray-400 text-sm">{customVal.type}</p>
              </div>
            </div>
          ))}
          <p>Recently viewed</p>
          {[1, 2, 3, 4].map((val) => (
            <div className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4">
              <div className="rounded-full  w-10 h-10 flex justify-center items-center">
                <img src={customVal.imgUrl} alt="" />
              </div>
              <div>
                <p>{customVal.title}</p>
                <p className="text-gray-400 text-sm">{customVal.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[80%]">{props.children}</div>
      </div>
    </div>
  );
};

export default layout;
