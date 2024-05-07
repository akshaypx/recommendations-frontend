import { useContext, useEffect } from 'react';
import {
  getItemsThatSimilarUsersBought,
  getItemsThatSimilarUsersViewed,
  getItemsThatSimilarUsersBoughtLocation,
} from './api/api';
import './App.css';
import Section from './components/Section';
import { LocationContext } from './api/context';
import CustomSection from './components/CategorySection';

function App() {
  const location = useContext(LocationContext);
  useEffect(() => {
    console.log(location, 'rendered again');
  }, [location]);

  return (
    <div className="flex flex-col gap-4 p-2 pl-1">
      <CustomSection />
      <Section title={'Similar Users also Bought'} fetchData={getItemsThatSimilarUsersBought} />
      <Section title={'Similar Users also Viewed'} fetchData={getItemsThatSimilarUsersViewed} />
      {location?.value && (
        <Section
          title={'Products Bought in your Region'}
          fetchData={() => getItemsThatSimilarUsersBoughtLocation(location?.value)}
        />
      )}
    </div>
  );
}

export default App;
