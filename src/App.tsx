import * as React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/customer/Create';
import EditCustomer from './components/customer/Edit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'


class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
       
      <div>
        className="App">
      <ContactForm />
    
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>

            <li>
              <Link to={'/create'}> Create Customer </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          <Route path={'/edit/:id'} exact component={EditCustomer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
