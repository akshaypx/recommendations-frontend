import { useContext, useEffect } from "react";
import {
  getTopSellingInColor,
  getTopSellingInBW,
  getItemsThatSimilarUsersBought,
  getItemsThatSimilarUsersViewed,
  getItemsThatSimilarUsersBoughtLocation,
} from "./api/api";
import "./App.css";
import Section from "./components/Section";
import { LocationContext } from "./api/context";

function App() {
  const location = useContext(LocationContext);
  useEffect(() => {
    console.log(location, "rendered again");
  }, [location?.value]);
  return (
    <div className="flex flex-col gap-4 p-2 pl-1">
      <Section
        title={"Top Selling in Color Laser Printer"}
        fetchData={getTopSellingInColor}
      />
      <Section
        title={"Top Selling in B&W Printer"}
        fetchData={getTopSellingInBW}
      />
      <Section
        title={"Similar Users also Bought"}
        fetchData={getItemsThatSimilarUsersBought}
      />
      <Section
        title={"Similar Users also Viewed"}
        fetchData={getItemsThatSimilarUsersViewed}
      />
      {location?.value && (
        <Section
          title={"Products Bought in your Region"}
          fetchData={() =>
            getItemsThatSimilarUsersBoughtLocation(location?.value)
          }
        />
      )}
    </div>
  );
}

export default App;
