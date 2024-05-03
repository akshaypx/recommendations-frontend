import Section from "../components/Section";

interface Data {
  title: string;
  imgUrl: string;
  id: string;
  type: string;
  description: string;
}

const sampleData: Data = {
  title: "IP C8500",
  type: "Color Laser Printer",
  id: "434009",
  description:
    "IP C8500 is a Color Laser Printer with features such as Prints up to 45 ppm, 4800x1200 dpi max print resolution, Paper capacity up to 4,850 pages, Multiple high-quality finishing options for professional output.",
  imgUrl:
    "https://www.ricoh-usa.com/_next/image?url=http%3A%2F%2Fimages.salsify.com%2Fimages%2Fhekdharwockugmlbj3q0%2Fricohimages_Equipment_Printers-and-Copiers_eqp-IP-C8500-10.png&w=1920&q=75",
};

const Details = () => {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-xl p-4 ">Product Details</p>
      <div className="flex gap-10 p-2 mb-2">
        <div className="w-80 h-80  overflow-hidden ">
          <img className="w-80 h-80" src={sampleData.imgUrl} alt="" />
        </div>
        <div className="bg-gray-100 flex-1 rounded-lg flex flex-col gap-4 p-4">
          <p className="text-2xl font-bold">{sampleData.title}</p>
          <p className="text-lg text-gray-500">{sampleData.type}</p>
          <p className="font-bold">ID - {sampleData.id}</p>
          <p className="leading-10">{sampleData.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <Section title={"Similar Items"} />
        <Section title={"Users also bought"} />
      </div>
    </div>
  );
};

export default Details;
