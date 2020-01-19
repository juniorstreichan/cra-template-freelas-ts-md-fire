import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';
import AppRoutes from '../routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <AppRoutes path="/" />
      </Container>
    </>
  );
};

export default App;
