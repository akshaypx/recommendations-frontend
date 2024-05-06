import {
  getTopSellingInBW,
  getItemsThatSimilarUsersBought,
  getItemsThatSimilarUsersViewed,
  getItemsThatSimilarUsersBoughtLocation,
} from './api/api';
import './App.css';
import CustomSection from './components/CategorySection';
import Section from './components/Section';

function App() {
  return (
    <div className="flex flex-col gap-4 p-2 pl-1">
      <CustomSection />
      <Section title={'Top Selling in B&W Printer'} fetchData={getTopSellingInBW} />
      <Section title={'Similar Users also Bought'} fetchData={getItemsThatSimilarUsersBought} />
      <Section title={'Similar Users also Viewed'} fetchData={getItemsThatSimilarUsersViewed} />
      <Section
        title={'Products Bought in your Region'}
        fetchData={getItemsThatSimilarUsersBoughtLocation}
      />
    </div>
  );
}

export default App;
