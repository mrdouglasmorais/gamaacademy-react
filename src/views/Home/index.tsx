import React from 'react';
import Nav from '../../components/Nav';
import  Footer from '../../components/Footer';

import { Container } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
        <Container>
            <div>
              <h1>Home</h1>
            </div>
        </Container>
      <Footer />
    </>
  );
}

export default Home;