import { Route, Switch } from 'react-router-dom';
import DetailsPage from '../Routes/DetailsPage/DetailsPage';
import SearchPage from '../Routes/SearchPage/SearchPage';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path={'/'}
          component={SearchPage}
        />
        <Route 
          path={'/details'}
          component={DetailsPage}
        />
      </Switch>
    </main>
  );
}

export default App;
