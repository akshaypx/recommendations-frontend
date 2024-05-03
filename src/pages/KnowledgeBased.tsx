import { Button, Card, Checkbox, CheckboxProps, Select } from "antd";
import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";

interface Item {
  value: string;
  label: string;
}

const customData = {
  title: "IP C8500",
  type: "Color Laser Printer",
  id: "434009",
  description:
    "IP C8500 is a Color Laser Printer with features such as Prints up to 45 ppm, 4800x1200 dpi max print resolution, Paper capacity up to 4,850 pages, Multiple high-quality finishing options for professional output.",
  imgUrl:
    "https://www.ricoh-usa.com/_next/image?url=http%3A%2F%2Fimages.salsify.com%2Fimages%2Fhekdharwockugmlbj3q0%2Fricohimages_Equipment_Printers-and-Copiers_eqp-IP-C8500-10.png&w=1920&q=75",
};

const KnowledgeBased = () => {
  const [option1, setOption1] = useState<string>("Select");
  const [option2, setOption2] = useState<string>("Select");
  const [list, setList] = useState<Item[]>([]);
  const handleChange1 = (value: string) => {
    console.log(`selected ${value}`);
    setOption1(value);
  };
  const handleChange2 = (value: string) => {
    console.log(`selected ${value}`);
    setOption2(value);
  };
  useEffect(() => {
    if (option1 === "printer") {
      setOption2("");
      setList([
        { value: "color", label: "Color" },
        { value: "bnw", label: "Black and White" },
      ]);
    }
    if (option1 === "supply") {
      setOption2("");
      setList([
        { value: "consumable", label: "Consumables" },
        { value: "inkAndToner", label: "Ink and Toners" },
        { value: "part", label: "Maintenance and Parts" },
      ]);
    }
    if (option1 === "camera") {
      setOption2("");
      setList([
        { value: "dslr", label: "DSLR" },
        { value: "lens", label: "Lens" },
        { value: "compact", label: "Compact" },
      ]);
    }
  }, [option1]);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="p-2 flex flex-col gap-2">
      <Card bordered={false} className="bg-gray-200 flex items-center">
        <p className="pb-4 font-semibold">Please choose the category</p>
        <div className="flex items-center gap-4 py-2">
          <div className="w-60">
            <Select
              defaultValue={option1}
              className="w-60"
              onChange={handleChange1}
              //   TODO: display categories here
              options={[
                { value: "printer", label: "Printer" },
                { value: "supply", label: "Supplies" },
                { value: "camera", label: "Camera" },
                // { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-60">
            <Select
              defaultValue={option2}
              className="w-60"
              onChange={handleChange2}
              //   TODO: display categories here
              options={list}
            />
          </div>
        </div>
        <p className="py-2 font-semibold">Please check the required fields</p>
        <div className="flex flex-col gap-4 py-2">
          <Checkbox onChange={onChange}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
            explicabo quasi dolore perspiciatis aspernatur odio dolorum deleniti
            impedit et!
          </Checkbox>
          <Checkbox onChange={onChange}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            sed!
          </Checkbox>
          <Checkbox onChange={onChange}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            aperiam exercitationem fuga.
          </Checkbox>
          <Checkbox onChange={onChange}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores?
          </Checkbox>
          <Checkbox onChange={onChange}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Checkbox>
        </div>
        <div className="w-full text-right">
          <Button>Submit</Button>
        </div>
      </Card>
      <div className="flex flex-col gap-4">
        <p className="p-4 font-bold">Recommended Products</p>
        <div className="flex flex-wrap gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
            <div className="w-60 ">
              <CustomCard customData={customData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBased;
