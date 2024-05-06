import { Button, Select } from 'antd';
import { useEffect, useState } from 'react';
import { getFilteredData } from '../api/api';
import CustomCard from '../components/CustomCard';

interface ItemType {
  href: string;
  ProductTitle: string;
  ProductType: string;
  ProductID: string;
  ProductImageURL: string;
  PrintSpeed: string;
  Details: string;
  PageCapacity: string;
  PrintResolution: string;
  'Associated With(model)'?: null;
}

const printerData = [
  {
    question: 'What type of Printer do you want',
    title: 'Type',
    items: [
      { value: 'Color Laser Printer', label: 'Color Laser Printer' },
      { value: 'B&W Laser Printer', label: 'B&W Laser Printer' },
      { value: 'B&W Printer', label: 'B&W Printer' },
      { value: 'Color Laser Multifunction Printer', label: 'Color Laser Multifunction Printer' },
      { value: 'B&W Laser Multifunction Printer', label: 'B&W Laser Multifunction Printer' },
      { value: 'Color LED Multifunction Printer', label: 'Color LED Multifunction Printer' },
      { value: 'B&W Multifunction Printer', label: 'B&W Multifunction Printer' },
      { value: 'Color Inkjet Multifunction Printer', label: 'Color Inkjet Multifunction Printer' },
      { value: 'Sheet-fed Inkjet Digital Press', label: 'Sheet-fed Inkjet Digital Press' },
      { value: 'Color Sheet-fed Printer', label: 'Color Sheet-fed Printer' },
      { value: 'B&W Sheet-fed Printer', label: 'B&W Sheet-fed Printer' },
      { value: 'Wide Format LED Printer', label: 'Wide Format LED Printer' },
      { value: 'Color Wide Format Printer', label: 'Color Wide Format Printer' },
      { value: 'UV LED Flatbed Printer', label: 'UV LED Flatbed Printer' },
      { value: 'Color Continuous Feed Printer', label: 'Color Continuous Feed Printer' },
      { value: 'Consumables', label: 'Consumables' },
      { value: 'Ink & Toner', label: 'Ink & Toner' },
      { value: 'Maintenance & Parts', label: 'Maintenance & Parts' },
    ],
  },
  {
    question: 'What is the print speed (in ppm)',
    title: 'Print Speed',
    items: [
      { label: '0-10 (very low)', value: 'very low' },
      { label: '10-30 (low)', value: 'low' },
      { label: '30-60 (moderate)', value: 'moderate' },
      { label: '60-100 (high)', value: 'high' },
      { label: '100+ (very high)', value: 'very high' },
    ],
  },
  {
    question: 'Water is the paper capacity (in pages/sheets)',
    title: 'Paper Capacity',
    items: [
      { label: '0-1000 (low)', value: 'low' },
      { label: '1000-5000 (moderate)', value: 'moderate' },
      { label: '5000-10000 (high)', value: 'high' },
      { label: '10000+ (very high)', value: 'very high' },
    ],
  },
  {
    question: 'What is the print resolution',
    title: 'Print Resolution',
    items: [
      { label: '0-1000 (low)', value: 'low' },
      { label: '1000-2400 (moderate)', value: 'moderate' },
      { label: '2400-4800 (high)', value: 'high' },
      { label: '4800+ (very high)', value: 'very high' },
    ],
  },
];

// const supplyData = [{ title: 'placeholderTitle', items: ['PlaceholderItems'] }];
// const cameraData = [{ title: 'placeholderTitle', items: ['PlaceholderItems'] }];

const KnowledgeBased = () => {
  const [option1, setOption1] = useState<string>('Select');
  //   const [option2, setOption2] = useState<string>("Select");
  const [questions, setQuestions] = useState<
    {
      question: string;
      title: string;
      items: {
        label: string;
        value: string;
      }[];
    }[]
  >([]);

  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});
  const [responseData, setResponseData] = useState([]);

  const handleChange1 = (value: string) => {
    setOption1(value);
  };

  const handleSelectChange = (title: string, value: string) => {
    setSelectedValues((prevValues) => {
      const newValues = {
        ...prevValues,
        [title]: value,
      };
      return newValues;
    });
  };

  useEffect(() => {
    if (option1 === 'printer') {
      setQuestions(printerData);
    }
  }, [option1]);

  const onSubmit = async () => {
    const response = await getFilteredData(selectedValues);

    const response1 = response.map((item: ItemType) => ({
      'Product Title': item['ProductTitle'],
      'Product ID': item['ProductID'],
      'Product Type': item['ProductType'],
      'Product Image URL': item['ProductImageURL'],
    }));
    setResponseData(response1);
  };

  return (
    <div className="p-2 flex flex-col justify-center gap-2 w-full">
      <div className="bg-gray-200 flex p-4 w-full rounded-md">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="pb-4 font-semibold">Please choose the category</p>
          <div className="flex items-center gap-4 py-2 w-full">
            <div className="w-full flex items-center justify-center">
              <Select
                defaultValue={option1}
                className="w-4/5"
                onChange={handleChange1}
                //   TODO: display categories here
                options={[
                  { value: 'printer', label: 'Printer' },
                  { value: 'supply', label: 'Supplies' },
                  { value: 'camera', label: 'Camera' },
                ]}
              />
            </div>
          </div>
          <p className="py-2 font-semibold">Please check the required fields</p>
          <div className="flex flex-col gap-4 py-2 w-4/5 item-center justify-center">
            {questions.length > 0 &&
              questions.map(({ question, title, items }) => (
                <div className="flex flex-col">
                  <p>{question}</p>
                  <Select
                    // defaultValue={title}
                    value={selectedValues[title] || 'Select'}
                    className="w-full"
                    onChange={(value) => handleSelectChange(title, value)}
                    //   TODO: display categories here
                    options={items}
                  />
                </div>
              ))}
          </div>
          <div className="w-full text-right">
            <Button onClick={onSubmit}>Submit</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="p-4 font-bold">Recommended Products</p>
        <div className="flex flex-wrap gap-8">
          {responseData.map((item) => (
            <div className="w-60 ">{<CustomCard customData={item} />}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBased;
