import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes: React.FC<{ path: string }> = ({ path }) => {
  const appPath = useMemo(() => (path === '/' ? path : `${path}/`), [path]);
  return (
    <Switch>
      <Route path={appPath} exact component={() => <h1>Welcome to App!</h1>} />
    </Switch>
  );
};
export default AppRoutes;
