import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import EmailMarketingDef from './components/EmailMarketingDef';
import HowToLandEmailsInbox from './components/HowToLandEmailsInbox';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path='/emailmarketing' component={EmailMarketingDef} />
          <Route exact path="/howtolandemail" component={HowToLandEmailsInbox} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
