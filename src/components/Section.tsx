import { FC, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { TopInCatergory } from "../types";
import CustomCard from "./CustomCard";

interface IProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchData: () => Promise<any>;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const customData = {
//   title: 'IP C8500',
//   type: 'Color Laser Printer',
//   id: '434009',
//   description:
//     'IP C8500 is a Color Laser Printer with features such as Prints up to 45 ppm, 4800x1200 dpi max print resolution, Paper capacity up to 4,850 pages, Multiple high-quality finishing options for professional output.',
//   imgUrl:
//     'https://www.ricoh-usa.com/_next/image?url=http%3A%2F%2Fimages.salsify.com%2Fimages%2Fhekdharwockugmlbj3q0%2Fricohimages_Equipment_Printers-and-Copiers_eqp-IP-C8500-10.png&w=1920&q=75',
// };

const Section: FC<IProps> = ({ title, fetchData }) => {
  const [data, setData] = useState<TopInCatergory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((response) => setData(response))
      .then(() => setLoading(false));
    // setData(response);
  }, [fetchData]);
  console.log("section reredderde");

  return data.length > 0 ? (
    <div className="max-h-fit rounded-lg bg-gray-200 p-4">
      <p className="font-bold pb-4 text-lg">{title}</p>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <div className="flex overflow-y-scroll no-scrollbar gap-4 p-4">
          {data.map((item) => (
            <CustomCard customData={item} />
          ))}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Section;
