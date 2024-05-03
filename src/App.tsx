import {
  getTopSellingInColor,
  getTopSellingInBW,
  getItemsThatSimilarUsersBought,
  getItemsThatSimilarUsersViewed,
} from './api/api';
import './App.css';
import Section from './components/Section';

function App() {
  return (
    <div className="flex flex-col gap-4 p-2 pl-1">
      <Section title={'Top Selling in Color Laser Printer'} fetchData={getTopSellingInColor} />
      <Section title={'Top Selling in B&W Printer'} fetchData={getTopSellingInBW} />
      <Section title={'Similar Users also Bought'} fetchData={getItemsThatSimilarUsersBought} />
      <Section title={'Similar Users also Viewed'} fetchData={getItemsThatSimilarUsersViewed} />
    </div>
  );
}

export default App;
