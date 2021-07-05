import React from 'react';

import { Container } from './style';
import NavBar from '../../components/Nav';
import Footer from '../../components/Footer'

const Courses: React.FC = () => {

  return (
    <>
      <NavBar />
        <Container>
          <h1>Courses</h1>
        </Container>
      <Footer />
    </>
  );
}

export default Courses;