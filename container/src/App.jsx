import React, { Suspense } from 'react';

const ProductApp = React.lazy(() => import('product/ProductApp'));
const CartApp = React.lazy(() => import('cart/CartApp'));
function App() {
  return (
    <div>
      <h1>Host Container for Microfrontends</h1>
      <Suspense fallback={<div>Loading Product App...</div>}>
        <ProductApp />
      </Suspense>
      <Suspense fallback={<div>Loading Cart App...</div>}>
        <CartApp />
      </Suspense>
    </div>
  );
}

export default App;