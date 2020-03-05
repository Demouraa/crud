import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PersonList from './components/personList/personList'
import PersonInput from './components/personInput/personInput';

const App = () => {

  return ( 
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={PersonList} />
          <Route exact path='/update' component={PersonInput} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
 
export default App;