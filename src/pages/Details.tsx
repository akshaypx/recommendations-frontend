import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import {
  getItemsThatAreBoughtTogether,
  getItemsThatAreSimilarByDescription,
  getProductDetails,
} from '../api/api';
import { ImageErrorEvent, TopInCategory } from '../types';
import { Button } from 'antd';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState<TopInCategory>();

  // fetch the data for the current item
  useEffect(() => {
    if (id) {
      getProductDetails(parseInt(id)).then((response) => {
        setData(response);
        console.log(response);
      });
    }
  }, [id]);

  return !data ? (
    <>Item Not Found!!</>
  ) : (
    // Display the data in the form of PDP
    <div className="flex flex-col">
      <p className="font-bold text-xl p-4 ">Product Details</p>
      <div className="flex gap-10 p-2 mb-2">
        <div className="w-80 h-80  overflow-hidden ">
          <img
            className="w-80 h-80"
            src={data['Product Image URL']}
            alt="product image"
            onError={(e: ImageErrorEvent) =>
              (e.target.src =
                'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg')
            }
          />
        </div>
        <div className="bg-gray-100 flex-1 rounded-lg flex flex-col gap-4 p-4">
          <p className="text-2xl font-bold">{data['Product Title']}</p>
          <p className="text-lg text-gray-500">{data['Product Type']}</p>
          <p className="font-bold">ID - {data['Product ID']}</p>
          <p className="leading-10">{data['generated_description']}</p>
          <div className="flex w-full gap-4">
            <Button className="flex-1" type="default">
              Add to Cart
            </Button>
            <Button className="flex-1" type="primary">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <Section
          title={'Similar Items by Description'}
          fetchData={() => getItemsThatAreSimilarByDescription(data['Product ID'])}
        />
        <Section
          title={'Items usually bought together'}
          fetchData={() => getItemsThatAreBoughtTogether(data['Product ID'])}
        />
      </div>
    </div>
  );
};

export default Details;
