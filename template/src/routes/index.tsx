import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import FirebaseAuth from '../services/FirebaseAuth';
import Loading from '../components/Loading';

const Login = lazy(() => import('../pages/login'));

const App = lazy(() => import('../pages/App'));

const Routes: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(userState => {
      setIsAuth(userState !== null);
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute condition={isAuth} redirectPath="/login" path="/" component={App} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
