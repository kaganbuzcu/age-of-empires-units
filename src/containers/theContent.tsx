import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProgressBar from 'react-topbar-progress-indicator';
import { Container } from 'react-bootstrap';

ProgressBar.config({
  barColors: {
    '0': '#aaa',
    '1.0': '#ddd',
  },
  barThickness: 1,
});

const Home = React.lazy(() => import('../pages/home'));
const Units = React.lazy(() => import('../pages/units'));
const UnitDetails = React.lazy(() => import('../pages/unitDetails'));

const TheContent: React.FC = () => {
  return (
    <Container fluid className="the-content">
      <React.Suspense fallback={<ProgressBar />}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/units" component={Units} />
          <Route path="/unit-details" component={UnitDetails} />
          <Redirect from="/" to="/home" />
        </Switch>
      </React.Suspense>
    </Container>
  );
};

export default React.memo(TheContent);
