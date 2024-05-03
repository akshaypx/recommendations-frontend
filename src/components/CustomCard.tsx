import React, { FC } from "react";

import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

interface CustomCardProps {
  customData: {
    title: string;
    description: string;
    id: string;
    imgUrl: string;
    type: string;
  };
}

const CustomCard: FC<CustomCardProps> = ({ customData }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      className="min-w-52 h-full"
      cover={<img alt="example" className="p-2" src={customData.imgUrl} />}
      onClick={() => navigate("/product/2")}
    >
      <Meta title={customData.title} description={customData.type} />
    </Card>
  );
};

export default CustomCard;
