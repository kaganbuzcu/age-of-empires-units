import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fade } from 'react-bootstrap';
import './App.scss';

const TheLayout = React.lazy(() => import('./containers/theLayout'));

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <React.Suspense fallback={null}>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Fade>
                  <TheLayout />
                </Fade>
              )}
            />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
};

export default App;
