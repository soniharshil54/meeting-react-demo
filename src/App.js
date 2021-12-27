import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Route exact path="/">
        <AllMeetupsPage/>
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage/>
      </Route>  
      <Route path="/favorites">
        <FavoritesPage/>
      </Route>  
    </div>
  );
}

export default App;
