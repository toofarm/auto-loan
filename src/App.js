import AutoDetails from './components/AutoDetails'
import LoanApplicationResults from "./components/LoanApplicationResults"
import './styles/index.scss';
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Auto loan pre-approval</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/approval-form-results">
              <LoanApplicationResults />
            </Route>
            <Route path="/">
              <AutoDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
