import React from 'react';
import {ProductsList} from '../components/ProductsList/ProductsList';
import {Container} from '../components/shared/Container/Container';

export const HomeScreen = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
};
