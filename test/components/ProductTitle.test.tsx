import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductoCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
