import { useEffect, useState } from 'react';
import { TopInCategory } from '../types';
import { getUserViewed } from '../api/api';

const RecentlyViewed = () => {
  const [data, setData] = useState<TopInCategory[]>([]);

  // get 5 most recent purchases
  useEffect(() => {
    getUserViewed('User3').then((val) => {
      if (val.length > 5) setData(val.slice(0, 5));
      else setData(val);
    });
  }, []);

  // display the recent purchases
  return (
    <>
      <p>Recently viewed</p>
      {data.map((val) => (
        <div className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4">
          <div className="rounded-full  w-10 h-10 flex justify-center items-center">
            <img src={val['Product Image URL']} alt="" />
          </div>
          <div>
            <p>{val['Product Title']}</p>
            <p className="text-gray-400 text-sm">{val['Product Type']}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentlyViewed;
