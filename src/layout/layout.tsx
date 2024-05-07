import { Button } from 'antd';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPurchases from '../components/MyPurchases';
import RecentlyViewed from '../components/RecentlyViewed';
import NagarroLogo from '../assets/Nagarro_Logo.svg';

interface IProps {
  children: ReactNode;
}

const layout: FC<IProps> = (props) => {
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
            <div className="flex flex-col">
              <p>User3</p>
              <p className="text-gray-500 text-sm font-semibold">Alaska</p>
            </div>
          </div>
          <MyPurchases />
          <RecentlyViewed />
        </div>
        <div className="w-[80%]">{props.children}</div>
      </div>
    </div>
  );
};

export default layout;
