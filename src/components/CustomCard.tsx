import { FC } from 'react';

import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ImageErrorEvent, TopInCatergory } from '../types';

const { Meta } = Card;

interface CustomCardProps {
  // customData: {
  //   title: string;
  //   description: string;
  //   id: string;
  //   imgUrl: string;
  //   type: string;
  // };

  customData: TopInCatergory;
}

const CustomCard: FC<CustomCardProps> = ({ customData }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      className="min-w-52 min-h-full"
      cover={
        <img
          alt="example"
          className="w-60 h-60 p-2"
          src={customData['Product Image URL']}
          onError={(e: ImageErrorEvent) =>
            (e.target.src =
              'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
          }
        />
      }
      onClick={() => navigate(`/product/${customData['Product ID']}`)}
    >
      <Meta
        title={`${customData['Product Title']} | ${customData['Product ID']}`}
        description={customData['Product Type']}
      />
    </Card>
  );
};

export default CustomCard;
