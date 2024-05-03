import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="flex flex-col gap-4 p-2 pl-1">
      <Section title={"Top Selling in Color Laser Printer"} />
      <Section title={"Top Selling in B&W Printer"} />
      <Section title={"Similar Users also Bought"} />
      <Section title={"Similar Users also Viewed"} />
    </div>
  );
}

export default App;
