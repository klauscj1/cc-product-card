import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductoCard';
import { ProductImage } from '../../src/components/ProductoImage';
import { product2 } from '../data/product';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img="./assets/no-image.png" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
