import { Button, Select } from 'antd';
import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPurchases from '../components/MyPurchases';
import RecentlyViewed from '../components/RecentlyViewed';
import NagarroLogo from '../assets/Nagarro_Logo.svg';
import { TopInCategory } from '../types';
import { getUserPurchases, getUserViewed } from '../api/api';
import { LocationContext } from '../api/context';

interface IProps {
  children: ReactNode;
}

const layout: FC<IProps> = (props) => {
  const [user, setUser] = useState('User1');
  const location = useContext(LocationContext);

  const [data2, setData2] = useState<TopInCategory[]>([]);
  const [data, setData] = useState<TopInCategory[]>([]);

  useEffect(() => {
    console.log(location, 'changed');
  }, [location]);

  useEffect(() => {
    getUserPurchases(user).then((val) => {
      if (val.length > 5) setData(val.slice(0, 5));
      else setData(val);
    });
    getUserViewed(user).then((val) => {
      if (val.length > 5) setData2(val.slice(0, 5));
      else setData2(val);
    });
  }, [user]);

  const handleChangeUser = (value: string) => {
    setUser(value);
    console.log(`selected ${value}`);
  };
  const handleChangeLocation = (value: string) => {
    location?.updateValue(value);
    console.log(`selected ${value}`);
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className="min-h-[50px] flex justify-between items-center p-4 bg-[#12294B] text-white">
        <div className="flex justify-start items-center gap-4">
          <img src={NagarroLogo} alt="" />
          <a
            className="font-bold cursor-pointer hover:text-gray-300 transition"
            onClick={() => navigate('/')}
          >
            Recommendations App
          </a>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button type="primary" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button type="primary" onClick={() => navigate('/kb')}>
            Knowledge Based
          </Button>
          <p>Logout</p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[20%] p-2 pr-1 flex flex-col gap-2 h-[530px] overflow-x-scroll no-scrollbar">
          <div className="bg-gray-200 rounded-lg w-full min-h-16 flex justify-start pl-4 items-center gap-4">
            <div className="rounded-full bg-blue-200 w-10 h-10 flex justify-center items-center">
              U
            </div>
            <div className="flex flex-col justify-around items-center">
              <Select
                defaultValue={user}
                style={{ width: 120 }}
                className="p-1"
                onChange={handleChangeUser}
                options={[
                  { value: 'User1', label: 'User1' },
                  { value: 'User2', label: 'User2' },
                  { value: 'User3', label: 'User3' },
                ]}
              />
              <Select
                className="p-1"
                defaultValue={location?.value}
                style={{ width: 120 }}
                onChange={handleChangeLocation}
                options={[
                  { value: 'Alaska', label: 'Alaska' },
                  { value: 'Kansas', label: 'Kansas' },
                  { value: 'Oklahoma', label: 'Oklahoma' },
                ]}
              />
            </div>
          </div>
          <MyPurchases data={data} />
          <RecentlyViewed data2={data2} />
        </div>
        <div className="w-[80%]">{props.children}</div>
      </div>
    </div>
  );
};

export default layout;
