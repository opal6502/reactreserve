import React from 'react';
import axios from 'axios';

import baseUrl from '../utils/baseUrl';

import ProductList from '../components/Index/ProductList';

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/products`;

  const response = await axios.get(url);

  // return response data as object
  // console.log(response);
  return { products: response.data };
  // note: this object will be merged with existing props
};

export default Home;
