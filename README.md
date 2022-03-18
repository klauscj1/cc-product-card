# CC-Product-card

Este es un paquete de pruebas de despliegue en NPM

### Claus Chocho

```
import {  ProductImage, ProductButtons, ProductTitle, ProductCard } from 'cc-product-card';
```

````

      <ProductCard
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
      ```
````
