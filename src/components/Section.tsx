import { FC, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { TopInCategory } from '../types';
import CustomCard from './CustomCard';

interface IProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchData: () => Promise<any>;
}

const Section: FC<IProps> = ({ title, fetchData }) => {
  const [data, setData] = useState<TopInCategory[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((response) => setData(response))
      .then(() => setLoading(false));
  }, [fetchData]);

  // Display the section only if items list is available else don't display anything
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
