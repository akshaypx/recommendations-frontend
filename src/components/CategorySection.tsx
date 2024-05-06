import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { getTopSelling } from '../api/api';
import { TopInCatergory } from '../types';
import CustomCard from './CustomCard';

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

const items = [
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
];

const CustomSection = () => {
  const [data, setData] = useState<TopInCatergory[]>([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Color Laser Printer');

  useEffect(() => {
    setLoading(true);
    getTopSelling(category)
      .then((response) => setData(response))
      .then(() => setLoading(false));
    // setData(response);
  }, [category]);

  const handleChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="max-h-fit rounded-lg bg-gray-200 p-4">
      <p className="font-bold pb-4 text-lg">
        {'Top selling in '}
        <Select
          defaultValue={category}
          style={{ width: 300 }}
          onChange={handleChange}
          options={items}
        />
      </p>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : data.length > 0 ? (
        <div className="flex overflow-y-scroll no-scrollbar gap-4 p-4">
          {data.map((item) => (
            <CustomCard customData={item} />
          ))}
        </div>
      ) : (
        <>No Items Found</>
      )}
    </div>
  );
};

export default CustomSection;
