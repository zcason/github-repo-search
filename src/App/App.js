import { Route, Switch } from 'react-router-dom';
import DetailsPage from '../routes/DetailsPage/DetailsPage';
import SearchPage from '../routes/SearchPage/SearchPage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={'/'}
          component={SearchPage}
        />
        <Route 
          path={'/details/:id'}
          component={DetailsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
