import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from '../routes/DetailsPage/DetailsPage';
import SearchPage from '../routes/SearchPage/SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
