import React from 'react';
import { Switch, Route } from 'react-router';
import { News } from './sections';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/news" component={News} />
      </Switch>
    </>
  );
}

export default App;
