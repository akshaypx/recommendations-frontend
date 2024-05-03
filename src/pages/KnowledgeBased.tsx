import { Button, Card, Checkbox, CheckboxProps, Select } from "antd";
import { useEffect, useState } from "react";
// import CustomCard from "../components/CustomCard";

const KnowledgeBased = () => {
  const [option1, setOption1] = useState<string>("Select");
  //   const [option2, setOption2] = useState<string>("Select");
  const [questions, setQuestions] = useState<
    {
      title: string;
      items: string[];
    }[]
  >([]);
  const handleChange1 = (value: string) => {
    // console.log(`selected ${value}`);
    setOption1(value);
  };
  useEffect(() => {
    if (option1 === "printer") {
      //   setOption2("");
      setQuestions([
        {
          title: "For Business with:",
          items: [
            "151-500 Employees",
            "501-1000 Employees",
            "<150 Employees ",
            "1000+ Employees",
            "K-12",
            "State and Local Government",
            "1000+ ",
            "150 Employees",
            "501-1000",
          ],
        },
        {
          title: "Color Capabilities",
          items: ["Black & White", "Color"],
        },
        {
          title: "Print Speed(ppm)",
          items: ["20-40", "41-60", "60+"],
        },
        {
          title: "Max Paper Size",
          items: [
            "8.5x14 (Legal)",
            "11x17 (Ledger) ",
            "12x18",
            "11x17",
            "13x19.2 (SRA3+)",
          ],
        },
        {
          title: "Finishing Options",
          items: ["Staple ", "Hole Punch", "Booklet "],
        },
      ]);
    }
    if (option1 === "supply") {
      //   setOption2("");
      setQuestions([]);
    }
    if (option1 === "camera") {
      //   setOption2("");
      setQuestions([]);
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
        </div>
        <p className="py-2 font-semibold">Please check the required fields</p>
        <div className="flex gap-4 py-2">
          {questions.length > 0 &&
            questions.map((val) => (
              <div className="flex flex-col">
                <p className="font-bold text-lg">{val.title}</p>
                {val.items.map((item) => (
                  <Checkbox onChange={onChange}>{item}</Checkbox>
                ))}
              </div>
            ))}
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
              {/* <CustomCard customData={customData} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBased;
